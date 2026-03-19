import type { Metadata } from "next";
import Link from "next/link";
import RegisterForm from "./RegisterForm";

export const metadata: Metadata = {
  title: "Sign Up — DevHub",
  description: "Create your DevHub account and start sharing technical knowledge.",
};

function IconCode({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(220,38,38,0.08),transparent)]" />
        <div className="relative z-10 max-w-md px-12 text-center">
          <Link href="/" className="mb-8 inline-flex items-center gap-3 text-2xl font-bold tracking-tight text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white">
              <IconCode className="w-5 h-5" />
            </span>
            <span>Dev<span className="text-red-500">Hub</span></span>
          </Link>
          <p className="text-neutral-400 leading-relaxed">
            Create, organize, and share technical knowledge with your entire team.
          </p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-1 items-center justify-center bg-background px-6">
        <div className="w-full max-w-sm">
          {/* Mobile logo */}
          <Link href="/" className="mb-8 flex items-center justify-center gap-2 text-xl font-bold tracking-tight lg:hidden">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white">
              <IconCode className="w-5 h-5" />
            </span>
            <span>Dev<span className="text-red-600">Hub</span></span>
          </Link>

          <div className="rounded-xl border border-border bg-surface p-7">
            <h1 className="text-2xl font-bold">Create your account</h1>
            <p className="mt-1 text-sm text-muted">Start building your team&apos;s knowledge hub.</p>

            <RegisterForm />

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-surface px-3 text-muted">or</span>
              </div>
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:bg-surface-alt transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Sign up with GitHub
            </button>

            <p className="mt-4 text-center text-xs text-muted">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-red-600 hover:underline">Terms</a> and{" "}
              <a href="#" className="text-red-600 hover:underline">Privacy Policy</a>.
            </p>
          </div>

          <p className="mt-6 text-center text-sm text-muted">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-red-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
