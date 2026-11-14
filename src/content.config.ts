import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { diagramIds } from "./components/diagrams/types";

const cases = defineCollection({
	// One file per case per language: src/content/cases/{pt,en}/<slug>.md
	loader: glob({ pattern: "**/*.md", base: "./src/content/cases" }),
	schema: z.object({
		title: z.string(),
		order: z.number().int().positive(),
		focus: z.string(),
		summary: z.string(),
		metrics: z
			.array(
				z.object({
					value: z.number(),
					prefix: z.string().default(""),
					suffix: z.string().default(""),
					decimals: z.number().int().min(0).default(0),
					label: z.string(),
				}),
			)
			.default([]),
		highlights: z.array(z.string()).min(1),
		stack: z.array(z.string()).min(1),
		diagram: z.enum(diagramIds),
		repo: z.url().optional(),
	}),
});

export const collections = { cases };
