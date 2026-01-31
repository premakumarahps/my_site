"use client";

import { Users, FileCheck, BarChart3, Home, Database, ClipboardCheck, TrendingUp, Atom, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PhysicsHub() {
    const [activeSection, setActiveSection] = useState("dashboard");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Trigger entrance animations after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSectionChange = (section: string) => {
        setActiveSection(section);
        setMobileMenuOpen(false); // Close mobile menu when section changes
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const navItems = [
        { id: "dashboard", label: "Dashboard", icon: Home },
        { id: "students", label: "Student Database", icon: Users },
        { id: "marking", label: "Paper Marking", icon: FileCheck },
        { id: "analytics", label: "Analytics", icon: BarChart3 },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Mobile Header with Hamburger */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-card/95 backdrop-blur-md border-b border-border flex items-center justify-between px-4 z-50">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Atom className="h-5 w-5 text-primary" />
                    </div>
                    <h1 className="text-lg font-bold text-foreground">Physics Hub</h1>
                </div>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-3 rounded-lg hover:bg-muted transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
                    aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-6">
                        <Menu
                            className={`h-6 w-6 text-foreground absolute transition-all duration-300 ${mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                                }`}
                        />
                        <X
                            className={`h-6 w-6 text-foreground absolute transition-all duration-300 ${mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* Overlay backdrop for mobile */}
            <div
                className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Sidebar - Drawer on mobile, Fixed on desktop */}
            <aside className={`fixed left-0 top-0 h-full w-64 bg-card border-r border-border flex flex-col z-50 transition-transform duration-300 ease-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                }`}>
                <div className="p-6 border-b border-border">
                    <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group">
                        <Home className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium">← Back to Portfolio</span>
                    </Link>
                    <div className="mt-6 flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Atom className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-foreground">
                                Physics Hub
                            </h1>
                            <p className="text-muted-foreground text-xs">Consulting Dashboard</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleSectionChange(item.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm min-h-[48px] ${activeSection === item.id
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                    }`}
                            >
                                <Icon className="h-5 w-5" />
                                <span>{item.label}</span>
                            </button>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-border">
                    <div className="bg-muted rounded-lg p-4">
                        <p className="text-xs text-muted-foreground">Logged in as</p>
                        <p className="text-sm font-semibold text-foreground mt-1">Sandun Preamakumara</p>
                    </div>
                </div>
            </aside>

            {/* Main Content Area - Responsive padding and margin */}
            <main className="md:ml-64 pt-16 md:pt-0 p-4 sm:p-6 md:p-8 min-h-screen">
                {activeSection === "dashboard" && (
                    <div className={`transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Dashboard Overview</h2>
                            <p className="text-sm md:text-base text-muted-foreground">Welcome to your Physics Hub consulting platform</p>
                        </div>

                        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6 md:mb-8">
                            {/* Stat Cards with staggered animation */}
                            {[
                                { icon: Users, label: "Active Students", value: "24", delay: "0ms" },
                                { icon: ClipboardCheck, label: "Papers to Mark", value: "12", delay: "100ms" },
                                { icon: TrendingUp, label: "Avg Performance", value: "87%", delay: "200ms" },
                            ].map((stat, index) => {
                                const Icon = stat.icon;
                                return (
                                    <div
                                        key={stat.label}
                                        className={`group relative overflow-hidden bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 hover-lift ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                            }`}
                                        style={{ transitionDelay: stat.delay }}
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <Icon className="h-20 w-20 text-foreground" />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                                                <Icon className="h-6 w-6" />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
                                                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Quick Actions */}
                        <div
                            className={`bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                }`}
                            style={{ transitionDelay: "300ms" }}
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Quick Actions</h3>
                            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                                <button className="group p-5 sm:p-6 bg-muted hover:bg-primary/10 rounded-xl text-left transition-all border border-border hover:border-primary/50 hover:shadow-md min-h-[80px]">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                                            <Users className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Add New Student</h4>
                                            <p className="text-sm text-muted-foreground">Register a new student to your database</p>
                                        </div>
                                    </div>
                                </button>
                                <button className="group p-5 sm:p-6 bg-muted hover:bg-primary/10 rounded-xl text-left transition-all border border-border hover:border-primary/50 hover:shadow-md min-h-[80px]">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                                            <ClipboardCheck className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Upload Papers</h4>
                                            <p className="text-sm text-muted-foreground">Upload exam papers for marking</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === "students" && (
                    <div className={`transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Student Database</h2>
                            <p className="text-sm md:text-base text-muted-foreground">Manage your student records and track their progress</p>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm">
                            <div className="flex items-center justify-center h-64">
                                <div className="text-center space-y-4">
                                    <div className="inline-flex items-center justify-center p-6 bg-muted rounded-2xl">
                                        <Database className="h-12 sm:h-16 w-12 sm:w-16 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">Student Management System</h3>
                                    <p className="text-muted-foreground max-w-md text-sm sm:text-base">Student database functionality coming soon. Track attendance, performance, and personalized learning paths.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === "marking" && (
                    <div className={`transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Paper Marking</h2>
                            <p className="text-sm md:text-base text-muted-foreground">Review and grade student submissions</p>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm">
                            <div className="flex items-center justify-center h-64">
                                <div className="text-center space-y-4">
                                    <div className="inline-flex items-center justify-center p-6 bg-muted rounded-2xl">
                                        <ClipboardCheck className="h-12 sm:h-16 w-12 sm:w-16 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">Paper Marking System</h3>
                                    <p className="text-muted-foreground max-w-md text-sm sm:text-base">Automated paper marking and feedback system coming soon. AI-assisted grading with detailed analytics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === "analytics" && (
                    <div className={`transition-all duration-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Analytics</h2>
                            <p className="text-sm md:text-base text-muted-foreground">Performance insights and statistical analysis</p>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm">
                            <div className="flex items-center justify-center h-64">
                                <div className="text-center space-y-4">
                                    <div className="inline-flex items-center justify-center p-6 bg-muted rounded-2xl">
                                        <BarChart3 className="h-12 sm:h-16 w-12 sm:w-16 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">Analytics Dashboard</h3>
                                    <p className="text-muted-foreground max-w-md text-sm sm:text-base">Comprehensive analytics with performance trends, topic mastery, and predictive insights.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
