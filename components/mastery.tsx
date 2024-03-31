import { ArrowDownZA } from "lucide-react";
import { MasteryCard } from "./mastery-card";

export const Mastery = () => {
  return (
    <div className=" py-10 px-3 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto">
        <h3 className="font-semibold text-3xl text-center">
          I Am Only As Strong As What I Have Mastered 💪
        </h3>
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MasteryCard
            icon={ArrowDownZA}
            header="Digital Products Strategy"
            description="You want to create your own digital product? Be it an Online Course or Ebook or Productize your services.. Let’s map out systems that’d help you reach this goal of yours and get your products not just created but monetize them. Guess you never knew it was easy and fast..lol"
          />
          <MasteryCard
            icon={ArrowDownZA}
            header="Digital Products Strategy"
            description="You want to create your own digital product? Be it an Online Course or Ebook or Productize your services.. Let’s map out systems that’d help you reach this goal of yours and get your products not just created but monetize them. Guess you never knew it was easy and fast..lol"
          />
          <MasteryCard
            icon={ArrowDownZA}
            header="Digital Products Strategy"
            description="You want to create your own digital product? Be it an Online Course or Ebook or Productize your services.. Let’s map out systems that’d help you reach this goal of yours and get your products not just created but monetize them. Guess you never knew it was easy and fast..lol"
          />
        </div>
      </div>
    </div>
  );
};
