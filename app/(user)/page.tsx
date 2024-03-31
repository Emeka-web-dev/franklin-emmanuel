import { AboutUs } from "@/components/about-us";
import { Banner } from "@/components/banner";
import { Mastery } from "@/components/mastery";
import { VisitBlog } from "@/components/visit-blog";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Mastery />
      <VisitBlog />
    </div>
  );
}
