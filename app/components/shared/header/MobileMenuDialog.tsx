import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CategoryCard } from "../CategoryCard";
import type { Category } from "../../categories";

type MobileMenuDialogProps = {
  open: boolean;
  onClose: (value: boolean) => void;
  categories: Category[];
};

export function MobileMenuDialog({
  open,
  onClose,
  categories,
}: MobileMenuDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="relative z-40 lg:hidden"
      transition
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/60 duration-300 ease-out data-closed:opacity-0"
      />
      <div className="fixed inset-x-0 top-23.5 bottom-0">
        <DialogPanel
          id="mobile-nav"
          transition
          className="max-h-full transform overflow-y-auto rounded-b-lg bg-white px-6 pt-8 pb-9 text-black shadow-xl duration-300 ease-out data-closed:-translate-y-8 data-closed:opacity-0 data-open:translate-y-0 md:px-10 md:pt-14 md:pb-16"
        >
          <DialogTitle className="sr-only">Mobile navigation menu</DialogTitle>
          <nav aria-label="Mobile navigation">
            <ul className="grid gap-4 md:grid-cols-3 md:gap-2.5 lg:gap-7.5">
              {categories.map((item) => (
                <CategoryCard key={item.name} {...item} />
              ))}
            </ul>
          </nav>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
