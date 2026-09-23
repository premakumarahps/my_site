"use client";

import { ArrowRight, User, BookOpen, Atom, GraduationCap, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import SkillsMatrix from "@/components/SkillsMatrix";
import PortfolioTabs from "@/components/PortfolioTabs";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import ComfortableTypewriter from "@/components/ComfortableTypewriter";
import ExecutiveProfileCard from "@/components/ExecutiveProfileCard";
import InstructorSpotlight from "@/components/InstructorSpotlight";

export default function Home() {
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

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-20 md:py-32 overflow-hidden flex flex-col items-center text-center px-4">
        {/* Google-Grade Ambient Morphing Mesh Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[350px] md:h-[480px] bg-primary/20 rounded-full blur-[110px] -z-10 opacity-40 pointer-events-none animate-mesh-float" />
        <div className="absolute top-28 left-1/3 -translate-x-1/2 w-[400px] md:w-[600px] h-[280px] md:h-[380px] bg-emerald-500/15 rounded-full blur-[100px] -z-10 opacity-30 pointer-events-none animate-mesh-float-reverse" />

        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {/* Main 2-Line Headline without periods */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.12] animate-fade-in-up delay-100 flex flex-col items-center justify-center gap-1 sm:gap-2">
            <span className="block">Materials Science</span>
            <span className="block text-primary">
              <ComfortableTypewriter
                words={["Engineered", "Simulated", "Characterized", "Synthesized", "Optimized"]}
                className="text-primary"
                cursorClassName="h-[0.85em]"
                pauseDuration={2800}
              />
            </span>
          </h1>

          {/* Persona Credential Badge (brought down directly under main heading) */}
          <div className="flex justify-center animate-fade-in-up delay-200">
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 rounded-full border border-primary/30 bg-primary/10 px-3.5 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-foreground backdrop-blur-sm shadow-sm shadow-primary/10 hover:border-primary/50 transition-all">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden ring-1.5 sm:ring-2 ring-primary/60 shrink-0 shadow-xs">
                <Image
                  src="/images/sadun-studio-portrait.jpg"
                  alt="Sadun Premakumara"
                  fill
                  sizes="32px"
                  priority
                  className="object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-2 flex-wrap text-center sm:text-left justify-center">
                <span className="font-bold text-foreground">Sadun Premakumara</span>
                <span className="text-primary/40 hidden sm:inline">•</span>
                <span className="text-primary font-medium">Materials Engineer &amp; Physics Consultant</span>
                <span className="text-primary/40 hidden sm:inline">|</span>
                <span className="text-muted-foreground hidden sm:inline">University of Moratuwa</span>
              </div>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Engineering advanced metallurgical systems, continuum mechanics, and sustainable composites from first principles.
            Leveraging scientific Python, Abaqus FEA, and computational algorithms to bridge physical material science with modern computational precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up delay-300">
            <Link
              href="#portfolio"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hover-glow min-h-[48px]"
            >
              Explore Materials Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#about"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-8 text-sm font-medium text-card-foreground shadow-sm transition-all hover:bg-muted hover:text-foreground hover:border-primary/50 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary min-h-[48px]"
            >
              Engineering Profile
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full py-16 sm:py-20 bg-muted/30 scroll-reveal scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                About Me
              </h2>
              <div className="luxury-divider" />
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                I am a <strong className="text-foreground">Materials Science & Engineering Graduate</strong> from the University of Moratuwa (UoM), specializing in physical metallurgy, continuum mechanics, and sustainable composite synthesis.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My engineering philosophy is rooted in rigorous physical fundamentals: <span className="text-primary italic font-medium">&quot;Microstructure dictates properties, first principles govern design.&quot;</span>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether engineering Super Duplex stainless steel marine propulsion shafts, synthesizing pozzolanic rice-husk-ash composite mortars, simulating non-linear elasto-plastic contact mechanics in Abaqus, or conducting industrial QA/QC testing under ASTM/SLS protocols—my focus is delivering robust, fail-safe physical engineering solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Computational Multiplier:</strong> To supercharge materials engineering, I leverage code as an analytical accelerator—writing automated Python algorithms for geotechnical layer stratification, coding Arrhenius kinetic solvers, and building modern educational web applications.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 text-muted-foreground bg-card/90 px-4 py-3 rounded-2xl border border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default">
                  <GraduationCap className="h-5 w-5 text-primary shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-foreground">Materials &amp; Metallurgy</p>
                    <p className="text-muted-foreground text-[11px]">UoM B.Sc. Eng (Hons) Degree</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground bg-card/90 px-4 py-3 rounded-2xl border border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default">
                  <Atom className="h-5 w-5 text-primary shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-foreground">FEA &amp; Continuum Simulation</p>
                    <p className="text-muted-foreground text-[11px]">Abaqus · Solid Edge · COMSOL</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground bg-card/90 px-4 py-3 rounded-2xl border border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default">
                  <User className="h-5 w-5 text-primary shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-foreground">5+ Yrs Physics Pedagogy</p>
                    <p className="text-muted-foreground text-[11px]">Physics Academy Lead Mentor</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground bg-card/90 px-4 py-3 rounded-2xl border border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-foreground">Computational Code</p>
                    <p className="text-muted-foreground text-[11px]">Scientific Python · Automation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Google-Grade Flagship Executive Profile Card */}
            <div className="lg:col-span-5">
              <ExecutiveProfileCard />
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Arsenal (Skills Matrix) - Materials Science Leads */}
      <div className="w-full scroll-mt-20">
        <SkillsMatrix />
      </div>

      {/* Technical Portfolio (Tabs & Deep-Dive Modals) - Materials Tab Active by Default */}
      <div className="w-full scroll-mt-20">
        <PortfolioTabs />
      </div>

      {/* Professional Journey (Timeline) */}
      <div className="w-full scroll-mt-20">
        <ProfessionalExperience />
      </div>

      {/* Services/Classes Section */}
      <section
        id="classes"
        className="w-full py-16 sm:py-20 md:py-24 scroll-reveal scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">Academic Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Tailored learning experiences designed to{" "}
              <ComfortableTypewriter
                words={[
                  "master A/L Physics with first principles.",
                  "build an authentic engineering mindset.",
                  "bridge abstract equations with real-world tech.",
                  "excel with structured past-paper strategy."
                ]}
                className="text-primary font-medium"
                cursorClassName="h-[0.85em]"
                pauseDuration={3200}
              />
            </p>
          </div>

          {/* Academic Instructor Spotlight (Moratuwa Campus Portrait & Credentials) */}
          <InstructorSpotlight />

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
                  <li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" /> Monthly Tests & Analytics</li>
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

      {/* Footer / Contact */}
      <footer
        id="contact"
        className="w-full py-12 sm:py-16 border-t border-border bg-muted/20 mt-auto scroll-reveal scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold text-foreground">Sadun Premakumara</h4>
            <p className="text-sm text-muted-foreground">
              B.Sc. Eng (Hons) Materials Science & Engineering | University of Moratuwa
            </p>
            <p className="text-xs text-muted-foreground/80">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/sandun-preamakumara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all p-2 hover:bg-primary/10 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center border border-border/50"
              aria-label="LinkedIn Profile"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:contact@sandun.eng"
              className="text-muted-foreground hover:text-primary transition-all p-2 hover:bg-primary/10 rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center border border-border/50"
              aria-label="Email Contact"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
