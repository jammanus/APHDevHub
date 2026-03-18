import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Started — DevHub",
  description:
    "Set up your Developer Knowledge Hub in minutes. Choose a plan and start centralizing your team's technical knowledge today.",
};

/* ── SVG Icon Components ── */

function IconCode({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
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

function IconRocket({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
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

function IconBuilding({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
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

function IconGitHub({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

/* ── Main Page ── */

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white text-sm font-bold shadow-lg shadow-primary/20">
              <IconCode className="w-5 h-5" />
            </span>
            <span>Dev<span className="text-primary">Hub</span></span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-alt sm:inline-flex"
            >
              <IconArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.12),transparent)]" />
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/20 animate-pulse-glow">
            <IconRocket className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Start Building Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Knowledge Hub
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Choose the plan that fits your team. Every plan includes full-text search,
            collaborative editing, and structured documentation out of the box.
          </p>
        </div>
      </section>

      {/* ── Pricing Plans ── */}
      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.featured
                    ? "border-primary/40 bg-background shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                    : "border-border bg-background hover:border-primary/20"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-white shadow-md">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                      plan.featured
                        ? "bg-primary text-white"
                        : "bg-primary/10 text-primary"
                    }`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                  </div>
                  <p className="text-sm text-muted">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                    {plan.period && <span className="text-muted text-sm">{plan.period}</span>}
                  </div>
                  {plan.subprice && (
                    <p className="mt-1 text-xs text-muted">{plan.subprice}</p>
                  )}
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <IconCheck className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "text-primary" : "text-success"}`} />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#setup"
                  className={`inline-flex h-12 items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all ${
                    plan.featured
                      ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35"
                      : "border border-border bg-surface hover:bg-surface-alt"
                  }`}
                >
                  {plan.cta}
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Setup Steps ── */}
      <section id="setup" className="py-20 bg-grid">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <IconTerminal className="w-3.5 h-3.5" />
              Quick Setup
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Get your hub running in 3 steps
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              From sign-up to your first published article in under 5 minutes.
            </p>
          </div>

          <div className="space-y-6">
            {setupSteps.map((step, i) => (
              <div
                key={step.title}
                className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/30 hover:shadow-lg md:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-lg font-bold text-white shadow-md shadow-primary/20">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted">{step.description}</p>
                    {step.code && (
                      <div className="mt-4 overflow-hidden rounded-xl border border-border">
                        <div className="flex items-center gap-2 border-b border-border bg-code-bg px-4 py-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                          <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                          <span className="ml-2 text-xs text-code-fg/40 font-mono">{step.codeLabel}</span>
                        </div>
                        <pre className="bg-code-bg p-4 text-sm leading-relaxed text-code-fg font-mono overflow-x-auto">
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/20"
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 leading-relaxed text-muted text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Join hundreds of engineering teams who trust DevHub to manage their technical knowledge.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/35"
            >
              Create Free Account
              <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-surface px-8 text-base font-semibold transition-colors hover:bg-surface-alt"
            >
              Talk to Sales
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Free for teams up to 10 &middot; No credit card required &middot; Cancel anytime
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted md:flex-row">
          <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-primary to-accent text-white text-[10px]">
              <IconCode className="w-3 h-3" />
            </span>
            Dev<span className="text-primary">Hub</span>
          </Link>
          <p>&copy; {new Date().getFullYear()} DevHub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Data ── */

const plans = [
  {
    name: "Starter",
    icon: <IconTerminal className="w-5 h-5" />,
    description: "Perfect for small teams getting started with knowledge sharing.",
    price: "Free",
    period: "",
    subprice: "Up to 10 team members",
    featured: false,
    cta: "Start Free",
    features: [
      "Up to 10 team members",
      "500 articles & documents",
      "Full-text search",
      "Markdown editor",
      "Basic tags & categories",
      "Community support",
    ],
  },
  {
    name: "Team",
    icon: <IconUsers className="w-5 h-5" />,
    description: "For growing teams that need advanced collaboration and organization.",
    price: "$12",
    period: "/ user / month",
    subprice: "Billed annually, or $15 monthly",
    featured: true,
    cta: "Start 14-Day Trial",
    features: [
      "Unlimited team members",
      "Unlimited articles & documents",
      "Advanced search with filters",
      "Collaborative real-time editing",
      "Onboarding learning paths",
      "Version history & change tracking",
      "SSO / SAML authentication",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    icon: <IconBuilding className="w-5 h-5" />,
    description: "For organizations that need full control, compliance, and scale.",
    price: "Custom",
    period: "",
    subprice: "Tailored to your organization",
    featured: false,
    cta: "Contact Sales",
    features: [
      "Everything in Team",
      "Self-hosted deployment option",
      "Advanced access control & RBAC",
      "Audit logs & compliance reports",
      "Custom integrations & API access",
      "Dedicated account manager",
      "99.99% uptime SLA",
      "24/7 premium support",
    ],
  },
];

const setupSteps = [
  {
    title: "Create your workspace",
    description:
      "Sign up with your email or SSO provider, name your workspace, and invite your team. That's it — your hub is live.",
    code: null,
    codeLabel: "",
  },
  {
    title: "Import existing docs or start fresh",
    description:
      "Bring in your existing knowledge from Markdown files, Notion exports, or Confluence. Or start from scratch with our templates.",
    code: `# Import from Markdown files
devhub import --source ./docs --format markdown

# Import from Notion
devhub import --source notion --token $NOTION_TOKEN

# Import from Confluence
devhub import --source confluence --url https://your-org.atlassian.net`,
    codeLabel: "terminal",
  },
  {
    title: "Organize, tag, and publish",
    description:
      "Structure your content with categories and tags, set up permissions for different teams, and hit publish. Your team can start searching and contributing immediately.",
    code: `# devhub.config.yml
workspace:
  name: "Acme Engineering"
  
categories:
  - name: "Architecture"
    icon: "blueprint"
  - name: "Onboarding"
    icon: "rocket"
  - name: "Runbooks"
    icon: "shield"

permissions:
  default: "read"
  contributors: ["engineering", "devops"]`,
    codeLabel: "devhub.config.yml",
  },
];

const faqs = [
  {
    question: "Can I self-host DevHub?",
    answer:
      "Yes! Our Enterprise plan includes a self-hosted option. You can deploy DevHub on your own infrastructure using Docker or Kubernetes. We provide full deployment guides and support.",
  },
  {
    question: "How does the free plan work?",
    answer:
      "The Starter plan is completely free for teams of up to 10 members. You get full-text search, a Markdown editor, and basic organization features — no credit card required, no trial expiration.",
  },
  {
    question: "Can I import my existing documentation?",
    answer:
      "Absolutely. DevHub supports importing from Markdown, Notion, Confluence, and Google Docs. You can also use our REST API to programmatically sync content from any source.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is a top priority. All data is encrypted at rest and in transit. Enterprise plans include SSO/SAML, RBAC, audit logs, and SOC 2 Type II compliance. Self-hosted deployments give you full control over your data.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "Starter plans get community support through our forum and docs. Team plans include priority email support with a 24-hour response SLA. Enterprise plans get a dedicated account manager and 24/7 premium support.",
  },
  {
    question: "Can I try the Team plan before committing?",
    answer:
      "Yes — every Team plan starts with a 14-day free trial with full access to all features. No credit card required to start your trial.",
  },
];
