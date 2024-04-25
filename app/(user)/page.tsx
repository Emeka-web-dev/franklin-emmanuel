import { AboutUs } from "@/components/about-us";
import { Banner } from "@/components/banner";
import { Brand } from "@/components/brand";
import { Mastery } from "@/components/mastery";
import { VisitBlog } from "@/components/visit-blog";
import { VisitChannel } from "@/components/visit-channel";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { homeQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";

export const revalidate = 30;
export default async function Home() {
  const home: SanityDocument = await client.fetch(homeQuery);

  const bannerImage = urlForImage(home.bannerImage);
  return (
    <div>
      {/* <Banner
        title={home.title}
        caption={home.caption}
        bannerImage={bannerImage}
      /> */}
      <AboutUs about={home.about} />
      <Mastery mastery={home.mastery} />
      <VisitBlog />
      <Brand brands={home.brands} />
      <VisitChannel channels={home.youtubeIframe} />
    </div>
  );
}
