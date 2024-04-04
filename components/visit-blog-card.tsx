import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight, ChevronsRight } from "lucide-react";

type VisitBlogCardType = {
  imageUrl: string;
  header: string;
};
export const VisitBlogCard = ({ imageUrl, header }: VisitBlogCardType) => {
  return (
    <div className="max-w-80 mx-auto w-full flex flex-col bg-white rounded-lg overflow-hidden">
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt="blog image" fill className="object-cover" />
      </div>
      <div className="text-red-900 px-2 py-4">
        <h3 className="font-semibold text-[1.2rem]">{header}</h3>
        <Link href={imageUrl}>
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