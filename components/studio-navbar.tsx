import { LayoutProps } from "sanity";
import Link from "next/link";
import { Undo2 } from "lucide-react";

function StudioNavbar(props: LayoutProps) {
  return (
    <div className="bg-[#13141b]">
      <div className="p-4 border-b-[#2f3242] border-b">
        <Link href="/" className="flex items-center text-sm text-white">
          <Undo2 className="w-6 h-6 mr-2" />
          Go to Website
        </Link>
      </div>
      {props.renderDefault(props)}
    </div>
  );
}

export default StudioNavbar;
