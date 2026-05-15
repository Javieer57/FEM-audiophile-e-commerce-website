import Link from "next/link";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { formatCurrency } from "../../../utils/formatCurrency";
import { CartItem } from "./CartItem";

export type CartProduct = {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
};

type CartDialogProps = {
  open: boolean;
  onClose: (value: boolean) => void;
  products: CartProduct[];
  onRemoveAll?: () => void;
};

function EmptyCart() {
  return <p className="text-medium-gray">Your cart is empty.</p>;
}

function CartContents({
  products,
  totalPrice,
  onClose,
}: {
  products: CartProduct[];
  totalPrice: number;
  onClose: (value: boolean) => void;
}) {
  return (
    <>
      <ul className="space-y-6">
        {products.map((item) => (
          <CartItem key={item.id} {...item} />
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

export function CartDialog({
  open,
  onClose,
  products,
  onRemoveAll,
}: CartDialogProps) {
  const totalQuantity = products.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = products.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );

  return (
    <Dialog open={open} onClose={onClose} className="relative z-40" transition>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/60 duration-300 ease-out data-closed:opacity-0"
      />
      <div className="general-container fixed inset-x-0 top-23.5 bottom-0 overflow-y-scroll py-6 lg:py-8">
        <div className="flex justify-end">
          <DialogPanel
            id="cart-dialog"
            transition
            className="w-full max-w-94.25 transform rounded-lg bg-white p-8 text-black shadow-xl duration-300 ease-out data-closed:-translate-y-8 data-closed:opacity-0 data-open:translate-y-0"
          >
            <div className="mb-8 flex items-center justify-between">
              <DialogTitle className="text-lg font-bold tracking-[0.08rem] uppercase">
                Cart ({totalQuantity})
              </DialogTitle>
              {totalQuantity > 0 && (
                <button
                  type="button"
                  onClick={onRemoveAll}
                  className="hover:text-primary focus-visible:text-primary font-medium underline opacity-50 transition-all duration-300 focus-visible:opacity-100 focus-visible:outline-none"
                >
                  Remove all
                </button>
              )}
            </div>

            {totalQuantity === 0 ? (
              <EmptyCart />
            ) : (
              <CartContents
                products={products}
                totalPrice={totalPrice}
                onClose={onClose}
              />
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
