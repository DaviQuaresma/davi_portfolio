import { Github, Linkedin, Whatsapp } from "../Icons/Icons";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
	const { language } = useLanguage();

	const translations = {
		BRA: {
			createdWith: "Criado com",
			technologies: "React & TailwindCSS",
			version: "@ 2025 Davi Quaresma - DevPortfolio v1.4",
			rightsReserved: "Todos os direitos reservados",
		},
		ENG: {
			createdWith: "Created with",
			technologies: "React & TailwindCSS",
			version: "@ 2025 Davi Quaresma - DevPortfolio v1.4",
			rightsReserved: "All rights reserved",
		},
		ESP: {
			createdWith: "Creado con",
			technologies: "React & TailwindCSS",
			version: "@ 2025 Davi Quaresma - DevPortfolio v1.4",
			rightsReserved: "Todos los derechos reservados",
		},
		FRA: {
			createdWith: "Créé avec",
			technologies: "React & TailwindCSS",
			version: "@ 2025 Davi Quaresma - DevPortfolio v1.4",
			rightsReserved: "Tous les droits réservés",
		},
	};

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
					<a
						href='https://wa.me/5531992850463?text=Olá%20Davi,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!'
						target='_blank'>
						<Whatsapp />
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
