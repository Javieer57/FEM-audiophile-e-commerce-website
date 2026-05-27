import { cn } from "@/app/utils/cn";
import { formatCurrency } from "@/app/utils/formatCurrency";

type SummaryItem = {
  name: string;
  unitPrice: number;
  quantity: number;
};

type SummaryTotal = {
  label: string;
  value: number;
  highlight?: boolean;
};

const checkoutSummaryItems: SummaryItem[] = [
  { name: "XX99 MK II", unitPrice: 2999, quantity: 1 },
  { name: "XX59", unitPrice: 899, quantity: 2 },
  { name: "YX1", unitPrice: 599, quantity: 1 },
];

const checkoutSummaryTotals: SummaryTotal[] = [
  { label: "Total", value: 5396 },
  { label: "Shipping", value: 50 },
  { label: "VAT (Included)", value: 1079 },
  { label: "Grand Total", value: 5446, highlight: true },
];

function SummaryItemRow({ name, quantity, unitPrice }: SummaryItem) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-light-gray h-16 w-16 rounded-lg" />
      <div className="mr-auto">
        <p className="leading-6.25 font-bold">{name}</p>
        <p className="text-sm leading-6.25 font-bold text-black/50">
          {formatCurrency(unitPrice)}
        </p>
      </div>
      <p className="text-sm leading-6.25 font-bold text-black/50">
        x{quantity}
      </p>
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
      <p className="leading-6.25 text-black/50 uppercase">{label}</p>
      <p
        className={cn(
          "text-lg font-bold uppercase",
          isHighlighted && "text-primary",
        )}
      >
        {formatCurrency(value)}
      </p>
    </div>
  );
}

export function CheckoutSummary() {
  return (
    <aside className="rounded-lg bg-white p-8 lg:col-span-4">
      <h2 className="text-lg font-bold tracking-[1.29px] uppercase">Summary</h2>

      <div className="mt-8 space-y-6">
        {checkoutSummaryItems.map((item) => (
          <SummaryItemRow key={item.name} {...item} />
        ))}
      </div>

      <div className="mt-8 space-y-2">
        {checkoutSummaryTotals.map((total) => (
          <SummaryTotalRow key={total.label} {...total} />
        ))}
      </div>

      <button
        type="submit"
        form="checkout-form"
        className="bg-primary mt-8 h-12 w-full text-sm font-bold tracking-[1px] text-white uppercase"
      >
        Continue
      </button>
    </aside>
  );
}
