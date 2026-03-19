import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Workflow } from "@/components/workflow";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PactKit",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Cross-platform",
  description:
    "Spec-driven agentic development toolkit for AI coding assistants. Compiles workflows, role definitions, and behavioral rules into executable constitutions and playbooks.",
  url: "https://pactkit.dev",
  downloadUrl: "https://pypi.org/project/pactkit/",
  license: "https://opensource.org/licenses/MIT",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Hero />
        <Features />
        <Workflow />
        <Footer />
      </main>
    </>
  );
}
