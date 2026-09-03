"use client";

import { useState } from "react";

type Item = { readonly q: string; readonly a: string };

export default function FAQ({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-[var(--color-rule)]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-[var(--color-rule)]">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
            >
              <span className="text-[1.0625rem] font-medium tracking-[-0.015em] text-[var(--color-ink)]">
                {item.q}
              </span>
              <span
                aria-hidden
                className="mt-1 shrink-0 text-[var(--color-muted)] transition-transform duration-200"
                style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1v14M1 8h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            <div hidden={!isOpen} className="pb-6 pr-10">
              <p className="text-[0.9375rem] leading-relaxed text-[var(--color-ink-2)]">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
