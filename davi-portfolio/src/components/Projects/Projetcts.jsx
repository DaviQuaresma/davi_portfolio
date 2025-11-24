import { useState } from "react";
import Project from "./Project/Project";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
	const { language } = useLanguage();
	const [currentPage, setCurrentPage] = useState(1);
	const projectsPerPage = 6;

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
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "Kanban RC/TS",
					techsList: "React | Typescript | Radix UI | Zod | APIrest",
					projectResume:
						"O React Kanban é uma aplicação de gerenciamento de tarefas no estilo Kanban, desenvolvida com foco em usabilidade e performance. Projetada para organizar projetos e facilitar o controle de tarefas, a aplicação suporta operações intuitivas e modernas.",
					imageProject: "/reactKanban.png",
					githubLink: "https://github.com/DaviQuaresma/ReactKanban",
				},
				{
					projectTitle: "Stock Manager",
					techsList: "React | React Router | Json Server | Css",
					projectResume:
						"O Stock Manager é uma aplicação de gerenciamento de estoque desenvolvida em React, projetada para facilitar o controle de itens, exibir métricas de inventário e permitir operações de CRUD completas.",
					imageProject: "/reactStock.png",
					githubLink: "https://github.com/DaviQuaresma/StockManager",
				},
				{
					projectTitle: "ERP Local",
					techsList: "NodeJS | ElectronJs | Bootstrap | Postgres",
					projectResume:
						"Este projeto foi desenvolvido para automatizar a geração de vendas em um sistema ERP legado baseado em PostgreSQL. A solução opera localmente e permite que o cliente crie vendas reais com critérios personalizados e emissão automática de NFC-e, através de uma interface moderna em Electron.js",
					imageProject: "/project4.png",
					githubLink: "https://github.com/DaviQuaresma/Frente_LojaERP",
					githubLink2: "https://github.com/DaviQuaresma/API_RAC",
				},
				{
					projectTitle: "Dashboard Metabase",
					techsList: "NodeJS | PostgresSQL | ExpressJS | Metabase | Hetzner",
					projectResume:
						"Este projeto foi desenvolvido e implementado diretamente na startup GuruKiller, com o objetivo de automatizar a coleta e análise do faturamento e status das assinaturas. A solução integra a API oficial da plataforma GuruManager a um ecossistema completo envolvendo Node.js, PostgreSQL, API intermediadora e dashboards dinâmicos no Metabase.",
					imageProject: "/project5.png",
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "Gerador de Carroseis",
					techsList:
						"NodeJS | WebScraping | OpenIA | SMTP (Nodemailer) | Hetzner",
					projectResume:
						"Desenvolvi uma solução completa que gera conteúdos visuais prontos para redes sociais, com base em notícias reais extraídas de sites. A entrega foi um sistema 100% automatizado com scraping, geração de imagem e envio por e-mail.",
					imageProject: "/project6.png",
					githubLink: "https://github.com/DaviQuaresma/PostsAPI",
				},
				{
					projectTitle: "API Financeira com",
					techsList:
					"NestJS | Redis | BullMQ | Task Scheduling | Next.js",
					projectResume:
					"Desenvolvi uma API com NestJS para praticar fundamentos que eu ainda não dominava completamente, como filas de tarefas com BullMQ em Redis, Task Scheduling e Logger. A ideia foi consolidar esses conceitos em um projeto real.",
					imageProject: "/project7.png",
					githubLink: "https://github.com/DaviQuaresma/finance_api",
					githubLink2: "https://github.com/DaviQuaresma/finance_app",
				},
				{
					projectTitle: "Movies API + MovieApp com",
					techsList:
						"Java | Spring Boot | Angular 18 | JWT | MySQL/PostgreSQL | Docker",
					projectResume:
						"Desenvolvi uma aplicação para gerenciamento de filmes, composta por uma API em Spring Boot e um frontend em Angular 18 uma dupla clássica muito usada em grandes sistemas corporativos. O objetivo foi praticar autenticação segura, integração com APIs externas (OMDB/TMDB), arquitetura modular e uma UI moderna com estatísticas avançadas.",
					imageProject: "/project8.png",
					githubLink: "https://github.com/DaviQuaresma/movieSpring-api",
					githubLink2: "https://github.com/DaviQuaresma/movieSpring-app",
				},
				{
					projectTitle: "Site da Wernetech",
					techsList:
						"Node.js + Express | PostgreSQL | JWT | Nodemailer | Next.js 15 | Docker | NGINX | VPS",
					projectResume:
						"Desenvolvi uma aplicação web sob medida para a empresa Wernetech. Utilizando tecnologias modernas como Next e Node eu fui capaz de criar um site eficiente e funcional, atendendo às necessidades específicas do cliente.",
					imageProject: "/project9.png",
					githubLink: "https://github.com/DaviQuaresma/site-institucional-modelo",
				},
				{
					projectTitle: "Trakto • Video Processor",
					techsList:
						"NestJS | React | Google Cloud Storage | ffmpeg | Docker | Docker",
					projectResume:
						"Aplicação full-stack para upload de vídeos, armazenamento no Google Cloud Storage (GCS), transcoding para low-res e listagem/ download via UI.",
					imageProject: "/project10.png",
					githubLink: "https://github.com/DaviQuaresma/desafio_tecnico_trakto_davi_quaresma",
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
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "Kanban RC/TS",
					techsList: "React | Typescript | Radix UI | Zod | APIrest",
					projectResume:
						"React Kanban is a task management application in Kanban style, developed with a focus on usability and performance. Designed to organize projects and facilitate task control, the application supports intuitive and modern operations.",
					imageProject: "/reactKanban.png",
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "Stock Manager",
					techsList: "React | React Router | Json Server | Css",
					projectResume:
						"Stock Manager is an inventory management application developed in React, designed to facilitate item control, display inventory metrics, and allow complete CRUD operations.",
					imageProject: "/reactStock.png",
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "ERP Local",
					techsList: "NodeJS | ElectronJs | Bootstrap | Postgres",
					projectResume:
						"This project was developed to automate sales generation in a legacy ERP system based on PostgreSQL. The solution runs locally and allows the client to create real sales with custom criteria and automatic NFC-e issuance, through a modern interface built in Electron.js.",
					imageProject: "/project4.png",
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "Metabase Dashboard",
					techsList: "NodeJS | PostgresSQL | ExpressJS | Metabase | Hetzner",
					projectResume:
						"This project was developed and implemented directly at the startup GuruKiller to automate revenue tracking and subscription status analysis. The solution integrates the official API of the GuruManager platform into a complete ecosystem involving Node.js, PostgreSQL, an intermediary API, and dynamic dashboards in Metabase.",
					imageProject: "/project5.png",
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "Carousel Generator",
					techsList:
						"NodeJS | WebScraping | OpenAI | SMTP (Nodemailer) | Hetzner",
					projectResume:
						"I developed a complete solution that generates ready-to-post visual content for social media, based on real news extracted from websites. The final delivery was a 100% automated system with scraping, image generation, and email sending.",
					imageProject: "/project6.png",
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "Financial API with",
					techsList:
						"NestJS | Redis | BullMQ | Task Scheduling | Next.js",
					projectResume:
						"I developed an API with NestJS to practice fundamentals I hadn't fully mastered yet, such as task queues with BullMQ in Redis, Task Scheduling, and Logger. The idea was to consolidate these concepts in a real project.",
					imageProject: "/project7.png",
					githubLink: "https://github.com/DaviQuaresma/finance_api",
					githubLink2: "https://github.com/DaviQuaresma/finance_app",
				},
				{
					projectTitle: "Movies API + MovieApp with",
					techsList:
						"Java | Spring Boot | Angular 18 | JWT | MySQL/PostgreSQL | Docker",
					projectResume:
						"I developed an application for movie management, composed of an API in Spring Boot and a frontend in Angular 18 — a classic duo widely used in large corporate systems. The goal was to practice secure authentication, integration with external APIs (OMDB/TMDB), modular architecture, and a modern UI with advanced statistics.",
					imageProject: "/project8.png",
					githubLink: "https://github.com/DaviQuaresma/movieSpring-api",
					githubLink2: "https://github.com/DaviQuaresma/movieSpring-app",
				},
				{
					projectTitle: "Wernetech Website",
					techsList:
						"Node.js + Express | PostgreSQL | JWT | Nodemailer | Next.js 15 | Docker | NGINX | VPS",
					projectResume:
						"I developed a custom web application for Wernetech company. Using modern technologies like Next and Node, I was able to create an efficient and functional website, meeting the client's specific needs.",
					imageProject: "/project9.png",
					githubLink: "https://github.com/DaviQuaresma/site-institucional-modelo",
				},
				{
					projectTitle: "Trakto • Video Processor",
					techsList:
						"NestJS | React | Google Cloud Storage | ffmpeg | Docker",
					projectResume:
						"Full-stack application for video upload, storage on Google Cloud Storage (GCS), transcoding to low-res and listing/download via UI.",
					imageProject: "/project10.png",
					githubLink: "https://github.com/DaviQuaresma/desafio_tecnico_trakto_davi_quaresma",
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
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "Kanban RC/TS",
					techsList: "React | Typescript | Radix UI | Zod | APIrest",
					projectResume:
						"React Kanban est une application de gestion de tâches de type Kanban, développée en mettant l'accent sur l'ergonomie et la performance. Conçue pour organiser des projets et faciliter le contrôle des tâches, l'application prend en charge des opérations intuitives et modernes.",
					imageProject: "/reactKanban.png",
					githubLink: "https://github.com/DaviQuaresma",
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
						"J'ai développé une solution complète qui génère du contenu visuel prêt à être publié sur les réseaux sociaux, basé sur des actualités réelles extraites de sites web. Le livrable final était un système 100% automatisé avec scraping, génération d'images et envoi par e-mail.",
					imageProject: "/project6.png",
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "API Financière avec",
					techsList:
						"NestJS | Redis | BullMQ | Task Scheduling | Next.js",
					projectResume:
						"J'ai développé une API avec NestJS pour pratiquer des fondamentaux que je ne maîtrisais pas encore complètement, tels que les files d'attente de tâches avec BullMQ dans Redis, Task Scheduling et Logger. L'idée était de consolider ces concepts dans un projet réel.",
					imageProject: "/project7.png",
					githubLink: "https://github.com/DaviQuaresma/finance_api",
					githubLink2: "https://github.com/DaviQuaresma/finance_app",
				},
				{
					projectTitle: "API Films + MovieApp avec",
					techsList:
						"Java | Spring Boot | Angular 18 | JWT | MySQL/PostgreSQL | Docker",
					projectResume:
						"J'ai développé une application de gestion de films, composée d'une API en Spring Boot et d'un frontend en Angular 18 — un duo classique largement utilisé dans les grands systèmes d'entreprise. L'objectif était de pratiquer l'authentification sécurisée, l'intégration avec des API externes (OMDB/TMDB), l'architecture modulaire et une UI moderne avec des statistiques avancées.",
					imageProject: "/project8.png",
					githubLink: "https://github.com/DaviQuaresma/movieSpring-api",
					githubLink2: "https://github.com/DaviQuaresma/movieSpring-app",
				},
				{
					projectTitle: "Site Web Wernetech",
					techsList:
						"Node.js + Express | PostgreSQL | JWT | Nodemailer | Next.js 15 | Docker | NGINX | VPS",
					projectResume:
						"J'ai développé une application web sur mesure pour l'entreprise Wernetech. En utilisant des technologies modernes comme Next et Node, j'ai pu créer un site efficace et fonctionnel, répondant aux besoins spécifiques du client.",
					imageProject: "/project9.png",
					githubLink: "https://github.com/DaviQuaresma/site-institucional-modelo",
				},
				{
					projectTitle: "Trakto • Processeur Vidéo",
					techsList:
						"NestJS | React | Google Cloud Storage | ffmpeg | Docker",
					projectResume:
						"Application full-stack pour le téléchargement de vidéos, le stockage sur Google Cloud Storage (GCS), le transcodage en basse résolution et la liste/téléchargement via l'interface utilisateur.",
					imageProject: "/project10.png",
					githubLink: "https://github.com/DaviQuaresma/desafio_tecnico_trakto_davi_quaresma",
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
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "Kanban RC/TS",
					techsList: "React | Typescript | Radix UI | Zod | APIrest",
					projectResume:
						"React Kanban es una aplicación de gestión de tareas estilo Kanban, desarrollada con enfoque en usabilidad y rendimiento. Diseñada para organizar proyectos y facilitar el control de tareas, la aplicación soporta operaciones intuitivas y modernas.",
					imageProject: "/reactKanban.png",
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "Stock Manager",
					techsList: "React | React Router | Json Server | Css",
					projectResume:
						"Stock Manager es una aplicación de gestión de inventarios desarrollada en React, diseñada para facilitar el control de artículos, mostrar métricas de inventario y permitir operaciones CRUD completas.",
					imageProject: "/reactStock.png",
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "ERP Local",
					techsList: "NodeJS | ElectronJs | Bootstrap | Postgres",
					projectResume:
						"Este proyecto fue desarrollado para automatizar la generación de ventas en un sistema ERP heredado basado en PostgreSQL. La solución funciona localmente y permite al cliente crear ventas reales con criterios personalizados y emisión automática de NFC-e, a través de una interfaz moderna construida en Electron.js.",
					imageProject: "/project4.png",
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "Dashboard Metabase",
					techsList: "NodeJS | PostgresSQL | ExpressJS | Metabase | Hetzner",
					projectResume:
						"Este proyecto fue desarrollado e implementado directamente en la startup GuruKiller para automatizar el seguimiento de ingresos y el estado de las suscripciones. La solución integra la API oficial de la plataforma GuruManager a un ecosistema completo que involucra Node.js, PostgreSQL, una API intermediaria y dashboards dinámicos en Metabase.",
					imageProject: "/project5.png",
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "Generador de Carruseles",
					techsList:
						"NodeJS | WebScraping | OpenIA | SMTP (Nodemailer) | Hetzner",
					projectResume:
						"Desarrollé una solución completa que genera contenido visual listo para publicar en redes sociales, basado en noticias reales extraídas de sitios web. La entrega fue un sistema 100% automatizado con scraping, generación de imágenes y envío por correo electrónico.",
					imageProject: "/project6.png",
					githubLink: "https://github.com/DaviQuaresma",
				},
				{
					projectTitle: "API Financiera con",
					techsList:
						"NestJS | Redis | BullMQ | Task Scheduling | Next.js",
					projectResume:
						"Desarrollé una API con NestJS para practicar fundamentos que aún no dominaba completamente, como colas de tareas con BullMQ en Redis, Task Scheduling y Logger. La idea fue consolidar estos conceptos en un proyecto real.",
					imageProject: "/project7.png",
					githubLink: "https://github.com/DaviQuaresma/finance_api",
					githubLink2: "https://github.com/DaviQuaresma/finance_app",
				},
				{
					projectTitle: "API Películas + MovieApp con",
					techsList:
						"Java | Spring Boot | Angular 18 | JWT | MySQL/PostgreSQL | Docker",
					projectResume:
						"Desarrollé una aplicación para gestión de películas, compuesta por una API en Spring Boot y un frontend en Angular 18 — un dúo clásico muy usado en grandes sistemas corporativos. El objetivo fue practicar autenticación segura, integración con APIs externas (OMDB/TMDB), arquitectura modular y una UI moderna con estadísticas avanzadas.",
					imageProject: "/project8.png",
					githubLink: "https://github.com/DaviQuaresma/movieSpring-api",
					githubLink2: "https://github.com/DaviQuaresma/movieSpring-app",
				},
				{
					projectTitle: "Sitio Web de Wernetech",
					techsList:
						"Node.js + Express | PostgreSQL | JWT | Nodemailer | Next.js 15 | Docker | NGINX | VPS",
					projectResume:
						"Desarrollé una aplicación web a medida para la empresa Wernetech. Utilizando tecnologías modernas como Next y Node, fui capaz de crear un sitio eficiente y funcional, atendiendo las necesidades específicas del cliente.",
					imageProject: "/project9.png",
					githubLink: "https://github.com/DaviQuaresma/site-institucional-modelo",
				},
				{
					projectTitle: "Trakto • Procesador de Video",
					techsList:
						"NestJS | React | Google Cloud Storage | ffmpeg | Docker",
					projectResume:
						"Aplicación full-stack para carga de videos, almacenamiento en Google Cloud Storage (GCS), transcodificación a baja resolución y listado/descarga a través de la interfaz de usuario.",
					imageProject: "/project10.png",
					githubLink: "https://github.com/DaviQuaresma/desafio_tecnico_trakto_davi_quaresma",
				},
			],
		},
	};

	const { title, description, projects } = translations[language];

	// Cálculos de paginação para carrossel
	const totalPages = Math.ceil(projects.length / projectsPerPage);
	const indexOfLastProject = currentPage * projectsPerPage;
	const indexOfFirstProject = indexOfLastProject - projectsPerPage;
	const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	return (
		<div className='text-center py-12'>
			<div className='mb-12'>
				<h1 className='text-5xl font-bold text-gray-900 mb-4'>
					{title}
				</h1>
				<p className='text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed px-4'>
					{description}
				</p>
			</div>

			{/* Carrossel de Projetos */}
			<div className='relative max-w-7xl mx-auto px-4'>
				{/* Seta Esquerda */}
				<button
					onClick={handlePrevPage}
					disabled={currentPage === 1}
					className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-4 transition-all duration-300 ${
						currentPage === 1
							? 'text-gray-300 cursor-not-allowed'
							: 'text-gray-600 hover:text-blue_elegant hover:scale-125'
					}`}
					aria-label='Projetos anteriores'
				>
					<svg
						className='w-8 h-8'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2.5}
							d='M15 19l-7-7 7-7'
						/>
					</svg>
				</button>

				{/* Grid de Projetos */}
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-12 mb-8 transition-all duration-500'>
					{currentProjects.map((project, index) => (
						<Project
							key={index}
							projectTitle={project.projectTitle}
							techsList={project.techsList}
							projectResume={project.projectResume}
							imageProject={project.imageProject}
							githubLink={project.githubLink}
							githubLink2={project.githubLink2}
						/>
					))}
				</div>

				{/* Seta Direita */}
				<button
					onClick={handleNextPage}
					disabled={currentPage === totalPages}
					className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-4 transition-all duration-300 ${
						currentPage === totalPages
							? 'text-gray-300 cursor-not-allowed'
							: 'text-gray-600 hover:text-blue_elegant hover:scale-125'
					}`}
					aria-label='Próximos projetos'
				>
					<svg
						className='w-8 h-8'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2.5}
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</button>
			</div>

			{/* Indicadores de Página (Dots) */}
			{totalPages > 1 && (
				<div className='flex items-center justify-center gap-2 mt-6'>
					{[...Array(totalPages)].map((_, index) => {
						const pageNumber = index + 1;
						return (
							<button
								key={pageNumber}
								onClick={() => handlePageChange(pageNumber)}
								className={`transition-all duration-300 rounded-full ${
									currentPage === pageNumber
										? 'w-8 h-2 bg-gray-800'
										: 'w-2 h-2 bg-gray-300 hover:bg-gray-500'
								}`}
								aria-label={`Ir para página ${pageNumber}`}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
}
