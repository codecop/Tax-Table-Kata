<?php
namespace Test;

use Brick\Math\BigDecimal;
use PHPUnit\Framework\TestCase;
use Gov\TaxTable;

class TaxTableTest extends TestCase
{

    private $table;

    /** @before */
    public function setUpTaxTable()
    {
        $this->table = new TaxTable();
        $this->table->addProgression(BigDecimal::of(1000), 3);
    }

    /** @test */
    public function foo()
    {
        $this->assertTrue(BigDecimal::of(0)->isEqualTo(BigDecimal::of(1)));
    }

}
