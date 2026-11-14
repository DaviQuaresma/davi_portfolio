import type { UIKey } from "@/i18n/ui";

export interface StackGroup {
	id: string;
	label: UIKey;
	/** Names must match the `stack` entries in case frontmatter to be linked to cases. */
	items: string[];
}

export const stack: StackGroup[] = [
	{
		id: "backend",
		label: "stack.backend",
		items: ["PHP", "Laravel", "Node.js", "NestJS", "Python"],
	},
	{ id: "data", label: "stack.data", items: ["MySQL", "PostgreSQL", "Redis", "Pandas"] },
	{ id: "infra", label: "stack.infra", items: ["Docker", "GitHub Actions", "Git", "Linux"] },
	{
		id: "frontend",
		label: "stack.frontend",
		items: ["TypeScript", "React", "TanStack", "Next.js"],
	},
];
