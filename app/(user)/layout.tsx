"use client";
import { Header } from "@/components/header";
import SideBarToggle from "@/components/sidebar-toggle";
import React from "react";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-[130vh]">
      <Header />
      <div className="">{children}</div>
      <SideBarToggle />
    </div>
  );
};

export default UserLayout;
