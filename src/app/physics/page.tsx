"use client";

import { Users, FileCheck, BarChart3, Home, Database, ClipboardCheck, TrendingUp, Atom, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PhysicsHub() {
    const [activeSection, setActiveSection] = useState("dashboard");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSectionChange = (section: string) => {
        setActiveSection(section);
        setMobileMenuOpen(false); // Close mobile menu when section changes
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Mobile Header with Hamburger */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-card border-b border-border flex items-center justify-between px-4 z-50">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Atom className="h-5 w-5 text-primary" />
                    </div>
                    <h1 className="text-lg font-bold text-foreground">Physics Hub</h1>
                </div>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6 text-foreground" />
                    ) : (
                        <Menu className="h-6 w-6 text-foreground" />
                    )}
                </button>
            </div>

            {/* Overlay backdrop for mobile */}
            {mobileMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar - Drawer on mobile, Fixed on desktop */}
            <aside className={`fixed left-0 top-0 h-full w-64 bg-card border-r border-border flex flex-col z-50 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
                }`}>
                <div className="p-6 border-b border-border">
                    <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                        <Home className="h-5 w-5" />
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
                    <button
                        onClick={() => handleSectionChange("dashboard")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm ${activeSection === "dashboard"
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                    >
                        <Home className="h-5 w-5" />
                        <span>Dashboard</span>
                    </button>
                    <button
                        onClick={() => handleSectionChange("students")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm ${activeSection === "students"
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                    >
                        <Users className="h-5 w-5" />
                        <span>Student Database</span>
                    </button>
                    <button
                        onClick={() => handleSectionChange("marking")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm ${activeSection === "marking"
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                    >
                        <FileCheck className="h-5 w-5" />
                        <span>Paper Marking</span>
                    </button>
                    <button
                        onClick={() => handleSectionChange("analytics")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm ${activeSection === "analytics"
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }`}
                    >
                        <BarChart3 className="h-5 w-5" />
                        <span>Analytics</span>
                    </button>
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
                    <div>
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Dashboard Overview</h2>
                            <p className="text-sm md:text-base text-muted-foreground">Welcome to your Physics Hub consulting platform</p>
                        </div>

                        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-6 md:mb-8">
                            {/* Stat Cards */}
                            <div className="group relative overflow-hidden bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Users className="h-20 w-20 text-foreground" />
                                </div>
                                <div className="relative z-10">
                                    <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary mb-4">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-medium text-muted-foreground">Active Students</h3>
                                        <p className="text-3xl font-bold text-foreground">24</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <ClipboardCheck className="h-20 w-20 text-foreground" />
                                </div>
                                <div className="relative z-10">
                                    <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary mb-4">
                                        <ClipboardCheck className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-medium text-muted-foreground">Papers to Mark</h3>
                                        <p className="text-3xl font-bold text-foreground">12</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative overflow-hidden bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <TrendingUp className="h-20 w-20 text-foreground" />
                                </div>
                                <div className="relative z-10">
                                    <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary mb-4">
                                        <TrendingUp className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-medium text-muted-foreground">Avg Performance</h3>
                                        <p className="text-3xl font-bold text-foreground">87%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Quick Actions</h3>
                            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                                <button className="group p-6 bg-muted hover:bg-primary/10 rounded-xl text-left transition-all border border-border hover:border-primary/50 hover:shadow-md">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            <Users className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Add New Student</h4>
                                            <p className="text-sm text-muted-foreground">Register a new student to your database</p>
                                        </div>
                                    </div>
                                </button>
                                <button className="group p-6 bg-muted hover:bg-primary/10 rounded-xl text-left transition-all border border-border hover:border-primary/50 hover:shadow-md">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
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
                    <div>
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Student Database</h2>
                            <p className="text-sm md:text-base text-muted-foreground">Manage your student records and track their progress</p>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm">
                            <div className="flex items-center justify-center h-64">
                                <div className="text-center space-y-4">
                                    <div className="inline-flex items-center justify-center p-6 bg-muted rounded-2xl">
                                        <Database className="h-16 w-16 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground">Student Management System</h3>
                                    <p className="text-muted-foreground max-w-md">Student database functionality coming soon. Track attendance, performance, and personalized learning paths.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === "marking" && (
                    <div>
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Paper Marking</h2>
                            <p className="text-sm md:text-base text-muted-foreground">Review and grade student submissions</p>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm">
                            <div className="flex items-center justify-center h-64">
                                <div className="text-center space-y-4">
                                    <div className="inline-flex items-center justify-center p-6 bg-muted rounded-2xl">
                                        <ClipboardCheck className="h-16 w-16 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground">Paper Marking System</h3>
                                    <p className="text-muted-foreground max-w-md">Automated paper marking and feedback system coming soon. AI-assisted grading with detailed analytics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === "analytics" && (
                    <div>
                        <div className="mb-6 md:mb-8">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">Analytics</h2>
                            <p className="text-sm md:text-base text-muted-foreground">Performance insights and statistical analysis</p>
                        </div>

                        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 md:p-12 shadow-sm">
                            <div className="flex items-center justify-center h-64">
                                <div className="text-center space-y-4">
                                    <div className="inline-flex items-center justify-center p-6 bg-muted rounded-2xl">
                                        <BarChart3 className="h-16 w-16 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground">Analytics Dashboard</h3>
                                    <p className="text-muted-foreground max-w-md">Comprehensive analytics with performance trends, topic mastery, and predictive insights.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
