import Link from "next/link";
import { articles as allArticles } from "@/app/lib/articles";
import AuthButtons from "@/app/components/AuthButtons";

const articles = allArticles.slice(0, 3);

/* ── Inline SVG Icons ── */

function IconCode({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );
}

function IconSearch({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function IconBook({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function IconTag({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
  );
}

function IconShield({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function IconEdit({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
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

/* ── Code Window ── */

function CodeWindow() {
  return (
    <div className="code-window animate-float w-full max-w-md font-mono text-sm">
      <div className="code-window-bar">
        <div className="code-window-dot bg-red-500" />
        <div className="code-window-dot bg-yellow-500" />
        <div className="code-window-dot bg-green-500" />
        <span className="ml-3 text-xs text-neutral-500">knowledge-hub.ts</span>
      </div>
      <div className="p-5 text-code-fg leading-relaxed space-y-1">
        <div><span className="text-red-400">import</span> {"{"} <span className="text-blue-300">DevHub</span> {"}"} <span className="text-red-400">from</span> <span className="text-green-400">&quot;@devhub/core&quot;</span>;</div>
        <div className="h-3" />
        <div><span className="text-red-400">const</span> <span className="text-blue-300">hub</span> = <span className="text-red-400">new</span> <span className="text-yellow-300">DevHub</span>({"{"}</div>
        <div className="pl-4"><span className="text-orange-300">search</span>: <span className="text-blue-300">true</span>,</div>
        <div className="pl-4"><span className="text-orange-300">collaborative</span>: <span className="text-blue-300">true</span>,</div>
        <div>{"}"});</div>
        <div className="h-3" />
        <div><span className="text-neutral-600">{"// Find anything in milliseconds"}</span></div>
        <div><span className="text-red-400">await</span> hub.<span className="text-yellow-300">search</span>(<span className="text-green-400">&quot;auth middleware&quot;</span>);</div>
        <div><span className="text-green-400">✓ 12 results</span> <span className="text-neutral-600">in 23ms</span></div>
      </div>
    </div>
  );
}

/* ── Page ── */

export default function Home() {
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

          <div className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            <Link href="#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="/articles" className="hover:text-foreground transition-colors">Articles</Link>
            <Link href="/get-started" className="hover:text-foreground transition-colors">Get Started</Link>
          </div>

          <AuthButtons />
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Red glow — subtle, top-left bias */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_40%_at_30%_20%,rgba(220,38,38,0.08),transparent)]" />
        {/* Blue hint glow — bottom-right */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_40%_30%_at_75%_80%,rgba(59,130,246,0.04),transparent)]" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

        {/* Decorative line accents */}
        <div className="absolute top-0 left-1/4 -z-10 h-full w-px bg-gradient-to-b from-transparent via-red-600/10 to-transparent" />
        <div className="absolute top-0 right-1/3 -z-10 h-full w-px bg-gradient-to-b from-transparent via-neutral-700/20 to-transparent" />

        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-0">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            {/* Left — copy */}
            <div className="animate-fade-in-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Developer Knowledge Platform</span>
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
                Your team&apos;s single
                <br />
                source of{" "}
                <span className="relative">
                  <span className="text-red-500">technical truth</span>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-red-500 to-red-500/0" />
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-400 md:text-lg">
                Publish articles, organize documentation, and surface best practices —
                all in one searchable, structured hub built for engineering teams.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/register"
                  className="group inline-flex h-12 items-center gap-2 rounded-md bg-red-600 px-7 text-sm font-semibold text-white shadow-lg shadow-red-600/20 hover:bg-red-700 transition-colors"
                >
                  Get started free
                  <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/get-started"
                  className="inline-flex h-12 items-center gap-2 rounded-md border border-neutral-700 px-7 text-sm font-medium text-neutral-300 hover:border-neutral-500 hover:text-white transition-colors"
                >
                  How it works
                </Link>
              </div>

              {/* Trust row */}
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-neutral-500">
                <span className="flex items-center gap-1.5"><span className="text-red-500">&#9679;</span> Free to start</span>
                <span className="flex items-center gap-1.5"><span className="text-red-500">&#9679;</span> Markdown-first</span>
                <span className="flex items-center gap-1.5"><span className="text-red-500">&#9679;</span> Full-text search</span>
              </div>
            </div>

            {/* Right — code window */}
            <div className="hidden lg:block">
              <CodeWindow />
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center max-w-xl mx-auto">
            <span className="inline-block rounded-full bg-red-600/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-600 mb-4">
              Features
            </span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built for how developers work
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Everything you need to manage and share technical knowledge — nothing you don&apos;t.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-border bg-surface p-7 transition-all hover:border-red-200 hover:shadow-lg hover:shadow-red-600/[0.03]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-red-600 group-hover:text-white dark:bg-neutral-800 dark:text-neutral-300">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Articles ── */}
      <section id="articles" className="border-t border-border bg-surface-alt py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <span className="inline-block rounded-full bg-accent/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                Latest
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Recent articles</h2>
            </div>
            <Link href="/articles" className="hidden text-sm font-semibold text-red-600 hover:underline sm:block">
              View all →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link
                key={a.title}
                href={`/articles/${a.slug}`}
                className="group relative rounded-xl border border-border bg-background p-6 transition-all hover:border-red-200 hover:shadow-lg hover:shadow-red-600/[0.03]"
              >
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span className={`inline-block h-2 w-2 rounded-full ${a.color}`} />
                  <span className="font-semibold uppercase tracking-wider">{a.category}</span>
                  <span className="ml-auto font-medium">{a.time}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold group-hover:text-red-600 transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">{a.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-xs text-muted">
                  <div className="h-6 w-6 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                  <span className="font-medium">{a.author}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to centralize your team&apos;s knowledge?
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Stop losing context when people switch projects. Start building your knowledge hub today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/register"
              className="group inline-flex h-12 items-center gap-2 rounded-md bg-red-600 px-8 text-sm font-semibold text-white shadow-lg shadow-red-600/20 hover:bg-red-700 transition-colors"
            >
              Create free account
              <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/get-started"
              className="inline-flex h-12 items-center gap-2 rounded-md border border-border px-8 text-sm font-medium hover:bg-surface-alt transition-colors"
            >
              Learn more
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
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Data ── */

const features = [
  {
    icon: <IconEdit />,
    title: "Content Management",
    description:
      "Create, edit, and publish technical articles with a rich Markdown editor. Draft previews ensure accuracy before publishing.",
  },
  {
    icon: <IconBook />,
    title: "Structured Organization",
    description:
      "Organize articles with categories, tags, and authors. Keep your knowledge base clean and navigable.",
  },
  {
    icon: <IconSearch />,
    title: "Search & Filtering",
    description:
      "Full-text search across your entire knowledge base. Filter by category, tag, or author to find what you need fast.",
  },
  {
    icon: <IconTag />,
    title: "Tags & Categories",
    description:
      "Cross-reference topics with flexible tagging. Surface related content automatically — nothing gets siloed.",
  },
  {
    icon: <IconShield />,
    title: "Draft Preview",
    description:
      "Preview content before publishing to ensure layout and accuracy. Only publish when it's ready.",
  },
  {
    icon: <IconCode />,
    title: "Developer Friendly",
    description:
      "Built for engineers. Markdown-first editing, code syntax highlighting, and a fast keyboard-driven interface.",
  },
];

/* articles imported from @/app/lib/articles */
