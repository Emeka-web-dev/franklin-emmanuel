import { groq } from "next-sanity";

export const postsQuery = groq`
*[_type == "post"]{
    _id,
    title,
    slug,
    mainImage,
    _createdAt,
    author -> {
      image,
      name
    },
    category[] -> {
      title,  
      slug    
    }
  }`;
