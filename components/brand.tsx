"use client";
import Image from "next/image";
import AutoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const brandImages = [
  "/brand/digital-business.png",
  "/brand/gorgeous.png",
  "/brand/kitso.png",
  "/brand/kjk-africa.png",
  "/brand/tecom.png",
  "/brand/vanguard.png",
  "/brand/zircon.png",
];
export const Brand = () => {
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
          className="w-full py-4"
        >
          <CarouselContent>
            {brandImages.map((value, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 lg:basis-1/4 flex items-center justify-center"
              >
                <div className="p-1 cursor-grab">
                  <Image src={value} width={150} height={150} alt="brand" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};
