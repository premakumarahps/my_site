"use client";

import { useState, useMemo } from "react";
import {
  CURRICULUM_MODULES,
  SEMESTER_SUMMARIES,
  ModuleItem,
} from "@/data/curriculumData";
import {
  BookOpen,
  GraduationCap,
  Download,
  ExternalLink,
  Search,
  FileText,
  CheckCircle2,
  Layers,
  Cpu,
  Code,
  Cog,
  Award,
  ChevronDown,
  ChevronUp,
  Briefcase,
  X,
  FileSpreadsheet,
} from "lucide-react";
import Link from "next/link";

type DomainFilter =
  | "All"
  | "Materials & Metallurgy"
  | "Mechanics & Design"
  | "Computational & Mathematics"
  | "Electronics & Embedded"
  | "Management & Humanities";

export default function CurriculumSection() {
  const [selectedSemester, setSelectedSemester] = useState<number | "all">("all");
  const [selectedDomain, setSelectedDomain] = useState<DomainFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedModuleCode, setExpandedModuleCode] = useState<string | null>(null);
  const [modalModule, setModalModule] = useState<ModuleItem | null>(null);

  const domains: DomainFilter[] = [
    "All",
    "Materials & Metallurgy",
    "Mechanics & Design",
    "Computational & Mathematics",
    "Electronics & Embedded",
    "Management & Humanities",
  ];

  const filteredModules = useMemo(() => {
    return CURRICULUM_MODULES.filter((module) => {
      // Semester filter
      if (selectedSemester !== "all" && module.semester !== selectedSemester) {
        return false;
      }
      // Domain filter
      if (selectedDomain !== "All" && module.domain !== selectedDomain) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchCode = module.code.toLowerCase().includes(q);
        const matchTitle = module.title.toLowerCase().includes(q);
        const matchDesc = module.description.toLowerCase().includes(q);
        const matchTopics = module.syllabusTopics.some((t) => t.toLowerCase().includes(q));
        const matchOutcomes = module.learningOutcomes.some((o) => o.toLowerCase().includes(q));
        return matchCode || matchTitle || matchDesc || matchTopics || matchOutcomes;
      }
      return true;
    });
  }, [selectedSemester, selectedDomain, searchQuery]);

  const activeSemesterSummary = useMemo(() => {
    if (selectedSemester === "all") {
      return {
        title: "All Academic Semesters (Semesters 1 — 8)",
        subtitle: "Complete B.Sc. Engineering Curriculum at University of Moratuwa",
        totalCredits: 161.0,
        description:
          "Comprehensive accredited engineering curriculum encompassing 46 specialized modules spanning fundamental physical sciences, advanced metallurgy, solid state devices, continuum mechanics, computational algorithms, and industrial management.",
      };
    }
    return SEMESTER_SUMMARIES.find((s) => s.semester === selectedSemester)!;
  }, [selectedSemester]);

  const toggleExpand = (code: string) => {
    setExpandedModuleCode((prev) => (prev === code ? null : code));
  };

  const getDomainIcon = (domain: ModuleItem["domain"]) => {
    switch (domain) {
      case "Materials & Metallurgy":
        return <Layers className="h-4 w-4 text-cyan-400" />;
      case "Mechanics & Design":
        return <Cog className="h-4 w-4 text-amber-400" />;
      case "Computational & Mathematics":
        return <Code className="h-4 w-4 text-blue-400" />;
      case "Electronics & Embedded":
        return <Cpu className="h-4 w-4 text-emerald-400" />;
      case "Management & Humanities":
        return <Briefcase className="h-4 w-4 text-purple-400" />;
      default:
        return <BookOpen className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <section id="curriculum" className="w-full py-16 sm:py-20 md:py-28 bg-muted/10 scroll-reveal scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm shadow-sm">
            <GraduationCap className="h-4 w-4" />
            <span>University of Moratuwa • Materials Science &amp; Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Academic Modules &amp; <span className="text-primary">Curriculum</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            161+ credits completed across 8 semesters. Explore detailed course syllabi, accredited learning outcomes, and technical domains spanning advanced metallurgy, continuum mechanics, computational modeling, and industrial management.
          </p>
        </div>

        {/* Official Document Downloads Banner */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Project Portfolio PDF */}
          <div className="group relative overflow-hidden rounded-2xl bg-card/90 border border-primary/30 p-6 sm:p-7 shadow-lg shadow-primary/5 hover:border-primary/60 transition-all hover-lift">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-15 transition-opacity">
              <FileText className="h-28 w-28 text-primary" />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                    <FileText className="h-3.5 w-3.5" />
                    Official 70-Page Document
                  </span>
                  <span className="text-xs text-muted-foreground">PDF • 479 KB</span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Project Portfolio &amp; Technical Summaries
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Comprehensive academic project briefs, research methodologies, and engineering outcomes (Abaqus FEA, Super Duplex marine shaft, FYP composite mortar, IoT MediBox, and more).
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="/docs/Project_Portfolio_and_Technical_Summaries.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-semibold shadow hover:bg-primary/90 transition-all hover:scale-[1.02]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>View Full PDF</span>
                </a>
                <a
                  href="/docs/Project_Portfolio_and_Technical_Summaries.pdf"
                  download="Sadun_Premakumara_Project_Portfolio.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted text-foreground border border-border text-xs sm:text-sm font-medium hover:bg-muted/80 transition-all hover:scale-[1.02]"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Curriculum & Syllabus PDF */}
          <div className="group relative overflow-hidden rounded-2xl bg-card/90 border border-emerald-500/30 p-6 sm:p-7 shadow-lg shadow-emerald-500/5 hover:border-emerald-500/60 transition-all hover-lift">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-15 transition-opacity">
              <FileSpreadsheet className="h-28 w-28 text-emerald-500" />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Official 58-Page Syllabus
                  </span>
                  <span className="text-xs text-muted-foreground">PDF • 8.8 MB</span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                  Curriculum, Modules &amp; Syllabus Outlines
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Official course specifications, module descriptions, weekly lecture/lab hour allocations, evaluation breakdowns, and Washington Accord learning outcomes across all 8 semesters.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="/docs/Curriculum_Modules_and_Syllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold shadow hover:bg-emerald-500 transition-all hover:scale-[1.02]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>View Full Syllabus</span>
                </a>
                <a
                  href="/docs/Curriculum_Modules_and_Syllabus.pdf"
                  download="Sadun_Premakumara_Curriculum_Syllabus.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted text-foreground border border-border text-xs sm:text-sm font-medium hover:bg-muted/80 transition-all hover:scale-[1.02]"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Semester Tabs Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 rounded-2xl bg-card border border-border shadow-sm max-w-full">
            <button
              onClick={() => setSelectedSemester("all")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedSemester === "all"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              All (46)
            </button>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <button
                key={sem}
                onClick={() => setSelectedSemester(sem)}
                className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedSemester === sem
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                Sem {sem}
              </button>
            ))}
          </div>
        </div>

        {/* Semester Active Summary Card */}
        <div className="mb-8 rounded-2xl bg-card/60 border border-border/80 p-5 sm:p-6 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-border/60 pb-4 mb-4">
            <div>
              <span className="text-xs font-bold text-primary tracking-wider uppercase">
                {activeSemesterSummary.subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground">
                {activeSemesterSummary.title}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3.5 py-1.5 rounded-xl bg-primary/10 border border-primary/20 text-xs sm:text-sm font-bold text-primary">
                {activeSemesterSummary.totalCredits} Credits Allocated
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-muted text-xs sm:text-sm font-medium text-muted-foreground">
                {filteredModules.length} Modules Shown
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {activeSemesterSummary.description}
          </p>
        </div>

        {/* Search & Domain Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-8">
          {/* Domain Chips */}
          <div className="flex flex-wrap gap-1.5">
            {domains.map((dom) => (
              <button
                key={dom}
                onClick={() => setSelectedDomain(dom)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedDomain === dom
                    ? "bg-primary/20 text-primary border border-primary/40"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {dom}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search code, title, topic (e.g. Abaqus, Polymer)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-card border border-border text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Modules Grid */}
        {filteredModules.length === 0 ? (
          <div className="text-center py-16 bg-card/40 rounded-2xl border border-dashed border-border p-8">
            <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-60" />
            <h4 className="text-lg font-bold text-foreground">No modules match your query</h4>
            <p className="text-sm text-muted-foreground mt-1">
              Try adjusting your search terms or selecting another semester or domain.
            </p>
            <button
              onClick={() => {
                setSelectedSemester("all");
                setSelectedDomain("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {filteredModules.map((module) => {
              const isExpanded = expandedModuleCode === module.code;
              return (
                <div
                  key={module.code}
                  className={`group rounded-2xl bg-card border transition-all duration-300 flex flex-col justify-between ${
                    isExpanded
                      ? "border-primary/60 shadow-lg shadow-primary/10 ring-1 ring-primary/20"
                      : "border-border hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
                  }`}
                >
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Header Row: Code, Semester & Type */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-extrabold px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                          {module.code}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          Sem {module.semester}
                        </span>
                        <span className="text-xs text-muted-foreground bg-muted/80 px-2 py-0.5 rounded">
                          {module.credits} Credits • {module.type}
                        </span>
                      </div>
                      {module.gradeBadge && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          <Award className="h-3 w-3" />
                          {module.gradeBadge}
                        </span>
                      )}
                    </div>

                    {/* Title & Domain */}
                    <div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {module.title}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-1.5 text-xs text-muted-foreground">
                        {getDomainIcon(module.domain)}
                        <span>{module.domain}</span>
                        <span>•</span>
                        <span className="text-muted-foreground/80">{module.department}</span>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {module.description}
                    </p>

                    {/* Expandable Syllabus & Outcomes Container */}
                    {isExpanded && (
                      <div className="space-y-4 pt-4 border-t border-border/80 animate-fade-in text-xs sm:text-sm">
                        {/* Learning Outcomes */}
                        <div className="space-y-2">
                          <h5 className="font-bold text-primary uppercase text-[11px] tracking-wider">
                            Accredited Learning Outcomes
                          </h5>
                          <ul className="space-y-1.5 text-muted-foreground">
                            {module.learningOutcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Syllabus Topics */}
                        <div className="space-y-2">
                          <h5 className="font-bold text-primary uppercase text-[11px] tracking-wider">
                            Syllabus Topics
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {module.syllabusTopics.map((topic, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded text-[11px] font-medium bg-background border border-border text-foreground/85"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Associated Capstone Link if exists */}
                        {module.relatedProjectId && (
                          <div className="pt-2">
                            <Link
                              href="#portfolio"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                            >
                              <span>Inspect Connected Engineering Capstone Brief</span>
                              <ExternalLink className="h-3 w-3" />
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="px-5 py-3 border-t border-border/60 bg-muted/20 flex items-center justify-between rounded-b-2xl">
                    <button
                      type="button"
                      onClick={() => toggleExpand(module.code)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>{isExpanded ? "Hide Syllabus Details" : "View Syllabus & Outcomes"}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-3.5 w-3.5" />
                      ) : (
                        <ChevronDown className="h-3.5 w-3.5" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setModalModule(module)}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                      title="Open full module modal"
                    >
                      Quick Modal
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Quick Modal for Single Module View */}
        {modalModule && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setModalModule(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl p-6 sm:p-8 space-y-6 text-foreground animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-border">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      {modalModule.code}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded">
                      Semester {modalModule.semester} • {modalModule.credits} Credits ({modalModule.type})
                    </span>
                    {modalModule.gradeBadge && (
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {modalModule.gradeBadge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground mt-1">
                    {modalModule.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{modalModule.domain}</span>
                    <span>•</span>
                    <span>{modalModule.department}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setModalModule(null)}
                  className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Module Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                  Course Overview &amp; Scope
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {modalModule.description}
                </p>
              </div>

              {/* Learning Outcomes */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                  Accredited Program Outcomes
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {modalModule.learningOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Syllabus Topics */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                  Syllabus Outline
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {modalModule.syllabusTopics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-background border border-border text-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 flex items-center justify-between border-t border-border">
                {modalModule.relatedProjectId ? (
                  <Link
                    href="#portfolio"
                    onClick={() => setModalModule(null)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:underline"
                  >
                    <span>Inspect Linked Capstone Brief</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                ) : (
                  <span className="text-xs text-muted-foreground">Moratuwa Engineering Curriculum</span>
                )}

                <button
                  type="button"
                  onClick={() => setModalModule(null)}
                  className="px-4 py-2 rounded-lg bg-muted text-foreground text-xs sm:text-sm font-semibold hover:bg-muted/80 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
