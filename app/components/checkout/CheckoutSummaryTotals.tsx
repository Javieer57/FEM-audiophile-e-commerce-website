"use client";

import { selectCartSubtotal, useCartStore } from "@store/cartStore";
import { cn } from "@utils/cn";
import { formatCurrency } from "@utils/formatCurrency";

type SummaryTotal = {
  label: string;
  value: number;
  highlight?: boolean;
};

function SummaryTotalRow({ label, value, highlight }: SummaryTotal) {
  const isHighlighted = Boolean(highlight);

  return (
    <div
      className={cn(
        "flex items-center justify-between",
        isHighlighted && "mt-4",
      )}
    >
      <p className="text-black/50 uppercase">{label}</p>
      <p className={cn("text-lg font-bold", isHighlighted && "text-primary")}>
        {formatCurrency(value)}
      </p>
    </div>
  );
}

export function CheckoutSummaryTotals() {
  const subtotal = useCartStore(selectCartSubtotal);
  const shipping = subtotal > 0 ? 50 : 0;
  const vat = Math.floor(subtotal * 0.2);
  const grandTotal = subtotal + shipping;

  const checkoutSummaryTotals: SummaryTotal[] = [
    { label: "Total", value: subtotal },
    { label: "Shipping", value: shipping },
    { label: "VAT (Included)", value: vat },
    { label: "Grand Total", value: grandTotal, highlight: true },
  ];

  return (
    <div className="space-y-2">
      {checkoutSummaryTotals.map((total) => (
        <SummaryTotalRow key={total.label} {...total} />
      ))}
    </div>
  );
}
