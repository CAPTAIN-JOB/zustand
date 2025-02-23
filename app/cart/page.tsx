"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import React from "react";

export default function page() {
  const { cart, removeFromCart, clearCart } = useCartStore();
  return (
    <main>
      <h1>cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>
              ${item.price} x {item.quantity}
            </p>
            <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
          </div>
        ))
      )}
      {cart.length > 0 && <Button onClick={clearCart}>Clear Cart</Button>}
    </main>
  );
}
