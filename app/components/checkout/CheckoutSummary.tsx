"use client";

import { cn } from "@utils/cn";
import { formatCurrency } from "@utils/formatCurrency";
import {
  selectCartItems,
  selectCartSubtotal,
  selectCartTotalQuantity,
  useCartStore,
} from "@/app/store/cartStore";

type SummaryTotal = {
  label: string;
  value: number;
  highlight?: boolean;
};

function SummaryItemRow({
  name,
  quantity,
  unitPrice,
  imagePath,
}: {
  name: string;
  quantity: number;
  unitPrice: number;
  imagePath: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-light-gray h-16 w-16 shrink-0 overflow-hidden rounded-lg">
        <img
          src={imagePath}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mr-auto">
        <p className="font-bold">{name}</p>
        <p className="text-sm font-bold text-black/50">
          {formatCurrency(unitPrice)}
        </p>
      </div>
      <p className="font-bold text-black/50">x{quantity}</p>
    </div>
  );
}

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

export function CheckoutSummary() {
  const checkoutItems = useCartStore(selectCartItems);
  const subtotal = useCartStore(selectCartSubtotal);
  const totalQuantity = useCartStore(selectCartTotalQuantity);
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
    <aside className="grid gap-8 rounded-lg bg-white p-8 lg:col-span-4">
      <h2 className="text-lg font-bold tracking-[0.08rem] uppercase">
        Summary ({totalQuantity})
      </h2>

      {checkoutItems.length === 0 ? (
        <p className="text-medium-gray">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {checkoutItems.map((item) => (
            <SummaryItemRow key={item.id} {...item} />
          ))}
        </div>
      )}

      <div className="space-y-2">
        {checkoutSummaryTotals.map((total) => (
          <SummaryTotalRow key={total.label} {...total} />
        ))}
      </div>

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
