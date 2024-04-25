"use client";
import { navLinks } from "@/components/header";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
// import { useSearch } from "@/hooks/useSearch";
import { useStore } from "@/hooks/atom";
import { useModalStore } from "@/hooks/useModalStore";
import { SocialIcon } from "react-social-icons";

export default function SideBarToggle() {
  const { isOpen, onClose, type, onOpen } = useModalStore();
  const name = useStore((state) => state.name);

  const isModalOpen = isOpen && type === "toggle";
  const handleToggle = () => {
    onClose();
    onOpen("search");
  };

  return (
    <Sheet open={isModalOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Franklin Emmanuel</SheetTitle>
        </SheetHeader>
        <div className="">
          <Button
            className="py-3 my-5 w-full mx-auto"
            variant="outline"
            onClick={handleToggle}
          >
            Search Article...
          </Button>
          <div className="flex flex-col my-5 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                onClick={onClose}
                className="capitalize font-semibold hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex space-x-5 pt-8">
            {name.socialLinks.map((link) => (
              <Link key={link._key} href={link.link} onClick={onClose}>
                <SocialIcon
                  url={link.link}
                  style={{
                    width: "1.9rem",
                    height: "1.9rem",
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
