import { groq } from "next-sanity";

export const postsQuery = groq`
*[_type == "post"] | order(_createdAt desc)[$start...$end]{
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
export const authorQuery = groq`
    *[_type == "author" && _id == $ref][0]{
  image,
    bio,
    name,
    role,
    socialLinks,
}`;

export const postsByRef = groq`
    *[_type == "post" && author._ref == $ref]{
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
    }
`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, 
    mainImage, 
    body, 
    _createdAt,
    author -> {
      image,
      name,
      bio,
      socialLinks,
      _id,
    },
    relatedArticle [] -> {
      title,
      slug,
      mainImage,
    }
  }`;

export const queryCount = groq`
    count(*[_type == "post"])
`;
