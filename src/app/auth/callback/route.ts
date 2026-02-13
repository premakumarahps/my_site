import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

type ProfileRecord = {
  role: string;
} | null;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const oauthError = requestUrl.searchParams.get("error_description");

  if (oauthError) {
    const errorUrl = new URL("/login", requestUrl.origin);
    errorUrl.searchParams.set("error", oauthError);
    return NextResponse.redirect(errorUrl);
  }

  if (!supabaseUrl || !supabaseAnonKey) {
    const errorUrl = new URL("/login", requestUrl.origin);
    errorUrl.searchParams.set("error", "Missing Supabase environment variables");
    return NextResponse.redirect(errorUrl);
  }

  if (!code) {
    const errorUrl = new URL("/login", requestUrl.origin);
    errorUrl.searchParams.set("error", "Missing OAuth code");
    return NextResponse.redirect(errorUrl);
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { data: authData, error: authError } = await supabase.auth.exchangeCodeForSession(code);

  if (authError || !authData.session?.user) {
    const errorUrl = new URL("/login", requestUrl.origin);
    errorUrl.searchParams.set(
      "error",
      authError?.message ?? "Failed to exchange auth code for session"
    );
    return NextResponse.redirect(errorUrl);
  }

  const userId = authData.session.user.id;

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", userId)
    .maybeSingle<ProfileRecord>();

  if (profileError) {
    const errorUrl = new URL("/login", requestUrl.origin);
    errorUrl.searchParams.set("error", "Unable to load profile");
    return NextResponse.redirect(errorUrl);
  }

  if (!profile) {
    return NextResponse.redirect(new URL("/onboarding", requestUrl.origin));
  }

  if (profile.role === "admin") {
    return NextResponse.redirect(new URL("/admin/dashboard", requestUrl.origin));
  }

  return NextResponse.redirect(new URL("/student/dashboard", requestUrl.origin));
}

