import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
