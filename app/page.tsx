import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <>
        <ProductCard
          product={{ id: 1, title: "Product A", price: 20, image: "img.jpg" }}
        />
      </>
    </div>
  );
}
