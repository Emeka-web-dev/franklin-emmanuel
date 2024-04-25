"use client";

import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { SearchPostModal } from "../modal/search-post-modal";
import SideBarToggle from "../modal/sidebar-toggle";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;

  return (
    <>
      <SearchPostModal />
      <SideBarToggle />
      <Toaster position="top-center" />
    </>
  );
};
