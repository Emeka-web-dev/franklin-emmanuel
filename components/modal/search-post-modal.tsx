// "use client";

// import { useModalStore } from "@/hooks/useModalStore";
// import { client } from "@/sanity/lib/client";
// import { RotateCw, Search } from "lucide-react";
// import { FormEvent, useEffect, useRef, useState } from "react";
// import {
//   CommandDialog,
//   CommandGroup,
//   CommandItem,
//   CommandList,
// } from "../ui/command";
// import { Input } from "../ui/input";
// // import { searchQuery } from "@/sanity/lib/queries";
// import { urlForImage } from "@/sanity/lib/image";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import Link from "next/link";
// const searchQuery = groq`
//  *[_type == "post" && title match $value + "*"] | order(_createdAt desc)[$start...$end]{
//   title,
//      _id,
//      slug {
//      current
//      },
//    mainImage,
//    author->{
//      name
//    }
//  }
// `;
// type ItemProp = {
//   title: string;
//   slug: {
//     current: string;
//   };
//   _id: string;
//   mainImage: any;
//   author: {
//     name: string;
//   };
// };

// export const SearchPostModal = () => {
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [items, setItems] = useState<ItemProp[]>([]);
//   const submitBtnRef = useRef<HTMLButtonElement>(null);
//   const { isOpen, onClose, type } = useModalStore();

//   useEffect(() => {
//     if (!isOpen) {
//       //   setInput("");
//       setItems([]);
//     }
//   }, [isOpen]);

//   //   useEffect(() => {
//   //     if (!input?.trim()) return;

//   //     const delayDebounceFn = setTimeout(() => {
//   //       setIsLoading(true);
//   //       submitBtnRef?.current?.click();
//   //     }, 500);

//   //     return () => clearTimeout(delayDebounceFn);
//   //   }, [input]);
//   const isModalOpen = isOpen && type === "search";
//   const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // setIsLoading(true);
//     // const posts: ItemProp[] = await client.fetch(searchQuery, {
//     //   value: input,
//     //   start: 0,
//     //   end: 6,
//     // });
//     // setItems(posts);
//     // setIsLoading(false);
//     console.log("working");
//   };

//   //   const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
//   //     event.stopPropagation();
//   //     const value = event.target.value;
//   //     if (value.length < 3) return;
//   //     setIsLoading(true);
//   //     const posts: ItemProp[] = await client.fetch(searchQuery, {
//   //       value,
//   //       start: 0,
//   //       end: 10,
//   //     });
//   //     setItems(posts);
//   //     setIsLoading(false);
//   //   };
//   return (
//     <CommandDialog open={isModalOpen} onOpenChange={onClose}>
//       <form onSubmit={onSubmit} className="flex items-center border-b px-3">
//         {isLoading ? (
//           <RotateCw className="mr-2 h-4 w-4 shrink-0 opacity-50 animate-spin" />
//         ) : (
//           <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
//         )}
//         <Input
//           placeholder="Search posts, authors..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="flex h-11 w-full rounded-md bg-transparent py-3 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none ring-offset-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
//         />
//         <button ref={submitBtnRef} type="submit" className="mr-4">
//           submit
//         </button>
//       </form>
//       <CommandList>
//         <CommandGroup className="max-h-72 overflow-y-auto">
//           {items.length == 0 && (
//             <CommandItem className="aria-selected:bg-white aria-selected:text-black">
//               No result found...
//             </CommandItem>
//           )}
//           {items?.map((item) => (
//             <Link
//               href={`/blog/${item.slug.current}`}
//               key={item?._id}
//               onClick={onClose}
//             >
//               <CommandItem className="cursor-pointer border-b flex justify-between items-center gap-x-3">
//                 <div className="flex flex-col">
//                   <p className="text-[1rem] line-clamp-1 font-semibold">
//                     {item.title}
//                   </p>
//                   <p className="text-xs">Author: {item.author.name}</p>
//                 </div>
//                 <div className="relative w-10 h-10">
//                   <Image
//                     src={urlForImage(item.mainImage)}
//                     alt="main image"
//                     fill
//                   />
//                 </div>
//               </CommandItem>
//             </Link>
//           ))}
//         </CommandGroup>
//       </CommandList>
//     </CommandDialog>
//   );
// };

"use client";

import { RotateCw, Search } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

import {
  CommandDialog,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useModalStore } from "@/hooks/useModalStore";
import { searchQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

type ItemProp = {
  title: string;
  slug: {
    current: string;
  };
  _id: string;
  mainImage: any;
  author: {
    name: string;
  };
};

export const SearchPostModal = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [items, setItems] = useState<ItemProp[]>([]);
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  const { isOpen, onClose, type } = useModalStore();

  const isModalOpen = isOpen && type === "search";
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) setItems([]);
  }, [isOpen]);

  useEffect(() => {
    if (!input?.trim()) return;

    const delayDebounceFn = setTimeout(() => {
      setIsLoading(true);
      submitBtnRef?.current?.click();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [input]);

  if (!isMounted) {
    return null;
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const posts: ItemProp[] = await client.fetch(searchQuery, {
      value: input,
      start: 0,
      end: 15,
    });
    setItems(posts);
    setIsLoading(false);
  };
  return (
    <CommandDialog open={isModalOpen} onOpenChange={onClose}>
      <form
        onSubmit={onSubmit}
        className="flex items-center border-b px-3"
        cmdk-input-wrapper=""
      >
        {isLoading ? (
          <RotateCw className="mr-2 h-4 w-4 shrink-0 opacity-50 animate-spin" />
        ) : (
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        )}
        <Input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Search posts, authors..."
          className="flex h-11 w-full rounded-md bg-transparent py-3 outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none ring-offset-0 focus-visible:outline-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
        <button ref={submitBtnRef} type="submit" className="mr-4" />
      </form>
      <CommandList>
        <CommandGroup>
          {items.length == 0 && (
            <CommandItem className="aria-selected:bg-background">
              No result found...
            </CommandItem>
          )}
          {items?.map((item) => (
            <Link
              href={`/blog/${item.slug.current}`}
              key={item?._id}
              onClick={onClose}
            >
              <CommandItem className="cursor-pointer border-b flex justify-between items-center gap-x-3">
                <div className="flex flex-col">
                  <p className="text-[1rem] line-clamp-1 font-semibold">
                    {item.title}
                  </p>
                  <p className="text-xs">Author: {item.author.name}</p>
                </div>
                <div className="relative w-10 h-10">
                  <Image
                    src={urlForImage(item.mainImage)}
                    alt="main image"
                    fill
                  />
                </div>
              </CommandItem>
            </Link>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
