import { ContentCard } from "./content-card";

export const VisitChannel = () => {
  return (
    <ContentCard
      title="I Share Strategies On Youtube"
      link="https://www.youtube.com/channel/UCVPIYfirQyznz8ICHedEObQ"
      linkName="Visit Youtube"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <iframe
          className="w-full max-w-[30rem] mx-auto h-60"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.youtube-nocookie.com/embed/x2AtsILpJ10?controls=1&rel=0&playsinline=0&modestbranding=1&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Ffranklinemmanuel.com&widgetid=5"
        ></iframe>
        <iframe
          className="w-full max-w-[30rem] mx-auto h-60"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.youtube.com/embed/7b9z-YcDUrc?si=1OFpCDhZL5uAcQrS"
        ></iframe>
        <iframe
          className="w-full max-w-[30rem] mx-auto h-60"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.youtube.com/embed/7b9z-YcDUrc?si=1OFpCDhZL5uAcQrS"
        ></iframe>
      </div>
    </ContentCard>
  );
};
