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
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="flex flex-col space-y-2">
          <h3 className="text-4xl font-semibold">{title}</h3>
          <div className="bg-yellow-600 w-[30rem] h-1" />
          <p className="">
            Lead Generation tips, tricks, and best practices you can put into
            action.
          </p>
        </div>
        <Link
          href={link}
          className="flex text-xl font-semibold justify-center items-center hover:underline h-fit"
        >
          {linkName}
          <Download className="h-5 w-5 -rotate-90 ml-2" />
        </Link>
      </div>
      <div className="max-w-6xl mx-auto py-6">{children}</div>
    </div>
  );
};
