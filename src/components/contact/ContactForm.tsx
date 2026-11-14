import { actions, isInputError } from "astro:actions";
import { type FormEvent, useState } from "react";

export interface ContactLabels {
	name: string;
	email: string;
	company: string;
	message: string;
	submit: string;
	sending: string;
	success: string;
	error: string;
	invalid: string;
}

type Status = "idle" | "sending" | "success" | "error" | "invalid";
type FieldErrors = { [K in "name" | "email" | "company" | "message"]?: string[] | undefined };

const inputClass =
	"w-full rounded-lg border bg-surface-2 px-3.5 py-2.5 text-sm text-fg placeholder:text-faint outline-none transition focus:border-accent";

export default function ContactForm({ labels }: { labels: ContactLabels }) {
	const [status, setStatus] = useState<Status>("idle");
	const [errors, setErrors] = useState<FieldErrors>({});
	const [startedAt] = useState(() => Date.now());

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = event.currentTarget;
		setStatus("sending");
		setErrors({});

		const { error } = await actions.contact(new FormData(form));

		if (!error) {
			form.reset();
			setStatus("success");
			return;
		}
		if (isInputError(error)) {
			setErrors(error.fields);
			setStatus("invalid");
			return;
		}
		setStatus("error");
	}

	const field = (name: keyof FieldErrors) => ({
		name,
		id: `contact-${name}`,
		"aria-invalid": Boolean(errors[name]),
		className: `${inputClass} ${errors[name] ? "border-red-400" : "border-line"}`,
	});

	return (
		<form onSubmit={onSubmit} noValidate className="space-y-4">
			<div className="grid gap-4 sm:grid-cols-2">
				<label className="block">
					<span className="mb-1.5 block font-mono text-xs text-muted">{labels.name}</span>
					<input {...field("name")} type="text" autoComplete="name" required minLength={2} />
				</label>
				<label className="block">
					<span className="mb-1.5 block font-mono text-xs text-muted">{labels.email}</span>
					<input {...field("email")} type="email" autoComplete="email" required />
				</label>
			</div>
			<label className="block">
				<span className="mb-1.5 block font-mono text-xs text-muted">{labels.company}</span>
				<input {...field("company")} type="text" autoComplete="organization" />
			</label>
			<label className="block">
				<span className="mb-1.5 block font-mono text-xs text-muted">{labels.message}</span>
				<textarea {...field("message")} rows={5} required minLength={10} />
			</label>

			{/* Honeypot: hidden from humans and assistive tech. */}
			<div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
				<input type="text" name="website" tabIndex={-1} autoComplete="off" />
			</div>
			<input type="hidden" name="startedAt" value={startedAt} />

			<div className="flex flex-wrap items-center gap-4 pt-2">
				<button
					type="submit"
					disabled={status === "sending"}
					className="rounded-lg bg-accent px-5 py-2.5 font-mono text-sm font-medium text-bg transition hover:brightness-110 disabled:opacity-60"
				>
					{status === "sending" ? labels.sending : labels.submit}
				</button>
				<p role="status" aria-live="polite" className="font-mono text-xs">
					{status === "success" && <span className="text-accent">✓ {labels.success}</span>}
					{status === "error" && <span className="text-red-400">✕ {labels.error}</span>}
					{status === "invalid" && <span className="text-warn">! {labels.invalid}</span>}
				</p>
			</div>
		</form>
	);
}
