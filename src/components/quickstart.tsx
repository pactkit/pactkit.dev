export function QuickStart() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Quick Start
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Three steps to spec-driven development.
        </p>

        <div className="mt-12 space-y-8">
          <Step
            number={1}
            title="Install"
            code="pip install pactkit"
          />
          <Step
            number={2}
            title="Deploy"
            code={`# Deploy 11 commands + 9 agents + 10 skills
pactkit init`}
          />
          <Step
            number={3}
            title="Use in Claude Code"
            code={`/project-plan "Add user authentication"
/project-act STORY-001
/project-check
/project-done`}
          />
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  code,
}: {
  number: number;
  title: string;
  code: string;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {number}
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <pre className="overflow-x-auto rounded-lg border border-border bg-background p-4 font-mono text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
