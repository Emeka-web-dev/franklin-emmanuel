import { PostBanner } from "@/components/post-banner";
import { PostPagination } from "@/components/post-pagination";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { postsQuery, queryCount } from "@/sanity/lib/queries";
import { SanityDocument, groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 30;

export async function getData(
  perPage: number,
  page: number,
  query: string,
  ref?: string
) {
  const start = perPage * (page - 1);
  const end = start + perPage;
  const posts: SanityDocument[] = await client.fetch(query, {
    start,
    end,
    ref: ref ? ref : "",
  });
  return posts;
}

type Props = {
  searchParams: {
    page: string;
  };
};

const BlogPage = async ({ searchParams }: Props) => {
  let page = parseInt(searchParams.page, 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 12;

  const itemCount = await client.fetch(queryCount);

  const posts = await getData(perPage, page, postsQuery);
  const banner = await client.fetch(postsQuery, {
    start: 0,
    end: 3,
  });
  const totalPages = Math.ceil(itemCount / perPage);

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  const isPageOutOfRange = page > totalPages;

  const pageNumbers = [];
  const offsetNumber = 3;
  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="">
      <PostBanner posts={banner} />
      <div className="max-w-6xl mx-auto px-5 py-10">
        <h2 className="uppercase font-semibold text-xl tracking-wider pb-4">
          {page > 1 ? "other articles" : "latest articles"}
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
                        <Link
                          href={`/category/${cat.slug.current}`}
                          className=""
                        >
                          {cat.title}
                        </Link>
                      </Button>
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
        <PostPagination
          isPageOutOfRange={isPageOutOfRange}
          page={page}
          pageNumbers={pageNumbers}
          totalPages={totalPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
};

export default BlogPage;
