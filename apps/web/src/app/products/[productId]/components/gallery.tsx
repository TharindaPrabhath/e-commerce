import { useEffect, useState } from "react";

import Image from "next/image";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@pulzeup/ui/components/ui/carousel";

type GalleryProps = {
  images: {
    src: string;
    alt?: string;
    isThumbnail?: boolean;
  }[];
};

function Gallery({ images }: GalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel setApi={setApi} className="max-w-fit">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                key={index}
                className="mx-auto w-96"
                src={image.src}
                alt={image.alt ?? "Product image"}
                width={400}
                height={400}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-6 flex flex-row gap-6 items-center justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer ${current === index + 1 ? "border-2 border-black rounded-md" : ""}`}
            onClick={() => api?.scrollTo(index)}
          >
            <Image
              src={image.src}
              alt={image.alt ?? "Product image"}
              className="rounded-md"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
