import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@pulzeup/ui/components/ui/tooltip";
import { Badge } from "@pulzeup/ui/components/ui/badge";

type ProductVariantProps = {
  onClick: () => void;
  isActive?: boolean;
  data: {
    text: string;
    image?: string;
  };
};

export default function ProductVariant({
  data,
  isActive = false,
  onClick,
}: ProductVariantProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={() => onClick()}>
          {data.image ? (
            <Image
              src={data.image}
              alt="Other variants"
              width={35}
              height={35}
              className="hover:scale-110 transform-gpu border"
            />
          ) : (
            <Badge
              className="py-2 px-4"
              variant={isActive ? "default" : "outline"}
            >
              {data.text}
            </Badge>
          )}
        </TooltipTrigger>
        <TooltipContent>
          <p>{data.text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
