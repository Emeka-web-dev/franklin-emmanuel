import { LucideIcon } from "lucide-react";

type MasteryCardProps = {
  icon: LucideIcon;
  header: string;
  description: string;
};
export const MasteryCard = ({
  icon: Icon,
  header,
  description,
}: MasteryCardProps) => {
  return (
    <div className="text-center flex flex-col items-center justify-center px-4 py-8 bg-white shadow-xl rounded-lg max-w-80 md:max-w-96 mx-auto space-y-2">
      <Icon className="w-28 h-28 text-red-800" />
      <h3 className="text-2xl font-semibold">{header}</h3>
      <p className="">{description}</p>
    </div>
  );
};
