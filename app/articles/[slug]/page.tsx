import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getAllSlugs } from "@/app/lib/articles";
import AuthButtons from "@/app/components/AuthButtons";

/* ── Static params for all slugs ── */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* ── Dynamic metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found — DevHub" };
  return {
    title: `${article.title} — DevHub`,
    description: article.desc,
  };
}

/* ── Icons ── */
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

/* ── Simple markdown-ish renderer ── */
function ArticleContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <div key={elements.length} className="my-5 overflow-hidden rounded-lg border border-border">
          {lang && (
            <div className="border-b border-border bg-surface-alt px-4 py-2 text-xs font-mono text-muted">
              {lang}
            </div>
          )}
          <pre className="overflow-x-auto bg-[#0a0a0a] p-4 text-sm leading-relaxed text-neutral-300 dark:bg-[#0a0a0a]">
            <code>{codeLines.join("\n")}</code>
          </pre>
        </div>
      );
      continue;
    }

    // Heading
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={elements.length} className="mb-3 mt-10 text-xl font-bold tracking-tight text-foreground">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // Bullet
    if (line.startsWith("- ")) {
      const bullets: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        bullets.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={elements.length} className="my-3 ml-4 list-disc space-y-1.5 text-muted leading-relaxed">
          {bullets.map((b, bi) => (
            <li key={bi}>{b}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    elements.push(
      <p key={elements.length} className="my-3 text-muted leading-relaxed">
        {line}
      </p>
    );
    i++;
  }

  return <div className="article-body">{elements}</div>;
}

/* ── Page ── */
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Find adjacent articles for navigation
  const idx = articles.findIndex((a) => a.slug === slug);
  const prev = idx > 0 ? articles[idx - 1] : null;
  const next = idx < articles.length - 1 ? articles[idx + 1] : null;

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

      {/* ── Article Header ── */}
      <section className="border-b border-border bg-surface-alt py-12">
        <div className="mx-auto max-w-3xl px-6">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-6">
            <IconArrowLeft className="w-3.5 h-3.5" />
            All articles
          </Link>

          <div className="flex items-center gap-2 text-xs text-muted mb-4">
            <span className={`inline-block h-2 w-2 rounded-full ${article.color}`} />
            <span className="font-semibold uppercase tracking-wider">{article.category}</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">{article.title}</h1>
          <p className="mt-4 text-muted leading-relaxed">{article.desc}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-700" />
              <span className="font-medium">{article.author}</span>
            </div>
            <span className="hidden sm:block">·</span>
            <span>{article.date}</span>
            <span className="hidden sm:block">·</span>
            <span>{article.time} read</span>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Article Content ── */}
      <article className="py-12">
        <div className="mx-auto max-w-3xl px-6 text-[15px]">
          <ArticleContent content={article.content} />
        </div>
      </article>

      {/* ── Prev / Next navigation ── */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-3xl gap-4 px-6 py-10 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/articles/${prev.slug}`}
              className="group rounded-xl border border-border p-5 transition-all hover:border-red-200"
            >
              <span className="text-xs text-muted">← Previous</span>
              <p className="mt-1 text-sm font-semibold group-hover:text-red-600 transition-colors">{prev.title}</p>
            </Link>
          ) : <div />}
          {next && (
            <Link
              href={`/articles/${next.slug}`}
              className="group rounded-xl border border-border p-5 text-right transition-all hover:border-red-200"
            >
              <span className="text-xs text-muted">Next →</span>
              <p className="mt-1 text-sm font-semibold group-hover:text-red-600 transition-colors">{next.title}</p>
            </Link>
          )}
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
