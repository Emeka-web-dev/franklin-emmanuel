"use client";
import { SanityDocument } from "next-sanity";
import AutoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {
  posts: SanityDocument[];
};

export const PostBanner = ({ posts }: Props) => {
  //   posts.map((post) => {
  //     console.log({ title: post.title, category: post.category });
  //   });
  return (
    <Carousel
      plugins={[
        AutoPlay({
          delay: 5000,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full bg-black"
    >
      <CarouselContent className="">
        {posts.map((value) => (
          <CarouselItem
            key={value._id}
            className="md:h-[30rem] h-[20rem] relative flex justify-center items-center"
          >
            <div
              className="absolute inset-x-0 h-full opacity-50 w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${urlForImage(value.mainImage)})`,
              }}
            />
            <div className="w-full h-full z-10">
              <div className="max-w-6xl mx-auto h-full flex flex-col justify-center px-4 text-white xl:px-4 lg:px-14 gap-y-4 pt-8">
                <div className="flex space-x-2">
                  {value.category.map((cat: any) => (
                    <Button
                      key={cat.slug.current}
                      size="sm"
                      asChild
                      className="bg-red-900 w-fit"
                    >
                      <Link href={`/category/${cat.slug.current}`}>
                        {cat.title}
                      </Link>
                    </Button>
                  ))}
                </div>
                <Link href={`/post/${value.slug.current}`}>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold capitalize w-full max-w-4xl">
                    {value.title}
                  </h2>
                </Link>
                <div className="flex space-x-4 items-center">
                  <div className="flex space-x-2 items-center">
                    <div className="relative h-8 w-8">
                      <Image
                        alt={value.author.name}
                        src={urlForImage(value.author.image)}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <p>{value.author.name}</p>
                  </div>
                  <div>
                    {new Date(value._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="right-4 xl:right-12 hidden lg:flex" />
      <CarouselPrevious className="left-4 xl:left-12 hidden lg:flex" />
    </Carousel>
  );
};
