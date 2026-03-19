import type { Metadata } from "next";
import Link from "next/link";
import AuthButtons from "@/app/components/AuthButtons";

export const metadata: Metadata = {
  title: "Get Started — DevHub",
  description:
    "Learn how DevHub works and set up your team's knowledge hub in minutes.",
};

/* ── Icons ── */

function IconCode({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
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

function IconArrowLeft({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  );
}

/* ── Page ── */

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-600 text-white">
              <IconCode className="w-4 h-4" />
            </span>
            <span>Dev<span className="text-red-600">Hub</span></span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium hover:bg-surface-alt transition-colors"
            >
              <IconArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <AuthButtons />
          </div>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 -z-20 bg-code-bg" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(37,99,235,0.15),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />
        {/* Floating code fragments */}
        <div className="absolute top-16 left-[8%] -z-10 hidden font-mono text-xs text-blue-400/10 leading-relaxed md:block animate-float">
          <div>const hub = new DevHub();</div>
          <div>await hub.init(config);</div>
          <div>hub.publish(article);</div>
        </div>
        <div className="absolute bottom-24 right-[8%] -z-10 hidden font-mono text-xs text-blue-400/10 leading-relaxed md:block animate-float" style={{ animationDelay: "3s" }}>
          <div>{"{"} search: true {"}"}</div>
          <div>{"{"} categories: [...] {"}"}</div>
          <div>{"{"} tags: [...] {"}"}</div>
        </div>
        <div className="absolute top-1/3 right-[15%] -z-10 hidden font-mono text-xs text-blue-400/[0.06] lg:block">
          <div>$ devhub deploy --prod</div>
          <div className="text-green-400/10">✓ deployed in 2.3s</div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            Get Started
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            Build your team&apos;s
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
              knowledge engine
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            DevHub is a centralized platform where your team publishes and organizes
            technical articles, documentation, and best practices — searchable,
            structured, and built for developers.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/register"
              className="group inline-flex h-12 items-center gap-2 rounded-lg bg-blue-600 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 transition-colors"
            >
              Create free account
              <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#steps"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-zinc-700 px-8 text-sm font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
            >
              See how it works
            </a>
          </div>

          {/* Terminal teaser */}
          <div className="mx-auto mt-14 max-w-lg text-left">
            <div className="rounded-xl border border-zinc-800 bg-black/40 backdrop-blur-sm overflow-hidden">
              <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-mono text-[11px] text-zinc-600">terminal</span>
              </div>
              <div className="px-5 py-4 font-mono text-sm leading-relaxed">
                <div className="text-zinc-500">$ devhub init my-knowledge-base</div>
                <div className="mt-1 text-zinc-400">
                  <span className="text-green-400">✓</span> Workspace created
                </div>
                <div className="text-zinc-400">
                  <span className="text-green-400">✓</span> Categories configured
                </div>
                <div className="text-zinc-400">
                  <span className="text-green-400">✓</span> Ready to publish
                </div>
                <div className="mt-2 text-zinc-500">$ devhub publish &quot;Getting&nbsp;Started&nbsp;Guide&quot;</div>
                <div className="mt-1 text-blue-400">→ Published at /docs/getting-started</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section id="steps" className="border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-6 space-y-10">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-red-600 text-sm font-bold text-white">
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-muted leading-relaxed">{step.description}</p>
                {step.code && (
                  <div className="code-window mt-4">
                    <div className="code-window-bar">
                      <div className="code-window-dot bg-red-500" />
                      <div className="code-window-dot bg-yellow-500" />
                      <div className="code-window-dot bg-green-500" />
                      <span className="ml-3 text-xs text-code-fg/40 font-mono">{step.codeLabel}</span>
                    </div>
                    <pre className="p-4 text-sm leading-relaxed text-code-fg font-mono overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight">Ready?</h2>
          <p className="mt-2 text-muted">Create your account and start publishing in minutes.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/register"
              className="group inline-flex h-12 items-center gap-2 rounded-md bg-red-600 px-7 text-sm font-semibold text-white shadow-lg shadow-red-600/20 hover:bg-red-700 transition-colors"
            >
              Create free account
              <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/login"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-border px-7 text-sm font-medium hover:bg-surface-alt transition-colors"
            >
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border bg-surface-alt">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted md:flex-row">
          <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-red-600 text-white text-[10px]">
              <IconCode className="w-3 h-3" />
            </span>
            <span>Dev<span className="text-red-600">Hub</span></span>
          </Link>
          <p>&copy; {new Date().getFullYear()} DevHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

/* ── Data ── */

const steps = [
  {
    title: "Create your account",
    description:
      "Sign up with your email. Once verified, you can create a workspace and invite your team.",
    code: null,
    codeLabel: "",
  },
  {
    title: "Set up your workspace",
    description:
      "Define categories, invite contributors, and configure permissions. You can also import existing docs from Markdown files.",
    code: `# devhub.config.yml
workspace:
  name: "Acme Engineering"

categories:
  - Architecture
  - Onboarding
  - Runbooks

permissions:
  default: read
  contributors:
    - engineering
    - devops`,
    codeLabel: "devhub.config.yml",
  },
  {
    title: "Write and publish",
    description:
      "Create articles using the Markdown editor. Preview your drafts, add tags, and publish when ready. Your team can search and discover articles immediately.",
    code: null,
    codeLabel: "",
  },
];
