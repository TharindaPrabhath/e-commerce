"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Typography } from "@pulzeup/ui/components/ui/typography";
import ProductVariant from "./product-variant";

import { DEFAULT_FALLBACK_IMAGE } from "@/src/const";

type ProductCardProps = {
  data: {
    name: string;
    price: number;
    thumbnail: string;
    variants?: {
      image: string;
      text: string;
    }[];
  };
};

function ProductCard({ data }: ProductCardProps) {
  const [thumbnail, setThumbnail] = useState<string | undefined>(
    data.thumbnail,
  );
  const hasVariants = data.variants && data?.variants?.length > 1;

  const getTransitionImage = () => {
    if (!hasVariants) return data.thumbnail;

    if (thumbnail === data.variants?.[0]?.image) {
      if (data?.variants?.length! > 1) return data.variants?.[1]?.image;
    }
    return data.variants?.[0]?.image;
  };

  return (
    <div className="w-fit md:w-72">
      <Link href="/">
        <Image
          src={thumbnail ?? DEFAULT_FALLBACK_IMAGE}
          alt="Product thumbnail"
          width={300}
          height={300}
          onMouseEnter={(e) => {
            if (hasVariants) setThumbnail(getTransitionImage());
          }}
          onMouseLeave={(e) => {
            if (hasVariants) setThumbnail(thumbnail);
          }}
        />
        <Typography variant="p" className="font-semibold mt-2">
          Polo T shirt
        </Typography>
      </Link>

      <Typography>LKR 1500</Typography>
      {hasVariants && (
        <div className="flex flex-row items-center gap-2 mt-4">
          {data.variants?.map((variant, index) => (
            <ProductVariant
              key={index}
              data={{ image: variant.image, text: variant.text }}
              onClick={() => setThumbnail(variant.image)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
