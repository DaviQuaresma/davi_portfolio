import type { Edge, Node } from "@xyflow/react";
import type { DiagramId } from "./types";

export type NodeKind = "client" | "service" | "queue" | "worker" | "store" | "trigger" | "external";

export type ServiceNodeData = { label: string; sub?: string; kind: NodeKind };
export type ServiceNode = Node<ServiceNodeData, "service">;

/** Handle ids: sources `s-{r,b,t}`, targets `t-{l,t,b}`. */
type Side = "r" | "b" | "t";
type In = "l" | "t" | "b";

const node = (id: string, x: number, y: number, data: ServiceNodeData): ServiceNode => ({
	id,
	type: "service",
	position: { x, y },
	data,
});

const edge = (
	source: string,
	target: string,
	opts: { label?: string; from?: Side; to?: In; dashed?: boolean } = {},
): Edge => ({
	id: `${source}->${target}`,
	source,
	target,
	sourceHandle: `s-${opts.from ?? "r"}`,
	targetHandle: `t-${opts.to ?? "l"}`,
	type: "smoothstep",
	animated: !opts.dashed,
	...(opts.label ? { label: opts.label } : {}),
	...(opts.dashed ? { style: { strokeDasharray: "4 4" } } : {}),
});

export const graphs: Record<DiagramId, { nodes: ServiceNode[]; edges: Edge[] }> = {
	erp: {
		nodes: [
			node("client", 0, 110, { label: "Web client", sub: "SPA / integrations", kind: "client" }),
			node("api", 230, 110, { label: "Laravel API", sub: "domain rules · auth", kind: "service" }),
			node("db", 480, 0, { label: "MySQL", sub: "ledger · budgets", kind: "store" }),
			node("queue", 480, 220, { label: "Isolated queues", sub: "one per workload", kind: "queue" }),
			node("worker", 720, 220, { label: "Workers", sub: "reports · recurrences", kind: "worker" }),
			node("export", 720, 0, { label: "PDF / Excel", sub: "exports", kind: "external" }),
			node("cron", 230, 300, { label: "Scheduler", sub: "recurring entries", kind: "trigger" }),
		],
		edges: [
			edge("client", "api", { label: "HTTPS" }),
			edge("api", "db", { label: "transactions" }),
			edge("api", "queue", { label: "dispatch" }),
			edge("cron", "queue"),
			edge("queue", "worker"),
			edge("worker", "db", { from: "t", to: "b", dashed: true }),
			edge("worker", "export", { from: "t", to: "b" }),
		],
	},
	automation: {
		nodes: [
			node("cron", 0, 120, { label: "Cron job", sub: "scheduled on server", kind: "trigger" }),
			node("sources", 240, 0, {
				label: "ProConsumidor",
				sub: "web portal",
				kind: "external",
			}),
			node("collector", 240, 120, {
				label: "Playwright",
				sub: "headless collector",
				kind: "worker",
			}),
			node("retry", 240, 250, { label: "Tenacity", sub: "retry · backoff", kind: "service" }),
			node("etl", 490, 120, { label: "Pandas", sub: "clean · normalize", kind: "service" }),
			node("crm", 730, 30, { label: "CRM", sub: "internal", kind: "store" }),
			node("report", 730, 210, { label: "Excel report", sub: "sent by email", kind: "service" }),
		],
		edges: [
			edge("cron", "collector", { label: "trigger" }),
			edge("collector", "sources", { from: "t", to: "b", label: "scrape" }),
			edge("collector", "retry", { from: "b", to: "t", dashed: true, label: "on failure" }),
			edge("collector", "etl", { label: "raw rows" }),
			edge("etl", "crm", { label: "sync" }),
			edge("etl", "report", { label: "summary" }),
		],
	},
	onboarding: {
		nodes: [
			node("client", 0, 30, { label: "Client portal", sub: "React · RHF", kind: "client" }),
			node("analyst", 0, 210, { label: "Analyst panel", sub: "TanStack Table", kind: "client" }),
			node("api", 270, 120, { label: "API", sub: "workflow · status", kind: "service" }),
			node("sql", 520, 30, {
				label: "SQL database",
				sub: "registrations · history",
				kind: "store",
			}),
			node("b2", 520, 210, { label: "Backblaze B2", sub: "documents", kind: "store" }),
		],
		edges: [
			edge("client", "api", { label: "submit" }),
			edge("analyst", "api", { label: "review · approve" }),
			edge("api", "sql"),
			edge("api", "b2", { label: "upload" }),
		],
	},
	cicd: {
		nodes: [
			node("branch", 0, 0, { label: "Feature branch", sub: "branching strategy", kind: "client" }),
			node("pr", 250, 0, { label: "Pull Request", sub: "code review", kind: "service" }),
			node("actions", 500, 0, {
				label: "GitHub Actions",
				sub: "lint · test · build",
				kind: "worker",
			}),
			node("docker", 500, 170, { label: "Docker image", sub: "standard runtime", kind: "store" }),
			node("deploy", 750, 170, { label: "Deploy", sub: "after checks pass", kind: "external" }),
		],
		edges: [
			edge("branch", "pr", { label: "push" }),
			edge("pr", "actions", { label: "trigger" }),
			edge("actions", "pr", { from: "t", to: "t", dashed: true, label: "status checks" }),
			edge("actions", "docker", { from: "b", to: "t", label: "build" }),
			edge("docker", "deploy", { label: "release" }),
		],
	},
};
