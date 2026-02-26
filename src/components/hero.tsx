import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
        <Image
          src="/logo.jpg"
          alt="PactKit"
          width={360}
          height={180}
          className="mx-auto mb-8"
          priority
        />
        <p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Spec-Driven Agentic Development
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Code by Contract
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Ship features with AI agents that follow specs, not vibes.
          <br />
          One <code className="text-foreground/80">pip install</code> gives Claude Code
          a structured operating system — specs before code, TDD by default, safe regression gates.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-muted px-4 py-2.5 font-mono text-sm">
            <span className="text-muted-foreground">$</span>
            <span>pip install pactkit</span>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <Link href="/docs">Documentation</Link>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/pactkit/pactkit"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span>9 Agents</span>
          <span className="text-border">|</span>
          <span>9 Commands</span>
          <span className="text-border">|</span>
          <span>10 Skills</span>
          <span className="text-border">|</span>
          <span>Full PDCA Lifecycle</span>
          <span className="text-border">|</span>
          <span>MIT License</span>
        </div>
      </div>
    </section>
  );
}
