"use client";

import { useState } from "react";

/** Footer newsletter capture. Client-side only (no backend) — swap in a real endpoint later. */
export function NewsletterForm() {
  const [done, setDone] = useState(false);
  return (
    <form
      className="flex border border-white/20"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      {done ? (
        <p className="flex-1 px-3 py-2.5 font-mono text-[12px] uppercase tracking-[0.08em] text-white/70">
          Thanks — you&apos;re on the list.
        </p>
      ) : (
        <>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@company.com"
            className="min-w-0 flex-1 bg-transparent px-3 py-2.5 font-mono text-sm text-white outline-none placeholder-white/40"
          />
          <button
            type="submit"
            className="shrink-0 bg-signal px-4 font-mono text-[11px] uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-ink"
          >
            Subscribe
          </button>
        </>
      )}
    </form>
  );
}
