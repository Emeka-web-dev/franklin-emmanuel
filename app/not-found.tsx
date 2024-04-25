import { Header } from "@/components/header";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="h-16 bg-red-900" />
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h2 className="text-6xl font-bold">Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" className="underline">
          Return Home
        </Link>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
