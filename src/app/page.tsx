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
    "P.A.C.T. governance framework for AI coding assistants. CODE is the Law, Data is the Truth, Prompt is ONLY instruction, AI is ONLY creativity. Enforces clear boundaries between human intent and AI execution.",
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
