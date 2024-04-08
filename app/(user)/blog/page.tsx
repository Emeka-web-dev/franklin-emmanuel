import { PostBanner } from "@/components/post-banner";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";
import { SanityDocument, groq } from "next-sanity";
import React from "react";

export const revalidate = 30;
const BlogPage = async () => {
  const posts: SanityDocument[] = await client.fetch(postsQuery);

  return (
    <div className="">
      <PostBanner posts={posts} />
    </div>
  );
};

export default BlogPage;
