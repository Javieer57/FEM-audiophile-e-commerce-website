"use client";
import { CartItem } from "@store/cartStore";
import { formatCurrency } from "@utils/formatCurrency";

export function SummaryItemRow({
  name,
  quantity,
  unitPrice,
  imagePath,
}: CartItem) {
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
