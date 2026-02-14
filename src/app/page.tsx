"use client";

import { ArrowRight, User, BookOpen, Atom, GraduationCap, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-20 md:py-32 overflow-hidden flex flex-col items-center text-center px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10 opacity-30 pointer-events-none animate-float" />

        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm animate-fade-in-down">
            <Atom className="mr-2 h-4 w-4" />
            <span>Physics Consultant & Tutor</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-tight animate-fade-in-up delay-100">
            Physics. <span className="text-primary">Engineered.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Bridging the gap between Abstract Theory and Material Reality.
            Learn physics through first principles and engineering logic, not just memorization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up delay-300">
            <Link
              href="#classes"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover-glow min-h-[48px]"
            >
              View Classes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-8 text-sm font-medium text-card-foreground shadow-sm transition-all hover:bg-muted hover:text-foreground hover:border-primary/50 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[48px]"
            >
              My Engineering Profile
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full py-16 sm:py-20 bg-muted/30 scroll-reveal"
        ref={(el) => { sectionsRef.current[0] = el; }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                About Me
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full" />
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                I am a final-year <strong className="text-foreground">Materials Science & Engineering</strong> student at the University of Moratuwa (UoM) with over 5 years of experience in Physics education.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My teaching philosophy is simple: <span className="text-primary italic">&quot;First Principles over Formulas.&quot;</span>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe that understanding the core engineering logic behind physical phenomena is far more powerful than rote memorization. Whether you are preparing for Advanced Levels or seeking a deeper understanding of the physical world, I guide you to think like an engineer.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                <div className="flex items-center gap-2 text-muted-foreground bg-card px-3 sm:px-4 py-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default">
                  <GraduationCap className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm sm:text-base">UoM Undergraduate</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground bg-card px-3 sm:px-4 py-2 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default">
                  <User className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm sm:text-base">5+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-2xl hover-lift">
                <div className="absolute top-0 right-0 -m-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Core Competencies</h3>
                <ul className="space-y-3">
                  {["Advanced Level Physics", "Mechanics & Materials", "Thermodynamics", "Engineering Logic", "First Principles Thinking"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-full h-full bg-primary/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services/Classes Section */}
      <section
        id="classes"
        className="w-full py-16 sm:py-20 md:py-24 scroll-reveal"
        ref={(el) => { sectionsRef.current[1] = el; }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">Academic Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Tailored learning experiences designed to master Physics.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            {/* Class Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <BookOpen className="h-20 sm:h-24 w-20 sm:w-24 text-foreground" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">AL Physics Group Classes</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Comprehensive coverage of the G.C.E. Advanced Level Physics curriculum.
                  Focus on structured theory, problem-solving strategies, and past paper discussions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground pt-4">
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /> Small Group Attention</li>
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /> Theory & Revision</li>
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /> Monthly Tests</li>
                </ul>
              </div>
            </div>

            {/* Consulting Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover-lift">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Atom className="h-20 sm:h-24 w-20 sm:w-24 text-foreground" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20 transition-colors">
                  <Atom className="h-6 w-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Individual Consulting</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  One-on-one sessions tailored to your specific needs. Ideal for clarifying complex concepts,
                  intense exam preparation, or bridging knowledge gaps.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground pt-4">
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" /> Personalized Pacing</li>
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" /> Focused Doubt Clearing</li>
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" /> Flexible Scheduling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="w-full py-10 sm:py-12 border-t border-border bg-muted/20 mt-auto scroll-reveal"
        ref={(el) => { sectionsRef.current[2] = el; }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold text-foreground">Sandun Preamakumara</h4>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary transition-all p-2 hover:bg-primary/10 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:contact@sandun.eng"
              className="text-muted-foreground hover:text-primary transition-all p-2 hover:bg-primary/10 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Email Contact"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
