"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, UserPlus } from "lucide-react";
import { supabase } from "@/lib/supabase";

type ExistingProfile = {
  role: string;
};

export default function OnboardingPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [batchYear, setBatchYear] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const bootstrap = async () => {
      const { data: userData, error: userError } = await supabase.auth.getUser();

      if (userError || !userData.user) {
        router.replace("/login");
        return;
      }

      const { data: existingProfile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", userData.user.id)
        .maybeSingle<ExistingProfile>();

      if (existingProfile) {
        if (existingProfile.role === "admin") {
          router.replace("/admin/dashboard");
          return;
        }
        router.replace("/student/dashboard");
        return;
      }

      setUserId(userData.user.id);
      setIsLoadingUser(false);
    };

    bootstrap();
  }, [router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    if (!userId) {
      setErrorMessage("Unable to identify the current user.");
      return;
    }

    if (!fullName.trim() || !whatsappNumber.trim() || !batchYear.trim()) {
      setErrorMessage("Please complete all fields.");
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from("profiles").insert({
      id: userId,
      full_name: fullName.trim(),
      whatsapp_number: whatsappNumber.trim(),
      batch_year: batchYear.trim(),
      role: "student",
    });

    if (error) {
      setErrorMessage(error.message);
      setIsSubmitting(false);
      return;
    }

    router.replace("/student/dashboard");
  };

  if (isLoadingUser) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
        <div className="inline-flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading onboarding...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-xl rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-8 text-center space-y-2">
          <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 text-primary">
            <UserPlus className="h-5 w-5" />
          </div>
          <h1 className="text-2xl font-bold">Complete Your Profile</h1>
          <p className="text-sm text-muted-foreground">
            Tell us a few details to set up your LMS account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="full-name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              id="full-name"
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Sandun Preamakumara"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none ring-0 transition focus:border-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="whatsapp-number" className="text-sm font-medium">
              WhatsApp Number
            </label>
            <input
              id="whatsapp-number"
              type="tel"
              value={whatsappNumber}
              onChange={(event) => setWhatsappNumber(event.target.value)}
              placeholder="+94 77 123 4567"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none ring-0 transition focus:border-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="batch-year" className="text-sm font-medium">
              Batch Year
            </label>
            <input
              id="batch-year"
              type="text"
              value={batchYear}
              onChange={(event) => setBatchYear(event.target.value)}
              placeholder="2025 A/L"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none ring-0 transition focus:border-primary"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Complete Onboarding"
            )}
          </button>
        </form>

        {errorMessage ? (
          <p className="mt-4 text-sm text-red-500">{errorMessage}</p>
        ) : null}
      </div>
    </main>
  );
}

