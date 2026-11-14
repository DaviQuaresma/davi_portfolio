export const languages = {
	pt: { label: "Português", short: "PT", htmlLang: "pt-BR", ogLocale: "pt_BR" },
	en: { label: "English", short: "EN", htmlLang: "en", ogLocale: "en_US" },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "pt";

const pt = {
	"meta.title": "Davi Quaresma — Backend & Full-stack Engineer",
	"meta.description":
		"Engenheiro backend e full-stack. Sistemas financeiros, automação de dados, APIs e entrega contínua em produção.",

	"nav.cases": "Cases",
	"nav.stack": "Stack",
	"nav.contact": "Contato",
	"nav.palette": "Buscar",

	"hero.role": "Backend & Full-stack Engineer",
	"hero.headline": "Construo sistemas que precisam funcionar todo dia.",
	"hero.lead":
		"ERPs financeiros, automação de dados e plataformas internas — do modelo de domínio ao pipeline de deploy.",
	"hero.ctaCases": "Ver cases",
	"hero.ctaContact": "Falar comigo",
	"hero.terminalHint": "resposta da API pessoal",

	"cases.eyebrow": "Cases selecionados",
	"cases.title": "Problemas reais, em produção.",
	"cases.problem": "Contexto",
	"cases.architecture": "Arquitetura",
	"cases.highlights": "O que foi entregue",
	"cases.diagramHint": "Arraste os nós · fluxo simplificado",

	"stack.eyebrow": "Stack",
	"stack.title": "Ferramentas que uso para entregar.",
	"stack.lead":
		"Menos lista, mais profundidade. Estas são as tecnologias que sustentam os cases acima.",
	"stack.backend": "Backend",
	"stack.data": "Dados",
	"stack.infra": "Infra & entrega",
	"stack.frontend": "Frontend",

	"contact.eyebrow": "Contato",
	"contact.title": "Vamos conversar.",
	"contact.lead":
		"Aberto a vagas backend e full-stack. Mande uma mensagem ou chame direto no WhatsApp.",
	"contact.name": "Nome",
	"contact.email": "E-mail",
	"contact.company": "Empresa (opcional)",
	"contact.message": "Mensagem",
	"contact.submit": "Enviar mensagem",
	"contact.sending": "Enviando…",
	"contact.success": "Mensagem enviada. Respondo em breve!",
	"contact.error": "Não foi possível enviar agora. Tente o WhatsApp.",
	"contact.invalid": "Confira os campos destacados.",
	"contact.whatsapp": "Chamar no WhatsApp",
	"contact.whatsappText": "Olá Davi, vi seu portfólio e gostaria de conversar!",

	"palette.placeholder": "Digite um comando ou busque…",
	"palette.empty": "Nada encontrado.",
	"palette.navigate": "Navegar",
	"palette.links": "Links",
	"palette.language": "Idioma",
	"palette.switchLang": "Switch to English",

	"footer.built": "Feito com Astro, React islands e TypeScript.",
	"footer.source": "Código-fonte",
} as const;

export type UIKey = keyof typeof pt;

const en: Record<UIKey, string> = {
	"meta.title": "Davi Quaresma — Backend & Full-stack Engineer",
	"meta.description":
		"Backend and full-stack engineer. Financial systems, data automation, APIs and continuous delivery in production.",

	"nav.cases": "Cases",
	"nav.stack": "Stack",
	"nav.contact": "Contact",
	"nav.palette": "Search",

	"hero.role": "Backend & Full-stack Engineer",
	"hero.headline": "I build systems that have to work every single day.",
	"hero.lead":
		"Financial ERPs, data automation and internal platforms — from the domain model to the deploy pipeline.",
	"hero.ctaCases": "See cases",
	"hero.ctaContact": "Get in touch",
	"hero.terminalHint": "personal API response",

	"cases.eyebrow": "Selected cases",
	"cases.title": "Real problems, in production.",
	"cases.problem": "Context",
	"cases.architecture": "Architecture",
	"cases.highlights": "What was delivered",
	"cases.diagramHint": "Drag the nodes · simplified flow",

	"stack.eyebrow": "Stack",
	"stack.title": "Tools I ship with.",
	"stack.lead": "Less list, more depth. These are the technologies behind the cases above.",
	"stack.backend": "Backend",
	"stack.data": "Data",
	"stack.infra": "Infra & delivery",
	"stack.frontend": "Frontend",

	"contact.eyebrow": "Contact",
	"contact.title": "Let's talk.",
	"contact.lead":
		"Open to backend and full-stack roles. Send a message or reach me directly on WhatsApp.",
	"contact.name": "Name",
	"contact.email": "Email",
	"contact.company": "Company (optional)",
	"contact.message": "Message",
	"contact.submit": "Send message",
	"contact.sending": "Sending…",
	"contact.success": "Message sent. I'll get back to you soon!",
	"contact.error": "Couldn't send right now. Try WhatsApp instead.",
	"contact.invalid": "Please check the highlighted fields.",
	"contact.whatsapp": "Message on WhatsApp",
	"contact.whatsappText": "Hi Davi, I saw your portfolio and would like to talk!",

	"palette.placeholder": "Type a command or search…",
	"palette.empty": "No results.",
	"palette.navigate": "Navigate",
	"palette.links": "Links",
	"palette.language": "Language",
	"palette.switchLang": "Mudar para Português",

	"footer.built": "Built with Astro, React islands and TypeScript.",
	"footer.source": "Source code",
};

export const ui: Record<Lang, Record<UIKey, string>> = { pt, en };
