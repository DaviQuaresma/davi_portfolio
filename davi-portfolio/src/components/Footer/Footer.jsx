/** @format */

import React from "react";
import { Github, Linkedin } from "../Icons/Icons";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
	const { language } = useLanguage();

	// Traduções
	const translations = {
		BRA: {
			createdWith: "Criado com",
			technologies: "React & TailwindCSS",
			version: "@ 2025 Davi Quaresma - DevPortfolio v1.0",
			rightsReserved: "Todos os direitos reservados",
		},
		ENG: {
			createdWith: "Created with",
			technologies: "React & TailwindCSS",
			version: "@ 2025 Davi Quaresma - DevPortfolio v1.0",
			rightsReserved: "All rights reserved",
		},
		ESP: {
			createdWith: "Creado con",
			technologies: "React & TailwindCSS",
			version: "@ 2025 Davi Quaresma - DevPortfolio v1.0",
			rightsReserved: "Todos los derechos reservados",
		},
		FRA: {
			createdWith: "Créé avec",
			technologies: "React & TailwindCSS",
			version: "@ 2025 Davi Quaresma - DevPortfolio v1.0",
			rightsReserved: "Tous les droits réservés",
		},
	};

	// Seleciona as traduções baseadas no idioma atual
	const { createdWith, technologies, version, rightsReserved } =
		translations[language];

	return (
		<div className='pb-10'>
			<footer>
				<div className='flex justify-center gap-4 items-center'>
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
				<div className='text-center pt-4'>
					<p className='text-2xl'>
						{createdWith} <strong>{technologies}</strong>
					</p>
					<p className='text-sm'>{version}</p>
					<p className='text-xs'>{rightsReserved}</p>
				</div>
			</footer>
		</div>
	);
}
