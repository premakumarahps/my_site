"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, ArrowUpRight, Award, CheckCircle2, Sparkles, BookOpen } from "lucide-react";

export default function InstructorSpotlight() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-card/60 backdrop-blur-xl border border-border/80 p-6 sm:p-8 md:p-10 mb-12 shadow-xl hover:border-primary/40 transition-all duration-500 spectrum-card">
      {/* Ambient background glow */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="grid gap-8 lg:grid-cols-12 items-center">
        {/* Instructor Photo Showcase (Google Labs profile framing) */}
        <div className="lg:col-span-4 relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-muted group">
            <Image
              src="/images/sadun-academic.jpg"
              alt="Sadun Premakumara - Lead Physics Educator on University of Moratuwa campus"
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover object-top transition-transform duration-700 ease-[var(--ease-luxury)] group-hover:scale-[1.03]"
            />
            {/* Soft gradient lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

            {/* Floating Educator Badge */}
            <div className="absolute bottom-3 left-3 right-3">
              <div className="rounded-xl p-3 bg-card/90 backdrop-blur-md border border-border/70 shadow-lg">
                <p className="text-xs font-semibold text-primary flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3" /> Lead Instructor & Founder
                </p>
                <p className="text-sm font-bold text-foreground">Eng. Sadun Premakumara</p>
                <p className="text-[11px] text-muted-foreground">University of Moratuwa · B.Sc. Eng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy & Credentials Content */}
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Engineering-Grounded Pedagogy</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            Learn Directly from an <span className="text-primary">Engineering Mindset</span>
          </h3>

          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            High school physics is often taught as an intimidating catalogue of disconnected equations. As a Materials Science & Engineering graduate, my mission is the polar opposite: <strong className="text-foreground">to teach physics the way real engineers solve real-world problems.</strong>
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/40 border border-border/60">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">First Principles Deconstruction</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Master every derivation from scratch so you never rely on mechanical rote memorization.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/40 border border-border/60">
              <Award className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-foreground">5+ Years Proven Track Record</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Extensive experience preparing students for island-level ranks and university engineering entrance.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="https://physics-academy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Explore Physics Academy Platform
              <ArrowUpRight className="ml-1.5 h-4 w-4 opacity-80" />
            </Link>

            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Direct access to live theory, past paper vaults & personalized analytics
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
