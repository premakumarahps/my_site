"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type AuthGuardOptions = {
    requiredRole?: "admin" | "student";
};

type AuthGuardResult = {
    isLoading: boolean;
    userId: string | null;
};

export function useAuthGuard(options: AuthGuardOptions = {}): AuthGuardResult {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            const { data: userData, error: userError } =
                await supabase.auth.getUser();

            if (userError || !userData.user) {
                router.replace("/login");
                return;
            }

            if (options.requiredRole) {
                const { data: profile } = await supabase
                    .from("profiles")
                    .select("role")
                    .eq("id", userData.user.id)
                    .maybeSingle<{ role: string }>();

                if (profile && profile.role !== options.requiredRole) {
                    if (profile.role === "admin") {
                        router.replace("/admin/dashboard");
                    } else {
                        router.replace("/student/dashboard");
                    }
                    return;
                }
            }

            setUserId(userData.user.id);
            setIsLoading(false);
        };

        checkAuth();
    }, [router, options.requiredRole]);

    return { isLoading, userId };
}
