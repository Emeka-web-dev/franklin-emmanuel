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
      name,
      _id
    },
    category[] -> {
      title,  
      slug    
    }
  }`;

export const categoryPostsQuery = groq`
  *[_type=="post" && references(*[_type=="category" && slug.current == $ref]._id)] | order(_createdAt desc)[$start...$end]{
  title,
    slug,
    mainImage,
     category[] -> {
      title,         
    },
    body[][0]{
    children[][0]{
      text
    }
  }
}
  `;

export const categoryQuery = groq`
    *[_type=="category" && slug.current == $ref][0]{
  description,
    title
}
  `;
export const categoriesQuery = groq`
  *[_type=="category"]{
  slug,
    title
}
  `;
export const authorQuery = groq`
    *[_type == "author" && _id == $ref][0]{
  image,
    bio,
    name,
    role,
    socialLinks,
}`;

export const postsByRef = groq`
    *[_type == "post" && author._ref == $ref][$start...$end]{
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

export const categoryQueryCount = groq`
  count(*[_type=="post" && references(*[_type=="category" && slug.current == $ref]._id)])
`;

export const authorQueryCount = groq`
  count(*[_type=="post" && references(*[_type=="author" && _id == $ref]._id)])
`;
