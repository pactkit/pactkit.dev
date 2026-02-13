export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>MIT License &copy; {new Date().getFullYear()} PactKit</p>
        <nav className="flex gap-6">
          <a
            href="https://pypi.org/project/pactkit/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            PyPI
          </a>
          <a
            href="https://github.com/pactkit/pactkit"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="/docs"
            className="hover:text-foreground transition-colors"
          >
            Docs
          </a>
        </nav>
      </div>
    </footer>
  );
}
