import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const agents = [
  { name: "System Architect", role: "Architecture design", desc: "Maintain Intent Graph, write Specs" },
  { name: "Senior Developer", role: "Full-stack development", desc: "TDD loop, call chain analysis, hotfix" },
  { name: "QA Engineer", role: "Quality gates", desc: "Deep check (P0-P3), PR review" },
  { name: "Security Auditor", role: "Security audit", desc: "OWASP scanning, threat modeling" },
  { name: "Repo Maintainer", role: "Repository ops", desc: "Cleanup, archiving, Git conventions, releases" },
  { name: "System Medic", role: "System diagnostics", desc: "Configuration drift repair" },
  { name: "Visual Architect", role: "Architecture visualization", desc: "Draw.io XML generation" },
  { name: "Code Explorer", role: "Code tracing", desc: "Call graph + sequence diagram" },
  { name: "Product Designer", role: "Product design", desc: "PRD, story decomposition, board init" },
];

export function Agents() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">
        Agent Ensemble
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        9 specialized agents, each with constrained tools and focused
        responsibilities.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((a) => (
          <Card key={a.name}>
            <CardHeader className="pb-4">
              <CardTitle className="text-base">{a.name}</CardTitle>
              <CardDescription className="text-xs leading-relaxed">
                <span className="font-medium text-foreground/70">{a.role}</span>
                {" — "}
                {a.desc}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
