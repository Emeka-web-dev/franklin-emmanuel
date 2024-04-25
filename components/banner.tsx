"use client";
import Link from "next/link";
import FramerContainer from "./provider/framer-container";
import { Button } from "./ui/button";

type Props = {
  title: string;
  caption: string;
  bannerImage: string;
};
export const Banner = ({ title, caption, bannerImage }: Props) => {
  return (
    <div className="relative w-full h-[38rem] bg-black/60">
      <div
        className="absolute inset-x-0 w-full h-full bg-cover opacity-90 bg-center z-[-1]"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      />
      <FramerContainer
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full h-full flex flex-col items-center gap-y-2 px-3 justify-center text-white text-center"
      >
        <h2 className="font-semibold text-3xl md:text-5xl mx-auto max-w-3xl">
          {title}
        </h2>
        <p className="mx-auto max-w-3xl">{caption}</p>
        <Button className="text-lg font-semibold text-white bg-red-800 hover:bg-white hover:text-red-800 border-red-800 border-2 mt-14">
          <Link href="/contact">Let&apos;s Get Cracking</Link>
        </Button>
      </FramerContainer>
    </div>
  );
};
