import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const feedbackSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(1).max(160),
  message: z.string().trim().min(5).max(4000),
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return NextResponse.json({ error: "Feedback email is not configured yet. Please use the email link instead." }, { status: 503 });

  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Please submit a valid feedback form." }, { status: 400 }); }
  const parsed = feedbackSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Please check your name, email, subject, and message." }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ ok: true });

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `Portfolio feedback: ${parsed.data.subject}`,
      text: `From: ${parsed.data.name} <${parsed.data.email}>\n\n${parsed.data.message}`,
    });
    if (error) {
      console.error("Feedback email provider error", error.name);
      return NextResponse.json({ error: "The email could not be delivered. Please email me directly." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "The email could not be delivered. Please email me directly." }, { status: 502 });
  }
}
