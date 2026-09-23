"use client";

import { useState, useEffect } from "react";
import { PROJECTS_DATA, ProjectItem } from "@/data/portfolioData";
import {
  Code,
  Cpu,
  Layers,
  Cog,
  ArrowRight,
  X,
  BookOpen,
  Award,
  CheckCircle2,
} from "lucide-react";

type CategoryTab = "software" | "iot" | "materials" | "mechanical";

interface TabOption {
  id: CategoryTab;
  label: string;
  icon: typeof Code;
  count: number;
}

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState<CategoryTab>("software");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const tabs: TabOption[] = [
    {
      id: "software",
      label: "Software & Web",
      icon: Code,
      count: PROJECTS_DATA.filter((p) => p.category === "software").length,
    },
    {
      id: "iot",
      label: "IoT & Hardware",
      icon: Cpu,
      count: PROJECTS_DATA.filter((p) => p.category === "iot").length,
    },
    {
      id: "materials",
      label: "Materials & Simulation",
      icon: Layers,
      count: PROJECTS_DATA.filter((p) => p.category === "materials").length,
    },
    {
      id: "mechanical",
      label: "Mechanical Design",
      icon: Cog,
      count: PROJECTS_DATA.filter((p) => p.category === "mechanical").length,
    },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="w-full py-16 sm:py-20 md:py-24 bg-muted/20 scroll-reveal">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Academic Capstones & AI-Accelerated Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Technical <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Detailed briefs and technical methodologies from my University of Moratuwa degree, industrial engineering training, and independent system architectures.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-card border border-border shadow-sm max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-[1.02]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                  <span
                    className={`ml-1 px-1.5 py-0.5 rounded-md text-[10px] ${
                      isActive
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid with Google-Grade Fluid Transition */}
        <div
          key={activeTab}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 animate-tab-fade"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-card border border-border p-6 sm:p-7 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover-lift"
            >
              <div className="space-y-4">
                {/* Badge Row */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  {project.academicContext && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                      <Award className="h-3 w-3" />
                      {project.academicContext}
                    </span>
                  )}
                  {project.gradeBadge && (
                    <span className="text-[11px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      {project.gradeBadge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-[11px] font-medium bg-background border border-border text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-border/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/btn"
                >
                  <span>Technical Deep Dive</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Deep-Dive Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl p-6 sm:p-8 space-y-6 text-foreground animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-border">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                    {selectedProject.academicContext || "Engineering Project"}
                  </span>
                  {selectedProject.gradeBadge && (
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      {selectedProject.gradeBadge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Executive Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                Executive Summary
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedProject.fullReport.executiveSummary}
              </p>
            </div>

            {/* Engineering Methodology */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                Engineering Methodology & Calculations
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {selectedProject.fullReport.methodology.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Architecture (if available) */}
            {selectedProject.fullReport.technicalArchitecture && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                  Technical Architecture & Standards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.fullReport.technicalArchitecture.map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 rounded-lg bg-background border border-border text-xs text-foreground font-medium flex items-center gap-2"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Academic / Industrial Outcomes */}
            <div className="space-y-2 rounded-xl bg-primary/5 border border-primary/20 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                Engineering Outcomes & Impact
              </h4>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {selectedProject.fullReport.outcomes}
              </p>
            </div>

            {/* Tech Stack Pills in Modal */}
            <div className="pt-2 flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-background border border-border text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Close action */}
            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-lg bg-muted text-foreground text-xs sm:text-sm font-semibold hover:bg-muted/80 transition-colors"
              >
                Close Brief
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
