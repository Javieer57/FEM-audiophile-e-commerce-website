import { cn } from "@utils/cn";
import { formatCurrency } from "@utils/formatCurrency";

type SummaryItem = {
  name: string;
  unitPrice: number;
  quantity: number;
  img: string;
};

type SummaryTotal = {
  label: string;
  value: number;
  highlight?: boolean;
};

const checkoutSummaryItems: SummaryItem[] = [
  {
    name: "XX99 MK II",
    unitPrice: 2999,
    quantity: 1,
    img: "/images/cart/image-xx99-mark-two-headphones.jpg",
  },
  {
    name: "XX59",
    unitPrice: 899,
    quantity: 2,
    img: "/images/cart/image-xx59-headphones.jpg",
  },
  {
    name: "YX1",
    unitPrice: 599,
    quantity: 1,
    img: "/images/cart/image-yx1-earphones.jpg",
  },
];

const checkoutSummaryTotals: SummaryTotal[] = [
  { label: "Total", value: 5396 },
  { label: "Shipping", value: 50 },
  { label: "VAT (Included)", value: 1079 },
  { label: "Grand Total", value: 5446, highlight: true },
];

function SummaryItemRow({ name, quantity, unitPrice, img }: SummaryItem) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-light-gray h-16 w-16 overflow-hidden rounded-lg">
        <img src={img} alt={name} className="h-full w-full object-cover" />
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
  return (
    <aside className="grid gap-8 rounded-lg bg-white p-8 lg:col-span-4">
      <h2 className="text-lg font-bold tracking-[0.08rem] uppercase">
        Summary
      </h2>

      <div className="space-y-6">
        {checkoutSummaryItems.map((item) => (
          <SummaryItemRow key={item.name} {...item} />
        ))}
      </div>

      <div className="space-y-2">
        {checkoutSummaryTotals.map((total) => (
          <SummaryTotalRow key={total.label} {...total} />
        ))}
      </div>

      <button
        type="submit"
        form="checkout-form"
        className="bg-primary hover:bg-accent focus-visible:bg-accent w-full py-3.5 text-sm font-bold tracking-[0.0625rem] text-white uppercase transition-colors focus-visible:outline-none"
      >
        Continue & pay
      </button>
    </aside>
  );
}
