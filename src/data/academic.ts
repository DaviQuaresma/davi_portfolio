import type { Lang } from "@/i18n/ui";

type Localized = Record<Lang, string>;

export interface Module {
	name: Localized;
	/** Completion month, `YYYY-MM`. */
	date: string;
}

export interface Activity {
	title: Localized;
	detail: Localized;
	href?: string;
}

export interface Degree {
	institution: string;
	degree: Localized;
	/** `YYYY-MM` */
	start: string;
	end: string;
	grade?: Localized;
	modules?: Module[];
	activities?: Activity[];
}

export interface Certification {
	name: string;
	issuer: string;
	/** `YYYY-MM` */
	issued: string;
	credentialId?: string;
}

export const nextStep = {
	program: { pt: "Mestrado em Informática", en: "Master's in Computer Science" },
	institution: "PPGINF · PUC Minas",
	focus: {
		pt: "Inteligência Artificial & Machine Learning",
		en: "Artificial Intelligence & Machine Learning",
	},
	status: {
		pt: "Preparando o ingresso — aguardando a abertura das inscrições.",
		en: "Preparing my application — waiting for enrollment to open.",
	},
};

export const degrees: Degree[] = [
	{
		institution: "PUC Minas",
		degree: {
			pt: "Especialização em Engenharia de Software",
			en: "Postgraduate Specialization in Software Engineering",
		},
		start: "2026-01",
		end: "2027-02",
		modules: [
			{ name: { pt: "Gestão Ágil de Projetos", en: "Agile Project Management" }, date: "2026-03" },
			{ name: { pt: "Engenharia de Requisitos", en: "Requirements Engineering" }, date: "2026-04" },
			{
				name: { pt: "Design de Experiência do Usuário", en: "User Experience Design" },
				date: "2026-05",
			},
			{
				name: { pt: "Arquitetura de Soluções em Nuvem", en: "Cloud Solution Architecture" },
				date: "2026-06",
			},
			{ name: { pt: "Arquitetura Front-End", en: "Front-End Architecture" }, date: "2026-06" },
			{ name: { pt: "Arquitetura Back-End", en: "Back-End Architecture" }, date: "2026-07" },
			{
				name: {
					pt: "Estratégias de Desenvolvimento de Software",
					en: "Software Development Strategies",
				},
				date: "2026-08",
			},
			{ name: { pt: "APIs e Web Services", en: "APIs and Web Services" }, date: "2026-08" },
			{
				name: {
					pt: "Bancos de Dados Relacionais e Não Relacionais",
					en: "Relational and Non-Relational Databases",
				},
				date: "2026-09",
			},
			{
				name: { pt: "Cultura e Práticas DevOps", en: "DevOps Culture and Practices" },
				date: "2026-10",
			},
			{
				name: { pt: "Cultura e Práticas DevSecOps", en: "DevSecOps Culture and Practices" },
				date: "2026-10",
			},
			{ name: { pt: "Teste de Software", en: "Software Testing" }, date: "2026-11" },
			{
				name: {
					pt: "Práticas de Implantação e Evolução de Software",
					en: "Software Implementation and Evolution Practices",
				},
				date: "2026-12",
			},
			{ name: { pt: "Qualidade de Software", en: "Software Quality" }, date: "2027-02" },
			{
				name: {
					pt: "IA Generativa para Engenharia de Software",
					en: "Generative AI for Software Engineering",
				},
				date: "2027-02",
			},
		],
	},
	{
		institution: "Centro Universitário UNA",
		degree: {
			pt: "Bacharelado em Sistemas de Informação",
			en: "Bachelor's in Information Systems",
		},
		start: "2021-01",
		end: "2025-12",
		grade: { pt: "Média acadêmica 85,31/100", en: "Academic average 85.31/100" },
		activities: [
			{
				title: { pt: "Movie Catalog — Backend", en: "Movie Catalog — Backend" },
				detail: {
					pt: "API REST em Java, Spring Boot e PostgreSQL (H2 nos testes), com arquitetura em camadas, repositórios e Factory; frontend React + Vite.",
					en: "REST API in Java, Spring Boot and PostgreSQL (H2 for tests), with layered architecture, repositories and Factory; React + Vite frontend.",
				},
				href: "https://github.com/DaviQuaresma/movieSpring-api",
			},
			{
				title: { pt: "Oracle Academy — Java Foundations", en: "Oracle Academy — Java Foundations" },
				detail: {
					pt: "Formação de 100h pela dbyte, incluindo a produção de material didático para oficinas comunitárias.",
					en: "100-hour program through dbyte, including creating teaching materials for community workshops.",
				},
			},
			{
				title: { pt: "Tutor Google Workspace", en: "Google Workspace Student Tutor" },
				detail: {
					pt: "Projeto de extensão de 80h ministrando oficinas práticas de produtividade digital.",
					en: "80-hour extension program delivering hands-on digital productivity workshops.",
				},
			},
		],
	},
];

export const certifications: Certification[] = [
	{ name: "Java Foundations", issuer: "Oracle", issued: "2022-05" },
	{
		name: "Scrum Fundamentals Certified",
		issuer: "teya✱",
		issued: "2022-05",
		credentialId: "918832",
	},
];

export const studyAreas: Localized[] = [
	{
		pt: "Inteligência Artificial & Machine Learning",
		en: "Artificial Intelligence & Machine Learning",
	},
	{ pt: "Algoritmos & estruturas de dados", en: "Algorithms & data structures" },
	{ pt: "Matemática para computação", en: "Mathematics for computing" },
	{ pt: "Arquitetura de software & system design", en: "Software architecture & system design" },
];

export const spokenLanguages: { name: Localized; level: Localized }[] = [
	{ name: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo", en: "Native" } },
	{
		name: { pt: "Inglês", en: "English" },
		level: { pt: "Proficiência profissional", en: "Professional working proficiency" },
	},
];
