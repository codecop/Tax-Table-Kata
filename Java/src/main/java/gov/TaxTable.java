package gov;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class TaxTable {

    private final BigDecimal noTax = BigDecimal.ZERO;

    static class IncomeRange {
        public final BigDecimal threshold;
        public final BigDecimal percentage;

        public IncomeRange(BigDecimal threshold, BigDecimal percentage) {
            this.threshold = threshold;
            this.percentage = percentage;
        }
    }

    private final List<IncomeRange> levels = new ArrayList<>();

    public void addProgression(BigDecimal threshold, int percentage) {
        BigDecimal decimalPercentage = new BigDecimal(percentage)
                .divide(new BigDecimal(100));
        levels.add(new IncomeRange(threshold, decimalPercentage));
    }

    public BigDecimal taxFor(BigDecimal income) {
        for (IncomeRange level : levels) {
            if (income.compareTo(level.threshold) >= 0) {
                return income.multiply(level.percentage);
            }
        }
        return noTax;
    }

}
