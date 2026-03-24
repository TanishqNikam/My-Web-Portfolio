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
    const [bruteForceMode, setBruteForceMode] = useState(false);
    const [crackProgress, setCrackProgress] = useState([]);

    const startBruteForce = () => {
        setBruteForceMode(true);
        setIsOpen(false);
        setCrackProgress(["[+] INITIALIZING HYDRA v9.4", "[+] TARGET: TN-SOC_RESUME_ENCRYPTED.pdf", "[+] LOADING WORDLIST... [rockyou.txt]"]);
        
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            const hash = Math.random().toString(36).substring(2, 12).toUpperCase();
            const pass = Math.random().toString(36).substring(2, 8);
            setCrackProgress(prev => [...prev, `[-] TESTING HASH: ${hash} (pwd: ${pass}) ... FAILED`].slice(-15));
            
            if (attempts > 25) {
                clearInterval(interval);
                setCrackProgress(prev => [...prev.slice(-14), "[!] MATCH FOUND: 'admin123'", "[+] ENCRYPTION CRACKED. DOWNLOADING PORTFOLIO..."]);
                setTimeout(() => {
                    const link = document.createElement("a");
                    link.href = "/resume.pdf";
                    link.download = "Tanishq_Nikam_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    setTimeout(() => setBruteForceMode(false), 3000);
                }, 1500);
            }
        }, 100);
    };

    const handleResumeClick = (e) => {
        if (e.shiftKey) {
            e.preventDefault();
            startBruteForce();
        }
    };

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
                        <a 
                            href="/resume.pdf" 
                            download 
                            onClick={handleResumeClick}
                            title="Hold Shift to simulate a Brute Force attack"
                            className="flex items-center gap-2 text-xs uppercase border border-[#2a2a2a] px-3 py-1.5 rounded hover:bg-[#111111] hover:border-primary text-primary transition-all whitespace-nowrap cursor-pointer"
                        >
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
                            <a 
                                href="/resume.pdf" 
                                download 
                                onClick={handleResumeClick}
                                className="flex items-center gap-2 text-sm uppercase p-2 text-primary border-l-2 border-transparent hover:border-primary transition-all cursor-pointer"
                            >
                                <Download className="w-4 h-4" /> Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Brute Force Easter Egg Modal */}
            <AnimatePresence>
                {bruteForceMode && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 top-0 left-0 w-screen h-screen z-[100000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 pointer-events-auto"
                        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                    >
                        <div className="bg-[#050505] border border-primary/50 w-full max-w-2xl h-[400px] sm:h-[500px] flex flex-col rounded shadow-[0_0_50px_rgba(0,240,255,0.15)] font-mono">
                            <div className="bg-[#111] p-3 border-b border-primary/30 flex justify-between text-xs md:text-sm text-primary">
                                <span>tn-soc@hydration-server:~</span>
                                <span className="animate-pulse">BRUTE_FORCE_ACTIVE</span>
                            </div>
                            <div className="flex-grow p-4 md:p-6 overflow-hidden flex flex-col justify-end space-y-1.5 text-[10px] sm:text-xs md:text-sm">
                                {crackProgress.map((line, i) => (
                                    <div key={i} className={line.includes('FAILED') ? 'text-[#00ff41]/70' : line.includes('MATCH FOUND') ? 'text-red-500 font-bold bg-red-500/10 inline-block px-1' : 'text-white'}>
                                        {line}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
