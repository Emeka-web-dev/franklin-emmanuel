import { Download } from "lucide-react";
import Link from "next/link";

type ContentCardProps = {
  title: string;
  link: string;
  linkName: string;
  children: React.ReactNode;
};
export const ContentCard = ({
  title,
  link,
  linkName,
  children,
}: ContentCardProps) => {
  return (
    <div className="bg-red-800 text-white px-3 py-10">
      <div className="max-w-6xl mx-auto space-y-2 flex flex-col">
        <div className="space-x-6 flex justify-between items-start">
          <div className="flex flex-1 flex-col space-y-2">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold">
              {title}
            </h3>
            <div className="bg-yellow-600 w-[25rem] hidden md:flex h-[0.2rem]" />
          </div>
          <Link
            href={link}
            className="flex w-fit text-lg md:text-xl font-semibold justify-center items-center hover:underline"
          >
            {linkName}
            <Download className="h-5 w-5 -rotate-90 ml-1" />
          </Link>
        </div>
        <p className=" flex flex-wrap font-thin">
          Lead Generation tips, tricks, and best practices you can put into
          action.
        </p>
      </div>
      <div className="max-w-6xl mx-auto py-6">{children}</div>
    </div>
  );
};
