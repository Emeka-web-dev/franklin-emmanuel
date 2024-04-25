import { ContentCard } from "./content-card";

type Props = {
  channels: string[];
};
export const VisitChannel = ({ channels }: Props) => {
  const channelArrays = channels.slice(0, 3);
  return (
    <ContentCard
      title="I Share Strategies On Youtube"
      link="https://www.youtube.com/channel/UCVPIYfirQyznz8ICHedEObQ"
      linkName="Visit Youtube"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {channelArrays.map((channel, i) => (
          <iframe
            key={i}
            className="w-full max-w-[30rem] mx-auto h-60"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={channel}
          ></iframe>
        ))}
      </div>
    </ContentCard>
  );
};
