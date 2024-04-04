import { ContentCard } from "./content-card";
import { VisitBlogCard } from "./visit-blog-card";

export const VisitBlog = () => {
  return (
    <ContentCard
      title="I Share My Expertise In Writing"
      link="/blog"
      linkName="Visit Blog"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <VisitBlogCard
          imageUrl="/franklin-image1.png"
          header="How to Use GPT4 For Your Business in 2024"
        />
        <VisitBlogCard
          imageUrl="/franklin-image1.png"
          header="How to Use GPT4 For Your Business in 2024"
        />
        <VisitBlogCard
          imageUrl="/franklin-image1.png"
          header="How to Use GPT4 For Your Business in 2024"
        />
      </div>
    </ContentCard>
  );
};
