import { CheckoutTextField } from "@/app/components/checkout/CheckoutTextField";
import { fieldRules } from "@/app/components/checkout/rules";

export function ShippingInfoSection() {
  return (
    <fieldset>
      <legend className="form-section-title">Shipping Info</legend>

      <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <CheckoutTextField
            id="address"
            name="address"
            label="Address"
            rules={fieldRules.address}
            type="text"
            placeholder="1137 Williams Avenue"
            autoComplete="address-line1"
          />
        </div>

        <CheckoutTextField
          id="zipCode"
          name="zipCode"
          label="ZIP Code"
          rules={fieldRules.zipCode}
          type="text"
          placeholder="10001"
          autoComplete="postal-code"
        />

        <CheckoutTextField
          id="city"
          name="city"
          label="City"
          rules={fieldRules.city}
          type="text"
          placeholder="New York"
          autoComplete="address-level2"
        />

        <CheckoutTextField
          id="country"
          name="country"
          label="Country"
          rules={fieldRules.country}
          type="text"
          placeholder="United States"
          autoComplete="country-name"
        />
      </div>
    </fieldset>
  );
}
