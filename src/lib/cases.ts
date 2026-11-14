import { type CollectionEntry, getCollection } from "astro:content";
import type { Lang } from "@/i18n/ui";

export type Case = CollectionEntry<"cases">;

/** Cases for a locale, ordered by priority. Entry ids look like `pt/financial-erp-api`. */
export async function getCases(lang: Lang): Promise<Case[]> {
	const entries = await getCollection("cases", (entry) => entry.id.startsWith(`${lang}/`));
	return entries.sort((a, b) => a.data.order - b.data.order);
}
