"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { AlignRight, Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { useScrollTop } from "@/hooks/useScrollTop";
import { useToggle } from "@/hooks/useToggle";

export const navLinks = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "about",
    link: "/about",
  },
  {
    name: "contact",
    link: "/contact",
  },
];
export const Header = () => {
  const isScrollTop = useScrollTop();
  const { onOpen } = useToggle();
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 h-16 flex items- z-50 transition ease-out duration-200",
        isScrollTop && "bg-black/20 dark:bg-black/30 backdrop-blur-lg"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 w-full flex justify-between align-center text-white"
          //   isScrollTop && "text-black dark:text-white"
        )}
      >
        <Link href="/">
          <div className="relative w-48 h-full">
            <Image
              src="/franklin-logo.png"
              fill
              alt="logo"
              className="object-cover invert"
            />
          </div>
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={cn(
                "capitalize tracking-wider text-[0.85rem] font-semibold "
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4 items-center">
          <Button size="icon" variant="ghost" className="hidden md:flex">
            <Search className="w-5 h-5" />
          </Button>
          <div className="">
            <ModeToggle />
          </div>
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={onOpen}>
              <AlignRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
