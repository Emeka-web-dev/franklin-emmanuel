"use client";

import { SanityDocument } from "next-sanity";
import { Footer } from "../footer";
import { Header } from "../header";
import SideBarToggle from "../modal/sidebar-toggle";
import { useStore } from "@/hooks/atom";
import { useEffect } from "react";
import { ModalProvider } from "./modal-provider";

type Props = {
  children: React.ReactNode;
  footer: SanityDocument;
};
export const Layout = ({ children, footer }: Props) => {
  const setCaption: any = useStore((state) => state.setCaption);
  const setSocialLinks: any = useStore((state) => state.setSocialLinks);

  useEffect(() => {
    setCaption(footer.caption);
    setSocialLinks(footer.socialLinks);
  }, [setCaption, setSocialLinks, footer]);
  return (
    <div className="relative">
      <Header />
      <div className="">{children}</div>
      <Footer />
      <ModalProvider />
    </div>
  );
};
