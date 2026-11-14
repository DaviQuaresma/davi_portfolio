import { ActionError, defineAction } from "astro:actions";
import { CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL, RESEND_API_KEY } from "astro:env/server";
import { z } from "astro/zod";
import { Resend } from "resend";

/** Collapses whitespace/newlines so user input can't break the subject line. */
const singleLine = (s: string) => s.replace(/\s+/g, " ").trim();

/** Submissions faster than this are almost certainly bots. */
const MIN_FILL_TIME_MS = 2500;

const contactInput = z.object({
	name: z.string().trim().min(2).max(100).transform(singleLine),
	email: z.email().max(200),
	company: z.string().trim().max(120).transform(singleLine).optional(),
	message: z.string().trim().min(10).max(5000),
	// Anti-spam: hidden honeypot field + form render timestamp.
	website: z.string().optional(),
	startedAt: z.coerce.number().int().positive(),
});

export const server = {
	contact: defineAction({
		accept: "form",
		input: contactInput,
		handler: async ({ name, email, company, message, website, startedAt }) => {
			const looksLikeBot = Boolean(website) || Date.now() - startedAt < MIN_FILL_TIME_MS;
			// Pretend success so bots get no signal.
			if (looksLikeBot) return { ok: true };

			if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
				console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not configured");
				throw new ActionError({
					code: "INTERNAL_SERVER_ERROR",
					message: "Email delivery unavailable",
				});
			}

			const resend = new Resend(RESEND_API_KEY);
			const { error } = await resend.emails.send({
				from: CONTACT_FROM_EMAIL,
				to: CONTACT_TO_EMAIL,
				replyTo: email,
				subject: `Portfolio · ${name}${company ? ` (${company})` : ""}`,
				text: [`Name: ${name}`, `Email: ${email}`, `Company: ${company || "-"}`, "", message].join(
					"\n",
				),
			});

			if (error) {
				console.error("[contact] Resend error", error);
				throw new ActionError({ code: "BAD_GATEWAY", message: "Email provider error" });
			}

			return { ok: true };
		},
	}),
};
