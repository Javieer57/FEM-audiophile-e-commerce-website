"use client";
import { useEffect, useState } from "react";
import { selectCartItemQuantityById, useCartStore } from "@store/cartStore";
import type { Products } from "@mytypes/products";
import { QuantityInput } from "./QuantityInput";

type ProductActionsProps = {
  productData: Products;
};

export function ProductActions({ productData }: ProductActionsProps) {
  const productQuantity = useCartStore(
    selectCartItemQuantityById(productData.slug),
  );
  const [quantity, setQuantity] = useState(1);
  const { addItem, updateQuantity } = useCartStore((state) => state);

  useEffect(() => {
    setQuantity(productQuantity ?? 1);
  }, [productQuantity]);

  const handleAddToCart = () => {
    if (quantity === productQuantity) return;

    if (productQuantity) {
      updateQuantity(productData.slug, quantity);
      return;
    }

    const itemToAdd = {
      id: productData.slug,
      name: productData.name,
      unitPrice: productData.price,
      imagePath: `/images/cart/image-${productData.slug}.jpg`,
    };

    addItem(itemToAdd, quantity);
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <QuantityInput value={quantity} onChange={setQuantity} />

      <button
        type="button"
        onClick={handleAddToCart}
        className="bg-primary hover:bg-accent focus-visible:bg-accent px-8 py-3.5 text-sm font-bold tracking-[0.0625rem] text-white uppercase transition-colors duration-300 focus-visible:outline-none"
      >
        Add to cart
      </button>
    </div>
  );
}
