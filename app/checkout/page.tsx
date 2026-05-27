"use client";

import { GoBackButton } from "@/app/components/shared/GoBackButton";
import { cn } from "@/app/utils/cn";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type CheckoutFormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: "e-money" | "cash";
  eMoneyNumber: string;
  eMoneyPin: string;
};

const paymentMethodOptionClasses =
  "border-gray peer-checked:border-primary peer-focus-visible:border-primary peer-focus-visible:border-primary peer-checked:[&_.payment-method-dot]:opacity-100 flex items-center gap-4 rounded-lg border px-4 py-4.5 text-sm font-bold peer-focus-visible:outline-none hover:border-primary transition-colors duration-300";

const paymentMethodIndicatorClasses =
  "border-gray flex h-5 w-5 items-center justify-center rounded-full border";

const paymentMethodIndicatorDotClasses =
  "payment-method-dot bg-primary h-2.5 w-2.5 rounded-full opacity-0 transition-opacity duration-300";

export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
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

  const paymentMethod = watch("paymentMethod");

  useEffect(() => {
    if (paymentMethod !== "cash") {
      return;
    }

    setValue("eMoneyNumber", "");
    setValue("eMoneyPin", "");
    clearErrors(["eMoneyNumber", "eMoneyPin"]);
  }, [paymentMethod, setValue, clearErrors]);

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

          <form
            id="checkout-form"
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 space-y-12"
          >
            <fieldset className="min-w-0 border-0 p-0">
              <legend className="form-section-title">Billing Details</legend>

              <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
                <label className="form-label">
                  <span className="form-label-row">
                    <span>Name</span>
                    <span
                      id="name-error"
                      className="form-error-message"
                      aria-live="polite"
                    >
                      {errors.name?.message || " "}
                    </span>
                  </span>
                  <input
                    id="name"
                    type="text"
                    placeholder="Alexei Ward"
                    autoComplete="name"
                    aria-describedby="name-error"
                    aria-invalid={Boolean(errors.name)}
                    {...register("name", { required: "Required" })}
                    className={cn(
                      "form-input form-input-focus",
                      Boolean(errors.name) && "border-error",
                    )}
                  />
                </label>

                <label className="form-label">
                  <span className="form-label-row">
                    <span>Email Address</span>
                    <span
                      id="email-error"
                      className="form-error-message"
                      aria-live="polite"
                    >
                      {errors.email?.message || " "}
                    </span>
                  </span>
                  <input
                    id="email"
                    type="email"
                    placeholder="alexei@mail.com"
                    autoComplete="email"
                    aria-describedby="email-error"
                    aria-invalid={Boolean(errors.email)}
                    {...register("email", {
                      required: "Required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Wrong format",
                      },
                    })}
                    className={cn(
                      "form-input form-input-focus",
                      Boolean(errors.email) && "border-error",
                    )}
                  />
                </label>

                <label className="form-label">
                  <span className="form-label-row">
                    <span>Phone Number</span>
                    <span
                      id="phone-error"
                      className="form-error-message"
                      aria-live="polite"
                    >
                      {errors.phone?.message || " "}
                    </span>
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 202-555-0136"
                    autoComplete="tel"
                    aria-describedby="phone-error"
                    aria-invalid={Boolean(errors.phone)}
                    {...register("phone", {
                      required: "Required",
                      pattern: {
                        value: /^[+]?[(]?[0-9\s-]{7,}$/,
                        message: "Wrong format",
                      },
                    })}
                    className={cn(
                      "form-input form-input-focus",
                      Boolean(errors.phone) && "border-error",
                    )}
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="min-w-0 border-0 p-0">
              <legend className="form-section-title">Shipping Info</legend>

              <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
                <label className="form-label md:col-span-2">
                  <span className="form-label-row">
                    <span>Address</span>
                    <span
                      id="address-error"
                      className="form-error-message"
                      aria-live="polite"
                    >
                      {errors.address?.message || " "}
                    </span>
                  </span>
                  <input
                    id="address"
                    type="text"
                    placeholder="1137 Williams Avenue"
                    autoComplete="street-address"
                    aria-describedby="address-error"
                    aria-invalid={Boolean(errors.address)}
                    {...register("address", { required: "Required" })}
                    className={cn(
                      "form-input form-input-focus",
                      Boolean(errors.address) && "border-error",
                    )}
                  />
                </label>

                <label className="form-label">
                  <span className="form-label-row">
                    <span>ZIP Code</span>
                    <span
                      id="zipCode-error"
                      className="form-error-message"
                      aria-live="polite"
                    >
                      {errors.zipCode?.message || " "}
                    </span>
                  </span>
                  <input
                    id="zipCode"
                    type="text"
                    placeholder="10001"
                    autoComplete="postal-code"
                    aria-describedby="zipCode-error"
                    aria-invalid={Boolean(errors.zipCode)}
                    {...register("zipCode", {
                      required: "Required",
                      pattern: { value: /^\d+$/, message: "Wrong format" },
                    })}
                    className={cn(
                      "form-input form-input-focus",
                      Boolean(errors.zipCode) && "border-error",
                    )}
                  />
                </label>

                <label className="form-label">
                  <span className="form-label-row">
                    <span>City</span>
                    <span
                      id="city-error"
                      className="form-error-message"
                      aria-live="polite"
                    >
                      {errors.city?.message || " "}
                    </span>
                  </span>
                  <input
                    id="city"
                    type="text"
                    placeholder="New York"
                    autoComplete="address-level2"
                    aria-describedby="city-error"
                    aria-invalid={Boolean(errors.city)}
                    {...register("city", { required: "Required" })}
                    className={cn(
                      "form-input form-input-focus",
                      Boolean(errors.city) && "border-error",
                    )}
                  />
                </label>

                <label className="form-label">
                  <span className="form-label-row">
                    <span>Country</span>
                    <span
                      id="country-error"
                      className="form-error-message"
                      aria-live="polite"
                    >
                      {errors.country?.message || " "}
                    </span>
                  </span>
                  <input
                    id="country"
                    type="text"
                    placeholder="United States"
                    autoComplete="country-name"
                    aria-describedby="country-error"
                    aria-invalid={Boolean(errors.country)}
                    {...register("country", { required: "Required" })}
                    className={cn(
                      "form-input form-input-focus",
                      Boolean(errors.country) && "border-error",
                    )}
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="min-w-0 border-0 p-0">
              <legend className="form-section-title">Payment Details</legend>

              <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
                <fieldset className="grid gap-x-4 gap-y-4 border-0 p-0 md:col-span-2 md:grid-cols-2">
                  <legend className="absolute text-xs font-bold tracking-[-0.013125rem]">
                    Payment Method
                  </legend>

                  <div></div>

                  <div className="space-y-4">
                    <label className="block">
                      <input
                        type="radio"
                        value="e-money"
                        {...register("paymentMethod", { required: "Required" })}
                        className="peer sr-only"
                      />
                      <span className={paymentMethodOptionClasses}>
                        <span className={paymentMethodIndicatorClasses}>
                          <span className={paymentMethodIndicatorDotClasses} />
                        </span>
                        e-Money
                      </span>
                    </label>

                    <label className="block">
                      <input
                        type="radio"
                        value="cash"
                        {...register("paymentMethod", { required: "Required" })}
                        className="peer sr-only"
                      />
                      <span className={paymentMethodOptionClasses}>
                        <span className={paymentMethodIndicatorClasses}>
                          <span className={paymentMethodIndicatorDotClasses} />
                        </span>
                        Cash on Delivery
                      </span>
                    </label>
                  </div>
                </fieldset>

                {paymentMethod === "e-money" ? (
                  <>
                    <label className="form-label">
                      <span className="form-label-row">
                        <span>e-Money Number</span>
                        <span
                          id="eMoneyNumber-error"
                          className="form-error-message"
                          aria-live="polite"
                        >
                          {errors.eMoneyNumber?.message || " "}
                        </span>
                      </span>
                      <input
                        id="eMoneyNumber"
                        type="text"
                        placeholder="238521993"
                        inputMode="numeric"
                        aria-describedby="eMoneyNumber-error"
                        aria-invalid={Boolean(errors.eMoneyNumber)}
                        {...register("eMoneyNumber", {
                          validate: (value) => {
                            if (paymentMethod !== "e-money") {
                              return true;
                            }

                            const trimmed = value.trim();
                            if (!trimmed) {
                              return "Required";
                            }

                            return /^\d+$/.test(trimmed)
                              ? true
                              : "Wrong format";
                          },
                        })}
                        className={cn(
                          "form-input form-input-focus",
                          Boolean(errors.eMoneyNumber) && "border-error",
                        )}
                      />
                    </label>

                    <label className="form-label">
                      <span className="form-label-row">
                        <span>e-Money PIN</span>
                        <span
                          id="eMoneyPin-error"
                          className="form-error-message"
                          aria-live="polite"
                        >
                          {errors.eMoneyPin?.message || " "}
                        </span>
                      </span>
                      <input
                        id="eMoneyPin"
                        type="text"
                        placeholder="6891"
                        inputMode="numeric"
                        aria-describedby="eMoneyPin-error"
                        aria-invalid={Boolean(errors.eMoneyPin)}
                        {...register("eMoneyPin", {
                          validate: (value) => {
                            if (paymentMethod !== "e-money") {
                              return true;
                            }

                            const trimmed = value.trim();
                            if (!trimmed) {
                              return "Required";
                            }

                            return /^\d+$/.test(trimmed)
                              ? true
                              : "Wrong format";
                          },
                        })}
                        className={cn(
                          "form-input form-input-focus",
                          Boolean(errors.eMoneyPin) && "border-error",
                        )}
                      />
                    </label>
                  </>
                ) : (
                  <div className="flex items-center gap-8 md:col-span-2">
                    <img
                      src="/images/checkout/icon-cash-on-delivery.svg"
                      alt=""
                      aria-hidden="true"
                    />
                    <p className="font-medium opacity-50">
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </fieldset>
          </form>
        </div>

        <CheckoutSummary />
      </section>
    </main>
  );
}

function CheckoutSummary() {
  return (
    <aside className="rounded-lg bg-white p-8 lg:col-span-4">
      <h2 className="text-lg font-bold tracking-[1.29px] uppercase">Summary</h2>

      <div className="mt-8 space-y-6">
        <div className="flex items-center gap-4">
          <div className="bg-light-gray h-16 w-16 rounded-lg" />
          <div className="mr-auto">
            <p className="leading-6.25 font-bold">XX99 MK II</p>
            <p className="text-sm leading-6.25 font-bold text-black/50">
              $ 2,999
            </p>
          </div>
          <p className="text-sm leading-6.25 font-bold text-black/50">x1</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-light-gray h-16 w-16 rounded-lg" />
          <div className="mr-auto">
            <p className="leading-6.25 font-bold">XX59</p>
            <p className="text-sm leading-6.25 font-bold text-black/50">
              $ 899
            </p>
          </div>
          <p className="text-sm leading-6.25 font-bold text-black/50">x2</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-light-gray h-16 w-16 rounded-lg" />
          <div className="mr-auto">
            <p className="leading-6.25 font-bold">YX1</p>
            <p className="text-sm leading-6.25 font-bold text-black/50">
              $ 599
            </p>
          </div>
          <p className="text-sm leading-6.25 font-bold text-black/50">x1</p>
        </div>
      </div>

      <div className="mt-8 space-y-2">
        <div className="flex items-center justify-between">
          <p className="leading-6.25 text-black/50 uppercase">Total</p>
          <p className="text-lg font-bold uppercase">$ 5,396</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="leading-6.25 text-black/50 uppercase">Shipping</p>
          <p className="text-lg font-bold uppercase">$ 50</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="leading-6.25 text-black/50 uppercase">VAT (Included)</p>
          <p className="text-lg font-bold uppercase">$ 1,079</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="leading-6.25 text-black/50 uppercase">Grand Total</p>
          <p className="text-primary text-lg font-bold uppercase">$ 5,446</p>
        </div>
      </div>

      <button
        type="submit"
        form="checkout-form"
        className="bg-primary mt-8 h-12 w-full text-sm font-bold tracking-[1px] text-white uppercase"
      >
        Continue
      </button>
    </aside>
  );
}
