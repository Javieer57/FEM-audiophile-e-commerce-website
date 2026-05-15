import { CartMinusIcon, CartPlusIcon } from "./icons";

type QuantityInputProps = {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
  className?: string;
};

const QuantityButtonStyles =
  "focus-visible:text-primary not-disabled:hover:text-primary flex h-4.5 w-4 items-center justify-center rounded opacity-20 transition-all not-disabled:hover:opacity-100 focus-visible:opacity-100";

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
    <div className="bg-light-gray flex items-center gap-3 px-3 py-2">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={handleDecrement}
        className={QuantityButtonStyles}
        disabled={value <= min}
      >
        <CartMinusIcon />
      </button>
      <span className="text-sm font-bold tabular-nums">{value}</span>
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
