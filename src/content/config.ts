import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string().optional(),
        alt: z.string().optional()
      }),
      worksImage1: z.object({
        url: z.string().optional(),
        alt: z.string().optional()
      }),
      worksImage2: z.object({
        url: z.string().optional(),
        alt: z.string().optional()
      }),
      platform: z.string(),
      stack: z.string(),
      website: z.string(),
      github: z.string(),
    })
});

export const collections = {
  projects: projectsCollection,
};

