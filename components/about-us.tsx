import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { FramerAnimate } from "./provider/framer-animate";
import { RichTextComponents } from "./rich-text-component";

type Props = {
  about: {
    bioImage: any;
    bio: any[];
    bioHeader: string;
  };
};
export const AboutUs = ({ about }: Props) => {
  return (
    <div className="max-w-6xl mx-auto px-3 py-8 flex lg:flex-row flex-col items-center justify-center gap-y-6 lg:space-x-8">
      <div className="flex flex-col gap-y-6">
        <h3 className="font-semibold text-3xl">{about.bioHeader}</h3>
        <PortableText components={RichTextComponents} value={about.bio} />
      </div>
      <FramerAnimate className="relative flex-shrink-0 max-w-[28rem] w-[98%] h-[36rem] lg:mt-10 mx-auto">
        <Image
          src={urlForImage(about.bioImage)}
          alt="about image"
          fill
          className="object-cover"
        />
      </FramerAnimate>
    </div>
  );
};
