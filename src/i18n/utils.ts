import { defaultLang, type Lang, languages, type UIKey, ui } from "./ui";

export function isLang(value: unknown): value is Lang {
	return typeof value === "string" && value in languages;
}

/** Resolves the active locale from `Astro.currentLocale`, falling back to the default. */
export function resolveLang(locale: string | undefined): Lang {
	return isLang(locale) ? locale : defaultLang;
}

export function getTranslator(lang: Lang) {
	return (key: UIKey): string => ui[lang][key];
}

export function otherLang(lang: Lang): Lang {
	return lang === "pt" ? "en" : "pt";
}

export const langPath = (lang: Lang) => `/${lang}/`;
