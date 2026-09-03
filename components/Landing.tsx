import Link from "next/link";
import { content, type Lang } from "@/lib/content";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";

export default function Landing({ lang }: { lang: Lang }) {
  const c = content[lang];

  return (
    <>
      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-rule)] bg-[var(--color-paper)]/85 backdrop-blur-md">
        <div className="wrap flex h-16 items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-md bg-[var(--color-accent)]"
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path
                  d="M1.5 4.5h13v8h-13z"
                  stroke="#fff"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.5 5l6.5 4.5L14.5 5"
                  stroke="#fff"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-[0.9375rem] font-semibold tracking-[-0.02em]">
              {c.brand}
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {c.nav.map((n) => (
              <a
                key={n.href + n.label}
                href={n.href}
                className="text-[0.875rem] text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={c.altHref}
              className="text-[0.8125rem] font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              {c.altLabel}
            </Link>
            <a href="#contacto" className="btn btn-primary !py-2.5 !text-sm">
              {c.navCta}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="wrap pt-16 pb-14 sm:pt-24 sm:pb-20">
          <p className="eyebrow">{c.hero.eyebrow}</p>
          <h1 className="h1 mt-5 max-w-4xl">{c.hero.title}</h1>
          <p className="lede mt-6 max-w-2xl">{c.hero.sub}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contacto" className="btn btn-primary">
              {c.hero.ctaPrimary}
            </a>
            <a href="#servicios" className="btn btn-ghost">
              {c.hero.ctaSecondary}
            </a>
          </div>

          <p className="mt-8 text-[0.875rem] text-[var(--color-muted)]">
            {c.hero.tagline}
          </p>

          <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[var(--color-rule)] pt-6">
            {c.hero.stack.map((s) => (
              <span
                key={s}
                className="text-[0.8125rem] font-medium tracking-[-0.01em] text-[var(--color-muted)]"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ---------- Problem ---------- */}
        <section className="border-y border-[var(--color-rule)] bg-[var(--color-paper-2)]">
          <div className="wrap grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <h2 className="h2 max-w-md">{c.problem.title}</h2>
            <div>
              {c.problem.body.map((p, i) => (
                <p
                  key={i}
                  className="lede mb-5 last:mb-0"
                >
                  {p}
                </p>
              ))}
              <p className="mt-8 border-l-2 border-[var(--color-accent)] pl-5 text-[1.0625rem] font-medium leading-relaxed tracking-[-0.015em] text-[var(--color-ink)]">
                {c.problem.pull}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section id="servicios" className="wrap py-16 sm:py-24">
          <h2 className="h2 max-w-xl">{c.services.title}</h2>
          <p className="lede mt-5 max-w-2xl">{c.services.intro}</p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {c.services.items.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-xl border border-[var(--color-rule)] bg-white p-7"
              >
                <span className="mb-5 inline-flex w-fit rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-accent)]">
                  {s.tag}
                </span>
                <h3 className="h3">{s.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink-2)]">
                  {s.desc}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-[var(--color-rule)] pt-6">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-[0.875rem] leading-relaxed text-[var(--color-ink-2)]"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
            {c.services.note}
          </p>
        </section>

        {/* ---------- How it works ---------- */}
        <section
          id="como-funciona"
          className="border-y border-[var(--color-rule)] bg-[var(--color-paper-2)]"
        >
          <div className="wrap py-16 sm:py-24">
            <h2 className="h2 max-w-xl">{c.how.title}</h2>
            <p className="lede mt-5 max-w-2xl">{c.how.intro}</p>

            <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[var(--color-rule)] bg-[var(--color-rule)] sm:grid-cols-2 lg:grid-cols-5">
              {c.how.steps.map((s) => (
                <li key={s.n} className="bg-white p-6">
                  <span className="text-[0.75rem] font-semibold tracking-[0.08em] text-[var(--color-accent)]">
                    {s.n}
                  </span>
                  <h3 className="mt-3 text-[1rem] font-semibold tracking-[-0.015em]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-[var(--color-ink-2)]">
                    {s.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- Senior judgment (dark) ---------- */}
        <section id="criterio" className="bg-[var(--color-ink)] text-white">
          <div className="wrap py-16 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
              <h2 className="h2 max-w-md text-white">{c.senior.title}</h2>
              <p className="text-[1.0625rem] leading-relaxed text-white/70">
                {c.senior.body}
              </p>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-white/12 sm:grid-cols-3">
              {c.senior.levels.map((l) => (
                <div key={l.label} className="bg-[var(--color-ink)] p-7">
                  <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#7fc2b6]">
                    {l.label}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/75">
                    {l.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Work ---------- */}
        <section className="wrap py-16 sm:py-24">
          <h2 className="h2 max-w-xl">{c.work.title}</h2>
          <p className="mt-5 max-w-2xl text-[0.9375rem] leading-relaxed text-[var(--color-muted)]">
            {c.work.note}
          </p>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {c.work.items.map((w) => (
              <article
                key={w.title}
                className="flex flex-col rounded-xl border border-[var(--color-rule)] p-7"
              >
                <h3 className="h3">{w.title}</h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-[var(--color-ink-2)]">
                  {w.problem}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {w.systems.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-[var(--color-paper-2)] px-2 py-1 text-[0.75rem] text-[var(--color-muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-6 border-t border-[var(--color-rule)] pt-5 text-[0.9375rem] leading-relaxed text-[var(--color-ink)]">
                  {w.outcome}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Workspace ---------- */}
        <section
          id="workspace"
          className="border-y border-[var(--color-rule)] bg-[var(--color-paper-2)]"
        >
          <div className="wrap grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="h2">{c.workspace.title}</h2>
              <p className="lede mt-5">{c.workspace.body}</p>
              <ul className="mt-8 space-y-3">
                {c.workspace.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink-2)]"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ticket mockup */}
            <div className="rounded-xl border border-[var(--color-rule)] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-12px_rgba(0,0,0,0.12)]">
              <div className="flex items-center gap-1.5 border-b border-[var(--color-rule)] pb-4">
                <span className="h-2 w-2 rounded-full bg-[#e0ddd6]" />
                <span className="h-2 w-2 rounded-full bg-[#e0ddd6]" />
                <span className="h-2 w-2 rounded-full bg-[#e0ddd6]" />
                <span className="ml-3 text-[0.75rem] text-[var(--color-muted)]">
                  #1284
                </span>
              </div>

              <h3 className="mt-5 text-[1rem] font-semibold tracking-[-0.015em]">
                {c.workspace.demoTitle}
              </h3>

              <div className="mt-6 flex items-center">
                {c.workspace.states.map((s, i) => {
                  const done = i < c.workspace.activeState;
                  const active = i === c.workspace.activeState;
                  return (
                    <div key={s} className="flex flex-1 items-center last:flex-none">
                      <div className="flex flex-col items-center gap-2">
                        <span
                          className={
                            "h-2.5 w-2.5 rounded-full " +
                            (done || active
                              ? "bg-[var(--color-accent)]"
                              : "bg-[var(--color-rule)]")
                          }
                        />
                        <span
                          className={
                            "whitespace-nowrap text-[0.6875rem] " +
                            (active
                              ? "font-semibold text-[var(--color-ink)]"
                              : "text-[var(--color-muted)]")
                          }
                        >
                          {s}
                        </span>
                      </div>
                      {i < c.workspace.states.length - 1 && (
                        <span
                          className={
                            "mb-5 h-px flex-1 " +
                            (done
                              ? "bg-[var(--color-accent)]"
                              : "bg-[var(--color-rule)]")
                          }
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <dl className="mt-8 space-y-3 border-t border-[var(--color-rule)] pt-5">
                {c.workspace.demoMeta.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-[0.8125rem] text-[var(--color-muted)]">
                      {k}
                    </dt>
                    <dd className="text-[0.8125rem] font-medium text-[var(--color-ink)]">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contacto" className="wrap py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <h2 className="h2">{c.contact.title}</h2>
              <p className="lede mt-5">{c.contact.body}</p>
              <ul className="mt-8 space-y-3">
                {c.contact.reassure.map((r) => (
                  <li
                    key={r}
                    className="flex gap-3 text-[0.9375rem] leading-relaxed text-[var(--color-ink-2)]"
                  >
                    <svg
                      aria-hidden
                      className="mt-[0.3rem] shrink-0 text-[var(--color-accent)]"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M1.5 7.5l3.5 3.5 7.5-8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm c={c.contact} />
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="border-t border-[var(--color-rule)] bg-[var(--color-paper-2)]">
          <div className="wrap grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            <h2 className="h2">{c.faq.title}</h2>
            <FAQ items={c.faq.items} />
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="bg-[var(--color-ink)] text-white">
        <div className="wrap py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <p className="text-[0.9375rem] font-semibold tracking-[-0.02em]">
                {c.brand}
              </p>
              <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-white/60">
                {c.footer.tagline}
              </p>
              <p className="mt-5 text-[0.75rem] uppercase tracking-[0.14em] text-white/40">
                {c.footer.umbrella}
              </p>
            </div>

            {c.footer.cols.map((col) => (
              <div key={col.title}>
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-white/40">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-[0.875rem] text-white/70 transition-colors hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-[0.8125rem] text-white/50">
              {c.footer.closing}
            </p>
            <div className="flex items-center gap-5">
              {c.footer.legal.map((l) => (
                <span key={l} className="text-[0.8125rem] text-white/50">
                  {l}
                </span>
              ))}
              <span className="text-[0.8125rem] text-white/40">
                © {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
