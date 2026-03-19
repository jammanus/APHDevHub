"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function AuthButtons() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  if (status === "loading") {
    return (
      <div className="flex items-center gap-3">
        <div className="h-8 w-16 animate-pulse rounded-md bg-surface-alt" />
      </div>
    );
  }

  if (session?.user) {
    return (
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-surface-alt transition-colors"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
            {session.user.name?.charAt(0).toUpperCase() || "U"}
          </div>
          <span className="hidden sm:inline max-w-[120px] truncate">{session.user.name || session.user.email}</span>
        </button>

        {menuOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
            <div className="absolute right-0 z-50 mt-1 w-48 rounded-lg border border-border bg-surface p-1 shadow-lg">
              <div className="px-3 py-2 text-xs text-muted truncate border-b border-border mb-1">
                {session.user.email}
              </div>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex w-full items-center rounded-md px-3 py-2 text-sm text-red-600 hover:bg-surface-alt transition-colors"
              >
                Sign out
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/login"
        className="rounded-md px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
      >
        Log in
      </Link>
      <Link
        href="/register"
        className="rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors"
      >
        Sign up
      </Link>
    </div>
  );
}
