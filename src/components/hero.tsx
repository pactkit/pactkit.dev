import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(1_0_0/4%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/4%)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.145_0_0)_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: copy */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-blue-400">
              P.A.C.T. — Prompt · AI · Code · Truth
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Code executes.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI creates.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The governance contract between humans and AI agents
              — four principles that keep deterministic logic in code
              and creative tasks in AI.
            </p>
            <p className="mt-3 text-sm text-muted-foreground/70">
              9 specialized agents · Plan-Act-Check-Done lifecycle · TDD by default
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2.5 font-mono text-sm">
                <span className="text-muted-foreground">$</span>
                <span>pip install pactkit</span>
              </div>
              <div className="flex gap-3">
                <Button asChild size="lg">
                  <Link href="/docs">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
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

            <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                v2.3.0
              </span>
              <span>2,663+ tests</span>
              <span>MIT License</span>
            </div>
          </div>

          {/* Right: terminal demo */}
          <div className="lg:pl-4">
            <div className="overflow-hidden rounded-xl border border-border bg-[oklch(0.10_0_0)] shadow-2xl shadow-blue-500/5">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-border/50 px-4 py-2.5">
                <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-xs text-muted-foreground/50 font-mono">~</span>
              </div>
              {/* Content */}
              <div className="p-4 font-mono text-[12.5px] leading-6 text-left">
                <Line prompt>/project-sprint &quot;Add OAuth2 login&quot;</Line>
                <Line />
                <Line phase="Plan">Scanning codebase... 47 modules</Line>
                <Line phase="Plan">Spec: docs/specs/STORY-042.md</Line>
                <Line phase="Plan">Board: 4 tasks added</Line>
                <Line />
                <Line phase="Act">Tests: 8 cases written (RED)</Line>
                <Line phase="Act">Implement: all pass (GREEN)</Line>
                <Line phase="Act">Lint: 0 errors</Line>
                <Line />
                <Line phase="Check">SEC-1..SEC-8: all PASS</Line>
                <Line phase="Check">ACs: 4/4 verified</Line>
                <Line />
                <Line phase="Done">Regression: 2307 tests passed</Line>
                <Line phase="Done" highlight>feat(auth): STORY-042 add OAuth2 login</Line>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Line({
  prompt,
  phase,
  highlight,
  children,
}: {
  prompt?: boolean;
  phase?: string;
  highlight?: boolean;
  children?: React.ReactNode;
}) {
  if (!children && !prompt) return <div className="h-2" />;

  const phaseColors: Record<string, string> = {
    Plan: "text-blue-400",
    Act: "text-green-400",
    Check: "text-yellow-400",
    Done: "text-purple-400",
  };

  return (
    <div className={`flex gap-0 ${highlight ? "text-foreground/90" : ""}`}>
      {prompt ? (
        <>
          <span className="text-green-400">$</span>
          <span className="ml-2 text-foreground/90">{children}</span>
        </>
      ) : (
        <>
          {phase && (
            <span className={`w-12 shrink-0 font-semibold ${phaseColors[phase] ?? ""}`}>
              {phase}
            </span>
          )}
          <span className={highlight ? "text-foreground/90" : "text-muted-foreground/60"}>
            {children}
          </span>
        </>
      )}
    </div>
  );
}
