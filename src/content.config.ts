import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
  schema: rssSchema,

  //   schema: z.object({
  //     title: z.string(),
  //     description: z.string(),
  //     pubDate: z.coerce.date(),
  //     updatedDate: z.coerce.date().optional(),
  //   }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repository: z.string().url(),
    url: z.string(),
    tag: z.array(z.string()),
    pubDate: z.date()
  }),
});


export const collections = { blog, projects };
