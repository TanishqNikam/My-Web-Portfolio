"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Shield, Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/logs", label: "Logs" },
    { href: "/projects", label: "Projects" },
    { href: "/terminal", label: "Terminal" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={cn(
            "sticky top-0 z-50 w-full border-b border-[#2a2a2a] font-mono transition-colors duration-300",
            isOpen ? "bg-[#0a0a0a]" : "bg-[#0a0a0a]/80 backdrop-blur-md"
        )}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 text-primary hover:text-white transition-colors mr-8">
                        <Shield className="w-6 h-6" />
                        <span className="font-bold text-lg tracking-wider">TN</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-xs lg:text-sm uppercase tracking-wide transition-colors duration-200 whitespace-nowrap",
                                    pathname === link.href ? "text-primary border-b border-primary" : "text-muted hover:text-white"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex-1"></div>
                        <a href="/resume.pdf" download className="flex items-center gap-2 text-xs uppercase border border-[#2a2a2a] px-3 py-1.5 rounded hover:bg-[#111111] hover:border-primary text-primary transition-all whitespace-nowrap">
                            <Download className="w-3 h-3" /> Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-muted hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-[#2a2a2a] bg-[#0a0a0a]"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "p-2 text-sm uppercase tracking-wide border-l-2",
                                        pathname === link.href ? "text-primary border-primary bg-[#111111]" : "text-muted border-transparent hover:text-white hover:border-[#2a2a2a]"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <a href="/resume.pdf" download className="flex items-center gap-2 text-sm uppercase p-2 text-primary border-l-2 border-transparent hover:border-primary transition-all">
                                <Download className="w-4 h-4" /> Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
