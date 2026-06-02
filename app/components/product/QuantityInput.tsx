"use client";
import { CartMinusIcon, CartPlusIcon } from "../icons";

type QuantityInputProps = {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
  className?: string;
};

const QuantityButtonStyles =
  "not-disabled:hover:text-primary not-disabled:focus-visible:text-primary flex h-4.5 w-4 items-center justify-center rounded opacity-25 transition-all not-disabled:hover:opacity-100 not-disabled:focus-visible:opacity-100";

export function QuantityInput({
  value,
  onChange,
  min = 1,
  max = 99,
}: QuantityInputProps) {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };
  const handleIncrement = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="bg-light-gray flex items-center gap-5 p-3.5">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={handleDecrement}
        className={QuantityButtonStyles}
        disabled={value <= min}
      >
        <CartMinusIcon />
      </button>
      <span className="flex w-4 justify-center text-sm font-bold tracking-[0.0625rem] tabular-nums">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={handleIncrement}
        className={QuantityButtonStyles}
        disabled={value >= max}
      >
        <CartPlusIcon />
      </button>
    </div>
  );
}
