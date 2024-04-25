"use client";
import { urlForImage } from "@/sanity/lib/image";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

type Props = {
  brands: [
    {
      image: any;
      name: string;
      _key: string;
    }
  ];
};
export const Brand = ({ brands }: Props) => {
  return (
    <div className="py-10 px-2 bg-[#f8f8f8]">
      <div className="max-w-5xl mx-auto">
        <h3 className="font-semibold text-3xl text-red-900 px-8">
          Brands I&apos;ve Worked With:
        </h3>
        <Carousel
          plugins={[
            AutoPlay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full py-2"
        >
          <CarouselContent>
            {brands.map((value) => (
              <CarouselItem
                key={value._key}
                className="basis-1/3 lg:basis-1/4 flex items-center justify-center"
              >
                <div className="p-1 cursor-grab">
                  <Image
                    src={urlForImage(value.image)}
                    width={150}
                    height={150}
                    alt="brand"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
