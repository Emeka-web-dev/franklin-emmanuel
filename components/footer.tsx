"use client";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { navLinks } from "./header";
import { useStore } from "@/hooks/atom";

export const Footer = () => {
  const footer = useStore((state) => state.name);
  return (
    <div className="bg-[#43070f] text-white grid grid-cols-1 md:grid-cols-2 relative pb-10 md:pb-0">
      <div className="flex flex-col md:items-end">
        <div className="md:max-w-xl md:p-5 md:mb-14">
          <div className="border-b md:border-b-0 py-6 md:p-3">
            <h3 className="text-center md:text-left text-2xl font-bold uppercase">
              Franklin Emmanuel
            </h3>
          </div>
          <p className="p-8 md:px-3 md:py-0 text-sm text-center md:text-left">
            {footer.caption}
          </p>
        </div>
      </div>
      <div className="grid grid-row-2 md:border-l">
        <div className=" md:border-b border-t md:border-t-0">
          <div className="max-w-lg py-4 md:pt-8 px-14 gap-y-4 grid grid-cols-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="uppercase tracking-wider text-sm hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className=" pt-5 justify-center md:justify-start px-10 border-t md:border-t-0 flex space-x-8">
          {footer.socialLinks.map((link) => (
            <SocialIcon
              url={link.link}
              key={link._key}
              style={{
                width: "1.9rem",
                height: "1.9rem",
              }}
            />
          ))}
        </div>
      </div>
      <div className="w-full absolute bottom-2">
        <div className="max-w-[68rem] mx-auto w-full px-5 text-center md:text-left">
          <Link
            href="https://emeka-resume-kula.vercel.app"
            className="text-gray-400 text-xs"
          >
            © 2024 Spotex Media LLC
          </Link>
        </div>
      </div>
    </div>
  );
};
