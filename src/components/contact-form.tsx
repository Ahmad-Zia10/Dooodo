"use client";

import { useState, type FormEvent } from "react";
import { interests } from "@/lib/contact-schema";
import { Arrow } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "mt-2 block w-full rounded-[6px] border border-ink/30 bg-surface px-4 py-3 text-[1rem] text-ink placeholder:text-ink-3 transition-colors hover:border-ink/60 focus:border-ink focus:outline-none focus-visible:outline-2 focus-visible:outline-erp aria-[invalid=true]:border-[#b42318]";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setErrors({});
    setFormError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("sent");
        form.reset();
        return;
      }
      setErrors(json.fieldErrors ?? {});
      setFormError(json.error ?? (json.fieldErrors ? "Please check the highlighted fields." : "Something went wrong."));
      setStatus("error");
      const first = json.fieldErrors && Object.keys(json.fieldErrors)[0];
      if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
    } catch {
      setFormError("We couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-t-[3px] border-ink pt-8">
        <div aria-hidden="true" className="mb-6 flex items-center">
          <span className="h-[8px] w-12 bg-ai" />
          <span className="-mx-1 grid h-9 w-14 place-items-center rounded-full border-[3.5px] border-ink bg-surface">
            <svg viewBox="0 0 16 16" className="size-4"><path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="2.2" /></svg>
          </span>
          <span className="h-[8px] w-12 bg-erp" />
        </div>
        <h2 className="h-sub text-[1.8rem]">Thank you. Your message is on its way.</h2>
        <p className="prose-body mt-3">
          A consultant will reply within one working day. If it&rsquo;s urgent, mention that in a follow-up email
          and we&rsquo;ll prioritise it.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="link-arrow mt-6">
          Send another message
        </button>
      </div>
    );
  }

  const err = (name: string) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1.5 text-[0.9rem] font-medium text-[#b42318]">
        {errors[name]}
      </p>
    ) : null;
  const a11y = (name: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="font-semibold">Name</label>
        <input id="name" name="name" autoComplete="name" required className={field} {...a11y("name")} />
        {err("name")}
      </div>
      <div>
        <label htmlFor="email" className="font-semibold">Work email</label>
        <input id="email" name="email" type="email" autoComplete="email" required className={field} {...a11y("email")} />
        {err("email")}
      </div>
      <div>
        <label htmlFor="company" className="font-semibold">
          Company <span className="font-normal text-ink-3">(optional)</span>
        </label>
        <input id="company" name="company" autoComplete="organization" className={field} {...a11y("company")} />
        {err("company")}
      </div>
      <fieldset>
        <legend className="font-semibold">Interested in</legend>
        <div className="mt-2 flex flex-wrap gap-2" {...a11y("interest")}>
          {interests.map((opt, i) => (
            <label key={opt} className="relative">
              <input
                type="radio"
                name="interest"
                value={opt}
                defaultChecked={i === 2}
                className="peer absolute inset-0 cursor-pointer opacity-0"
              />
              <span className="inline-flex min-h-11 items-center rounded-full border border-ink/30 bg-surface px-4 text-[0.95rem] font-medium transition-colors peer-hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-erp">
                {opt}
              </span>
            </label>
          ))}
        </div>
        {err("interest")}
      </fieldset>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="font-semibold">What would you like to fix or build?</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="For example: our accounts payable team matches around 2,000 invoices a month by hand against Oracle purchase orders."
          className={`${field} resize-y`}
          {...a11y("message")}
        />
        {err("message")}
      </div>
      <div aria-hidden="true" className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[46ch] text-[0.88rem] leading-relaxed text-ink-3">
          We use your details only to reply to this enquiry. See our{" "}
          <a href="/privacy" className="underline underline-offset-2">privacy notice</a>.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-7 font-semibold text-white transition-colors hover:bg-erp disabled:cursor-progress disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <Arrow className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
      {formError && (
        <p role="alert" className="text-[0.95rem] font-medium text-[#b42318] sm:col-span-2">
          {formError}
        </p>
      )}
    </form>
  );
}
