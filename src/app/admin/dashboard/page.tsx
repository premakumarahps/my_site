"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, LogOut, Loader2, Atom } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuthGuard } from "@/hooks/useAuthGuard";

export default function AdminDashboardPage() {
  const router = useRouter();
  const { isLoading } = useAuthGuard({ requiredRole: "admin" });
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await supabase.auth.signOut();
    router.replace("/login");
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <div className="inline-flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Verifying access...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <section className="w-full max-w-xl rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-lg bg-primary/10 p-3 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Welcome Admin</h1>
            <p className="text-sm text-muted-foreground">
              You are signed in to the admin dashboard.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            href="/physics"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 shadow hover:shadow-lg hover:shadow-primary/20"
          >
            <Atom className="h-4 w-4" />
            Open Physics Hub (The Axiom)
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-card-foreground transition-colors hover:bg-muted disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoggingOut ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Logging out...
              </>
            ) : (
              <>
                <LogOut className="h-4 w-4" />
                Log Out
              </>
            )}
          </button>
        </div>
      </section>
    </main>
  );
}

