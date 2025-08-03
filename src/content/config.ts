import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const projectCollection = defineCollection({
  loader: glob({ pattern: ['projects_list.json'], base: 'src/data' }),
  schema: z.array(z.object({
    id: z.number(),
    category: z.string(),
    categoryName: z.string(),
    title: z.string(),
    description: z.string(),
    platform: z.string(),
    updateDate: z.string(),
    link: z.string(),
    icon: z.string(),
  })),
});

const siteCollection = defineCollection({
  loader: glob({ pattern: ['sites_list.json'], base: 'src/data' }),
  schema: z.array(z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
    link: z.string(),
    logo: z.string().optional(),
    iconContent: z.string().optional(),
    bgColor: z.string(),
    analyticsEvent: z.string(),
    category: z.string().optional(),
  })),
});

export const collections = {
  post: postCollection,
  project: projectCollection,
  site: siteCollection,
};
