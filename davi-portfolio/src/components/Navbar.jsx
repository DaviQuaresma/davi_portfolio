/** @format */

import React from "react";
import { Github, Linkedin } from "./Icons/Icons";
import { useLanguage } from "../context/LanguageContext"; // Importando o contexto

export default function Navbar() {
	const { language, changeLanguage } = useLanguage(); // Obtendo idioma e função de troca

	// Definição das traduções
	const translations = {
		ENG: {
			intro: "Intro",
			tech: "Technology",
			projects: "Projects",
			contact: "Contact",
		},
		ESP: {
			intro: "Introducción",
			tech: "Tecnología",
			projects: "Proyectos",
			contact: "Contacto",
		},
		FRA: {
			intro: "Introduction",
			tech: "Technologie",
			projects: "Projets",
			contact: "Contact",
		},
		BRA: {
			intro: "Intro",
			tech: "Tecnologia",
			projects: "Projetos",
			contact: "Contato",
		},
	};

	// Pega os textos do idioma atual ou usa "ENG" como padrão
	const t = translations[language] || translations.ENG;

	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<div className='fixed top-0 left-0 w-full bg-white shadow-md z-50 flex justify-between px-10 py-4'>
			<div>
				<img
					className='w-12'
					src='/275836-1.webp'
					alt=''
				/>
			</div>
			<div className='pt-2.5'>
				<nav className='flex text-[1.1rem] gap-8'>
					<button
						onClick={() => scrollToSection("intro")}
						className='hover:font-bold'>
						{t.intro}
					</button>
					<button
						onClick={() => scrollToSection("tecnologia")}
						className='hover:font-bold'>
						{t.tech}
					</button>
					<button
						onClick={() => scrollToSection("projetos")}
						className='hover:font-bold'>
						{t.projects}
					</button>
					<button
						onClick={() => scrollToSection("contato")}
						className='hover:font-bold'>
						{t.contact}
					</button>
				</nav>
			</div>
			<div className='text-base flex gap-2 items-center'>
				<p className='font-medium flex gap-2'>
					<span
						onClick={() => changeLanguage("ENG")}
						className='cursor-pointer hover:text-blue_elegant'>
						<strong>ENG</strong>
					</span>
					|
					<span
						onClick={() => changeLanguage("ESP")}
						className='cursor-pointer hover:text-red'>
						<strong>ESP</strong>
					</span>
					|
					<span
						onClick={() => changeLanguage("FRA")}
						className='cursor-pointer hover:text-green_emerald'>
						<strong>FRA</strong>
					</span>
					|
					<span
						onClick={() => changeLanguage("BRA")}
						className='cursor-pointer hover:text-aws'>
						<strong>BRA</strong>
					</span>
				</p>
			</div>
			<div className='flex gap-4 items-center'>
				<a
					href='https://github.com/DaviQuaresma'
					target='_blank'>
					<Github />
				</a>
				<a
					href='https://www.linkedin.com/in/davi-quaresma/'
					target='_blank'>
					<Linkedin />
				</a>
			</div>
		</div>
	);
}
