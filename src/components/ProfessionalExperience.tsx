"use client";

import { useEffect, useRef } from "react";
import { TIMELINE_EXPERIENCE } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ProfessionalExperience() {
  const timelineRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    timelineRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="w-full py-16 sm:py-20 md:py-24 scroll-reveal">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Track Record & Industry Competence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Hands-on QA/QC engineering in civil road infrastructure paired with 5+ years of pedagogical leadership and educational software development.
          </p>
        </div>

        {/* Vertical Timeline with Radiant Gradient Line */}
        <div className="relative border-l-2 border-primary/30 ml-4 sm:ml-8 md:ml-12 space-y-12 before:absolute before:inset-y-0 before:-left-[2px] before:w-[2px] before:bg-gradient-to-b before:from-primary before:via-primary/50 before:to-transparent">
          {TIMELINE_EXPERIENCE.map((item, index) => (
            <div
              key={item.role}
              ref={(el) => {
                timelineRef.current[index] = el;
              }}
              className="relative pl-6 sm:pl-10 scroll-reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline Indicator Dot with Ambient Pulse Ring */}
              <div className="absolute -left-[9px] top-1.5 flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-primary border-4 border-background shadow-md shadow-primary/40 relative z-10" />
                <div className="absolute h-6 w-6 rounded-full bg-primary/30 animate-pulse pointer-events-none" />
              </div>

              {/* Timeline Content Card */}
              <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover-lift">
                {/* Meta Row: Period & Type */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                    <Calendar className="h-3 w-3" />
                    {item.period}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
                    {item.type}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mt-1 mb-4 flex-wrap">
                  <span className="text-primary font-semibold">{item.organization}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {item.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2.5 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Key Highlights & Impact
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-background border border-border text-foreground"
                    >
                      {tech}
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
