import Link from "next/link";
import { Button } from "@/components/ui/button";

const phases = [
  {
    name: "Plan",
    color: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/10",
    command: "/project-plan",
    desc: "Architect scans codebase, writes Spec, updates Sprint Board.",
  },
  {
    name: "Act",
    color: "text-green-400",
    border: "border-green-500/30",
    bg: "bg-green-500/10",
    command: "/project-act",
    desc: "Developer writes tests first (RED), then implements (GREEN).",
  },
  {
    name: "Check",
    color: "text-yellow-400",
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/10",
    command: "/project-check",
    desc: "QA runs 8-item security checklist + spec alignment audit.",
  },
  {
    name: "Done",
    color: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/10",
    command: "/project-done",
    desc: "Maintainer gates regression, archives story, commits.",
  },
];

export function Workflow() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest uppercase text-blue-400">
          How it works
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Four phases. Four agents. One command.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Or run{" "}
          <code className="text-foreground/80 text-sm">/project-sprint</code>{" "}
          to execute all four phases automatically.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((p, i) => (
            <div
              key={p.name}
              className={`rounded-xl border ${p.border} ${p.bg} p-6`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-background/50 text-sm font-bold text-muted-foreground">
                  {i + 1}
                </span>
                <span className={`text-xl font-bold ${p.color}`}>{p.name}</span>
              </div>
              <code className="mt-3 block font-mono text-xs text-muted-foreground">
                {p.command}
              </code>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/docs/workflow">Learn the workflow</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/commands">All 11 commands + 10 skills</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
