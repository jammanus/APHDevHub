export interface Article {
  slug: string;
  title: string;
  desc: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  time: string;
  color: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "authentication-flow-overview",
    title: "Authentication Flow Overview",
    desc: "Complete walkthrough of the OAuth2 + JWT pipeline and token refresh logic.",
    category: "Architecture",
    tags: ["auth", "oauth2", "jwt", "security"],
    author: "Sarah Chen",
    date: "Mar 12, 2026",
    time: "8 min",
    color: "bg-red-500",
    content: `## Overview

Authentication is the backbone of any secure application. This guide walks through our OAuth2 + JWT authentication pipeline, covering the full lifecycle from login to token refresh.

## How the Flow Works

When a user signs in, the client sends credentials to the \`/auth/login\` endpoint. The server validates the credentials against the database, and if successful, issues two tokens:

- **Access Token** — A short-lived JWT (15 minutes) used for API authorization.
- **Refresh Token** — A long-lived opaque token (7 days) stored in an HTTP-only cookie.

\`\`\`typescript
// POST /auth/login
const { accessToken, refreshToken } = await authService.login({
  email: req.body.email,
  password: req.body.password,
});

res.cookie("refresh_token", refreshToken, {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

res.json({ accessToken });
\`\`\`

## Token Refresh

When the access token expires, the client automatically calls \`/auth/refresh\`. The server validates the refresh token from the cookie, rotates it, and issues a new access + refresh token pair.

This rotation strategy ensures that if a refresh token is ever compromised, it can only be used once before the server invalidates the entire chain.

## Middleware

Every protected route uses the \`requireAuth\` middleware, which:

1. Extracts the \`Authorization: Bearer <token>\` header
2. Verifies the JWT signature and expiration
3. Attaches the decoded user payload to \`req.user\`

\`\`\`typescript
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = payload as AuthUser;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
\`\`\`

## Key Decisions

- **Why JWTs?** They're stateless, which means we don't need a session store. This makes horizontal scaling straightforward.
- **Why rotate refresh tokens?** To limit the blast radius of token theft.
- **Why HTTP-only cookies?** To prevent XSS attacks from reading the refresh token.

## Further Reading

- [RFC 6749 — OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749)
- [JWT Best Practices (IETF)](https://tools.ietf.org/html/rfc8725)
`,
  },
  {
    slug: "code-review-guidelines",
    title: "Code Review Guidelines",
    desc: "Team conventions for pull requests, review etiquette, and merge strategies.",
    category: "Best Practice",
    tags: ["code-review", "git", "workflow", "team"],
    author: "Marcus R.",
    date: "Mar 8, 2026",
    time: "4 min",
    color: "bg-blue-500",
    content: `## Why Code Reviews Matter

Code reviews are our primary quality gate. They catch bugs, spread knowledge across the team, and maintain consistency in the codebase.

## Pull Request Conventions

### Size

Keep PRs small and focused. Aim for **under 400 lines of changed code**. Large PRs are harder to review and more likely to have issues slip through.

If a feature requires more changes, break it into stacked PRs or incremental steps.

### Title & Description

Use a clear, descriptive title:

\`\`\`
✅ feat: add rate limiting to /api/search endpoint
❌ fix stuff
\`\`\`

The description should include:
- **What** the PR does
- **Why** it's needed
- **How** to test it
- Screenshots or recordings for UI changes

### Labels

Apply the appropriate labels:
- \`feature\` — New functionality
- \`bugfix\` — Bug fix
- \`refactor\` — Code cleanup, no behavior change
- \`docs\` — Documentation only

## Review Etiquette

### As a Reviewer

- Review within **4 business hours** of being assigned.
- Be constructive. Suggest alternatives instead of just pointing out problems.
- Use prefixes to signal intent:
  - \`nit:\` — Minor style suggestion, non-blocking
  - \`question:\` — Seeking understanding
  - \`suggestion:\` — Optional improvement
  - \`blocker:\` — Must be addressed before merge

### As an Author

- Don't take feedback personally — it's about the code, not you.
- Respond to every comment, even if it's just a thumbs-up.
- Resolve conversations only after the reviewer is satisfied.

## Merge Strategy

We use **squash and merge** for feature branches. This keeps the main branch history clean and readable.

\`\`\`bash
# Our merge flow
git checkout main
git pull origin main
git merge --squash feature/rate-limiting
git commit -m "feat: add rate limiting to /api/search endpoint"
git push origin main
\`\`\`

## Approval Requirements

- 1 approval required for standard changes
- 2 approvals required for infrastructure, security, or database changes
- CI must pass before merge
`,
  },
  {
    slug: "local-dev-environment-setup",
    title: "Local Dev Environment Setup",
    desc: "Step-by-step guide to setting up Docker, databases, and required services.",
    category: "Onboarding",
    tags: ["docker", "setup", "onboarding", "devops"],
    author: "Alex Kim",
    date: "Mar 5, 2026",
    time: "5 min",
    color: "bg-neutral-500",
    content: `## Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** 20+ (we recommend using \`fnm\` or \`nvm\`)
- **Docker Desktop** (latest stable)
- **Git** 2.40+
- **pnpm** 9+ (our package manager of choice)

## Step 1: Clone the Repository

\`\`\`bash
git clone git@github.com:acme/devhub.git
cd devhub
\`\`\`

## Step 2: Install Dependencies

\`\`\`bash
pnpm install
\`\`\`

## Step 3: Start Services with Docker

We use Docker Compose to run PostgreSQL, Redis, and MinIO (S3-compatible storage) locally.

\`\`\`bash
docker compose up -d
\`\`\`

This starts:
- **PostgreSQL** on port 5432 (user: \`devhub\`, password: \`devhub\`, db: \`devhub_dev\`)
- **Redis** on port 6379
- **MinIO** on port 9000 (console at :9001)

## Step 4: Setup Environment Variables

\`\`\`bash
cp .env.example .env.local
\`\`\`

The defaults in \`.env.example\` are configured to work with the Docker services above. No changes needed for local development.

## Step 5: Run Database Migrations

\`\`\`bash
pnpm db:migrate
pnpm db:seed   # Optional: loads sample data
\`\`\`

## Step 6: Start the Dev Server

\`\`\`bash
pnpm dev
\`\`\`

The app will be available at [http://localhost:3000](http://localhost:3000).

## Troubleshooting

### Port conflicts

If port 5432 or 6379 is already in use, stop the conflicting service or update the ports in \`docker-compose.yml\`.

### Docker out of disk space

\`\`\`bash
docker system prune -a
\`\`\`

### Node version mismatch

\`\`\`bash
fnm use   # reads .node-version from the repo
\`\`\`

## IDE Setup

We recommend **VS Code** with these extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- GitLens

Settings are already configured in \`.vscode/settings.json\`.
`,
  },
  {
    slug: "api-error-handling-patterns",
    title: "API Error Handling Patterns",
    desc: "Consistent error responses, custom error classes, and centralized error middleware.",
    category: "Architecture",
    tags: ["api", "error-handling", "patterns", "backend"],
    author: "Sarah Chen",
    date: "Feb 28, 2026",
    time: "6 min",
    color: "bg-red-500",
    content: `## Principles

Our API uses a consistent error response format across all endpoints. This makes it easy for frontend developers to handle errors uniformly.

## Error Response Format

Every error response follows this structure:

\`\`\`json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email is required",
    "details": [
      { "field": "email", "message": "This field is required" }
    ]
  }
}
\`\`\`

## Custom Error Classes

We define custom error classes that automatically set the correct HTTP status code:

\`\`\`typescript
export class AppError extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(404, "NOT_FOUND", \`\${resource} not found\`);
  }
}

export class ValidationError extends AppError {
  constructor(details: { field: string; message: string }[]) {
    super(400, "VALIDATION_ERROR", "Validation failed", details);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Authentication required") {
    super(401, "UNAUTHORIZED", message);
  }
}
\`\`\`

## Centralized Error Middleware

All errors funnel through a single Express error handler:

\`\`\`typescript
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      error: {
        code: err.code,
        message: err.message,
        details: err.details,
      },
    });
  }

  // Unexpected errors — log and return generic 500
  console.error("Unhandled error:", err);
  return res.status(500).json({
    error: {
      code: "INTERNAL_ERROR",
      message: "An unexpected error occurred",
    },
  });
}
\`\`\`

## Usage in Route Handlers

With this setup, route handlers just throw — the middleware catches everything:

\`\`\`typescript
router.get("/articles/:id", async (req, res) => {
  const article = await db.article.findUnique({
    where: { id: req.params.id },
  });

  if (!article) throw new NotFoundError("Article");

  res.json(article);
});
\`\`\`

## Key Takeaways

- Always use structured error responses
- Never leak stack traces or internal details in production
- Use custom error classes to keep route handlers clean
- Centralize error handling in middleware
`,
  },
  {
    slug: "database-migration-workflow",
    title: "Database Migration Workflow",
    desc: "How we manage schema changes with Prisma, rollback strategies, and CI checks.",
    category: "DevOps",
    tags: ["database", "prisma", "migrations", "ci"],
    author: "Alex Kim",
    date: "Feb 20, 2026",
    time: "7 min",
    color: "bg-neutral-500",
    content: `## Overview

We use **Prisma** as our ORM and migration tool. All schema changes go through a structured migration workflow to ensure safety and consistency across environments.

## Creating a Migration

1. Edit \`prisma/schema.prisma\`
2. Generate the migration:

\`\`\`bash
pnpm prisma migrate dev --name add_published_at_to_articles
\`\`\`

This creates a new SQL migration file in \`prisma/migrations/\` and applies it to your local database.

## Migration File Structure

\`\`\`
prisma/
  migrations/
    20260220_init/
      migration.sql
    20260220_add_published_at_to_articles/
      migration.sql
    migration_lock.toml
  schema.prisma
\`\`\`

Each migration is a SQL file that Prisma generates from the diff between the previous and current schema.

## Reviewing Migrations

**Always review the generated SQL** before committing. Prisma usually does the right thing, but check for:

- Unintentional \`DROP\` statements
- Missing \`DEFAULT\` values on new non-nullable columns
- Large table alterations that could lock tables in production

## CI Pipeline Checks

Our CI pipeline runs these checks on every PR that touches \`prisma/\`:

\`\`\`yaml
# .github/workflows/migration-check.yml
- name: Check migration drift
  run: pnpm prisma migrate diff --from-migrations --to-schema-datamodel --exit-code

- name: Validate schema
  run: pnpm prisma validate
\`\`\`

## Deploying Migrations

Migrations are applied automatically during deployment:

\`\`\`bash
# In our deploy script
pnpm prisma migrate deploy
\`\`\`

This only applies unapplied migrations — it never generates new ones.

## Rollback Strategy

Prisma doesn't support automatic rollbacks. Our approach:

1. **For additive changes** (new columns, tables): no rollback needed, the old code ignores them.
2. **For destructive changes** (drops, renames): create a new migration that reverses the change.
3. **Emergency rollback**: restore from the most recent database backup.

## Best Practices

- One migration per logical change
- Never edit a migration after it's been applied to staging/production
- Always test migrations on a copy of production data before deploying
- Use \`@default()\` for new required columns to avoid breaking existing rows
`,
  },
  {
    slug: "frontend-state-management",
    title: "Frontend State Management",
    desc: "Our approach to React state using Zustand, server state with TanStack Query.",
    category: "Frontend",
    tags: ["react", "zustand", "tanstack-query", "state"],
    author: "Marcus R.",
    date: "Feb 15, 2026",
    time: "6 min",
    color: "bg-blue-500",
    content: `## Philosophy

We split state into two categories:

- **Server state** — Data that lives on the backend (articles, users, comments). Managed by **TanStack Query**.
- **Client state** — UI-specific state (modals, sidebar open, theme). Managed by **Zustand**.

This separation keeps our code simple and avoids the common trap of putting everything in a single global store.

## Server State with TanStack Query

TanStack Query handles fetching, caching, background refetching, and optimistic updates.

\`\`\`typescript
// hooks/useArticles.ts
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

export function useArticles(category?: string) {
  return useQuery({
    queryKey: ["articles", { category }],
    queryFn: () => api.get("/articles", { params: { category } }),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
\`\`\`

### Mutations with Optimistic Updates

\`\`\`typescript
export function usePublishArticle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.post(\`/articles/\${id}/publish\`),
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ["articles"] });
      // Optimistically update the article status
      queryClient.setQueryData(["articles"], (old: Article[]) =>
        old.map((a) => (a.id === id ? { ...a, status: "published" } : a))
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}
\`\`\`

## Client State with Zustand

Zustand stores are small, focused, and don't need providers.

\`\`\`typescript
// stores/ui.ts
import { create } from "zustand";

interface UIStore {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  searchOpen: false,
  openSearch: () => set({ searchOpen: true }),
  closeSearch: () => set({ searchOpen: false }),
}));
\`\`\`

## When to Use What

| Need | Tool |
|------|------|
| Data from API | TanStack Query |
| Form state | React Hook Form |
| UI toggles, modals | Zustand |
| URL state (filters, pagination) | URL search params |
| Theme / locale | Zustand with persistence |

## Key Guidelines

- **Don't duplicate server state** in Zustand. If it comes from the API, let TanStack Query own it.
- **Keep stores small.** One store per domain (UI, auth, editor) rather than one giant store.
- **Use selectors** to prevent unnecessary re-renders.
`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
