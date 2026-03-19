"use client";

import { useState } from "react";
import Link from "next/link";
import type { Article } from "@/app/lib/articles";

const categories = (articles: Article[]) =>
  ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

export default function ArticleList({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      {/* Category pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories(articles).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
              cat === active
                ? "border-red-600 bg-red-600 text-white"
                : "border-border bg-background text-muted hover:border-red-300 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Article Grid */}
      <div className="mt-16">
        <p className="mb-8 text-sm text-muted">{filtered.length} article{filtered.length !== 1 ? "s" : ""}</p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group relative rounded-xl border border-border bg-surface p-6 transition-all hover:border-red-200 hover:shadow-lg hover:shadow-red-600/[0.03]"
            >
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className={`inline-block h-2 w-2 rounded-full ${a.color}`} />
                <span className="font-semibold uppercase tracking-wider">{a.category}</span>
                <span className="ml-auto font-medium">{a.time} read</span>
              </div>
              <h2 className="mt-4 text-base font-semibold group-hover:text-red-600 transition-colors">
                {a.title}
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">{a.desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <div className="h-6 w-6 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                  <span className="font-medium">{a.author}</span>
                </div>
                <span className="text-xs text-muted">{a.date}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {a.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-surface-alt px-2 py-0.5 text-[11px] font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
