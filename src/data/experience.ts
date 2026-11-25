import type { Lang } from "@/i18n/ui";

type Localized = Record<Lang, string>;

export interface Role {
	title: Localized;
	/** `YYYY-MM` */
	start: string;
	/** `YYYY-MM`; omitted for the current role. */
	end?: string;
	/** Role-level achievements, shown before any projects. */
	bullets?: Localized[];
	/** Achievements grouped by project, for roles with distinct deliverables. */
	projects?: Project[];
}

export interface Project {
	name: Localized;
	bullets: Localized[];
}

export interface Job {
	company: string;
	location: Localized;
	/** Most recent role first. */
	roles: Role[];
	tags: string[];
}

export const experience: Job[] = [
	{
		company: "VPPR — Consultoria Jurídica Empresarial",
		location: { pt: "Belo Horizonte, MG · Remoto", en: "Belo Horizonte, Brazil · Remote" },
		tags: ["PHP", "Laravel", "Python", "Docker", "GitHub Actions"],
		roles: [
			{
				title: { pt: "Engenheiro de Software Pleno", en: "Mid-level Software Engineer" },
				start: "2026-09",
				bullets: [
					{
						pt: "Projetei e desenvolvi de forma independente o backend e o frontend de um ERP financeiro, definindo arquitetura, decisões técnicas e fluxos de negócio.",
						en: "Independently designed and built a financial ERP backend and frontend, defining its architecture, technical decisions and core business workflows.",
					},
					{
						pt: "Soluções para operações financeiras complexas: recorrências, rateios, orçamentos e processamento assíncrono.",
						en: "Engineered complex financial operations: recurring transactions, cost allocations, budgets and asynchronous processing.",
					},
					{
						pt: "Ciclo técnico completo — do desenho da arquitetura e implementação assistida por IA ao troubleshooting e deploy em produção.",
						en: "Led the full technical lifecycle — from architecture and AI-assisted implementation to troubleshooting and production deployment.",
					},
				],
			},
			{
				title: { pt: "Engenheiro de Software Júnior", en: "Junior Software Engineer" },
				start: "2026-04",
				end: "2026-09",
				bullets: [
					{
						pt: "Plataforma centralizada de onboarding de clientes, unificando processos antes fragmentados.",
						en: "Built a centralized client onboarding platform, unifying previously fragmented processes.",
					},
					{
						pt: "Automação de navegador em Python para coleta de dados institucionais, reduzindo 83,67% do tempo de execução.",
						en: "Python browser automation for institutional data collection, cutting recorded execution time by 83.67%.",
					},
					{
						pt: "Implantei do zero práticas de entrega: governança Git, branches, Pull Requests, Docker e CI/CD com GitHub Actions.",
						en: "Established delivery practices from scratch: Git governance, branching, Pull Requests, Docker and CI/CD with GitHub Actions.",
					},
				],
			},
		],
	},
	{
		company: "Time System",
		location: { pt: "Belo Horizonte, MG · Híbrido", en: "Belo Horizonte, Brazil · Hybrid" },
		tags: ["PHP", "TypeScript", "MySQL", "MariaDB", "REST APIs"],
		roles: [
			{
				title: { pt: "Engenheiro de Software", en: "Software Engineer" },
				start: "2025-08",
				end: "2026-04",
				bullets: [
					{
						pt: "Aplicações web full-stack integrando interfaces a serviços backend e APIs REST.",
						en: "Full-stack web applications integrating frontends with backend services and REST APIs.",
					},
					{
						pt: "Funcionalidades backend em PHP com modelagem relacional e otimização de queries em MySQL/MariaDB.",
						en: "PHP backend features with relational modeling and query optimization on MySQL/MariaDB.",
					},
					{
						pt: "Manutenibilidade via reuso de componentes, testes automatizados e refatoração.",
						en: "Improved maintainability through component reuse, automated tests and refactoring.",
					},
				],
			},
		],
	},
	{
		company: "Gurukiller",
		location: { pt: "Nova Lima, MG · Híbrido", en: "Nova Lima, Brazil · Hybrid" },
		tags: ["PHP", "Laravel", "Python", "Docker", "Linux", "AWS"],
		roles: [
			{
				title: { pt: "Engenheiro de Software", en: "Software Engineer" },
				start: "2024-12",
				end: "2025-08",
				bullets: [
					{
						pt: "Aplicações full-stack com PHP e Laravel, integrando serviços, bancos de dados e interfaces.",
						en: "Full-stack applications with PHP and Laravel, integrating services, databases and interfaces.",
					},
					{
						pt: "Automações e processamento de dados em Python para fluxos internos.",
						en: "Python automation and data-processing solutions for internal workflows.",
					},
					{
						pt: "Ambientes e infraestrutura com Docker, Linux e AWS; melhorias de confiabilidade e deploy.",
						en: "Environments and infrastructure with Docker, Linux and AWS; reliability and deployment improvements.",
					},
				],
			},
		],
	},
];
