/** @format */

import { useMemo } from "react";
import {
	JavaScript,
	Aws,
	Bootstrap,
	Docker,
	Figma,
	Java,
	MongoDB,
	Mysql,
	Nextjs,
	NodeJs,
	Postgres,
	PowerBI,
	PrismaOrm,
	Python,
	ReactIcon,
	Sass,
	TailwindCss,
	Typescript,
} from "./Icons/Icons";

// Função utilitária para dividir o array em grupos de 5 itens
const chunkArray = (array, size) => {
	return array.reduce((result, item, index) => {
		if (index % size === 0) result.push([]);
		result[result.length - 1].push(item);
		return result;
	}, []);
};

export default function Skillset() {
	const techs = [
		{ name: "JavaScript", icon: <JavaScript /> },
		{ name: "AWS", icon: <Aws /> },
		{ name: "Bootstrap", icon: <Bootstrap /> },
		{ name: "Docker", icon: <Docker /> },
		{ name: "Figma", icon: <Figma /> },
		{ name: "Java", icon: <Java /> },
		{ name: "MongoDB", icon: <MongoDB /> },
		{ name: "MySQL", icon: <Mysql /> },
		{ name: "Next.js", icon: <Nextjs /> },
		{ name: "Node.js", icon: <NodeJs /> },
		{ name: "PostgreSQL", icon: <Postgres /> },
		{ name: "Power BI", icon: <PowerBI /> },
		{ name: "Prisma ORM", icon: <PrismaOrm /> },
		{ name: "Python", icon: <Python /> },
		{ name: "React", icon: <ReactIcon /> },
		{ name: "Sass", icon: <Sass /> },
		{ name: "Tailwind CSS", icon: <TailwindCss /> },
		{ name: "TypeScript", icon: <Typescript /> },
	];

	// Embaralhar a lista de tecnologias e dividir em grupos de 5
	const shuffledTechs = useMemo(() => {
		const shuffled = [...techs].sort(() => Math.random() - 0.5);
		return chunkArray(shuffled, 6);
	}, [techs]);

	return (
		<div className="grid justify-center">
			<div>
				<h1>Skillset</h1>
				<p>
					Aqui estão algumas das tecnologias de ponta, linguagens de programação{" "}
					<br />e ferramentas de produtividade que utilizo. Estou totalmente
					preparado <br />
					para enfrentar desafios complexos de desenvolvimento de software,{" "}
					<br />
					criando soluções inovadoras que impulsionam os negócios. <br />
				</p>
			</div>

			<div className='flex flex-col items-center gap-4'>
				{shuffledTechs.map((row, rowIndex) => (
					<ul
						key={rowIndex}
						className='flex justify-center gap-16'>
						{row.map((tech, index) => (
							<li key={index}>{tech.icon}</li>
						))}
					</ul>
				))}
			</div>
		</div>
	);
}
