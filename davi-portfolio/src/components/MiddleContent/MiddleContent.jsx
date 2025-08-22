import ButtonWhite from "../Buttons/ButtonWhite/Button";
import ButtonDark from "../Buttons/ButtonDark/Button";
import { useLanguage } from "../../context/LanguageContext";

export default function MiddleContent() {
	const { language } = useLanguage();

	const translations = {
		BRA: {
			greeting: "Olá, Sou Davi Quaresma e sou um",
			role: "Programador Full Stack",
			description: `Com 4 anos de experiência em tecnologia e design, sou um
			<strong>Programador Full Stack</strong> focado em criar soluções inovadoras e
			eficientes. Estou sempre aberto a novas oportunidades, colaborações e projetos
			desafiadores que me permitam crescer e impactar o mundo com código de qualidade. 🚀`,
			contact: "Entre em Contato!",
			projects: "Projetos",
		},
		ENG: {
			greeting: "Hello, I'm Davi Quaresma and I'm a",
			role: "Full Stack Developer",
			description: `With 4 years of experience in technology and design, I am a
			<strong>Full Stack Developer</strong> focused on creating innovative and efficient solutions.
			I'm always open to new opportunities, collaborations, and challenging projects
			that allow me to grow and impact the world with quality code. 🚀`,
			contact: "Contact Me!",
			projects: "Projects",
		},
		ESP: {
			greeting: "¡Hola! Soy Davi Quaresma y soy un",
			role: "Desarrollador Full Stack",
			description: `Con 4 años de experiencia en tecnología y diseño, soy un
			<strong>Desarrollador Full Stack</strong> enfocado en crear soluciones innovadoras y
			eficientes. Siempre estoy abierto a nuevas oportunidades, colaboraciones y proyectos
			desafiantes que me permitan crecer e impactar el mundo con código de calidad. 🚀`,
			contact: "¡Contáctame!",
			projects: "Proyectos",
		},
		FRA: {
			greeting: "Bonjour, Je suis Davi Quaresma et",
			role: "je suis un Développeur Full Stack",
			description:
				`Avec 4 ans d'expérience en technologie et design, je suis un Développeur Full Stack 
				axé sur la création de solutions innovantes et efficaces. Je suis toujours ouvert à de 
				nouvelles opportunités, collaborations et projets stimulants qui me permettent de 
				grandir et d'avoir un impact sur le monde avec un code de qualité. 🚀`,
			contact: "Contactez-moi!",
			projects: "Projets",
		},
	};

	const { greeting, role, description, contact, projects } =
		translations[language];

	const formattedDescription = description.replace(/\n/g, "<br />");

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
				<div className='grid place-items-start gap-y-0'>
					<h1 className='text-4xl font-mono font-black hover:scale-105 transition-transform duration-300'>
						{greeting} <br /> {role}
					</h1>

					<p
						className='text-base font-elegant'
						dangerouslySetInnerHTML={{ __html: formattedDescription }}
					/>

					<div className='flex gap-4'>
						<ButtonDark buttonText={contact} />
						<ButtonWhite buttonText={projects} />
					</div>
				</div>
			</div>
		</>
	);
}
