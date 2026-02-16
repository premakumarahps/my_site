import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareClient } from "@/lib/supabase-middleware";

/**
 * Protected routes that require an authenticated session.
 * Role-based checks remain client-side via `useAuthGuard`.
 */
const PROTECTED_ROUTES = [
    "/student/dashboard",
    "/admin/dashboard",
    "/physics",
    "/onboarding",
];

function isProtectedRoute(pathname: string): boolean {
    return PROTECTED_ROUTES.some(
        (route) => pathname === route || pathname.startsWith(route + "/")
    );
}

export async function proxy(request: NextRequest) {
    const { supabase, response } = createMiddlewareClient(request);
    const { pathname } = request.nextUrl;

    // Refresh session — keeps cookies alive, must run on every matched request
    const {
        data: { user },
    } = await supabase.auth.getUser();

    // Unauthenticated user trying to access a protected route → /login
    if (!user && isProtectedRoute(pathname)) {
        const loginUrl = request.nextUrl.clone();
        loginUrl.pathname = "/login";
        return NextResponse.redirect(loginUrl);
    }

    // Authenticated user visiting /login → redirect to dashboard
    if (user && pathname === "/login") {
        const dashboardUrl = request.nextUrl.clone();
        dashboardUrl.pathname = "/student/dashboard";
        return NextResponse.redirect(dashboardUrl);
    }

    return response;
}

/**
 * Matcher: run middleware on all page routes EXCEPT
 * static files, _next internals, and favicon.
 */
export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
