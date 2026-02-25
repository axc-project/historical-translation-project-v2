import { defineCollection, z } from 'astro:content';

const formulations = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    type: z.enum(['core', 'module']),
    form: z.string(),
    purpose: z.string(),
    tagline: z.string(),
    icon: z.string(),
    bottleImage: z.string().optional(),
    archeviaBrand: z.boolean().optional(),
    supports: z.array(z.string()),
    ingredients: z.array(z.object({
      name: z.string(),
      form: z.string(),
      amount: z.string(),
    })),
    dosing: z.array(z.object({
      time: z.string(),
      amount: z.string(),
      note: z.string().optional(),
    })),
    safetyNotes: z.array(z.string()),
    suitedFor: z.array(z.string()),
    systemRole: z.string(),
    practitionerOnly: z.boolean().optional(),
  }),
});

export const collections = { formulations };
