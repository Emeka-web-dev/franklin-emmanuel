import { Layout } from "@/components/provider/layout";
import { client } from "@/sanity/lib/client";
import { footerQuery } from "@/sanity/lib/queries";
import React from "react";

export const revalidate = 30;
const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const footer = await client.fetch(footerQuery);
  return <Layout footer={footer}>{children}</Layout>;
};

export default UserLayout;
