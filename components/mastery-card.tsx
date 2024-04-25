import { LucideIcon } from "lucide-react";
import Image from "next/image";
import { FramerAnimate } from "./provider/framer-animate";

type MasteryCardProps = {
  imageUrl: string;
  header: string;
  description: string;
};
export const MasteryCard = ({
  imageUrl,
  header,
  description,
}: MasteryCardProps) => {
  return (
    <FramerAnimate className="text-center flex flex-col items-center justify-center px-4 py-8 bg-white shadow-xl rounded-lg max-w-80 md:max-w-96 mx-auto space-y-2">
      {/* <Icon className="w-28 h-28 text-red-800" /> */}
      <div className="relative w-28 h-28">
        <Image src={imageUrl} alt="mastery image" fill />
      </div>
      <h3 className="text-2xl font-semibold">{header}</h3>
      <p className="">{description}</p>
    </FramerAnimate>
  );
};
