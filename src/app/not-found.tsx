// 404 — branded blueprint-style not-found page
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Logo } from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <main className="grid-field flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Logo className="mb-10" />
      <SectionLabel rule className="mb-6">
        ERROR 404
      </SectionLabel>
      <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
        Off the drawing.
      </h1>
      <p className="mt-4 max-w-md text-ink-soft">
        This page isn&apos;t in our set of plans.
      </p>
      <Button href="/" variant="primary" className="mt-10">
        Return to site
      </Button>
    </main>
  );
}
