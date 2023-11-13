import { BigDecimal } from 'bigdecimal';
// https://github.com/iriscouch/bigdecimal.js

class IncomeRange {
  public readonly threshold: BigDecimal;
  public readonly percentage: BigDecimal;

  constructor(threshold: BigDecimal, percentage: BigDecimal) {
    this.threshold = threshold;
    this.percentage = percentage;
  }
}

export class TaxTable {
  private noTax: BigDecimal;
  private levels: IncomeRange[];

  constructor() {
    this.noTax = new BigDecimal(0);
    this.levels = [];
  }

  addProgression(threshold: BigDecimal, percentage: number): void {
    const decimalPercentage = new BigDecimal(percentage).divide(new BigDecimal(100));
    this.levels.push(new IncomeRange(threshold, decimalPercentage));
  }

  taxFor(income: BigDecimal): BigDecimal {
    for (let i = 0; i < this.levels.length; i++) {
      if (income.compareTo(this.levels[i].threshold) >= 0) {
        return income.multiply(this.levels[i].percentage);
      }
    }
    return this.noTax;
  }

}
