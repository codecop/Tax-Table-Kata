<?php
namespace Gov;

use Brick\Math\BigDecimal;

class IncomeRange
{
    public $threshold;
    public $percentage;

    public function __construct(BigDecimal $threshold, BigDecimal $percentage)
    {
        $this->threshold = $threshold;
        $this->percentage = $percentage;
    }
}
