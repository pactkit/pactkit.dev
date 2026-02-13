import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Workflow } from "@/components/workflow";
import { Agents } from "@/components/agents";
import { QuickStart } from "@/components/quickstart";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Workflow />
      <Agents />
      <QuickStart />
      <Footer />
    </main>
  );
}
