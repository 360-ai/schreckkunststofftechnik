import { defineCollection, z } from "astro:content";

const jobs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    location: z.string(),
    start: z.string(),
    type: z.string(),
    active: z.boolean().default(true),
    order: z.number().default(100),
    applyEmail: z.string().email().default("info@schreck-kunststofftechnik.com")
  })
});

export const collections = { jobs };
