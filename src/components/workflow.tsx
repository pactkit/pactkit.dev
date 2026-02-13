import { Badge } from "@/components/ui/badge";

const phases = [
  { cmd: "/project-plan", agent: "System Architect", desc: "Codebase scan, Spec generation, Board entry" },
  { cmd: "/project-act", agent: "Senior Developer", desc: "Visual scan, TDD loop, Regression check" },
  { cmd: "/project-check", agent: "QA + Security", desc: "6-phase deep audit (Security/Quality/Spec)" },
  { cmd: "/project-done", agent: "Repo Maintainer", desc: "Safe regression gate, Archive, Conventional commit" },
  { cmd: "/project-trace", agent: "Code Explorer", desc: "Call graph tracing, Sequence diagram" },
  { cmd: "/project-draw", agent: "Visual Architect", desc: "Generate Draw.io XML architecture diagrams" },
  { cmd: "/project-doctor", agent: "System Medic", desc: "Configuration drift detection, Health report" },
  { cmd: "/project-review", agent: "QA Engineer", desc: "PR review with SOLID/Security/Quality checklists" },
  { cmd: "/project-sprint", agent: "Team Lead", desc: "One-command automated PDCA orchestration" },
  { cmd: "/project-hotfix", agent: "Senior Developer", desc: "Fast-track fix bypassing PDCA" },
  { cmd: "/project-release", agent: "Repo Maintainer", desc: "Version bump, Archive, Git tag, Changelog" },
  { cmd: "/project-design", agent: "Product Designer", desc: "PRD generation, Story decomposition, Board setup" },
];

export function Workflow() {
  return (
    <section className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          PDCA+ Workflow
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          12 commands covering the full software development lifecycle.
        </p>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 pr-4 font-medium text-muted-foreground">Command</th>
                <th className="pb-3 pr-4 font-medium text-muted-foreground">Agent</th>
                <th className="pb-3 font-medium text-muted-foreground">What Happens</th>
              </tr>
            </thead>
            <tbody>
              {phases.map((p) => (
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
      </div>
    </section>
  );
}
