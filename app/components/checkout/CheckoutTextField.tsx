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
    <div className="flex flex-col gap-2 text-xs">
      <div className="flex items-center justify-between gap-2 tracking-[-0.013125rem]">
        <label
          htmlFor={id}
          className={cn("font-bold", hasError && "text-error")}
        >
          {label}
        </label>
        <p
          id={errorId}
          className="text-error font-medium"
          aria-live="assertive"
        >
          {error || " "}
        </p>
      </div>
      <input
        id={id}
        aria-describedby={errorId}
        aria-invalid={hasError}
        {...inputProps}
        {...register(name, rules)}
        className={cn(
          "caret-primary focus-visible:border-primary h-14 rounded-lg border px-6 text-sm font-bold tracking-[-0.015625rem] text-black transition-colors duration-300 placeholder:font-bold placeholder:text-black/40 focus-visible:outline-none",
          hasError ? "border-error border-2" : "border-gray",
        )}
      />
    </div>
  );
}
