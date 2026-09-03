"use client";

import { useState } from "react";
import type { Content } from "@/lib/content";

export default function ContactForm({ c }: { c: Content["contact"] }) {
  const f = c.fields;
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setState(res.ok ? "ok" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "ok") {
    return (
      <div className="rounded-xl border border-[var(--color-rule)] bg-white p-8">
        <p className="text-[1.0625rem] leading-relaxed text-[var(--color-ink)]">
          {f.success}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-[var(--color-rule)] bg-white p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            {f.name}
          </label>
          <input className="field" id="name" name="name" required />
        </div>
        <div>
          <label className="label" htmlFor="company">
            {f.company}
          </label>
          <input className="field" id="company" name="company" required />
        </div>
        <div>
          <label className="label" htmlFor="email">
            {f.email}
          </label>
          <input
            className="field"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <label className="label" htmlFor="site">
            {f.site}
          </label>
          <input className="field" id="site" name="site" />
        </div>
        <div>
          <label className="label" htmlFor="helpType">
            {f.helpType}
          </label>
          <select className="field" id="helpType" name="helpType" required>
            {c.helpTypeOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="platform">
            {f.platform}
          </label>
          <select className="field" id="platform" name="platform" required>
            {c.platformOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="label" htmlFor="challenge">
          {f.challenge}
        </label>
        <textarea
          className="field min-h-36 resize-y"
          id="challenge"
          name="challenge"
          required
          placeholder={f.challengePlaceholder}
        />
      </div>

      <div className="mt-8 border-t border-[var(--color-rule)] pt-6">
        <p className="eyebrow mb-4">{f.optional}</p>
        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label className="label" htmlFor="listSize">
              {f.listSize}
            </label>
            <input className="field" id="listSize" name="listSize" />
          </div>
          <div>
            <label className="label" htmlFor="sends">
              {f.sends}
            </label>
            <input className="field" id="sends" name="sends" />
          </div>
          <div>
            <label className="label" htmlFor="urgency">
              {f.urgency}
            </label>
            <select className="field" id="urgency" name="urgency">
              {c.urgencyOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={state === "sending"}
        >
          {state === "sending" ? f.sending : f.submit}
        </button>
        {state === "error" && (
          <p className="text-sm text-[var(--color-danger)]">{f.error}</p>
        )}
      </div>
    </form>
  );
}
