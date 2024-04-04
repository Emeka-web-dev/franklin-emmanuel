import { AboutUs } from "@/components/about-us";
import { Banner } from "@/components/banner";
import { Brand } from "@/components/brand";
import { Mastery } from "@/components/mastery";
import { Schedule } from "@/components/schedule";
import { VisitBlog } from "@/components/visit-blog";
import { VisitChannel } from "@/components/visit-channel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Mastery />
      <VisitBlog />
      {/* <Schedule /> */}
      <Brand />
      <VisitChannel />
    </div>
  );
}
