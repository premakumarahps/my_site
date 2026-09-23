"use client";

import Image from "next/image";
import { useState } from "react";
import { GraduationCap, Atom, Code2, Sparkles, ShieldCheck } from "lucide-react";

interface Perspective {
  id: string;
  label: string;
  shortLabel: string;
  icon: typeof GraduationCap;
  imageSrc: string;
  imageAlt: string;
  role: string;
  institution: string;
  quote: string;
  tags: string[];
  auraGradient: string;
}

const PERSPECTIVES: Perspective[] = [
  {
    id: "engineering",
    label: "Materials & Metallurgy",
    shortLabel: "Materials Eng",
    icon: GraduationCap,
    imageSrc: "/images/sadun-portrait.jpg",
    imageAlt: "Sadun Premakumara - Materials Science & Engineering Graduate in sharp suit",
    role: "Materials & Metallurgical Engineer",
    institution: "University of Moratuwa · B.Sc. Eng (Hons)",
    quote: "Microstructure Dictates Properties, First Principles Guide Design",
    tags: ["Super Duplex SS", "Sustainable Mortars", "Solution Heat Treatment", "ASTM / SLS Standards"],
    auraGradient: "from-sky-500/25 via-blue-500/15 to-indigo-500/25",
  },
  {
    id: "simulation",
    label: "Continuum FEA",
    shortLabel: "FEA & CAD",
    icon: Atom,
    imageSrc: "/images/sadun-academic.jpg",
    imageAlt: "Sadun Premakumara on University of Moratuwa campus",
    role: "Finite Element & Continuum Modeler",
    institution: "Abaqus CAE · Solid Edge · COMSOL Multiphysics",
    quote: "Continuum Mechanics with Hertzian Precision",
    tags: ["Non-Linear Contact", "Elasto-Plasticity", "Mesh Convergence", "SCAPS-1D PV"],
    auraGradient: "from-emerald-500/25 via-teal-500/15 to-cyan-500/25",
  },
  {
    id: "computational",
    label: "Computational Code",
    shortLabel: "Scientific Code",
    icon: Code2,
    imageSrc: "/images/sadun-research.png",
    imageAlt: "Sadun Premakumara - Scientific Computing and Analytical Engineering",
    role: "Computational Engineer & Physics Mentor",
    institution: "SciPy Algorithms · Automated Pipelines · Physics Academy",
    quote: "Code Accelerates Engineering Workflows",
    tags: ["Scientific Python", "RMSD Layer Detection", "EdTech Architectures", "5+ Yrs Pedagogy"],
    auraGradient: "from-purple-500/25 via-pink-500/15 to-primary/25",
  },
];

export default function ExecutiveProfileCard() {
  const [activeTab, setActiveTab] = useState<string>("engineering");
  const current = PERSPECTIVES.find((p) => p.id === activeTab) || PERSPECTIVES[0];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Ambient Radial Aura (Google Antigravity & Labs style breathing light glow) */}
      <div
        className={`absolute -inset-2 rounded-3xl bg-gradient-to-tr ${current.auraGradient} blur-2xl opacity-70 group-hover:opacity-100 transition-all duration-700 -z-10`}
        aria-hidden="true"
      />

      {/* Perspective Switcher Pills (Top Segmented Control) */}
      <div className="flex items-center justify-between gap-1.5 p-1.5 mb-4 rounded-2xl bg-muted/80 backdrop-blur-md border border-border/80 shadow-xs">
        {PERSPECTIVES.map((p) => {
          const Icon = p.icon;
          const isActive = activeTab === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-card text-foreground shadow-md border border-border text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              }`}
            >
              <Icon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
              <span className="hidden sm:inline">{p.label}</span>
              <span className="sm:hidden">{p.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Flagship Architectural Portrait Frame */}
      <div className="group relative rounded-3xl overflow-hidden border border-border/80 bg-card/60 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-primary/50 hover:shadow-primary/10 spectrum-card">
        {/* Aspect Ratio Container for Image */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
          {PERSPECTIVES.map((p) => (
            <div
              key={p.id}
              className={`absolute inset-0 transition-opacity duration-500 ease-[var(--ease-luxury)] ${
                activeTab === p.id ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={p.imageSrc}
                alt={p.imageAlt}
                fill
                priority={p.id === "engineering"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                className="object-cover object-top transition-transform duration-700 ease-[var(--ease-luxury)] group-hover:scale-[1.02]"
              />
            </div>
          ))}

          {/* Precision Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 dark:ring-white/5 rounded-3xl pointer-events-none z-20" />

          {/* Top-Right Floating Verified Chip (Google Labs style) */}
          <div className="absolute top-4 right-4 z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/85 dark:bg-card/85 backdrop-blur-md border border-border/80 shadow-lg text-xs font-medium text-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              <span>Verified UoM Engineer</span>
            </div>
          </div>

          {/* Bottom Floating Glass Card (Credential & Philosophy) */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="rounded-2xl p-4 sm:p-5 bg-card/90 backdrop-blur-xl border border-border/80 shadow-2xl transition-all duration-300 hover:border-primary/40">
              {/* Mantra Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold mb-2">
                <Sparkles className="h-3 w-3 shrink-0" />
                <span>&ldquo;{current.quote}&rdquo;</span>
              </div>

              {/* Persona Headline */}
              <h3 className="text-base sm:text-lg font-bold text-foreground tracking-tight leading-snug">
                {current.role}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                {current.institution}
              </p>

              {/* Technical Focus Chips */}
              <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-border/60">
                {current.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-2 py-0.5 rounded-md bg-muted/80 text-muted-foreground text-[11px] font-medium border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
