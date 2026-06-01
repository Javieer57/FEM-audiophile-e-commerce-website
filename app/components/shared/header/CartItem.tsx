import { formatCurrency } from "@utils/formatCurrency";
import { QuantityInput } from "./QuantityInput";

type CartItemProps = {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
  imagePath: string;
  onQuantityChange: (id: string, quantity: number) => void;
};

export function CartItem({
  id,
  name,
  unitPrice,
  quantity,
  imagePath,
  onQuantityChange,
}: CartItemProps) {
  return (
    <li className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div>
          <img
            src={imagePath}
            alt={name}
            className="bg-light-gray h-16 w-16 rounded-lg object-cover"
          />
        </div>
        <div>
          <p className="font-bold uppercase">{name}</p>
          <p className="text-sm font-bold opacity-50">
            {formatCurrency(unitPrice)}
          </p>
        </div>
      </div>
      <QuantityInput
        value={quantity}
        onChange={(value) => onQuantityChange(id, value)}
      />
    </li>
  );
}
