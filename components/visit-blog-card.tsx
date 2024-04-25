import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type VisitBlogCardType = {
  imageUrl: string;
  header: string;
  caption: string;
  slug: string;
};
export const VisitBlogCard = ({
  imageUrl,
  header,
  caption,
  slug,
}: VisitBlogCardType) => {
  return (
    <div className="w-full max-w-[30rem] mx-auto flex flex-col bg-white rounded-lg overflow-hidden">
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt="blog image" fill className="object-cover" />
      </div>
      <div className="text-red-900 px-2 py-4">
        <h3 className="font-semibold text-[1.2rem]">{header}</h3>
        <p className="line-clamp-2 md:line-clamp-4 text-black">{caption}</p>
        <Link href={`/blog/${slug}`}>
          <Button
            variant="link"
            className="p-0 font-semibold text-lg text-red-900"
          >
            Read More
            <ChevronsRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
