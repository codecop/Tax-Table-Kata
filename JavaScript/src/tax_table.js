var bigdecimal = require("bigdecimal");
// https://github.com/iriscouch/bigdecimal.js

/**
 * @param {bigdecimal.BigDecimal} threshold
 * @param {bigdecimal.BigDecimal} percentage
 */
function IncomeRange(threshold, percentage) {
  this.threshold = threshold;
  this.percentage = percentage;
}

function TaxTable() {
  this.noTax = new bigdecimal.BigDecimal(0);
  this.levels = [];
}

/**
 * @param {bigdecimal.BigDecimal} threshold
 * @param {number} percentage
 */
TaxTable.prototype.addProgression = function(threshold, percentage) {
  /** @type {bigdecimal.BigDecimal} */
  var decimalPercentage = new bigdecimal.BigDecimal(percentage).divide(new bigdecimal.BigDecimal(100));
  this.levels.push(new IncomeRange(threshold, decimalPercentage));
};

/**
 * @param {bigdecimal.BigDecimal} income
 */
TaxTable.prototype.taxFor = function(income) {
  for (var i = 0; i < this.levels.length; i++) {
    if (income.compareTo(this.levels[i].threshold) >= 0) {
      return income.multiply(this.levels[i].percentage);
    }
  }
  return this.noTax;
};

module.exports = {
  TaxTable: TaxTable
};
