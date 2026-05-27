import { CheckoutTextField } from "@/app/components/checkout/CheckoutTextField";
import { fieldRules } from "@/app/components/checkout/rules";

export function BillingDetailsSection() {
  return (
    <fieldset>
      <legend className="form-section-title">Billing Details</legend>

      <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
        <CheckoutTextField
          id="name"
          name="name"
          label="Name"
          rules={fieldRules.name}
          type="text"
          placeholder="Alexei Ward"
          autoComplete="name"
        />

        <CheckoutTextField
          id="email"
          name="email"
          label="Email Address"
          rules={fieldRules.email}
          type="email"
          placeholder="alexei@mail.com"
          autoComplete="email"
        />

        <CheckoutTextField
          id="phone"
          name="phone"
          label="Phone Number"
          rules={fieldRules.phone}
          type="tel"
          placeholder="+1 202-555-0136"
          autoComplete="tel"
        />
      </div>
    </fieldset>
  );
}
