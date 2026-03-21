"use client";

import TerminalCard from "@/components/TerminalCard";
import {
    Terminal,
    Server,
    Shield,
    Network,
    Code,
    Award,
    CheckCircle,
    Clock,
    Wrench,
    BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

// ─── Certifications ───────────────────────────────────────────────────────────
const certifications = [
    {
        name: "CompTIA Security+",
        issuer: "CompTIA",
        status: "in-progress",
        note: "Exam scheduled — active prep",
    },
    {
        name: "Google Cybersecurity Certificate",
        issuer: "Google / Coursera",
        status: "earned",
        note: "Completed 2024",
    },
    {
        name: "Cisco Networking Basics",
        issuer: "Cisco NetAcad",
        status: "earned",
        note: "Completed 2023",
    },
    {
        name: "TryHackMe — SOC Level 1",
        issuer: "TryHackMe",
        status: "earned",
        note: "Practical labs & detection engineering",
    },
];

// ─── Tool Arsenal ─────────────────────────────────────────────────────────────
const toolGroups = [
    {
        category: "SIEM & Log Analysis",
        icon: Shield,
        color: "primary",
        tools: ["Splunk", "Wazuh", "Elastic Stack (ELK)", "Graylog"],
    },
    {
        category: "Network Analysis",
        icon: Network,
        color: "secondary",
        tools: ["Wireshark", "tcpdump", "Nmap", "Masscan", "Zeek"],
    },
    {
        category: "OS & Infrastructure",
        icon: Server,
        color: "blue",
        tools: ["Kali Linux", "Ubuntu Server", "CentOS / RHEL", "Windows Server"],
    },
    {
        category: "Scripting & Automation",
        icon: Code,
        color: "yellow",
        tools: ["Python", "Bash", "PowerShell", "Regex"],
    },
    {
        category: "Web & App Security",
        icon: Wrench,
        color: "orange",
        tools: ["Burp Suite", "OWASP ZAP", "Nikto", "SQLMap"],
    },
    {
        category: "Frameworks & Methodologies",
        icon: BookOpen,
        color: "purple",
        tools: ["MITRE ATT&CK", "NIST CSF", "Cyber Kill Chain", "OWASP Top 10"],
    },
];

// ─── Competency Areas ─────────────────────────────────────────────────────────
const competencies = [
    {
        title: "Threat Detection & Hunting",
        description:
            "Built custom SIEM correlation rules in Wazuh and Splunk. Practised proactive threat hunting through TryHackMe SOC labs, identifying lateral movement and persistence techniques mapped to MITRE ATT&CK.",
    },
    {
        title: "Incident Response",
        description:
            "Followed structured IR playbooks (Preparation → Containment → Eradication → Recovery). Documented full investigation write-ups for simulated breaches, including timeline reconstruction from logs.",
    },
    {
        title: "Network Forensics",
        description:
            "Analysed PCAP files to uncover C2 beaconing, data exfiltration patterns, and lateral movement. Proficient with Wireshark filters, tcpdump captures, and network baseline anomaly detection.",
    },
    {
        title: "Vulnerability Assessment",
        description:
            "Conducted Nmap-based network enumeration and service fingerprinting. Performed basic web application testing using Burp Suite on intentionally vulnerable targets (DVWA, HackTheBox).",
    },
];

// ─── Colour map ───────────────────────────────────────────────────────────────
const colorMap = {
    primary: {
        badge: "border-[#00f0ff]/30 text-[#00f0ff] bg-[#00f0ff]/5 hover:bg-[#00f0ff]/10",
        heading: "text-[#00f0ff]",
        glow: "shadow-[0_0_12px_rgba(0,240,255,0.15)]",
    },
    secondary: {
        badge: "border-[#00ff41]/30 text-[#00ff41] bg-[#00ff41]/5 hover:bg-[#00ff41]/10",
        heading: "text-[#00ff41]",
        glow: "shadow-[0_0_12px_rgba(0,255,65,0.12)]",
    },
    blue: {
        badge: "border-blue-400/30 text-blue-400 bg-blue-400/5 hover:bg-blue-400/10",
        heading: "text-blue-400",
        glow: "shadow-[0_0_12px_rgba(96,165,250,0.12)]",
    },
    yellow: {
        badge: "border-yellow-400/30 text-yellow-400 bg-yellow-400/5 hover:bg-yellow-400/10",
        heading: "text-yellow-400",
        glow: "shadow-[0_0_12px_rgba(250,204,21,0.1)]",
    },
    orange: {
        badge: "border-orange-400/30 text-orange-400 bg-orange-400/5 hover:bg-orange-400/10",
        heading: "text-orange-400",
        glow: "shadow-[0_0_12px_rgba(251,146,60,0.1)]",
    },
    purple: {
        badge: "border-purple-400/30 text-purple-400 bg-purple-400/5 hover:bg-purple-400/10",
        heading: "text-purple-400",
        glow: "shadow-[0_0_12px_rgba(192,132,252,0.1)]",
    },
};

export default function SkillsPage() {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-6xl">

            {/* ── Page Header ── */}
            <div className="mb-12 border-b border-[#2a2a2a] pb-6">
                <h1 className="text-3xl font-bold font-mono text-white flex items-center gap-3">
                    <Terminal className="w-8 h-8 text-[#00f0ff]" />
                    CAPABILITIES &amp; ARSENAL
                </h1>
                <p className="text-[#888] mt-2 font-mono text-sm max-w-2xl">
                    Tools used in real labs and investigations · Frameworks applied in practice · Certifications with verifiable proof
                </p>
            </div>

            {/* ── Certifications ── */}
            <section className="mb-14">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#888] mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#00f0ff]" />
                    Certifications &amp; Credentials
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08, duration: 0.4 }}
                            className="bg-[#111] border border-[#2a2a2a] rounded p-4 flex items-start gap-4 hover:border-[#00f0ff]/30 transition-colors duration-200"
                        >
                            <div className="mt-0.5 shrink-0">
                                {cert.status === "earned" ? (
                                    <CheckCircle className="w-5 h-5 text-[#00ff41]" />
                                ) : (
                                    <Clock className="w-5 h-5 text-yellow-400" />
                                )}
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm leading-tight">{cert.name}</p>
                                <p className="text-[#888] text-xs mt-0.5 font-mono">{cert.issuer}</p>
                                <p className={`text-xs mt-1.5 font-mono ${cert.status === "earned" ? "text-[#00ff41]" : "text-yellow-400"}`}>
                                    {cert.status === "earned" ? "✓ VERIFIED" : "⏳ IN PROGRESS"} — {cert.note}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── Tool Arsenal ── */}
            <section className="mb-14">
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#888] mb-4 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#00f0ff]" />
                    Tool Arsenal
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {toolGroups.map((group, idx) => {
                        const colors = colorMap[group.color];
                        const Icon = group.icon;
                        return (
                            <motion.div
                                key={group.category}
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.07, duration: 0.4 }}
                                className={`bg-[#111] border border-[#2a2a2a] rounded p-4 hover:border-[#2a2a2a] transition-all duration-200 ${colors.glow}`}
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <Icon className={`w-4 h-4 ${colors.heading}`} />
                                    <span className={`text-xs font-mono uppercase tracking-wider ${colors.heading}`}>
                                        {group.category}
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className={`text-xs font-mono px-2.5 py-1 rounded-sm border cursor-default transition-colors duration-150 ${colors.badge}`}
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── Competency Areas ── */}
            <section>
                <h2 className="text-xs font-mono uppercase tracking-widest text-[#888] mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#00f0ff]" />
                    Core Competencies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {competencies.map((comp, idx) => (
                        <motion.div
                            key={comp.title}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.09, duration: 0.4 }}
                        >
                            <TerminalCard title={comp.title} icon={Shield}>
                                <p className="text-[#aaa] text-sm leading-relaxed">
                                    {comp.description}
                                </p>
                            </TerminalCard>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
