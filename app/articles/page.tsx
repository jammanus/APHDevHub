import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/app/lib/articles";
import ArticleList from "./ArticleList";
import AuthButtons from "@/app/components/AuthButtons";

export const metadata: Metadata = {
  title: "Articles — DevHub",
  description:
    "Browse technical articles, guides, and best practices from the DevHub knowledge base.",
};

function IconCode({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
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

export default function ArticlesPage() {
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
            <Link href="/#features" className="hover:text-foreground transition-colors">Features</Link>
            <Link href="/articles" className="text-foreground">Articles</Link>
            <Link href="/get-started" className="hover:text-foreground transition-colors">Get Started</Link>
          </div>

          <AuthButtons />
        </nav>
      </header>

      {/* ── Header ── */}
      <section className="border-b border-border bg-surface-alt py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-6">
            <IconArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Articles</h1>
          <p className="mt-3 max-w-xl text-muted leading-relaxed">
            Technical guides, architecture decisions, best practices, and onboarding docs — all in one place.
          </p>

          <ArticleList articles={articles} />
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
