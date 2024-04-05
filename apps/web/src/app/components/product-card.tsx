"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@pulzeup/ui/components/ui/tooltip";
import { Typography } from "@pulzeup/ui/components/ui/typography";
import { useState } from "react";

function ProductCard() {
  const first =
    "https://incarnage.com/cdn/shop/files/DSC04169.jpg?v=1701282128&width=650";
  const second =
    "https://incarnage.com/cdn/shop/files/DSC03801_f4bba734-7f94-411c-9012-c4bfe9127d7c.jpg?v=1706780282&width=650";
  const [thumbnail, setThumbnail] = useState(first);

  return (
    <div className="w-72">
      <Link href="/">
        <Image
          src={thumbnail}
          alt="Product thumbnail"
          width={300}
          height={300}
          onMouseEnter={(e) => {
            setThumbnail(second);
          }}
          onMouseLeave={(e) => {
            setThumbnail(first);
          }}
        />
        <Typography variant="p" className="font-semibold mt-2">
          Polo T shirt
        </Typography>
      </Link>

      <Typography>LKR 1500</Typography>
      <div className="flex flex-row items-center gap-2 mt-4">
        <ProductVariant
          data={{ image: first, text: "Space Black" }}
          onClick={setThumbnail}
        />
        <ProductVariant
          data={{ image: second, text: "Sky Blue" }}
          onClick={setThumbnail}
        />
      </div>
    </div>
  );
}

export default ProductCard;

type ProductVariantProps = {
  onClick: (image: string) => void;
  data: {
    text: string;
    image: string;
  };
};

function ProductVariant({ data, onClick }: ProductVariantProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className="border-b-2"
          onClick={() => onClick(data.image)}
        >
          <Image
            src={data.image}
            alt="Other variants"
            width={35}
            height={35}
            className="hover:scale-110 transform-gpu border"
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{data.text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
