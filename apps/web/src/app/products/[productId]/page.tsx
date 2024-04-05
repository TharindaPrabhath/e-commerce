"use client";

import { useState } from "react";

import Image from "next/image";

import { Typography } from "@pulzeup/ui/components/ui/typography";
import ProductVariant from "../../components/product-variant";

import QuantityButton from "./components/quantity-button";
import { Button } from "@pulzeup/ui/components/ui/button";

function Product() {
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="container">
      <Image
        src={
          "https://incarnage.com/cdn/shop/files/DSC04169.jpg?v=1701282128&width=650"
        }
        alt="Product image"
        width={400}
        height={400}
      />
      <div className="mt-4">
        <Typography variant="h1">Polo Black T Shirt</Typography>
        <Typography>LKR 1500</Typography>
      </div>

      <div className="mt-8">
        <Typography className="font-semibold text-sm">Color</Typography>
        <div className="mt-2 flex flex-row items-center gap-2">
          <ProductVariant
            data={{
              image:
                "https://incarnage.com/cdn/shop/files/DSC03801_f4bba734-7f94-411c-9012-c4bfe9127d7c.jpg?v=1706780282&width=650",
              text: "Sky Blue",
            }}
            onClick={() => {}}
          />
        </div>
      </div>

      <div className="mt-8">
        <Typography className="font-semibold text-sm">Size</Typography>
        <div className="mt-2 flex flex-row items-center gap-2">
          <ProductVariant
            data={{
              text: "S",
            }}
            onClick={() => {}}
          />
          <ProductVariant
            data={{
              text: "M",
            }}
            onClick={() => {}}
          />
          <ProductVariant
            data={{
              text: "XL",
            }}
            onClick={() => {}}
          />
        </div>
      </div>

      <div className="mt-8">
        <Typography className="font-semibold text-sm">Quantity</Typography>
        <QuantityButton quantity={quantity} onChange={setQuantity} />
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <Button>Buy now</Button>
        <Button variant="outline">Add to cart</Button>
      </div>
    </main>
  );
}

export default Product;
