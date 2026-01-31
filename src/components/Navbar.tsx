"use client";

import Link from "next/link";
import { Menu, X, Atom } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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

    return (
        <nav
            className={`fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-foreground tracking-wider">
                            SANDUN<span className="text-primary">.ENG</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                href="/"
                                className="text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="#about"
                                className="text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="#classes"
                                className="text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Classes
                            </Link>
                            <Link
                                href="#contact"
                                className="text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Contact
                            </Link>
                            <Link
                                href="/physics"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-all shadow inline-flex items-center gap-2"
                            >
                                <Atom className="h-4 w-4" />
                                Physics Hub
                            </Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="bg-card inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle navigation menu"
                        >
                            <span className="sr-only">
                                {mobileMenuOpen ? "Close main menu" : "Open main menu"}
                            </span>
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-muted-foreground hover:text-foreground hover:bg-muted block px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="#about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-muted-foreground hover:text-foreground hover:bg-muted block px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="#classes"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-muted-foreground hover:text-foreground hover:bg-muted block px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                            Classes
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-muted-foreground hover:text-foreground hover:bg-muted block px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/physics"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground block px-3 py-2 rounded-md text-base font-medium transition-all shadow inline-flex items-center gap-2"
                        >
                            <Atom className="h-5 w-5" />
                            Physics Hub
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
