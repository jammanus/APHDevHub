import Link from "next/link";

/* ── SVG Icon Components ── */

function IconSearch({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function IconBook({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function IconUsers({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function IconRocket({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  );
}

function IconTag({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
  );
}

function IconShield({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function IconTerminal({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  );
}

function IconCog({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.248a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function IconCompass({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

function IconSeedling({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function IconCheck({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function IconCode({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );
}

function IconBolt({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  );
}

function IconGitHub({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

/* ── Code Window Component ── */

function CodeWindow() {
  return (
    <div className="code-window animate-float w-full max-w-lg font-mono text-sm">
      <div className="code-window-bar">
        <div className="code-window-dot bg-[#ff5f57]" />
        <div className="code-window-dot bg-[#febc2e]" />
        <div className="code-window-dot bg-[#28c840]" />
        <span className="ml-3 text-xs text-white/40">knowledge-hub.ts</span>
      </div>
      <div className="p-5 text-code-fg leading-relaxed space-y-1">
        <div><span className="text-[#c084fc]">import</span> {"{"} <span className="text-[#67e8f9]">DevHub</span> {"}"} <span className="text-[#c084fc]">from</span> <span className="text-[#86efac]">&quot;@devhub/core&quot;</span>;</div>
        <div className="h-3" />
        <div><span className="text-[#c084fc]">const</span> <span className="text-[#67e8f9]">hub</span> = <span className="text-[#c084fc]">new</span> <span className="text-[#fbbf24]">DevHub</span>({"{"}</div>
        <div className="pl-4"><span className="text-[#f9a8d4]">team</span>: <span className="text-[#86efac]">&quot;engineering&quot;</span>,</div>
        <div className="pl-4"><span className="text-[#f9a8d4]">search</span>: <span className="text-[#67e8f9]">true</span>,</div>
        <div className="pl-4"><span className="text-[#f9a8d4]">collaborative</span>: <span className="text-[#67e8f9]">true</span>,</div>
        <div>{"}"});</div>
        <div className="h-3" />
        <div><span className="text-white/30">{"// Find anything in milliseconds"}</span></div>
        <div><span className="text-[#c084fc]">const</span> <span className="text-[#67e8f9]">results</span> = <span className="text-[#c084fc]">await</span> hub.<span className="text-[#fbbf24]">search</span>(<span className="text-[#86efac]">&quot;auth middleware&quot;</span>);</div>
        <div className="flex items-center gap-1">
          <span className="text-[#86efac]">✓ 12 results</span>
          <span className="text-white/30">in 23ms</span>
        </div>
      </div>
    </div>
  );
}

/* ── Stats Bar Component ── */

function StatsBar() {
  return (
    <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-border bg-surface p-6 text-center animate-fade-in-up">
          <div className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl">{s.value}</div>
          <div className="mt-1 text-sm text-muted">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Main Page ── */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white text-sm font-bold shadow-lg shadow-primary/20">
              <IconCode className="w-5 h-5" />
            </span>
            <span>Dev<span className="text-primary">Hub</span></span>
          </a>
          <ul className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            <li><a href="#features" className="transition-colors hover:text-foreground">Features</a></li>
            <li><a href="#audience" className="transition-colors hover:text-foreground">Who It&apos;s For</a></li>
            <li><a href="#how-it-works" className="transition-colors hover:text-foreground">How It Works</a></li>
            <li><a href="#testimonials" className="transition-colors hover:text-foreground">Testimonials</a></li>
          </ul>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-alt sm:inline-flex">
              <IconGitHub className="w-4 h-4" />
              Star on GitHub
            </a>
            <Link
              href="/get-started"
              className="rounded-lg bg-gradient-to-r from-primary to-primary-dark px-5 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.12),transparent)]" />
        <div className="absolute top-20 left-10 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 -z-10 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />

        <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left – copy */}
            <div className="animate-fade-in-up">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <IconBolt className="w-3.5 h-3.5" />
                Knowledge, Centralized
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Your Team&apos;s Single
                <br />
                Source of{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  Technical Truth
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
                DevHub centralizes documentation, best practices, and tribal knowledge into one
                searchable platform — so your developers spend less time searching and more time
                shipping.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/get-started"
                  className="group inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-7 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/35"
                >
                  Start Building Your Hub
                  <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#features"
                  className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-surface px-7 text-base font-semibold transition-colors hover:bg-surface-alt"
                >
                  <IconTerminal className="w-4 h-4 text-muted" />
                  Explore Features
                </a>
              </div>

              {/* Trust signals */}
              <div className="mt-8 flex items-center gap-6 text-sm text-muted">
                <span className="flex items-center gap-1.5"><IconCheck className="w-4 h-4 text-success" /> Free to start</span>
                <span className="flex items-center gap-1.5"><IconCheck className="w-4 h-4 text-success" /> No credit card</span>
                <span className="flex items-center gap-1.5"><IconCheck className="w-4 h-4 text-success" /> Self-hostable</span>
              </div>
            </div>

            {/* Right – code window visual */}
            <div className="hidden lg:block">
              <CodeWindow />
            </div>
          </div>

          {/* Stats */}
          <StatsBar />
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <IconCog className="w-3.5 h-3.5" />
              Platform Features
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Everything your engineering team needs
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              A purpose-built platform that turns scattered docs into an organized, living
              knowledge base your team will actually use.
            </p>
          </div>
          <div className="stagger mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 animate-fade-in-up"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dashboard Preview ── */}
      <section className="py-24 bg-grid">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A developer-first interface
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Clean, fast, keyboard-navigable — built the way developers expect tools to work.
            </p>
          </div>

          {/* Mock dashboard */}
          <div className="mt-14 animate-fade-in-up">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/10">
              {/* Title bar */}
              <div className="flex items-center justify-between border-b border-border bg-surface-alt px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-muted">
                  <IconSearch className="w-3 h-3" />
                  Search docs, guides, runbooks...
                  <kbd className="ml-4 rounded border border-border bg-surface-alt px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
                </div>
                <div className="w-[68px]" />
              </div>
              {/* Body */}
              <div className="grid md:grid-cols-[220px_1fr]">
                {/* Sidebar */}
                <div className="hidden border-r border-border bg-surface-alt p-4 md:block">
                  <div className="space-y-1 text-sm">
                    {sidebarItems.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2.5 rounded-lg px-3 py-2 ${
                          item.active
                            ? "bg-primary/10 font-medium text-primary"
                            : "text-muted hover:bg-background"
                        }`}
                      >
                        {item.icon}
                        {item.label}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-border bg-background p-3">
                    <div className="text-xs font-semibold text-muted uppercase tracking-wider">Quick Stats</div>
                    <div className="mt-2 space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-muted">Articles</span><span className="font-semibold">342</span></div>
                      <div className="flex justify-between"><span className="text-muted">Contributors</span><span className="font-semibold">28</span></div>
                      <div className="flex justify-between"><span className="text-muted">Searches today</span><span className="font-semibold">1,204</span></div>
                    </div>
                  </div>
                </div>
                {/* Main content */}
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Getting Started Guides</h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">12 articles</span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {previewCards.map((card) => (
                      <div key={card.title} className="group cursor-pointer rounded-xl border border-border bg-background p-4 transition-all hover:border-primary/30 hover:shadow-md">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`h-2 w-2 rounded-full ${card.color}`} />
                            <span className="text-xs font-medium text-muted uppercase tracking-wider">{card.category}</span>
                          </div>
                          <span className="text-xs text-muted">{card.time}</span>
                        </div>
                        <h4 className="mt-2 text-sm font-semibold group-hover:text-primary transition-colors">{card.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted line-clamp-2">{card.desc}</p>
                        <div className="mt-3 flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-primary/40 to-accent/40" />
                          <span className="text-xs text-muted">{card.author}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Audience ── */}
      <section id="audience" className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-success">
              <IconUsers className="w-3.5 h-3.5" />
              Built For You
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Designed for technical teams
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Whether you&apos;re leading architecture decisions or onboarding your first week — DevHub
              adapts to how you work.
            </p>
          </div>
          <div className="stagger mt-16 grid gap-8 md:grid-cols-3">
            {audiences.map((a) => (
              <div
                key={a.role}
                className="group rounded-2xl border border-border bg-background p-8 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 animate-fade-in-up"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  {a.icon}
                </div>
                <h3 className="text-lg font-semibold">{a.role}</h3>
                <p className="mt-3 leading-relaxed text-muted">{a.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-24 bg-grid">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <IconRocket className="w-3.5 h-3.5" />
              Quick Setup
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Up and running in minutes
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Three simple steps to transform how your team shares knowledge.
            </p>
          </div>
          <div className="stagger mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-border bg-surface p-8 text-center animate-fade-in-up">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-px w-8 translate-x-full bg-border md:block" />
                )}
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-xl font-bold text-white shadow-lg shadow-primary/20">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Loved by engineering teams
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              See how teams use DevHub to level up their knowledge sharing.
            </p>
          </div>
          <div className="stagger mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-background p-8 animate-fade-in-up">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-muted italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30 text-sm font-bold text-foreground">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="mx-auto max-w-3xl px-6 text-center animate-fade-in-up">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/20 animate-pulse-glow">
            <IconCode className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Ready to centralize your
            <br />
            team&apos;s knowledge?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Stop losing critical know-how when people switch projects or leave. Start building
            your Developer Knowledge Hub today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/get-started"
              className="group inline-flex h-13 items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/35"
            >
              Get Started — It&apos;s Free
              <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#"
              className="inline-flex h-13 items-center gap-2 rounded-xl border border-border bg-surface px-8 text-base font-semibold transition-colors hover:bg-surface-alt"
            >
              Request a Demo
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">
            Free for teams up to 10 members &middot; No credit card required
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <a href="#" className="flex items-center gap-2.5 text-lg font-bold">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white text-xs">
                  <IconCode className="w-4 h-4" />
                </span>
                Dev<span className="text-primary">Hub</span>
              </a>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                The developer knowledge platform that helps teams find, share, and preserve technical knowledge.
              </p>
            </div>
            {/* Links */}
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">{col.heading}</h4>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link}><a href="#" className="text-sm text-muted transition-colors hover:text-foreground">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted md:flex-row">
            <p>&copy; {new Date().getFullYear()} DevHub. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="transition-colors hover:text-foreground" aria-label="GitHub">
                <IconGitHub className="w-5 h-5" />
              </a>
              <a href="#" className="transition-colors hover:text-foreground" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Data ── */

const stats = [
  { value: "10K+", label: "Articles Indexed" },
  { value: "500+", label: "Teams Active" },
  { value: "<50ms", label: "Search Latency" },
  { value: "99.9%", label: "Uptime SLA" },
];

const features = [
  {
    icon: <IconSearch />,
    title: "Instant Search",
    description:
      "Find any document, snippet, or decision record in milliseconds with full-text search across your entire knowledge base.",
  },
  {
    icon: <IconBook />,
    title: "Structured Documentation",
    description:
      "Organize guides, runbooks, and architecture docs in a clear hierarchy that mirrors how your team actually thinks.",
  },
  {
    icon: <IconUsers />,
    title: "Collaborative Editing",
    description:
      "Multiple authors can contribute and review content with built-in version history and change tracking.",
  },
  {
    icon: <IconRocket />,
    title: "Onboarding Paths",
    description:
      "Create guided learning tracks for new hires so they can ramp up quickly without constant hand-holding.",
  },
  {
    icon: <IconTag />,
    title: "Tags & Categories",
    description:
      "Cross-reference topics with flexible tagging. Surface related content automatically so nothing gets siloed.",
  },
  {
    icon: <IconShield />,
    title: "Access Control",
    description:
      "Team-level permissions let you share the right knowledge with the right people — nothing more, nothing less.",
  },
];

const audiences = [
  {
    icon: <IconCog className="w-7 h-7" />,
    role: "Engineering Teams",
    benefit:
      "Reduce context-switching by keeping architecture decisions, coding standards, and troubleshooting guides in one place.",
  },
  {
    icon: <IconCompass className="w-7 h-7" />,
    role: "Technical Leads & Architects",
    benefit:
      "Document system design decisions once and make them discoverable forever — no more re-explaining in Slack.",
  },
  {
    icon: <IconSeedling className="w-7 h-7" />,
    role: "Onboarding Engineers",
    benefit:
      "Follow curated learning paths that get you productive in days instead of weeks, with real context from your codebase.",
  },
];

const steps = [
  {
    title: "Create your workspace",
    description:
      "Set up your team's hub in under a minute. Import existing docs from Markdown, Notion, or Confluence.",
  },
  {
    title: "Organize & contribute",
    description:
      "Structure knowledge into categories, tag articles, and invite your team to collaborate in real time.",
  },
  {
    title: "Search, learn & ship",
    description:
      "A single, searchable source of truth — enabling faster onboarding, fewer repeated questions, and better decisions.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Staff Engineer, Fintech Co",
    quote:
      "We cut onboarding time from 3 weeks to 5 days. New hires actually find answers before asking in Slack now.",
  },
  {
    name: "Marcus Rodriguez",
    title: "VP Engineering, SaaS Startup",
    quote:
      "DevHub replaced our messy Confluence + Google Docs + Notion setup. Everything is finally in one place and searchable.",
  },
  {
    name: "Priya Sharma",
    title: "Tech Lead, E-commerce Platform",
    quote:
      "The search is blazing fast. My team went from 'who knows about X?' to 'let me search DevHub' overnight.",
  },
];

const sidebarItems = [
  { label: "Dashboard", icon: <IconTerminal className="w-4 h-4" />, active: false },
  { label: "Getting Started", icon: <IconRocket className="w-4 h-4" />, active: true },
  { label: "Architecture", icon: <IconCode className="w-4 h-4" />, active: false },
  { label: "API Reference", icon: <IconBook className="w-4 h-4" />, active: false },
  { label: "Runbooks", icon: <IconShield className="w-4 h-4" />, active: false },
  { label: "Team Wiki", icon: <IconUsers className="w-4 h-4" />, active: false },
];

const previewCards = [
  {
    category: "Setup",
    title: "Local Development Environment",
    desc: "Step-by-step guide to setting up your dev environment with Docker, databases, and required services.",
    author: "Alex Kim",
    time: "5 min read",
    color: "bg-primary",
  },
  {
    category: "Architecture",
    title: "Authentication Flow Overview",
    desc: "Complete walkthrough of the OAuth2 + JWT authentication pipeline and token refresh logic.",
    author: "Sarah Chen",
    time: "8 min read",
    color: "bg-accent",
  },
  {
    category: "Best Practice",
    title: "Code Review Guidelines",
    desc: "Team conventions for pull requests, review etiquette, approval workflows, and merge strategies.",
    author: "Marcus R.",
    time: "4 min read",
    color: "bg-success",
  },
  {
    category: "Runbook",
    title: "Incident Response Playbook",
    desc: "What to do when an alert fires: escalation paths, rollback procedures, and communication templates.",
    author: "Priya Sharma",
    time: "6 min read",
    color: "bg-[#f59e0b]",
  },
];

const footerLinks = [
  {
    heading: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "API Reference", "Blog", "Community"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Privacy", "Terms"],
  },
];
