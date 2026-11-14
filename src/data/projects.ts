import type { Lang } from "@/i18n/ui";

type Localized = Record<Lang, string>;

export interface Project {
	title: Localized;
	context?: Localized;
	description: Localized;
	stack: string[];
	links: { label: string; href: string }[];
}

const gh = (repo: string) => `https://github.com/DaviQuaresma/${repo}`;

export const projects: Project[] = [
	{
		title: { pt: "Video Processor", en: "Video Processor" },
		context: { pt: "Desafio técnico · Trakto", en: "Technical challenge · Trakto" },
		description: {
			pt: "Upload de vídeos para o Google Cloud Storage, transcoding para baixa resolução com ffmpeg e listagem/download pela interface.",
			en: "Video upload to Google Cloud Storage, low-res transcoding with ffmpeg, and listing/download through the UI.",
		},
		stack: ["NestJS", "React", "Google Cloud Storage", "ffmpeg", "Docker"],
		links: [{ label: "GitHub", href: gh("desafio_tecnico_trakto_davi_quaresma") }],
	},
	{
		title: { pt: "Gerador de Carrosséis", en: "Carousel Generator" },
		context: { pt: "Automação · IA", en: "Automation · AI" },
		description: {
			pt: "Pipeline 100% automatizado que extrai notícias reais de sites, gera carrosséis prontos para redes sociais com IA e entrega por e-mail.",
			en: "Fully automated pipeline that scrapes real news, generates social-media-ready carousels with AI and delivers them by email.",
		},
		stack: ["Node.js", "Web scraping", "OpenAI", "Nodemailer", "Hetzner"],
		links: [{ label: "GitHub", href: gh("PostsAPI") }],
	},
	{
		title: { pt: "Finance API", en: "Finance API" },
		context: { pt: "Estudo aprofundado", en: "Deep-dive study" },
		description: {
			pt: "API para consolidar processamento assíncrono: filas com BullMQ sobre Redis, tarefas agendadas e logging estruturado, com frontend em Next.js.",
			en: "API built to master asynchronous processing: BullMQ queues on Redis, scheduled tasks and structured logging, with a Next.js frontend.",
		},
		stack: ["NestJS", "Redis", "BullMQ", "Task Scheduling", "Next.js"],
		links: [
			{ label: "API", href: gh("finance_api") },
			{ label: "App", href: gh("finance_app") },
		],
	},
];
