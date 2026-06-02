"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  unitPrice: number;
  quantity: number;
  imagePath: string;
};

type CartItemInput = Omit<CartItem, "quantity">;

type CartState = {
  items: CartItem[];
  addItem: (item: CartItemInput, quantity?: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CART_STORAGE_KEY = "audiophile-cart";

const clampQuantity = (quantity: number) => Math.min(99, Math.max(1, quantity));

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item, quantity = 1) => {
        const nextQuantity = clampQuantity(quantity);

        set((state) => {
          const existingItem = state.items.find(
            (cartItem) => cartItem.id === item.id,
          );

          if (!existingItem) {
            return {
              items: [...state.items, { ...item, quantity: nextQuantity }],
            };
          }

          return {
            items: state.items.map((cartItem) =>
              cartItem.id === item.id
                ? {
                    ...cartItem,
                    quantity: clampQuantity(cartItem.quantity + nextQuantity),
                  }
                : cartItem,
            ),
          };
        });
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          set((state) => ({
            items: state.items.filter((cartItem) => cartItem.id !== id),
          }));

          return;
        }

        set((state) => ({
          items: state.items.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: clampQuantity(quantity) }
              : cartItem,
          ),
        }));
      },
      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((cartItem) => cartItem.id !== id),
        }));
      },
      clearCart: () => {
        set({ items: [] });
      },
    }),
    {
      name: CART_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
      skipHydration: true,
    },
  ),
);

export const selectCartItems = (state: CartState) => state.items;

export const selectCartTotalQuantity = (state: CartState) =>
  state.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartSubtotal = (state: CartState) =>
  state.items.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0,
  );

export const selectCartItemQuantityById =
  (id: string) => (state: CartState) => {
    const item = state.items.find((cartItem) => cartItem.id === id);
    return item?.quantity;
  };
