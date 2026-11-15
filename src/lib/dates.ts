import { type Lang, languages } from "@/i18n/ui";

/** Formats a `YYYY-MM` string as a short localized month, e.g. "set 2026" / "Sep 2026". */
export function formatMonth(lang: Lang, ym: string): string {
	return new Intl.DateTimeFormat(languages[lang].htmlLang, {
		month: "short",
		year: "numeric",
		timeZone: "UTC",
	})
		.format(new Date(`${ym}-01T00:00:00Z`))
		.replace(".", "");
}

/** Current month as `YYYY-MM` (UTC), evaluated at build time. */
export function currentMonth(): string {
	return new Date().toISOString().slice(0, 7);
}
