import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blogsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    meta: z.string(),
    category: z.string(),
    theme: z.string(),
    image: z.string().optional(), // <-- New line added
  })
});

export const collections = {
  'blogs': blogsCollection,
};