import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import footer from "./schemas/footer";
import home from "./schemas/home";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, post, home, author, category, footer],
};
