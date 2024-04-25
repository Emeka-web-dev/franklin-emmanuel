import { MasteryCard } from "./mastery-card";

type Props = {
  mastery: {
    digitalProductsStrategy: string;
    salesFunnels: string;
    affiliateMarketing: string;
  };
};
export const Mastery = ({ mastery }: Props) => {
  return (
    <div className=" py-10 px-3 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto">
        <h3 className="font-semibold text-3xl text-center">
          I Am Only As Strong As What I Have Mastered 💪
        </h3>
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MasteryCard
            imageUrl="/strategy.png"
            header="Digital Products Strategy"
            description={mastery.digitalProductsStrategy}
          />
          <MasteryCard
            imageUrl="/affiliate.png"
            header="Affiliate Marketing"
            description={mastery.affiliateMarketing}
          />
          <MasteryCard
            imageUrl="/sales.png"
            header="Sales Funnel"
            description={mastery.salesFunnels}
          />
        </div>
      </div>
    </div>
  );
};
