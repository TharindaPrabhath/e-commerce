"use client";

import { useState } from "react";

import { Typography } from "@pulzeup/ui/components/ui/typography";
import { Button } from "@pulzeup/ui/components/ui/button";
import ProductVariant from "../../components/product-variant";
import QuantityButton from "./components/quantity-button";
import Gallery from "./components/gallery";

const images = [
  {
    src: "https://incarnage.com/cdn/shop/files/DSC04169.jpg?v=1701282128&width=650",
    alt: "Product image",
    isThumbnail: true,
  },
  {
    src: "https://incarnage.com/cdn/shop/files/A7405241.jpg?v=1695914679&width=650",
    alt: "Product image",
  },
  {
    src: "https://incarnage.com/cdn/shop/files/A7405258_ce59a4ee-25c7-4ed9-8b07-e31529a1f083.jpg?v=1714390939&width=650",
    alt: "Product image",
  },
];

function Product() {
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="container">
      <section className="grid md:grid-cols-3">
        <div className="col-span-2 py-4 px-10 md:p-12">
          <Gallery images={images} />
        </div>
        <div className="md:col-start-3 md:px-6 md:py-6">
          <div className="mt-4 md:mt-12">
            <Typography variant="h1">Polo Black T Shirt</Typography>
            <Typography>LKR 1500</Typography>
          </div>

          <div className="mt-6">
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

          <div className="mt-6">
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

          <div className="mt-6">
            <Typography className="font-semibold text-sm">Quantity</Typography>
            <QuantityButton quantity={quantity} onChange={setQuantity} />
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Button>Buy now</Button>
            <Button variant="outline">Add to cart</Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            "On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains."
          </p>
        </div>
      </section>
    </main>
  );
}

export default Product;
