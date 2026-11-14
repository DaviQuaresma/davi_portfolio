import { Command } from "cmdk";
import { useEffect, useState } from "react";
import "./palette.css";

export interface PaletteItem {
	id: string;
	label: string;
	hint?: string;
	/** In-page anchor (`#cases`) or absolute URL. */
	href: string;
	external?: boolean;
}

export interface PaletteGroup {
	heading: string;
	items: PaletteItem[];
}

interface Props {
	placeholder: string;
	empty: string;
	groups: PaletteGroup[];
}

export default function CommandPalette({ placeholder, empty, groups }: Props) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((v) => !v);
			}
		};
		const onOpen = () => setOpen(true);
		window.addEventListener("keydown", onKey);
		window.addEventListener("palette:open", onOpen);
		return () => {
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("palette:open", onOpen);
		};
	}, []);

	const run = (item: PaletteItem) => {
		setOpen(false);
		if (item.external) {
			window.open(item.href, "_blank", "noopener");
		} else if (item.href.startsWith("#")) {
			document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
			history.replaceState(null, "", item.href);
		} else {
			window.location.assign(item.href);
		}
	};

	return (
		<Command.Dialog open={open} onOpenChange={setOpen} label={placeholder} className="palette">
			<Command.Input placeholder={placeholder} />
			<Command.List>
				<Command.Empty>{empty}</Command.Empty>
				{groups.map((group) => (
					<Command.Group key={group.heading} heading={group.heading}>
						{group.items.map((item) => (
							<Command.Item
								key={item.id}
								value={`${item.label} ${item.hint ?? ""}`}
								onSelect={() => run(item)}
							>
								<span>{item.label}</span>
								{item.hint && <span className="palette-hint">{item.hint}</span>}
							</Command.Item>
						))}
					</Command.Group>
				))}
			</Command.List>
		</Command.Dialog>
	);
}
