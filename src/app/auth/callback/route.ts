import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

type ProfileRecord = {
  role: string;
} | null;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const createLoginErrorUrl = (origin: string, message: string) => {
  const errorUrl = new URL("/login", origin);
  errorUrl.searchParams.set("error", message);
  return errorUrl;
};

const createRedirectResponse = (
  requestUrl: URL,
  pathname: string,
  pendingSet: Map<string, string>,
  pendingRemove: Set<string>
) => {
  const response = NextResponse.redirect(new URL(pathname, requestUrl.origin));
  const secure = requestUrl.protocol === "https:";

  for (const [key, value] of pendingSet) {
    response.cookies.set(key, value, {
      path: "/",
      sameSite: "lax",
      secure,
      httpOnly: false,
    });
  }

  for (const key of pendingRemove) {
    response.cookies.set(key, "", {
      path: "/",
      maxAge: 0,
      sameSite: "lax",
      secure,
      httpOnly: false,
    });
  }

  return response;
};

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const oauthError =
    requestUrl.searchParams.get("error_description") ??
    requestUrl.searchParams.get("error");

  if (oauthError) {
    return NextResponse.redirect(createLoginErrorUrl(requestUrl.origin, oauthError));
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.redirect(
      createLoginErrorUrl(requestUrl.origin, "Missing Supabase environment variables")
    );
  }

  if (!code) {
    return NextResponse.redirect(new URL("/login", requestUrl.origin));
  }

  const pendingSet = new Map<string, string>();
  const pendingRemove = new Set<string>();

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      flowType: "pkce",
      detectSessionInUrl: false,
      persistSession: true,
      storage: {
        getItem: (key) => {
          if (pendingRemove.has(key)) {
            return null;
          }

          const pendingValue = pendingSet.get(key);
          if (pendingValue !== undefined) {
            return pendingValue;
          }

          return request.cookies.get(key)?.value ?? null;
        },
        setItem: (key, value) => {
          pendingSet.set(key, value);
          pendingRemove.delete(key);
        },
        removeItem: (key) => {
          pendingSet.delete(key);
          pendingRemove.add(key);
        },
      },
    },
  });

  const { data: authData, error: authError } = await supabase.auth.exchangeCodeForSession(code);

  if (authError || !authData.session?.user) {
    return NextResponse.redirect(
      createLoginErrorUrl(
        requestUrl.origin,
        authError?.message ?? "Failed to exchange auth code for session"
      )
    );
  }

  const userId = authData.session.user.id;
  let redirectPath = "/student/dashboard";

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .maybeSingle<ProfileRecord>();

  if (!profileError) {
    if (!profile) {
      redirectPath = "/onboarding";
    } else if (profile.role === "admin") {
      redirectPath = "/admin/dashboard";
    }
  }

  return createRedirectResponse(requestUrl, redirectPath, pendingSet, pendingRemove);
}
