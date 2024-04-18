import unittest

from tax_table import TaxTable


class TaxTableTest(unittest.TestCase):

    def setUp(self):
        self.table = TaxTable()
        self.table.add_progression(1000, 3)

    def test_foo(self):
        self.assertEqual(True, False)

if __name__ == '__main__':
    unittest.main()
