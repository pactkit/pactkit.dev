import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Spec is the Law",
    description:
      "Specifications are the single source of truth. Spec > Tests > Code. When conflicts arise, Spec wins. Always.",
  },
  {
    title: "Multi-Agent Ensemble",
    description:
      "9 specialized agents collaborate with constrained tools and focused responsibilities — from Architect to QA.",
  },
  {
    title: "Full PDCA Lifecycle",
    description:
      "Plan, Act, Check, Done — with quality gates at every stage. Or run the full cycle in one command with /project-sprint.",
  },
  {
    title: "Safe by Design",
    description:
      "TDD-first development, safe regression testing, and pre-existing test protection. Agents can't break what already works.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">
        Why PactKit?
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
        AI coding assistants are powerful but unpredictable without structure.
        PactKit adds a spec-driven governance layer.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {features.map((f) => (
          <Card key={f.title}>
            <CardHeader>
              <CardTitle className="text-lg">{f.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {f.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
