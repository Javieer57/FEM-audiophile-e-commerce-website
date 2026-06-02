import {
  selectCartItems,
  selectCartSubtotal,
  useCartStore,
} from "@store/cartStore";
import { CartItem } from "./CartItem";
import { formatCurrency } from "@utils/formatCurrency";
import Link from "next/link";

export function CartContents({
  onClose,
}: {
  onClose: (value: boolean) => void;
}) {
  const cartProducts = useCartStore(selectCartItems);
  const totalPrice = useCartStore(selectCartSubtotal);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <>
      <ul className="space-y-6">
        {cartProducts.map((item) => (
          <CartItem key={item.id} {...item} onQuantityChange={updateQuantity} />
        ))}
      </ul>

      <div className="mt-8 mb-6 flex items-center justify-between">
        <p className="font-medium uppercase opacity-50">Total</p>
        <p className="text-lg font-bold">{formatCurrency(totalPrice)}</p>
      </div>

      <Link
        href="/checkout"
        className="bg-primary hover:bg-accent focus-visible:bg-accent block w-full px-8 py-4 text-center text-sm font-bold tracking-[0.06rem] text-white uppercase transition-colors duration-300 focus-visible:outline-none"
        onClick={() => onClose(false)}
      >
        Checkout
      </Link>
    </>
  );
}
