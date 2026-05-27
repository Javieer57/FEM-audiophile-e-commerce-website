import { type RegisterOptions } from "react-hook-form";
import { type CheckoutFormValues } from "../../types/checkoutForm";

export const requiredMessage = "Required";
export const wrongFormatMessage = "Wrong format";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[(]?[0-9\s-]{7,}$/;
const digitsOnlyPattern = /^\d+$/;

export const fieldRules = {
  name: { required: requiredMessage } as RegisterOptions<
    CheckoutFormValues,
    "name"
  >,
  email: {
    required: requiredMessage,
    pattern: { value: emailPattern, message: wrongFormatMessage },
  } as RegisterOptions<CheckoutFormValues, "email">,
  phone: {
    required: requiredMessage,
    pattern: { value: phonePattern, message: wrongFormatMessage },
  } as RegisterOptions<CheckoutFormValues, "phone">,
  address: {
    required: requiredMessage,
  } as RegisterOptions<CheckoutFormValues, "address">,
  zipCode: {
    required: requiredMessage,
    pattern: { value: digitsOnlyPattern, message: wrongFormatMessage },
  } as RegisterOptions<CheckoutFormValues, "zipCode">,
  city: { required: requiredMessage } as RegisterOptions<
    CheckoutFormValues,
    "city"
  >,
  country: {
    required: requiredMessage,
  } as RegisterOptions<CheckoutFormValues, "country">,
};

export function validateDigitsRequiredWhenEMoney(
  value: string,
  paymentMethod: CheckoutFormValues["paymentMethod"],
) {
  if (paymentMethod !== "e-money") {
    return true;
  }

  const trimmed = value.trim();

  if (!trimmed) {
    return requiredMessage;
  }

  return digitsOnlyPattern.test(trimmed) ? true : wrongFormatMessage;
}
