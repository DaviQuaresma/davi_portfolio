import {
	Background,
	type Edge,
	Handle,
	type NodeProps,
	Position,
	ReactFlow,
	useEdgesState,
	useNodesState,
} from "@xyflow/react";
import type { CSSProperties } from "react";
import "@xyflow/react/dist/base.css";
import "./diagram.css";
import { graphs, type NodeKind, type ServiceNode } from "./graphs";
import type { DiagramId } from "./types";

const kindColor: Record<NodeKind, string> = {
	client: "var(--color-info)",
	service: "var(--color-accent)",
	queue: "var(--color-warn)",
	worker: "var(--color-warn)",
	store: "#c4a7ff",
	trigger: "var(--color-muted)",
	external: "var(--color-muted)",
};

function ServiceNodeView({ data }: NodeProps<ServiceNode>) {
	return (
		<div className="diagram-node" style={{ "--kind": kindColor[data.kind] } as CSSProperties}>
			<Handle id="t-l" type="target" position={Position.Left} />
			<Handle id="t-t" type="target" position={Position.Top} />
			<Handle id="t-b" type="target" position={Position.Bottom} />
			<div className="flex items-center gap-2">
				<span className="diagram-dot" aria-hidden />
				<span className="font-mono text-[13px] text-fg">{data.label}</span>
			</div>
			{data.sub && <div className="mt-0.5 pl-4 font-mono text-[11px] text-faint">{data.sub}</div>}
			<Handle id="s-r" type="source" position={Position.Right} />
			<Handle id="s-t" type="source" position={Position.Top} />
			<Handle id="s-b" type="source" position={Position.Bottom} />
		</div>
	);
}

const nodeTypes = { service: ServiceNodeView };

interface Props {
	id: DiagramId;
	label: string;
}

export default function ArchitectureDiagram({ id, label }: Props) {
	const graph = graphs[id];
	const [nodes, , onNodesChange] = useNodesState<ServiceNode>(graph.nodes);
	const [edges, , onEdgesChange] = useEdgesState<Edge>(graph.edges);

	return (
		<div className="diagram h-80 w-full" role="img" aria-label={label}>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				nodeTypes={nodeTypes}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				colorMode="dark"
				fitView
				fitViewOptions={{ padding: 0.15 }}
				nodesConnectable={false}
				elementsSelectable={false}
				zoomOnScroll={false}
				zoomOnPinch={false}
				zoomOnDoubleClick={false}
				panOnDrag={false}
				preventScrolling={false}
				proOptions={{ hideAttribution: true }}
			>
				<Background gap={16} size={1} color="#ffffff10" />
			</ReactFlow>
		</div>
	);
}
