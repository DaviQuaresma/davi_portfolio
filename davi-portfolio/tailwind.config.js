/** @format */

export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				background_light: "#F2F2F2", // Fundo branco suave
				gray: "#94A3B8", // Cinza moderno
				black: "#1E1E1E", // Preto acinzentado
				text_graydark: "#3D3D3D", // Cinza escuro
				text_graylight: "#5C5C5C", // Cinza médio
				background_medium: "#EAEAEA", // Cinza claro
				background_strong: "#F8F8F8", // Branco suave
				green_light: "#22C55E", // Verde equilibrado
				green_dark: "#2F4F4F", // Verde musgo
				green_emerald: "#2E8B57", // Verde petróleo
				green_deep: "#1E3A3A", // Verde escuro profundo
				green_military: "#3B5323", // Verde militar
				green_forest: "#228B22", // Verde floresta
				yellow: "#FACC15", // Amarelo sofisticado
				blue_elegant: "#3A7CA5", // Azul sofisticado
				hoverGithub: "#6e5494", // Roxo do GitHub no hover
				hoverLinkedin: "#005582" // Azul escuro do LinkedIn no hover
			},
			fontFamily: {
				sans: ["Lora", "serif"], // Fonte primária
				elegant: ["Poppins", "sans-serif"], // Alternativa
			},
		},
	},
	plugins: [],
};
