import { requiredMessage } from "@/app/components/checkout/rules";
import { useFormContext } from "react-hook-form";
import { type CheckoutFormValues } from "../../types/checkoutForm";

type PaymentMethodOptionProps = {
  label: string;
  value: CheckoutFormValues["paymentMethod"];
};

export function PaymentMethodOption({
  label,
  value,
}: PaymentMethodOptionProps) {
  const { register } = useFormContext<CheckoutFormValues>();

  return (
    <label className="block">
      <input
        type="radio"
        value={value}
        {...register("paymentMethod", { required: requiredMessage })}
        className="peer sr-only"
      />
      <span className="border-gray peer-checked:border-primary peer-focus-visible:border-primary hover:border-primary flex items-center gap-4 rounded-lg border px-4 py-4.5 text-sm font-bold transition-colors duration-300 peer-focus-visible:outline-none peer-checked:[&_.payment-method-dot]:opacity-100">
        <span className="border-gray flex h-5 w-5 items-center justify-center rounded-full border">
          <span className="payment-method-dot bg-primary h-2.5 w-2.5 rounded-full opacity-0 transition-opacity duration-300" />
        </span>
        {label}
      </span>
    </label>
  );
}
