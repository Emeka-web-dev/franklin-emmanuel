import { SanityDocument } from "next-sanity";
import { ContentCard } from "./content-card";
import { VisitBlogCard } from "./visit-blog-card";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export const VisitBlog = async () => {
  const posts: SanityDocument[] = await client.fetch(postsQuery, {
    start: 0,
    end: 3,
  });
  return (
    <ContentCard
      title="I Share My Expertise In Writing"
      link="/blog"
      linkName="Visit Blog"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <VisitBlogCard
            key={post._id}
            imageUrl={urlForImage(post.mainImage)}
            header={post.title}
            caption={post.body.children.text}
            slug={post.slug.current}
          />
        ))}
      </div>
    </ContentCard>
  );
};
