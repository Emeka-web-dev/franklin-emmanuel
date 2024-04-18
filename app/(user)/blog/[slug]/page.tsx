import { RichTextComponents } from "@/components/rich-text-component";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { postQuery } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import RightContent from "@/components/right-content";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30;
async function BlogArticle({ params }: Props) {
  const post: SanityDocument = await client.fetch(postQuery, {
    slug: params.slug,
  });

  return (
    <article>
      <section className=" text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between overflow-hidden">
          <div className="absolute inset-y-0 w-full opacity-70 blur-sm">
            <Image
              className="object-center object-cover mx-auto"
              src={urlForImage(post.mainImage)}
              alt={post.author.name}
              fill
            />
          </div>
          <section className="py-8 px-5 h-full bg-black/50 w-full z-10">
            <div className="flex flex-col space-y-4 max-w-6xl mx-auto pt-16">
              <div>
                <h1 className="text-2xl max-w-4xl md:text-3xl font-extrabold">
                  {post.title}
                </h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex space-x-4">
                <span className="capitalize font-semibold text-lg">by:</span>
                <Link
                  href={`/author/${post.author._id}`}
                  className="flex space-x-2"
                >
                  <div className="relative w-8 h-8">
                    <Image
                      src={urlForImage(post.author.image)}
                      className="object-cover object-center rounded-full"
                      fill
                      alt={post.author.name}
                    />
                  </div>
                  <p>{post.author.name}</p>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="max-w-6xl mx-auto grid grid-cols-10">
        <div className="col-span-10 md:col-span-7 px-4 md:px-6 lg:px-10 pt-14 pb-8">
          <PortableText value={post.body} components={RichTextComponents} />
        </div>
        <RightContent post={post} />
      </section>
    </article>
  );
}

export default BlogArticle;
