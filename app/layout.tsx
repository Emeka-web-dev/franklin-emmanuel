import type { Metadata } from "next";
import { Roboto, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";

const inter = Urbanist({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Franklin Emmanuel",
  description:
    "Digital Marketer Consultant and Trainer in Nigeria - Franklin Emmanuel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
