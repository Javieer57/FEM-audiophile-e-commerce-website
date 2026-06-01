"use client";
import type { CheckoutFormValues } from "../types/checkoutForm";
import { normalizeWhitespace } from "./normalizeWhitespace";

export function normalizeCheckoutData(
  data: CheckoutFormValues,
): CheckoutFormValues {
  return {
    ...data,
    name: normalizeWhitespace(data.name),
    email: normalizeWhitespace(data.email),
    phone: normalizeWhitespace(data.phone),
    address: normalizeWhitespace(data.address),
    zipCode: normalizeWhitespace(data.zipCode),
    city: normalizeWhitespace(data.city),
    country: normalizeWhitespace(data.country),
    eMoneyNumber: normalizeWhitespace(data.eMoneyNumber),
    eMoneyPin: normalizeWhitespace(data.eMoneyPin),
  };
}
