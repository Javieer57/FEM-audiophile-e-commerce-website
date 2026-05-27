import { cn } from "@utils/cn";
import { type InputHTMLAttributes } from "react";
import {
  type Path,
  type RegisterOptions,
  useFormContext,
} from "react-hook-form";
import { type CheckoutFormValues } from "@mytypes/checkoutForm";

type CheckoutTextFieldProps<TName extends Path<CheckoutFormValues>> = {
  id: string;
  name: TName;
  label: string;
  rules?: RegisterOptions<CheckoutFormValues, TName>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "name">;

export function CheckoutTextField<TName extends Path<CheckoutFormValues>>({
  id,
  name,
  label,
  rules,
  ...inputProps
}: CheckoutTextFieldProps<TName>) {
  const { register, getFieldState, formState } =
    useFormContext<CheckoutFormValues>();
  const errorId = `${id}-error`;
  const error = getFieldState(name, formState).error?.message;
  const hasError = Boolean(error);

  return (
    <label className="form-label">
      <span className="form-label-row">
        <span>{label}</span>
        <span id={errorId} className="form-error-message" aria-live="polite">
          {error || " "}
        </span>
      </span>
      <input
        id={id}
        aria-describedby={errorId}
        aria-invalid={hasError}
        {...inputProps}
        {...register(name, rules)}
        className={cn(
          "form-input form-input-focus",
          hasError && "border-error",
        )}
      />
    </label>
  );
}
