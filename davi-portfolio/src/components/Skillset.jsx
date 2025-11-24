import { useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";
import {
	JavaScript,
	Aws,
	Bootstrap,
	Docker,
	Java,
	MongoDB,
	Mysql,
	Nextjs,
	NodeJs,
	Postgres,
	PrismaOrm,
	Python,
	ReactIcon,
	Sass,
	TailwindCss,
	Typescript,
	Sequelize,
	Php,
	Nestjs,
	Redis,
	Codeigniter,
	Laravel,
	Angular,
} from "./Icons/Icons";

const translations = {
	ENG: {
		skillsetTitle: "Skillset",
		skillsetDescription:"Here are some of the cutting-edge technologies, programming languages, and productivity tools I use. ",
		skillsetDescription2: "I'm fully prepared to tackle complex software development challenges, creating innovative solutions that drive business growth."
		},

	ESP: {
		skillsetTitle: "Habilidades",
		skillsetDescription:
			"Aquí están algunas de las tecnologías más avanzadas, lenguajes de programación y herramientas de productividad que utilizo. ",
		skillsetDescription2: "Estoy totalmente preparado para afrontar desafíos complejos en el desarrollo de software, creando soluciones innovadoras que impulsan los negocios.",
		},

	FRA: {
		skillsetTitle: "Compétences",
		skillsetDescription: "Voici quelques-unes des technologies de pointe, langages de programmation et outils de productivité que j'utilise. ",
		skillsetDescription2: "Je suis entièrement préparé à relever des défis complexes en développement logiciel, en créant des solutions innovantes qui stimulent la croissance des entreprises.",
	},

	BRA: {
		skillsetTitle: "Habilidades",
		skillsetDescription: "Aqui estão algumas das tecnologias de ponta, linguagens de programação e ferramentas de produtividade que utilizo. ",
		skillsetDescription2: "Estou totalmente preparado para enfrentar desafios complexos de desenvolvimento de software, criando soluções inovadoras que impulsionam os negócios.",
	},
};

const chunkArray = (array, size) => {
	return array.reduce((result, item, index) => {
		if (index % size === 0) result.push([]);
		result[result.length - 1].push(item);
		return result;
	}, []);
};

export default function Skillset() {
	const { language } = useLanguage();

	const shuffledTechs = useMemo(() => {
		const techs = [
			{ name: "JavaScript", icon: <JavaScript /> },
			{ name: "AWS", icon: <Aws /> },
			{ name: "Bootstrap", icon: <Bootstrap /> },
			{ name: "Docker", icon: <Docker /> },
			{ name: "Java", icon: <Java /> },
			{ name: "MongoDB", icon: <MongoDB /> },
			{ name: "MySQL", icon: <Mysql /> },
			{ name: "Next.js", icon: <Nextjs /> },
			{ name: "Node.js", icon: <NodeJs /> },
			{ name: "PostgreSQL", icon: <Postgres /> },
			{ name: "Prisma ORM", icon: <PrismaOrm /> },
			{ name: "Python", icon: <Python /> },
			{ name: "React", icon: <ReactIcon /> },
			{ name: "Sass", icon: <Sass /> },
			{ name: "Tailwind CSS", icon: <TailwindCss /> },
			{ name: "TypeScript", icon: <Typescript /> },
			{ name: "Sequelize ORM", icon: <Sequelize /> },
			{ name: "PHP", icon: <Php /> },
			{ name: "NestJS", icon: <Nestjs /> },
			{ name: "Redis", icon: <Redis /> },
			{ name: "CodeIgniter", icon: <Codeigniter /> },
			{ name: "Laravel", icon: <Laravel /> },
			{ name: "Angular", icon: <Angular /> },
		];
		const shuffled = [...techs].sort(() => Math.random() - 0.5);
		return chunkArray(shuffled, 5);
	}, []);

	return (
		<div className='grid justify-center pt-24'>
			<div className='text-center'>
				<h1 className='text-4xl font-bold'>
					{translations[language]?.skillsetTitle || "Skillset"}
				</h1>
				<p>
					{translations[language]?.skillsetDescription ||
						"Aqui estão algumas das tecnologias de ponta, linguagens de programação e ferramentas de produtividade que utilizo."}
				</p>
				<p>
					{translations[language]?.skillsetDescription2 ||
						"Aqui estão algumas das tecnologias de ponta, linguagens de programação e ferramentas de produtividade que utilizo."}
				</p>
			</div>

			<div className='flex flex-col items-center gap-4 pt-14'>
				{shuffledTechs.map((row, rowIndex) => (
					<ul
						key={rowIndex}
						className='flex justify-center gap-16'>
						{row.map((tech, index) => (
							<li key={index} className="relative group">
							{tech.icon}
							<span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
								{tech.name}
							</span>
						</li>
						))}
					</ul>
				))}
			</div>
		</div>
	);
}
