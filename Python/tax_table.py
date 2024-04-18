from income_range import IncomeRange


class TaxTable:

    def __init__(self):
        self._no_tax = 0
        self._levels = []

    def add_progression(self, threshold, percentage):
        decimal_percentage = percentage / 100
        self._levels.append(IncomeRange(threshold, decimal_percentage))

    def taxFor(self, income):
        for level in self._levels:
            if income >= level.threshold:
                return income * level.percentage
        return self._no_tax
