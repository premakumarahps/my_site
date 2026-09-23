"use client";

import { Layers, Code, Cpu, ShieldCheck } from "lucide-react";
import { SKILL_PILLARS, SkillPillar } from "@/data/portfolioData";

export default function SkillsMatrix() {
  const getIcon = (iconName: SkillPillar["iconName"]) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="h-6 w-6 text-primary" />;
      case "Code":
        return <Code className="h-6 w-6 text-primary" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-primary" />;
      case "ShieldCheck":
        return <ShieldCheck className="h-6 w-6 text-primary" />;
      default:
        return <Layers className="h-6 w-6 text-primary" />;
    }
  };

  return (
    <section id="skills" className="w-full py-16 sm:py-20 md:py-24 scroll-reveal">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm">
            <span>Multidisciplinary Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Engineering <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Bridging fundamental Materials Science and Continuum Mechanics with modern computational algorithms, IoT hardware, and industrial quality standards.
          </p>
        </div>

        {/* 2x2 Grid on Desktop, 1 Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover-lift"
            >
              {/* Subtle ambient gradient flare */}
              <div className="absolute top-0 right-0 -m-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors pointer-events-none" />

              <div className="relative z-10 space-y-5">
                {/* Header with Icon and Category */}
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center p-3.5 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                    {getIcon(pillar.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-primary/80 mt-0.5">
                      {pillar.category}
                    </p>
                  </div>
                </div>

                {/* Pillar Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-background border border-border text-foreground hover:border-primary/60 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 shrink-0" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
