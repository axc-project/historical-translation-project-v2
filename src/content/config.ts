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

const ingredients = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    latinName: z.string().optional(),
    standardization: z.string().optional(),
    domain: z.string(),
    domainLabel: z.string().optional(),
    formulas: z.array(z.string()).default([]),
    historicalUse: z.string().optional(),
    classicalSources: z.array(z.string()).default([]),
    modernEvidence: z.string().optional(),
    mechanisms: z.array(z.string()).default([]),
    benefits: z.array(z.string()).default([]),
    safetyProfile: z.string().optional(),
    contraindications: z.array(z.string()).default([]),
    drugInteractions: z.array(z.string()).default([]),
    physicianNotes: z.string().optional(),
    patientGuidance: z.string().optional(),
    linkedPublications: z.array(z.string()).default([]),
  }),
});

export const collections = { formulations, ingredients };
