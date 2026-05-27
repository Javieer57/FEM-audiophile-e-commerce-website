"use client";

import { BillingDetailsSection } from "@/app/components/checkout/BillingDetailsSection";
import { PaymentDetailsSection } from "@/app/components/checkout/PaymentDetailsSection";
import { CheckoutSummary } from "@/app/components/checkout/CheckoutSummary";
import { ShippingInfoSection } from "@/app/components/checkout/ShippingInfoSection";
import { type CheckoutFormValues } from "@/app/types/checkoutForm";
import { GoBackButton } from "@/app/components/shared/GoBackButton";
import { FormProvider, useForm } from "react-hook-form";

export default function Page() {
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
    console.log(data);
  };

  return (
    <main className="bg-light-gray px-6 py-8 md:px-10 lg:px-20 lg:py-20">
      <GoBackButton />

      <section className="mx-auto mt-8 grid max-w-277.5 gap-7.5 lg:grid-cols-12 lg:items-start">
        <div className="rounded-lg bg-white p-8 md:p-12 lg:col-span-8">
          <h1 className="text-[2rem] leading-9 font-bold tracking-[0.075rem] uppercase">
            Checkout
          </h1>

          <FormProvider {...methods}>
            <form
              id="checkout-form"
              onSubmit={methods.handleSubmit(onSubmit)}
              className="mt-10 space-y-12"
            >
              <BillingDetailsSection />
              <ShippingInfoSection />
              <PaymentDetailsSection />
            </form>
          </FormProvider>
        </div>

        <CheckoutSummary />
      </section>
    </main>
  );
}
