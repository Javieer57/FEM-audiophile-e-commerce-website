import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { selectCartTotalQuantity, useCartStore } from "@store/cartStore";
import { CartContents } from "./CartContents";

type CartDialogProps = {
  open: boolean;
  onClose: (value: boolean) => void;
};

function EmptyCart() {
  return <p className="text-medium-gray">Your cart is empty.</p>;
}

export function CartDialog({ open, onClose }: CartDialogProps) {
  const clearCart = useCartStore((state) => state.clearCart);
  const totalQuantity = useCartStore(selectCartTotalQuantity);
  const haveProductsInCart = totalQuantity > 0;

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
              {haveProductsInCart && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="hover:text-primary focus-visible:text-primary font-medium underline opacity-50 transition-all duration-300 focus-visible:opacity-100 focus-visible:outline-none"
                >
                  Remove all
                </button>
              )}
            </div>

            {haveProductsInCart ? (
              <CartContents onClose={onClose} />
            ) : (
              <EmptyCart />
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
