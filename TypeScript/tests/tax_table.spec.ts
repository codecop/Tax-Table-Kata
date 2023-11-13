import { BigDecimal } from 'bigdecimal';
import { TaxTable } from '../src/tax_table';

describe("Tax Table", () => {
  let table: TaxTable;

  beforeEach(() => {
    table = new TaxTable();
    table.addProgression(new BigDecimal(1000), 3);
  });

  it("should foo", () => {
    expect(true).toBe(false);
  });

});
