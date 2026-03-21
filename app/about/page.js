"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TerminalCard from "@/components/TerminalCard";
import {
    MapPin, Linkedin, Github, Briefcase, Users,
    Cpu, BookOpen, CalendarDays, Award, Activity,
    ExternalLink, ChevronRight,
} from "lucide-react";

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
    { value: "1+",     label: "Year at Bosch" },
    { value: "6",      label: "Roles Held" },
    { value: "800+",   label: "Event Attendees" },
    { value: "4",      label: "Certifications" },
];

// ─── Unified Timeline (newest first) ─────────────────────────────────────────
const timeline = [
    {
        date: "Jan 2026 – Present",
        title: "Cyber Security & Automation Analyst",
        org: "Bosch",
        current: true,
        color: "#00f0ff",
        type: "Work",
        icon: Briefcase,
        points: [
            "Cybersecurity operations and automation workflows in a global enterprise environment.",
            "Building detection pipelines and secure automation tooling.",
        ],
    },
    {
        date: "Mar 2025 – Apr 2025",
        title: "Production Head",
        org: "TEDx AISSMSCOE",
        current: false,
        color: "#f87171",
        type: "Community",
        icon: Users,
        points: [
            "Oversaw full production and technical execution for the TEDx event.",
        ],
    },
    {
        date: "Sep 2024 – Aug 2025",
        title: "Organizer",
        org: "Google Developer Groups on Campus — AISSMSCOE",
        current: false,
        color: "#00ff41",
        type: "Community",
        icon: Users,
        points: [
            "Organized technical workshops, speaker sessions, and community events for the campus GDG chapter.",
        ],
    },
    {
        date: "Sep 2024 – May 2025",
        title: "Lead Organizer",
        org: "GDSC Pune",
        current: false,
        color: "#00ff41",
        type: "Community",
        icon: Users,
        points: [
            "Led city-wide Google Developer Student Clubs events across Pune campuses.",
        ],
    },
    {
        date: "Apr 2024",
        title: "Event Management Member",
        org: "GDSC WoW Event",
        current: false,
        color: "#facc15",
        type: "Community",
        icon: Users,
        points: [
            "Maharashtra's largest student-led tech event.",
            "Generated ₹70,000+ in individual ticket sales.",
            "Managed crowd operations for 800+ attendees.",
            "Handled event design, planning, and execution.",
        ],
    },
    {
        date: "Feb 2024 – Sep 2024",
        title: "Programming Dept. Management Head",
        org: "Ciphers Community",
        current: false,
        color: "#a78bfa",
        type: "Community",
        icon: Cpu,
        points: [
            "Managed programming department, learning initiatives, and inter-college competitions.",
        ],
    },
    {
        date: "2024",
        title: "Security Foundations",
        org: "Google Cert · Cisco NetAcad · TryHackMe SOC L1",
        current: false,
        color: "#fb923c",
        type: "Learning",
        icon: BookOpen,
        points: [
            "Google Cybersecurity Certificate & Cisco Networking Basics.",
            "TryHackMe SOC Level 1 — detection engineering & blue team labs.",
            "TCP/IP, Linux system administration, scripting fundamentals.",
        ],
    },
];

// ─── Credentials ──────────────────────────────────────────────────────────────
const credentials = [
    { name: "CompTIA Security+", status: "In Progress", color: "#facc15" },
    { name: "Google CySec Cert", status: "Verified ✓",  color: "#00ff41" },
    { name: "Cisco Networking",  status: "Verified ✓",  color: "#00ff41" },
    { name: "TryHackMe SOC L1", status: "Verified ✓",  color: "#00ff41" },
];

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-6xl">

            {/* ══════════════════════════════════════════════════
                HERO STRIP
            ══════════════════════════════════════════════════ */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#0d0d0d] mb-8 p-6 md:p-8"
            >
                {/* Background glow */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#00ff41]/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8">
                    {/* Avatar */}
                    <div className="shrink-0">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-lg overflow-hidden border-2 border-[#00f0ff]/40 shadow-[0_0_24px_rgba(0,240,255,0.15)] shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/avatar.png"
                                alt="Tanishq Nikam"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                        {/* Live indicator */}
                        <div className="flex items-center justify-center gap-1.5 mt-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse" />
                            <span className="text-[10px] font-mono text-[#00ff41]">ONLINE</span>
                        </div>
                    </div>

                    {/* Identity */}
                    <div className="flex-1 text-center sm:text-left">
                        {/* Name */}
                        <h1 className="text-3xl md:text-4xl font-bold font-mono text-white tracking-tight">
                            Tanishq Nikam
                        </h1>

                        {/* Role */}
                        <p className="text-[#00f0ff] font-mono text-sm md:text-base mt-1 mb-0.5">
                            Cyber Security &amp; Automation Analyst
                        </p>
                        <p className="text-[#888] font-mono text-xs md:text-sm">
                            @ Bosch · Pune, India
                        </p>

                        {/* Location + links */}
                        <div className="flex items-center justify-center sm:justify-start gap-4 mt-3 flex-wrap">
                            <span className="flex items-center gap-1 text-[#666] text-xs font-mono">
                                <MapPin className="w-3 h-3" /> Pune, Maharashtra
                            </span>
                            <Link
                                href="https://linkedin.com/in/tanishqnikam"
                                target="_blank"
                                className="flex items-center gap-1 text-[#666] hover:text-[#00f0ff] text-xs font-mono transition-colors"
                            >
                                <Linkedin className="w-3 h-3" /> LinkedIn
                            </Link>
                            <Link
                                href="https://github.com/TanishqNikam"
                                target="_blank"
                                className="flex items-center gap-1 text-[#666] hover:text-[#00f0ff] text-xs font-mono transition-colors"
                            >
                                <Github className="w-3 h-3" /> GitHub
                            </Link>
                        </div>

                        {/* Bio */}
                        <p className="text-[#aaa] text-sm leading-relaxed mt-4 max-w-xl">
                            Currently building detection pipelines and automation tooling at Bosch.
                            Deepening expertise in threat detection, SIEM engineering, and log analysis —
                            actively pursuing CompTIA Security+ to formalise that foundation.
                        </p>

                        {/* CTA buttons */}
                        <div className="flex items-center justify-center sm:justify-start gap-3 mt-5 flex-wrap">
                            <Link
                                href="/resume.pdf"
                                target="_blank"
                                className="flex items-center gap-2 px-4 py-2 bg-[#00f0ff] text-black text-xs font-bold font-mono rounded-sm hover:bg-[#00d4e0] transition-colors"
                            >
                                <ExternalLink className="w-3 h-3" /> RESUME
                            </Link>
                            <Link
                                href="/logs"
                                className="flex items-center gap-2 px-4 py-2 border border-[#2a2a2a] text-[#888] text-xs font-mono rounded-sm hover:border-[#00f0ff]/40 hover:text-[#00f0ff] transition-colors"
                            >
                                <ChevronRight className="w-3 h-3" /> VIEW LOGS
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ══════════════════════════════════════════════════
                STATS BAR
            ══════════════════════════════════════════════════ */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2a2a2a] rounded-lg overflow-hidden border border-[#2a2a2a] mb-10"
            >
                {stats.map((s, i) => (
                    <div
                        key={s.label}
                        className="bg-[#0d0d0d] px-5 py-4 text-center hover:bg-[#111] transition-colors"
                    >
                        <p className="text-2xl font-bold font-mono text-[#00f0ff]">{s.value}</p>
                        <p className="text-[#666] text-[11px] font-mono mt-0.5 uppercase tracking-wider">{s.label}</p>
                    </div>
                ))}
            </motion.div>

            {/* ══════════════════════════════════════════════════
                MAIN BODY: TIMELINE + SIDEBAR
            ══════════════════════════════════════════════════ */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                {/* ── Timeline (left, 2/3) ── */}
                <div className="lg:col-span-2">
                    <h2 className="text-xs font-mono uppercase tracking-widest text-[#555] mb-6 flex items-center gap-2">
                        <span className="w-4 h-px bg-[#00f0ff] inline-block" />
                        Experience &amp; Journey
                    </h2>

                    <div className="relative">
                        {/* Vertical rule */}
                        <div className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00f0ff] via-[#2a2a2a] to-transparent" />

                        <div className="flex flex-col">
                            {timeline.map((item, idx) => (
                                <motion.div
                                    key={`${item.org}-${item.date}`}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.07, duration: 0.4 }}
                                    className="relative pl-9 pb-7 group"
                                >
                                    {/* Dot */}
                                    <div
                                        className="absolute left-0 top-[3px] w-[19px] h-[19px] rounded-full border-2 bg-[#0a0a0a] z-10 transition-transform duration-200 group-hover:scale-110 flex items-center justify-center"
                                        style={{ borderColor: item.color }}
                                    >
                                        {item.current && (
                                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: item.color }} />
                                        )}
                                    </div>

                                    {/* Card */}
                                    <div
                                        className="bg-[#0d0d0d] border border-[#222] rounded-lg p-4 md:p-5 transition-all duration-200 group-hover:border-[#333]"
                                        style={{ boxShadow: `0 0 0 0 ${item.color}00` }}
                                    >
                                        {/* Header row */}
                                        <div className="flex items-start justify-between gap-3 flex-wrap">
                                            <div className="flex-1 min-w-0">
                                                <p className="text-white font-semibold text-sm md:text-base leading-snug">
                                                    {item.title}
                                                </p>
                                                <p className="text-xs font-mono mt-0.5 truncate" style={{ color: item.color }}>
                                                    {item.org}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
                                                {item.current && (
                                                    <span
                                                        className="text-[10px] font-mono px-2 py-0.5 rounded border animate-pulse"
                                                        style={{ color: item.color, borderColor: `${item.color}50`, backgroundColor: `${item.color}10` }}
                                                    >
                                                        ● NOW
                                                    </span>
                                                )}
                                                <span
                                                    className="text-[10px] font-mono px-2 py-0.5 rounded border"
                                                    style={{ color: item.color, borderColor: `${item.color}30`, backgroundColor: `${item.color}08` }}
                                                >
                                                    {item.type}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Date */}
                                        <div className="flex items-center gap-1.5 text-[#444] text-[11px] font-mono mt-2 mb-3">
                                            <CalendarDays className="w-3 h-3" />
                                            {item.date}
                                        </div>

                                        {/* Points */}
                                        {item.points.length > 0 && (
                                            <ul className="flex flex-col gap-1.5 border-t border-[#1c1c1c] pt-3">
                                                {item.points.map((p) => (
                                                    <li key={p} className="text-[#777] text-xs flex items-start gap-2 leading-relaxed">
                                                        <ChevronRight className="w-3 h-3 shrink-0 mt-0.5 text-[#333]" />
                                                        {p}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Sidebar (right, 1/3) ── */}
                <div className="flex flex-col gap-6 lg:sticky lg:top-6">

                    {/* Credentials */}
                    <motion.div
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <TerminalCard title="Credentials" icon={Award}>
                            <ul className="flex flex-col gap-3">
                                {credentials.map((c) => (
                                    <li key={c.name} className="flex justify-between items-center py-2 border-b border-[#1a1a1a] last:border-0 last:pb-0">
                                        <span className="text-gray-300 text-xs font-medium">{c.name}</span>
                                        <span className="text-[10px] font-mono shrink-0 ml-2" style={{ color: c.color }}>
                                            {c.status}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </TerminalCard>
                    </motion.div>

                    {/* TryHackMe badge */}
                    <motion.div
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <TerminalCard title="TryHackMe Stats" icon={Activity}>
                            <div className="w-full overflow-hidden rounded">
                                <iframe
                                    src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=5640810"
                                    style={{ border: "none" }}
                                    className="w-full h-[260px]"
                                    title="TryHackMe Badge"
                                />
                            </div>
                        </TerminalCard>
                    </motion.div>

                    {/* Skills CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg p-4 flex flex-col gap-3"
                    >
                        <p className="text-[#555] text-xs font-mono border-l-2 border-[#00f0ff] pl-3 leading-relaxed">
                            "Offense informs defense. Understanding the attacker is the first step to stopping them."
                        </p>

                        <Link
                            href="/projects"
                            className="flex items-center justify-center gap-2 w-full py-2.5 border border-[#2a2a2a] text-[#888] text-xs font-mono rounded-sm hover:border-[#00f0ff]/40 hover:text-[#00f0ff] transition-colors"
                        >
                            <ChevronRight className="w-3 h-3" /> VIEW_PROJECTS
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
