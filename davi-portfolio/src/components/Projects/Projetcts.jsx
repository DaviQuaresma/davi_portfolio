/** @format */

import React from "react";
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
