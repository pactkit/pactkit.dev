import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PactKit — Spec-Driven Agentic DevOps Toolkit",
  description:
    "Compile development workflows, role definitions, and behavioral rules into executable constitutions and playbooks for AI coding assistants.",
  metadataBase: new URL("https://pactkit.dev"),
  openGraph: {
    title: "PactKit — Code by Contract",
    description:
      "Spec-driven agentic DevOps toolkit for AI coding assistants. 9 agents, 13 commands, full PDCA lifecycle.",
    url: "https://pactkit.dev",
    siteName: "PactKit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PactKit — Code by Contract",
    description:
      "Spec-driven agentic DevOps toolkit for AI coding assistants.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
