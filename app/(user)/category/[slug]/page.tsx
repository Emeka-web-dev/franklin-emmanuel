import { PostPagination } from "@/components/post-pagination";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  categoriesQuery,
  categoryPostsQuery,
  categoryQuery,
  categoryQueryCount,
} from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { getData } from "../../blog/page";

type Props = {
  searchParams: {
    page: string;
  };
  params: {
    slug: string;
  };
};

export const revalidate = 30;
const CategoryPage = async ({ searchParams, params }: Props) => {
  let page = parseInt(searchParams.page, 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 10;
  const itemCount = await client.fetch(categoryQueryCount, {
    ref: params.slug,
  });

  const posts = await getData(perPage, page, categoryPostsQuery, params.slug);
  const category: SanityDocument = await client.fetch(categoryQuery, {
    ref: params.slug,
  });
  const categories: SanityDocument[] = await client.fetch(categoriesQuery);

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
    <div>
      <div className="w-full h-16 bg-red-900" />
      <div className="bg-[#e5e5e5]">
        <div className="mx-auto max-w-2xl py-8 flex flex-col items-center justify-center space-y-4 px-3">
          <h2 className="text-3xl font-semibold capitalize">
            {category.title}
          </h2>
          <p className="text-center">{category.description}</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-3 py-16">
        <div className="grid grid-cols-10 gap-x-6 pb-6">
          <div className="flex flex-col col-span-10 gap-y-6 md:col-span-7">
            {posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug.current}`}>
                <div className="flex gap-x-2 items-center group">
                  <div className="w-full h-40 md:h-48 lg:h-56 relative overflow-hidden">
                    <Image
                      src={urlForImage(post.mainImage)}
                      layout="fill"
                      alt="article image"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-200 ease-out"
                    />
                  </div>
                  <div className="w-full py-2 flex flex-col gap-y-2">
                    <div className="hidden md:flex gap-x-2">
                      {post.category.map((cat: any, i: number) => (
                        <Button
                          size="sm"
                          variant="ghost"
                          key={i}
                          className="w-fit text-xs p-[0.15rem] text-red-900"
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
                    <h3 className="text-sm font-semibold md:text-lg capitalize">
                      {post.title}
                    </h3>
                    <p className="line-clamp-2 md:line-clamp-3 text-sm text-gray-700">
                      {post.body.children.text}
                    </p>
                    {/* <p className="capitalize group-hover:underline text-sm hidden md:flex">
                      read more
                    </p> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="col-span-10 md:col-span-3 hidden md:block">
            <h3 className="font-semibold text-xl">Categories:</h3>
            <div className="flex flex-col gap-y-2 py-2">
              {categories.map((category, i) => (
                <Link href={`/category/${category.slug.current}`} key={i}>
                  <Button className="w-full rounded-none bg-red-900 ">
                    {category.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
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

export default CategoryPage;
