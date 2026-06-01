"use client";

import { useEffect } from "react";
import { useCartStore } from "@/app/store/cartStore";

export function CartStoreHydrator() {
  useEffect(() => {
    useCartStore.persist.rehydrate().catch(() => undefined);
  }, []);

  return null;
}
