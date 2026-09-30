"use client";

import { useState, type FormEvent } from "react";

export function FeedbackForm({ configured }: { configured: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/feedback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error ?? "Could not send feedback. Please email me directly.");
      setStatus("sent");
      setMessage("Thanks for sharing your feedback. It has been sent.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Could not send feedback. Please email me directly.");
    }
  }

  return <div className="feedback-wrap">
    {!configured && <p className="feedback-note">The feedback inbox is not configured yet. You can still <a href="mailto:rathodatul4774@gmail.com?subject=Portfolio%20feedback">send feedback by email</a>.</p>}
    <form className="feedback-form" onSubmit={submit}>
      <label>Your name<input name="name" required maxLength={100} autoComplete="name" placeholder="Name" /></label>
      <label>Your email<input name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@example.com" /></label>
      <label className="feedback-wide">Subject<input name="subject" required maxLength={160} placeholder="What would you like to share?" /></label>
      <label className="feedback-wide">Feedback<textarea name="message" required minLength={5} maxLength={4000} rows={5} placeholder="Write your feedback or a message…" /></label>
      <label className="feedback-trap" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="button primary" type="submit" disabled={status === "sending" || !configured}>{status === "sending" ? "Sending…" : "Send feedback"}</button>
      <p className={`feedback-status ${status}`} role="status" aria-live="polite">{message}</p>
    </form>
  </div>;
}
