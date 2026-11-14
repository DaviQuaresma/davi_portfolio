# davi-portfolio

Portfolio pessoal — [davi-portfolio.vercel.app](https://davi-portfolio.vercel.app)

Landing page estática e bilíngue (PT/EN) com um único endpoint serverless para o formulário de contato.

## Stack

| Camada     | Escolha                                   | Por quê                                                                      |
| ---------- | ----------------------------------------- | ---------------------------------------------------------------------------- |
| Framework  | **Astro 7**                               | HTML estático por padrão; JS só onde há interação (islands)                  |
| UI islands | React 19                                  | Diagramas (React Flow), formulário e command palette                         |
| Estilo     | Tailwind CSS 4                            | Tokens em `@theme`, sem config JS                                            |
| Conteúdo   | Content Collections + Zod                 | Cases em Markdown por idioma, validados em build                             |
| i18n       | Roteamento nativo do Astro                | `/pt/` e `/en/` com `hreflang`, canonical e sitemap                          |
| Contato    | Astro Actions + Resend                    | Validação server-side, e-mail nunca exposto no HTML                          |
| Qualidade  | TypeScript (strictest), Biome, astro check | Um comando: `npm run ci`                                                    |
| Deploy     | Vercel                                    | Estático + 1 função                                                         |

## Estrutura

```
src/
├── actions/          # contact action (server-only)
├── components/
│   ├── diagrams/     # React Flow: grafos de arquitetura por case
│   ├── contact/      # seção + form island
│   └── palette/      # command palette (⌘K)
├── content/cases/    # {pt,en}/<slug>.md
├── data/             # links e stack (fonte única)
├── i18n/             # dicionário tipado + helpers
├── layouts/          # SEO, OG, JSON-LD
└── pages/[lang]/     # rotas por idioma
```

## Desenvolvimento

```bash
nvm use            # Node 22.23+
npm install
cp .env.example .env   # opcional: só necessário para testar o envio de e-mail
npm run dev
```

| Script           | O que faz                              |
| ---------------- | -------------------------------------- |
| `npm run dev`    | Servidor local em `localhost:4321`     |
| `npm run ci`     | Lint + typecheck + build (igual ao CI) |
| `npm run format` | Formata e organiza imports (Biome)     |

## Adicionando um case

1. Crie `src/content/cases/pt/<slug>.md` e `src/content/cases/en/<slug>.md` (o schema está em `src/content.config.ts`).
2. Se precisar de um diagrama novo, adicione o id em `src/components/diagrams/types.ts` e o grafo em `graphs.ts`.

## Variáveis de ambiente (Vercel)

| Nome                 | Obrigatória | Descrição                                          |
| -------------------- | ----------- | -------------------------------------------------- |
| `RESEND_API_KEY`     | sim         | Chave da API do Resend                             |
| `CONTACT_TO_EMAIL`   | sim         | Caixa que recebe as mensagens                      |
| `CONTACT_FROM_EMAIL` | não         | Remetente verificado (padrão: sandbox do Resend)   |
