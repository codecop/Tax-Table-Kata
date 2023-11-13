var expect = require('chai').expect;
var bigdecimal = require("bigdecimal");
var tt = require('../src/tax_table.js');

describe("Tax Table", function() {
  var table;

  this.beforeEach(function() {
    table = new tt.TaxTable();
    table.addProgression(new bigdecimal.BigDecimal(1000), 3);
  });

  it("should foo", function() {
    expect(true).to.equal(false);
  });

});
