import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
  type: "document",
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "caption",
      title: "caption",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "bannerImage",
      title: "Banner Image",
      type: "image",
    }),
    defineField({
      name: "about",
      title: "About Me",
      type: "object",
      fields: [
        { name: "bioHeader", type: "string", title: "Bio Header" },
        {
          name: "bio",
          type: "array",
          title: "Bio",
          of: [
            {
              title: "Block",
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
            },
          ],
        },
        { name: "bioImage", type: "image", title: "Bio Image" },
      ],
    }),
    defineField({
      name: "mastery",
      title: "Mastery",
      type: "object",
      fields: [
        {
          name: "digitalProductsStrategy",
          type: "text",
          rows: 3,
          title: "Digital Products Strategy",
        },
        {
          name: "affiliateMarketing",
          type: "text",
          rows: 3,
          title: "Affiliate Marketing",
        },
        {
          name: "salesFunnels",
          type: "text",
          rows: 3,
          title: "Sales Funnels",
        },
      ],
    }),
    defineField({
      name: "brands",
      title: "Brands",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { type: "string", name: "name", title: "Brand Name" },
            { type: "image", name: "image" },
          ],
        },
      ],
    }),
    defineField({
      name: "youtubeIframe",
      title: "Youtube Iframe",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "bannerImage",
    },
  },
});
