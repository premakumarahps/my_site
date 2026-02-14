"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Chrome, Loader2 } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const getCookieValue = (key: string) => {
  const encodedKey = encodeURIComponent(key);
  const parts = document.cookie.split("; ");
  const match = parts.find((part) => part.startsWith(`${encodedKey}=`));

  if (!match) {
    return null;
  }

  return decodeURIComponent(match.slice(encodedKey.length + 1));
};

const setCookieValue = (key: string, value: string) => {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; Path=/; Max-Age=3600; SameSite=Lax${secure}`;
};

const removeCookieValue = (key: string) => {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${encodeURIComponent(key)}=; Path=/; Max-Age=0; SameSite=Lax${secure}`;
};

const createBrowserAuthClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables");
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      flowType: "pkce",
      detectSessionInUrl: false,
      persistSession: true,
      storage: {
        getItem: (key) => getCookieValue(key),
        setItem: (key, value) => setCookieValue(key, value),
        removeItem: (key) => removeCookieValue(key),
      },
    },
  });
};

function LoginCard() {
  const searchParams = useSearchParams();
  const callbackError = searchParams.get("error");
  const [isLoading, setIsLoading] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const errorMessage = actionError ?? callbackError;

  const handleGoogleSignIn = async () => {
    setActionError(null);
    setIsLoading(true);

    let authClient;

    try {
      authClient = createBrowserAuthClient();
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "Unable to initialize auth client");
      setIsLoading(false);
      return;
    }

    const { error } = await authClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setActionError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="space-y-2 text-center mb-8">
          <h1 className="text-2xl font-bold">Sign In</h1>
          <p className="text-sm text-muted-foreground">
            Continue to your LMS dashboard with Google.
          </p>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Redirecting...
            </>
          ) : (
            <>
              <Chrome className="h-4 w-4" />
              Sign in with Google
            </>
          )}
        </button>

        {errorMessage ? (
          <p className="mt-4 text-sm text-red-500 text-center">{errorMessage}</p>
        ) : null}
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading...
            </div>
          </div>
        </main>
      }
    >
      <LoginCard />
    </Suspense>
  );
}
