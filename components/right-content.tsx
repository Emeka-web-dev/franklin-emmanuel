"use client";
// import { useStore } from '@/hooks/atom';
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type RelatedArticleProps = {
  slug: {
    current: string;
  };
  title: string;
};
function RightContent({ post }: any) {
  // const name = useStore((state) => state.name);
  return (
    <div className="col-span-10 md:col-span-3 border-l border-l-border pt-14 md:pb-8 px-6 flex flex-col justify-between">
      <div className="space-y-3 hidden md:flex flex-col">
        <h3 className="text-lg font-semibold uppercase">about the author</h3>
        <p className="text-sm">{post.author.bio}</p>
        <div className="flex space-x-5">
          {post.author.socialLinks.map((link: any) => (
            <SocialIcon
              key={link._key}
              url={link.link}
              style={{
                width: "1.9rem",
                height: "1.9rem",
              }}
            />
          ))}
        </div>
      </div>
      {post.relatedArticle && (
        <div className="pb-10 md:pb-2">
          <h3 className="text-xl font-semibold uppercase tracking-wider border-b border-b-border py-2 m">
            more article
          </h3>
          <div>
            {post.relatedArticle.map((article: RelatedArticleProps) => (
              <div
                key={article.slug.current}
                className="py-4 border-b border-b-border"
              >
                <Link href={article.slug.current} className="hover:underline">
                  {article.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RightContent;
