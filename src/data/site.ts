/** Single source of truth for personal links and contact info. */
export const site = {
	name: "Davi Quaresma",
	url: "https://davi-portfolio.vercel.app",
	github: "https://github.com/DaviQuaresma",
	linkedin: "https://www.linkedin.com/in/davi-quaresma/",
	repo: "https://github.com/DaviQuaresma/davi_portfolio",
	whatsappNumber: "5531992850463",
} as const;

export const whatsappUrl = (text: string) =>
	`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const sections = ["cases", "stack", "contact"] as const;
export type SectionId = (typeof sections)[number];
