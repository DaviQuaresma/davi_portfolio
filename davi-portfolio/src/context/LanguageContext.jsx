/** @format */

// src/context/LanguageContext.js
import React, { createContext, useState, useContext } from "react";

// Criando o contexto
const LanguageContext = createContext();

// Provider para envolver a aplicação
export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState("BRA"); // Idioma padrão

	const changeLanguage = (lang) => {
		setLanguage(lang);
	};

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

// Hook para acessar o contexto
export const useLanguage = () => {
	return useContext(LanguageContext);
};
