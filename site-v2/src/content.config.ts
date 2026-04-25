import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/index.mdx', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string().optional(),
      topic: z.string(),
      date: z.coerce.date(),
      hero: image(),
      excerpt: z.string(),
      categories: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/index.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string().optional(),
      work: z.enum(['Website', 'Landing Page', 'Print', 'Software']),
      client: z.string().optional(),
      date: z.coerce.date(),
      hero: image(),
      excerpt: z.string(),
      categories: z.array(z.string()).optional(),
    }),
});

export const collections = { posts, projects };
