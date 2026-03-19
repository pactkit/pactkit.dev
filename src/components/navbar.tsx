import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="PactKit" width={32} height={32} className="rounded" />
          <span className="font-semibold">PactKit</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/docs"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/cn/docs"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            中文文档
          </Link>
          <Link
            href="/docs/examples"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Examples
          </Link>
          <Link
            href="/docs/changelog"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Changelog
          </Link>
          <a
            href="https://pypi.org/project/pactkit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            PyPI
          </a>
          <a
            href="https://github.com/pactkit/pactkit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
