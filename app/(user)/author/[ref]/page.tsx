import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { authorQuery, postsByRef } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {
  params: {
    ref: string;
  };
};
export const revalidate = 30;
const AuthorPage = async ({ params }: Props) => {
  const author = await client.fetch(authorQuery, {
    ref: params.ref,
  });
  const posts: SanityDocument[] = await client.fetch(postsByRef, {
    ref: params.ref,
  });
  return (
    <div className="">
      <div className="w-full h-16 bg-red-900" />
      <div className="bg-[#e5e5e5]">
        <div className="mx-auto max-w-3xl py-6 flex flex-col items-center justify-center space-y-6 px-3">
          <div className="flex items-center space-x-2">
            <div className="relative h-12 w-12">
              <Image
                alt={author.name}
                src={urlForImage(author.image)}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col text-sm">
              <h4 className="font-semibold text-lg">{author.name}</h4>
              <p>{author.role}</p>
            </div>
          </div>
          <p className="text-center">{author.bio}</p>
          <div className="flex gap-x-2">
            {author.socialLinks.map((link: any) => (
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
      </div>
      <div className="max-w-6xl mx-auto px-3 py-10">
        <h2 className="capitalize font-semibold text-xl tracking-wider pb-4">
          Article from author:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <div className="flex flex-col group">
                <div className="w-full h-56 md:h-60 lg:h-56 relative overflow-hidden">
                  <Image
                    src={urlForImage(post.mainImage)}
                    layout="fill"
                    alt="article image"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-200 ease-out"
                  />
                </div>
                <div className="w-full bg-opacity-20 py-2 flex flex-col">
                  <div className="flex gap-x-2">
                    {post.category.map((cat: any, i: number) => (
                      <Button
                        size="sm"
                        variant="ghost"
                        key={i}
                        className="w-fit text-xs p-1 text-red-900"
                      >
                        {/* <Link
                          href={`/category/${cat.slug.current}`}
                          className=""
                        >
                        </Link> */}
                        {cat.title}
                      </Button>
                      // <p key={cat.slug.current}>{cat.title}</p>
                    ))}
                  </div>
                  <p className="text-sm md:text-base capitalize">
                    {post.title}
                  </p>
                  <p className="capitalize group-hover:underline text-sm hidden md:flex">
                    read more
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorPage;
