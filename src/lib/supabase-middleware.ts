import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

/**
 * Creates a Supabase client for use in Next.js Middleware.
 * Handles reading/writing auth cookies on the request/response pair.
 *
 * Returns both the supabase client and the response (with updated cookies).
 */
export function createMiddlewareClient(request: NextRequest) {
    // Start with a NextResponse.next() that forwards headers
    let response = NextResponse.next({ request });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    // Set cookies on the request (for downstream server components)
                    cookiesToSet.forEach(({ name, value }) =>
                        request.cookies.set(name, value)
                    );

                    // Recreate the response so it carries the updated request cookies
                    response = NextResponse.next({ request });

                    // Also set cookies on the response (for the browser)
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    return { supabase, response };
}
