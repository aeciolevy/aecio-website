import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";

const posts = defineCollection({
  name: "posts",
  directory: "/content/blog",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    published: z.boolean(),
    thumbnail: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm]

    });
    return {
      ...document,
      mdx,

    };
  },
});

const letters = defineCollection({
  name: "letters",
  directory: "/content/letters",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    published: z.boolean(),
    thumbnail: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm]
    });
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts, letters],
});

