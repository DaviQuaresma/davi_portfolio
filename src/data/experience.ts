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
		tags: ["PHP", "Laravel", "Python", "Pandas", "MySQL", "Docker", "GitHub Actions"],
		roles: [
			{
				title: { pt: "Engenheiro de Software Pleno", en: "Mid-level Software Engineer" },
				start: "2026-09",
				projects: [
					{
						name: { pt: "ERP Financeiro", en: "Financial ERP" },
						bullets: [
							{
								pt: "Projetei e desenvolvi de forma independente um ERP financeiro modular, definindo arquitetura em camadas, modelos de domínio e fluxos de negócio — transações, recorrências, rateios, orçamentos anuais, centros de custo e distribuição entre sócios.",
								en: "Independently designed and developed a modular financial ERP, defining its layered architecture, domain models and core business workflows, covering financial transactions, recurring operations, cost allocations, annual budgets, cost centers and partner distributions.",
							},
							{
								pt: "Projetei um subsistema extensível de relatórios e exportações com os padrões Strategy, Registry e Builder, suportando relatórios configuráveis, envio agendado por e-mail e geração sob demanda em PDF/Excel.",
								en: "Designed an extensible reporting and export subsystem using Strategy, Registry and Builder patterns, supporting configurable reports, scheduled email delivery and on-demand PDF/Excel generation.",
							},
							{
								pt: "Arquitetei o processamento assíncrono com filas e workers dedicados para relatórios e exportações, jobs agendados, controles de idempotência, estratégias de retry e status em tempo real via WebSockets.",
								en: "Architected asynchronous processing with dedicated queues and workers for reports and exports, scheduled jobs, idempotency controls, retry strategies and real-time status updates through WebSockets.",
							},
							{
								pt: "Apliquei práticas de confiabilidade e manutenibilidade: cálculos monetários com inteiros, histórico de auditoria, sincronização de dados controlada, testes automatizados, análise estática com Larastan e CI com GitHub Actions.",
								en: "Implemented reliability and maintainability practices including integer-based monetary calculations, audit history, controlled data synchronization, automated tests, static analysis with Larastan and GitHub Actions CI pipelines.",
							},
						],
					},
				],
			},
			{
				title: { pt: "Engenheiro de Software Júnior", en: "Junior Software Engineer" },
				start: "2026-04",
				end: "2026-09",
				projects: [
					{
						name: { pt: "Automação ProConsumidor", en: "ProConsumidor Automation" },
						bullets: [
							{
								pt: "Desenvolvi uma automação em Python integrando o ProConsumidor a um CRM interno, substituindo um processo manual diário de mais de 2 horas por um fluxo autônomo concluído em menos de 2 minutos — redução de mais de 98% e mais de 500 horas de capacidade operacional liberadas por ano.",
								en: "Developed a Python automation integrating ProConsumidor with an internal CRM, replacing a manual daily process that required over 2 hours with an unattended workflow completed in under 2 minutes — a reduction of over 98% and more than 500 hours of operational capacity freed annually.",
							},
							{
								pt: "Implementei automação de navegador, processamento de dados e envio automático de relatórios em Excel por e-mail, permitindo que a equipe focasse nas exceções e eliminando a necessidade de uma contratação adicional planejada.",
								en: "Implemented browser automation, data processing and automated Excel report delivery by email, allowing the team to focus on exceptions instead of repetitive data entry and eliminating the need for a planned additional hire.",
							},
						],
					},
					{
						name: { pt: "ETL e BI de Dados Jurídicos", en: "Legal Data ETL & BI Automation" },
						bullets: [
							{
								pt: "Projetei e desenvolvi um pipeline ETL ponta a ponta em Python para extrair dados do EasyJur, plataforma de gestão jurídica sem API pública, automatizando a extração via navegador de quatro relatórios e substituindo a consolidação manual em planilhas.",
								en: "Designed and developed an end-to-end Python ETL pipeline to extract data from EasyJur, a legal management platform without a public API, automating browser-based extraction of four reports and replacing manual spreadsheet consolidation.",
							},
							{
								pt: "Implementei transformações com pandas para calcular indicadores jurídicos e financeiros, tratando regras de negócio complexas, como valores de causa duplicados entre múltiplos pedidos, para preservar a precisão dos relatórios.",
								en: "Implemented data transformations with pandas to calculate legal and financial indicators, handling complex business rules such as duplicate claim values across multiple requests to preserve reporting accuracy.",
							},
							{
								pt: "Construí uma ingestão confiável em MySQL com processamento em lote, transações e upserts idempotentes, implantando o pipeline com Docker, execução agendada, retries com backoff exponencial e logs estruturados.",
								en: "Built reliable MySQL ingestion with batch processing, transactions and idempotent upserts, deploying the pipeline with Docker, scheduled execution, retries with exponential backoff and structured logging.",
							},
						],
					},
					{
						name: { pt: "Plataforma de Onboarding de Clientes", en: "Client Onboarding Platform" },
						bullets: [
							{
								pt: "Desenvolvi uma plataforma full-stack que centraliza o onboarding de clientes, antes espalhado entre planilhas e conversas, com fluxo de revisão, correção e aprovação de cadastros e rastreamento de status de ponta a ponta.",
								en: "Built a full-stack platform that centralizes client onboarding, previously scattered across spreadsheets and chat, with a review, correction and approval workflow and end-to-end status tracking for every registration.",
							},
							{
								pt: "Implementei comunicação cliente-analista dentro da plataforma e gestão de documentos em object storage, garantindo histórico e rastreabilidade de cada etapa.",
								en: "Implemented in-platform client–analyst communication and document management on object storage, ensuring history and traceability at every step.",
							},
						],
					},
				],
				bullets: [
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
