export function Features() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-medium tracking-widest uppercase text-blue-400">
          Why PactKit
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          The P.A.C.T. that governs your AI.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          AI coding assistants are powerful but unpredictable. PactKit enforces
          a governance contract — clear boundaries between what code does, what
          data proves, and what AI creates.
        </p>

        <div className="mt-16 space-y-20">
          {/* Feature 1: P.A.C.T. Governance */}
          <Feature
            label="Governance"
            title="Four principles. Zero ambiguity."
            description="P.A.C.T. draws the boundary between human intent and AI execution. Deterministic operations run as code, not prompts. Decisions are grounded in data, not memory. AI handles creativity — code handles everything else."
            code={`# The P.A.C.T. Contract
P  Prompt  is ONLY instruction   → defines process, never state
A  AI      is ONLY creativity    → language and format, never logic
C  Code    is the Law            → sole executor of deterministic ops
T  Truth   Data is the Truth     → no memory, no inference, no fabrication

# Script exists? Use it. Never reimplement in prompts.
# Data available? Read it. Never guess from memory.`}
          />

          {/* Feature 2: Multi-Agent */}
          <Feature
            label="Architecture"
            title="9 agents. Constrained tools. Zero overlap."
            description="Each PDCA phase is owned by a dedicated agent that can only use the tools it needs. The architect can't write code. The developer can't modify specs. The QA engineer can't commit."
            code={`Agent             Phase   Can                Cannot
─────────────────────────────────────────────────────
System Architect  Plan    Write specs        Write code
Senior Developer  Act     Write code+tests   Modify specs
QA Engineer       Check   Run tests          Modify code
Repo Maintainer   Done    Commit, archive    Write features
Security Auditor  Check   Read + report      Modify anything`}
            reverse
          />

          {/* Feature 3: Safe Regression */}
          <Feature
            label="Safety"
            title="Pre-existing tests are untouchable."
            description="The TDD loop only iterates on tests created in the current story. If a pre-existing test fails, the agent stops and reports — it never silently modifies your safety net."
            code={`# TDD Loop (current story only)
1. Write tests          → RED
2. Implement            → GREEN  
3. Pre-existing fails?  → STOP. Report.

# Done Gate
$ pytest tests/ -v
2307 passed, 0 failed
✓ Regression gate: PASS
✓ feat(auth): STORY-042 add OAuth2 login`}
          />

          {/* Feature 4: Lazy Loading */}
          <Feature
            label="Performance"
            title="62% fewer tokens per turn."
            description="v2.1.1 introduced lazy rule loading for OpenCode. Only 3 core rules load every turn. The other 6 are referenced but only read when the current task needs them."
            code={`# Always loaded (opencode.json instructions):
rules/01-core-protocol.md
rules/02-hierarchy-of-truth.md  
rules/09-credential-safety.md

# On-demand (@reference in AGENTS.md):
rules/03-file-atlas.md          # ← read when needed
rules/04-routing-table.md       # ← read when needed
rules/05-workflow-conventions.md # ← read when needed
...3 more

# Result: 7,200 → 2,800 tokens/turn`}
            reverse
          />
        </div>
      </div>
    </section>
  );
}

function Feature({
  label,
  title,
  description,
  code,
  reverse,
}: {
  label: string;
  title: string;
  description: string;
  code: string;
  reverse?: boolean;
}) {
  return (
    <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:direction-rtl" : ""}`}>
      <div className={reverse ? "lg:order-2" : ""}>
        <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
          {label}
        </p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">{title}</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>
      </div>
      <div className={reverse ? "lg:order-1" : ""}>
        <div className="overflow-hidden rounded-xl border border-border bg-[oklch(0.10_0_0)]">
          <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 text-muted-foreground/80">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
