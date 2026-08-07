"use client";

import { BillingDetailsSection } from "@/app/components/checkout/BillingDetailsSection";
import { PaymentDetailsSection } from "@/app/components/checkout/PaymentDetailsSection";
import { CheckoutSummary } from "@/app/components/checkout/CheckoutSummary";
import { ShippingInfoSection } from "@/app/components/checkout/ShippingInfoSection";
import { type CheckoutFormValues } from "@/app/types/checkoutForm";
import { GoBackButton } from "@/app/components/shared/GoBackButton";
import { FormProvider, useForm } from "react-hook-form";
import { normalizeCheckoutData } from "@utils/normalizeCheckoutData";
import { useCartStore } from "@/app/store/cartStore";

export default function Page() {
  const cartItems = useCartStore((state) => state.items);

  const methods = useForm<CheckoutFormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    shouldUnregister: true,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      paymentMethod: "e-money",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    const normalizedData = normalizeCheckoutData(data);

    console.log({ checkout: normalizedData, cartItems });
  };

  return (
    <main className="bg-light-gray">
      <div className="general-container pt-20 pb-35">
        <GoBackButton />

        <section className="mx-auto mt-8 grid gap-7.5 lg:grid-cols-12 lg:items-start">
          <div className="rounded-lg bg-white p-8 md:p-12 lg:col-span-8">
            <h1 className="text-[2rem] leading-9 font-bold tracking-[0.075rem] uppercase">
              Checkout
            </h1>

            {cartItems.length === 0 && (
              <p className="bg-light-gray text-medium-gray mt-6 rounded-lg px-4 py-3">
                Your cart is empty. Add products before continuing to checkout.
              </p>
            )}

            <FormProvider {...methods}>
              <form
                id="checkout-form"
                onSubmit={methods.handleSubmit(onSubmit)}
                className="mt-10 space-y-12"
                noValidate={true}
              >
                <BillingDetailsSection />
                <ShippingInfoSection />
                <PaymentDetailsSection />
              </form>
            </FormProvider>
          </div>

          <CheckoutSummary />
        </section>
      </div>
    </main>
  );
}
