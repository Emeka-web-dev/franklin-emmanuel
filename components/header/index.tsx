"use client";
import { useModalStore } from "@/hooks/useModalStore";
import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import { AlignRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import FramerContainer from "../provider/framer-container";

export const navLinks = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "contact",
    link: "/contact",
  },
  {
    name: "blog",
    link: "/blog",
  },
];
export const Header = () => {
  const isScrollTop = useScrollTop();
  const pathname = usePathname();
  const { onOpen } = useModalStore();
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 h-16 flex items- z-50 transition ease-out bg-transparent  duration-200 text-white",
        isScrollTop &&
          "bg-black/20 dark:bg-black/30 backdrop-blur-lg text-white"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 w-full flex justify-between align-center"
        )}
      >
        <Link href="/">
          <div className="relative w-48 h-full">
            <Image
              src="/franklin-logo.png"
              fill
              alt="logo"
              className={cn(
                "object-cover",
                (pathname === "/blog" || "/") && "invert",
                isScrollTop && "invert"
              )}
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
          <Button
            size="icon"
            variant="ghost"
            className="hidden md:flex"
            onClick={() => onOpen("search")}
          >
            <Search className="w-5 h-5" />
          </Button>
          <div className="flex mr-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpen("toggle")}
            >
              <AlignRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
