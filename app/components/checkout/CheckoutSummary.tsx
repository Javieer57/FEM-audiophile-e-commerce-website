"use client";

import { selectCartItems, useCartStore } from "@store/cartStore";
import { CheckoutSummaryTotals } from "./CheckoutSummaryTotals";
import { SummaryItemRow } from "./SummaryItemRow";

export function CheckoutSummary() {
  const checkoutItems = useCartStore(selectCartItems);

  return (
    <aside className="grid gap-8 rounded-lg bg-white p-8 lg:col-span-4">
      <h2 className="text-lg font-bold tracking-[0.08rem] uppercase">
        Summary
      </h2>

      {checkoutItems.length === 0 ? (
        <p className="text-medium-gray">Your cart is empty.</p>
      ) : (
        <ul className="space-y-6">
          {checkoutItems.map((item) => (
            <li key={item.id}>
              <SummaryItemRow {...item} />
            </li>
          ))}
        </ul>
      )}

      <CheckoutSummaryTotals />

      <button
        type="submit"
        form="checkout-form"
        disabled={checkoutItems.length === 0}
        className="bg-primary hover:bg-accent focus-visible:bg-accent disabled:bg-medium-gray w-full py-3.5 text-sm font-bold tracking-[0.0625rem] text-white uppercase transition-colors focus-visible:outline-none disabled:cursor-not-allowed"
      >
        Continue & pay
      </button>
    </aside>
  );
}
