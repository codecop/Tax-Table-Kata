package gov;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

import java.math.BigDecimal;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TaxTableTest {

    private TaxTable table = new TaxTable();

    @BeforeEach
    void setUpTaxTable() {
        table.addProgression(new BigDecimal(1000), 3);
    }

    @Test
    void shouldFoo() {
        assertThat(true, is(false));
    }

}
