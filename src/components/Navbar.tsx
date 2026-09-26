"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Atom } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Always show navbar at the top
            if (currentScrollY < 10) {
                setIsVisible(true);
            } else {
                // Show navbar when scrolling up, hide when scrolling down
                if (currentScrollY < lastScrollY) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    // Track active section using Intersection Observer
    useEffect(() => {
        const sections = ["about", "skills", "portfolio", "curriculum", "experience", "classes", "contact"];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

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

    const navLinks = [
        { href: "/", label: "Home", section: "" },
        { href: "#about", label: "About", section: "about" },
        { href: "#skills", label: "Arsenal", section: "skills" },
        { href: "#portfolio", label: "Portfolio", section: "portfolio" },
        { href: "#curriculum", label: "Curriculum", section: "curriculum" },
        { href: "#experience", label: "Experience", section: "experience" },
        { href: "#classes", label: "Classes", section: "classes" },
        { href: "#contact", label: "Contact", section: "contact" },
    ];

    const isActiveLink = (section: string) => activeSection === section;

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-400 ease-[var(--ease-luxury)] ${isVisible ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link
                                href="/"
                                className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-foreground tracking-wider transition-all hover:text-primary group"
                            >
                                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-border/80 group-hover:border-primary/80 transition-all shadow-xs shrink-0 ring-1 ring-primary/20">
                                    <Image
                                        src="/images/sadun-portrait.jpg"
                                        alt="Sadun Premakumara"
                                        fill
                                        sizes="32px"
                                        className="object-cover object-top transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <span>
                                    SANDUN<span className="text-primary">.ENG</span>
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 lg:ml-8 flex items-center space-x-1 lg:space-x-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className={`px-2.5 lg:px-3.5 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-all duration-200 ${isActiveLink(link.section)
                                            ? "text-primary bg-primary/10"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <Link
                                    href="https://physics-academy.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 lg:px-4 py-1.5 rounded-md text-xs lg:text-sm font-medium transition-all shadow hover:shadow-lg hover:shadow-primary/20 inline-flex items-center gap-1.5 hover-glow ml-2"
                                >
                                    <Atom className="h-4 w-4" />
                                    <span>Physics Academy</span>
                                </Link>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="bg-card inline-flex items-center justify-center p-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors min-w-[48px] min-h-[48px]"
                                aria-expanded={mobileMenuOpen}
                                aria-label="Toggle navigation menu"
                            >
                                <span className="sr-only">
                                    {mobileMenuOpen ? "Close main menu" : "Open main menu"}
                                </span>
                                <div className="relative w-6 h-6">
                                    <Menu
                                        className={`h-6 w-6 absolute transition-all duration-300 ${mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                                            }`}
                                        aria-hidden="true"
                                    />
                                    <X
                                        className={`h-6 w-6 absolute transition-all duration-300 ${mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                                            }`}
                                        aria-hidden="true"
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            <div
                className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile menu panel */}
            <div
                className={`md:hidden fixed top-16 left-0 right-0 bg-background border-b border-border z-40 transition-all duration-300 ease-out ${mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="px-4 pt-2 pb-4 space-y-1">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 rounded-md text-base font-medium transition-all min-h-[48px] flex items-center ${isActiveLink(link.section)
                                ? "text-primary bg-primary/10"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted"
                                }`}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="https://physics-academy.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground block px-4 py-3 rounded-md text-base font-medium transition-all shadow inline-flex items-center gap-2 min-h-[48px] mt-2"
                    >
                        <Atom className="h-5 w-5" />
                        Physics Academy
                    </Link>
                </div>
            </div>
        </>
    );
}
