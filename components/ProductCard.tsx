"use client";

import { useCartStore } from "@/store/cartStore";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const ProductCard = ({ product }) => {
  // use the cart store state

  const addToCart = useCartStore((state) => state.addTocart);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{product.title}</CardTitle>
          <CardDescription>{product.price}</CardDescription>
        </CardHeader>
        <Button onClick={() => addToCart(product)}>AddTocart</Button>
      </Card>
    </div>
  );
};

export default ProductCard;
