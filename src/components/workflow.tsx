import { Badge } from "@/components/ui/badge";

const commands = [
  { cmd: "/project-plan", agent: "System Architect", desc: "Codebase scan, Spec generation, Board entry" },
  { cmd: "/project-act", agent: "Senior Developer", desc: "Visual scan, TDD loop, Lint check, Regression check" },
  { cmd: "/project-check", agent: "QA + Security", desc: "6-phase deep audit (Security/Quality/Spec)" },
  { cmd: "/project-done", agent: "Repo Maintainer", desc: "Regression + lint gate, Architecture check, Archive, Commit" },
  { cmd: "/project-sprint", agent: "Team Lead", desc: "One-command automated PDCA orchestration" },
  { cmd: "/project-hotfix", agent: "Senior Developer", desc: "Fast-track fix bypassing PDCA" },
  { cmd: "/project-design", agent: "Product Designer", desc: "PRD generation, Story decomposition, Board setup" },
  { cmd: "/project-init", agent: "System Architect", desc: "Project scaffolding, governance, .claude/CLAUDE.md" },
];

const skills = [
  { name: "pactkit-trace", embeddedIn: "Plan, Act", desc: "Call graph tracing, Sequence diagram" },
  { name: "pactkit-draw", embeddedIn: "Plan, Design", desc: "Generate Draw.io XML architecture diagrams" },
  { name: "pactkit-status", embeddedIn: "Init", desc: "Cold-start project overview" },
  { name: "pactkit-doctor", embeddedIn: "Init", desc: "Configuration drift detection, Health report" },
  { name: "pactkit-review", embeddedIn: "Check", desc: "PR review with SOLID/Security/Quality checklists" },
  { name: "pactkit-release", embeddedIn: "Done", desc: "Version bump, Archive, Git tag, Changelog" },
  { name: "pactkit-visualize", embeddedIn: "Plan, Act", desc: "Code dependency graph (Mermaid)" },
  { name: "pactkit-board", embeddedIn: "Plan, Done", desc: "Sprint board operations" },
  { name: "pactkit-scaffold", embeddedIn: "Plan, Act", desc: "File scaffolding: Spec, tests, branches" },
];

export function Workflow() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          PDCA+ Workflow
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          8 commands and 9 skills covering the full software development lifecycle.
        </p>

        <h3 className="mt-12 mb-4 text-lg font-semibold">Commands</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 pr-4 font-medium text-muted-foreground">Command</th>
                <th className="pb-3 pr-4 font-medium text-muted-foreground">Agent</th>
                <th className="pb-3 font-medium text-muted-foreground">What Happens</th>
              </tr>
            </thead>
            <tbody>
              {commands.map((p) => (
                <tr key={p.cmd} className="border-b border-border/50">
                  <td className="py-3 pr-4">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {p.cmd}
                    </Badge>
                  </td>
                  <td className="py-3 pr-4 text-muted-foreground">{p.agent}</td>
                  <td className="py-3 text-muted-foreground">{p.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-10 mb-4 text-lg font-semibold">Skills</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Skills are modular tools auto-invoked by commands at the right moment.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 pr-4 font-medium text-muted-foreground">Skill</th>
                <th className="pb-3 pr-4 font-medium text-muted-foreground">Embedded In</th>
                <th className="pb-3 font-medium text-muted-foreground">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((s) => (
                <tr key={s.name} className="border-b border-border/50">
                  <td className="py-3 pr-4">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {s.name}
                    </Badge>
                  </td>
                  <td className="py-3 pr-4 text-muted-foreground">{s.embeddedIn}</td>
                  <td className="py-3 text-muted-foreground">{s.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
