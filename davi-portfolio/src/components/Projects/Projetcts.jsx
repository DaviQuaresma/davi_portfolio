import Project from "./Project/Project";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
	const { language } = useLanguage();

	const translations = {
		BRA: {
			title: "Projetos",
			description:
				"Explore os projetos que desenvolvi, onde busco sempre combinar inovação, funcionalidade e design intuitivo para oferecer soluções eficientes e impactantes. Cada projeto reflete minha dedicação em criar experiências únicas e de alta qualidade para os usuários.",
			projects: [
				{
					projectTitle: "React Email",
					techsList: "React | Node.js | Tailwind.css | JavaScript",
					projectResume:
						"Este projeto foi inspirado em redes de e-mail e foca na utilização do Tailwind CSS, aprendido na plataforma OneBitCode. O objetivo foi praticar React com essa biblioteca de estilização, que é popular e prática, superando alternativas como Sass e Bootstrap. Planejo refatorar projetos existentes usando Tailwind CSS.",
					imageProject: "/reactEmail.png",
				},
				{
					projectTitle: "Kanban RC/TS",
					techsList: "React | Typescript | Radix UI | Zod | APIrest",
					projectResume:
						"O React Kanban é uma aplicação de gerenciamento de tarefas no estilo Kanban, desenvolvida com foco em usabilidade e performance. Projetada para organizar projetos e facilitar o controle de tarefas, a aplicação suporta operações intuitivas e modernas.",
					imageProject: "/reactKanban.png",
				},
				{
					projectTitle: "Stock Manager",
					techsList: "React | React Router | Json Server | Css",
					projectResume:
						"O Stock Manager é uma aplicação de gerenciamento de estoque desenvolvida em React, projetada para facilitar o controle de itens, exibir métricas de inventário e permitir operações de CRUD completas.",
					imageProject: "/reactStock.png",
				},
				{
					projectTitle: "ERP Local",
					techsList: "NodeJS | ElectronJs | Bootstrap | Postgres",
					projectResume:
						"Este projeto foi desenvolvido para automatizar a geração de vendas em um sistema ERP legado baseado em PostgreSQL. A solução opera localmente e permite que o cliente crie vendas reais com critérios personalizados e emissão automática de NFC-e, através de uma interface moderna em Electron.js",
					imageProject: "/project4.png",
				},
				{
					projectTitle: "Dashboard Metabase",
					techsList: "NodeJS | PostgresSQL | ExpressJS | Metabase | Hetzner",
					projectResume:
						"Este projeto foi desenvolvido e implementado diretamente na startup GuruKiller, com o objetivo de automatizar a coleta e análise do faturamento e status das assinaturas. A solução integra a API oficial da plataforma GuruManager a um ecossistema completo envolvendo Node.js, PostgreSQL, API intermediadora e dashboards dinâmicos no Metabase.",
					imageProject: "/project5.png",
				},
				{
					projectTitle: "Gerador de Carroseis",
					techsList:
						"NodeJS | WebScraping | OpenIA | SMTP (Nodemailer) | Hetzner",
					projectResume:
						"Desenvolvi uma solução completa que gera conteúdos visuais prontos para redes sociais, com base em notícias reais extraídas de sites. A entrega foi um sistema 100% automatizado com scraping, geração de imagem e envio por e-mail.",
					imageProject: "/project6.png",
				},
			],
		},
		ENG: {
			title: "Projects",
			description:
				"Explore the projects I have developed, where I always seek to combine innovation, functionality, and intuitive design to offer efficient and impactful solutions. Each project reflects my dedication to creating unique and high-quality user experiences.",
			projects: [
				{
					projectTitle: "React Email",
					techsList: "React | Node.js | Tailwind.css | JavaScript",
					projectResume:
						"This project was inspired by email networks and focuses on using Tailwind CSS, learned on the OneBitCode platform. The goal was to practice React with this popular and practical styling library, surpassing alternatives like Sass and Bootstrap. I plan to refactor existing projects using Tailwind CSS.",
					imageProject: "/reactEmail.png",
				},
				{
					projectTitle: "Kanban RC/TS",
					techsList: "React | Typescript | Radix UI | Zod | APIrest",
					projectResume:
						"React Kanban is a task management application in Kanban style, developed with a focus on usability and performance. Designed to organize projects and facilitate task control, the application supports intuitive and modern operations.",
					imageProject: "/reactKanban.png",
				},
				{
					projectTitle: "Stock Manager",
					techsList: "React | React Router | Json Server | Css",
					projectResume:
						"Stock Manager is an inventory management application developed in React, designed to facilitate item control, display inventory metrics, and allow complete CRUD operations.",
					imageProject: "/reactStock.png",
				},
				{
					projectTitle: "ERP Local",
					techsList: "NodeJS | ElectronJs | Bootstrap | Postgres",
					projectResume:
						"This project was developed to automate sales generation in a legacy ERP system based on PostgreSQL. The solution runs locally and allows the client to create real sales with custom criteria and automatic NFC-e issuance, through a modern interface built in Electron.js.",
					imageProject: "/project4.png",
				},
				{
					projectTitle: "Metabase Dashboard",
					techsList: "NodeJS | PostgresSQL | ExpressJS | Metabase | Hetzner",
					projectResume:
						"This project was developed and implemented directly at the startup GuruKiller to automate revenue tracking and subscription status analysis. The solution integrates the official API of the GuruManager platform into a complete ecosystem involving Node.js, PostgreSQL, an intermediary API, and dynamic dashboards in Metabase.",
					imageProject: "/project5.png",
				},
				{
					projectTitle: "Carousel Generator",
					techsList:
						"NodeJS | WebScraping | OpenAI | SMTP (Nodemailer) | Hetzner",
					projectResume:
						"I developed a complete solution that generates ready-to-post visual content for social media, based on real news extracted from websites. The final delivery was a 100% automated system with scraping, image generation, and email sending.",
					imageProject: "/project6.png",
				},
			],
		},
		FRA: {
			title: "Projets",
			description:
				"Explorez les projets que j'ai développés, où je cherche toujours à combiner l'innovation, la fonctionnalité et un design intuitif pour offrir des solutions efficaces et percutantes. Chaque projet reflète mon engagement à créer des expériences uniques et de haute qualité pour les utilisateurs.",
			projects: [
				{
					projectTitle: "React Email",
					techsList: "React | Node.js | Tailwind.css | JavaScript",
					projectResume:
						"Ce projet a été inspiré par des réseaux de messagerie et se concentre sur l'utilisation de Tailwind CSS, appris sur la plateforme OneBitCode. L'objectif était de pratiquer React avec cette bibliothèque de stylisation populaire et pratique, surpassant des alternatives comme Sass et Bootstrap. Je prévois de refactoriser des projets existants en utilisant Tailwind CSS.",
					imageProject: "/reactEmail.png",
				},
				{
					projectTitle: "Kanban RC/TS",
					techsList: "React | Typescript | Radix UI | Zod | APIrest",
					projectResume:
						"React Kanban est une application de gestion de tâches de type Kanban, développée en mettant l'accent sur l'ergonomie et la performance. Conçue pour organiser des projets et faciliter le contrôle des tâches, l'application prend en charge des opérations intuitives et modernes.",
					imageProject: "/reactKanban.png",
				},
				{
					projectTitle: "Stock Manager",
					techsList: "React | React Router | Json Server | Css",
					projectResume:
						"Stock Manager est une application de gestion des stocks développée en React, conçue pour faciliter le contrôle des articles, afficher les métriques d'inventaire et permettre des opérations CRUD complètes.",
					imageProject: "/reactStock.png",
				},
				{
					projectTitle: "ERP Local",
					techsList: "NodeJS | ElectronJs | Bootstrap | Postgres",
					projectResume:
						"Ce projet a été développé pour automatiser la génération de ventes dans un système ERP hérité basé sur PostgreSQL. La solution fonctionne localement et permet au client de créer de véritables ventes avec des critères personnalisés et l’émission automatique de la NFC-e, via une interface moderne construite avec Electron.js.",
					imageProject: "/project4.png",
				},
				{
					projectTitle: "Tableau de bord Metabase",
					techsList: "NodeJS | PostgresSQL | ExpressJS | Metabase | Hetzner",
					projectResume:
						"Ce projet a été développé et mis en œuvre directement dans la startup GuruKiller pour automatiser le suivi du chiffre d'affaires et l’analyse des abonnements. La solution intègre l’API officielle de la plateforme GuruManager dans un écosystème complet avec Node.js, PostgreSQL, une API intermédiaire et des tableaux de bord dynamiques dans Metabase.",
					imageProject: "/project5.png",
				},
				{
					projectTitle: "Générateur de Carrousels",
					techsList:
						"NodeJS | WebScraping | OpenIA | SMTP (Nodemailer) | Hetzner",
					projectResume:
						"J’ai développé une solution complète qui génère du contenu visuel prêt à être publié sur les réseaux sociaux, basé sur des actualités réelles extraites de sites web. Le livrable final était un système 100% automatisé avec scraping, génération d’images et envoi par e-mail.",
					imageProject: "/project6.png",
				},
			],
		},
		ESP: {
			title: "Proyectos",
			description:
				"Explora los proyectos que he desarrollado, donde siempre busco combinar innovación, funcionalidad y un diseño intuitivo para ofrecer soluciones eficientes e impactantes. Cada proyecto refleja mi dedicación a crear experiencias únicas y de alta calidad para los usuarios.",
			projects: [
				{
					projectTitle: "React Email",
					techsList: "React | Node.js | Tailwind.css | JavaScript",
					projectResume:
						"Este proyecto fue inspirado en redes de correo electrónico y se enfoca en el uso de Tailwind CSS, aprendido en la plataforma OneBitCode. El objetivo era practicar React con esta biblioteca de estilización popular y práctica, superando alternativas como Sass y Bootstrap. Planeo refactorizar proyectos existentes usando Tailwind CSS.",
					imageProject: "/reactEmail.png",
				},
				{
					projectTitle: "Kanban RC/TS",
					techsList: "React | Typescript | Radix UI | Zod | APIrest",
					projectResume:
						"React Kanban es una aplicación de gestión de tareas estilo Kanban, desarrollada con enfoque en usabilidad y rendimiento. Diseñada para organizar proyectos y facilitar el control de tareas, la aplicación soporta operaciones intuitivas y modernas.",
					imageProject: "/reactKanban.png",
				},
				{
					projectTitle: "Stock Manager",
					techsList: "React | React Router | Json Server | Css",
					projectResume:
						"Stock Manager es una aplicación de gestión de inventarios desarrollada en React, diseñada para facilitar el control de artículos, mostrar métricas de inventario y permitir operaciones CRUD completas.",
					imageProject: "/reactStock.png",
				},
				{
					projectTitle: "ERP Local",
					techsList: "NodeJS | ElectronJs | Bootstrap | Postgres",
					projectResume:
						"Este proyecto fue desarrollado para automatizar la generación de ventas en un sistema ERP heredado basado en PostgreSQL. La solución funciona localmente y permite al cliente crear ventas reales con criterios personalizados y emisión automática de NFC-e, a través de una interfaz moderna construida en Electron.js.",
					imageProject: "/project4.png",
				},
				{
					projectTitle: "Dashboard Metabase",
					techsList: "NodeJS | PostgresSQL | ExpressJS | Metabase | Hetzner",
					projectResume:
						"Este proyecto fue desarrollado e implementado directamente en la startup GuruKiller para automatizar el seguimiento de ingresos y el estado de las suscripciones. La solución integra la API oficial de la plataforma GuruManager a un ecosistema completo que involucra Node.js, PostgreSQL, una API intermediaria y dashboards dinámicos en Metabase.",
					imageProject: "/project5.png",
				},
				{
					projectTitle: "Generador de Carruseles",
					techsList:
						"NodeJS | WebScraping | OpenIA | SMTP (Nodemailer) | Hetzner",
					projectResume:
						"Desarrollé una solución completa que genera contenido visual listo para publicar en redes sociales, basado en noticias reales extraídas de sitios web. La entrega fue un sistema 100% automatizado con scraping, generación de imágenes y envío por correo electrónico.",
					imageProject: "/project6.png",
				},
			],
		},
	};

	const { title, description, projects } = translations[language];

	return (
		<div className='text-center'>
			<div>
				<h1 className='text-4xl font-semibold text-gray-900 mb-6'>{title}</h1>
				<p className='text-lg max-w-4xl mx-auto text-gray-600'>{description}</p>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4'>
				{projects.map((project, index) => (
					<Project
						key={index}
						projectTitle={project.projectTitle}
						techsList={project.techsList}
						projectResume={project.projectResume}
						imageProject={project.imageProject}
					/>
				))}
			</div>
		</div>
	);
}
