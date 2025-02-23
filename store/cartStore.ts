"use client";

import { create } from "zustand";

interface cartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

// Cart state

interface cartState {
  cart: cartItem[];
  addTocart: (item: cartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<cartState>((set) => ({
  cart: [],
  addTocart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);

      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));
