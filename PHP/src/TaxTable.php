<?php
namespace Gov;

// see https://github.com/brick/math
use Brick\Math\BigDecimal;

class TaxTable
{

    private $noTax;
    private $levels;

    public function __construct()
    {
        $this->noTax = BigDecimal::zero();
        $this->levels = [];
    }

    public function addProgression(BigDecimal $threshold, $percentage)
    {
        $decimalPercentage = BigDecimal::of($percentage)
            ->exactlyDividedBy(BigDecimal::of(100));
        array_push($this->levels, new IncomeRange($threshold, $decimalPercentage));
    }

    public function taxFor(BigDecimal $income)
    {
        foreach ($this->levels as $level) {
            if ($income->compareTo($level->threshold) >= 0) {
                return $income->multipliedBy($level->percentage);
            }
        }
        return $this->noTax;
    }

}
