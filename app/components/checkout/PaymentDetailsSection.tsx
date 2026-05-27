import { CheckoutTextField } from "@/app/components/checkout/CheckoutTextField";
import { PaymentMethodOption } from "@/app/components/checkout/PaymentMethodOption";
import { validateDigitsRequiredWhenEMoney } from "@/app/components/checkout/rules";
import { type CheckoutFormValues } from "@/app/types/checkoutForm";
import { useFormContext } from "react-hook-form";

export function PaymentDetailsSection() {
  const { watch } = useFormContext<CheckoutFormValues>();

  const paymentMethod = watch("paymentMethod");

  return (
    <fieldset>
      <legend className="form-section-title">Payment Details</legend>

      <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
        <fieldset className="grid gap-x-4 gap-y-4 border-0 p-0 md:col-span-2 md:grid-cols-2">
          <legend className="absolute text-xs font-bold tracking-[-0.013125rem]">
            Payment Method
          </legend>

          <div></div>

          <div className="space-y-4">
            <PaymentMethodOption value="e-money" label="e-Money" />
            <PaymentMethodOption value="cash" label="Cash on Delivery" />
          </div>
        </fieldset>

        {paymentMethod === "e-money" ? (
          <>
            <CheckoutTextField
              id="eMoneyNumber"
              name="eMoneyNumber"
              label="e-Money Number"
              rules={{
                validate: (value) =>
                  validateDigitsRequiredWhenEMoney(value, paymentMethod),
              }}
              type="text"
              placeholder="238521993"
              inputMode="numeric"
            />

            <CheckoutTextField
              id="eMoneyPin"
              name="eMoneyPin"
              label="e-Money PIN"
              rules={{
                validate: (value) =>
                  validateDigitsRequiredWhenEMoney(value, paymentMethod),
              }}
              type="text"
              placeholder="6891"
              inputMode="numeric"
            />
          </>
        ) : (
          <div className="flex items-center gap-8 md:col-span-2">
            <img
              src="/images/checkout/icon-cash-on-delivery.svg"
              alt=""
              aria-hidden="true"
              className="h-12 w-12 shrink-0"
            />
            <p className="font-medium opacity-50">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </fieldset>
  );
}
