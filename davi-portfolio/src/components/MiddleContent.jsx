/** @format */

import React from "react";
import ButtonWhite from "./ButtonWhite/Button";
import ButtonDark from "./ButtonDark/Button";

export default function MiddleContent() {
	return (
		<>
			<div className='flex justify-between gap-20'>
				<div className='w-80 h-80 overflow-hidden rounded-full'>
					<img
						src='/davi.jpeg'
						alt='Davi Quaresma'
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='grid place-items-center gap-y-0'>
					<h1 className='text-4xl font-mono font-black hover:scale-105 transition-transform duration-300'>
						Olá, Sou Davi Quaresma e sou um <br /> desenvolvedor Full Stack
					</h1>

					<p className='text-base font-elegant'>
						Com 4 anos de experiência em tecnologia e design, sou um <br />
						desenvolvedor Full Stack focado em criar soluções inovadoras e{" "}
						<br />
						eficientes. Estou sempre aberto a novas oportunidades, colaborações{" "}
						<br />e projetos desafiadores que me permitam crescer e impactar o
						mundo <br />
						com código de qualidade. 🚀
					</p>
					<div className='flex gap-4'>
						<ButtonDark buttonText={"Entre em Contato!"} />
						<ButtonWhite buttonText={"Projetos"} />
					</div>
				</div>
			</div>
		</>
	);
}
