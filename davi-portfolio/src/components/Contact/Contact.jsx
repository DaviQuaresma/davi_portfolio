/** @format */

import React from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
	const { language } = useLanguage();

	// Traduções
	const translations = {
		BRA: {
			title: "Contato",
			message:
				"Deixe-me saber se você está interessado em meus serviços, colaboração ou apenas conversar sobre ideias. Conversamos em breve.",
			name: "Seu nome",
			email: "Seu email",
			phone: "Seu número de contato",
			organization: "Sua organização",
			textarea: "Sua mensagem",
			button: "Enviar Mensagem",
		},
		ENG: {
			title: "Contact",
			message:
				"Let me know if you're interested in my services, collaboration, or just want to chat about ideas. Talk soon.",
			name: "Your name",
			email: "Your email",
			phone: "Your contact number",
			organization: "Your organization",
			textarea: "Your message",
			button: "Send Message",
		},
		ESP: {
			title: "Contacto",
			message:
				"Déjame saber si estás interesado en mis servicios, colaboración o simplemente charlar sobre ideas. Hablamos pronto.",
			name: "Tu nombre",
			email: "Tu correo electrónico",
			phone: "Tu número de contacto",
			organization: "Tu organización",
			textarea: "Tu mensaje",
			button: "Enviar Mensaje",
		},
		FRA: {
			title: "Contact",
			message:
				"Faites-moi savoir si vous êtes intéressé par mes services, une collaboration ou si vous voulez simplement discuter d'idées. À bientôt.",
			name: "Votre nom",
			email: "Votre email",
			phone: "Votre numéro de contact",
			organization: "Votre organisation",
			textarea: "Votre message",
			button: "Envoyer le message",
		},
	};

	const { title, message, name, email, phone, organization, textarea, button } =
		translations[language];

	return (
		<div className='flex flex-col items-center justify-center min-h-screen px-4'>
			<div className='w-full max-w-2xl'>
				<h1 className='text-4xl font-semibold text-center mb-4'>{title}</h1>
				<p className='text-center text-gray-600 mb-6'>{message}</p>

				<form
					action='https://formsubmit.co/quaresma.davi@gmail.com'
					method='POST'
					className='space-y-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<input
							type='text'
							name='name'
							placeholder={name}
							required
							className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300'
						/>
						<input
							type='email'
							name='email'
							placeholder={email}
							required
							className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300'
						/>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<input
							type='tel'
							name='phone'
							placeholder={phone}
							required
							className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300'
						/>
						<input
							type='text'
							name='organization'
							placeholder={organization}
							className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300'
						/>
					</div>

					<textarea
						name='message'
						placeholder={textarea}
						rows='5'
						className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300'
						required></textarea>

					<button
						type='submit'
						className='w-full bg-black text-white p-3 rounded-lg hover:opacity-80 transition'>
						{button}
					</button>
				</form>
			</div>
		</div>
	);
}
