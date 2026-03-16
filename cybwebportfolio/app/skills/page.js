"use client";

import TerminalCard from "@/components/TerminalCard";
import { Terminal, Server, Shield, Network, Code, Database } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Operating Systems",
        icon: Server,
        color: "text-primary",
        skills: [
            { name: "Linux (Debian, RHEL)", level: 90 },
            { name: "Windows Server", level: 85 },
            { name: "macOS", level: 80 }
        ]
    },
    {
        category: "Networking",
        icon: Network,
        color: "text-secondary",
        skills: [
            { name: "TCP/IP & OSI Model", level: 95 },
            { name: "DNS, HTTP/S, SSL/TLS", level: 90 },
            { name: "Subnetting & Routing", level: 85 },
            { name: "Firewall Configuration", level: 80 }
        ]
    },
    {
        category: "Security Tools",
        icon: Shield,
        color: "text-blue-400",
        skills: [
            { name: "Wireshark / tcpdump", level: 90 },
            { name: "Wazuh / Splunk", level: 85 },
            { name: "Nmap / Masscan", level: 95 },
            { name: "Burp Suite", level: 75 }
        ]
    },
    {
        category: "Security Concepts",
        icon: Terminal,
        color: "text-orange-400",
        skills: [
            { name: "Threat Detection & Hunting", level: 85 },
            { name: "Incident Response", level: 80 },
            { name: "Log Analysis", level: 90 },
            { name: "MITRE ATT&CK Framework", level: 85 }
        ]
    },
    {
        category: "Programming & Scripting",
        icon: Code,
        color: "text-yellow-400",
        skills: [
            { name: "Python", level: 90 },
            { name: "Bash Scripting", level: 85 },
            { name: "JavaScript / Node.js", level: 75 },
            { name: "PowerShell", level: 70 }
        ]
    }
];

export default function SkillsPage() {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-12">
            <div className="mb-10 border-b border-[#2a2a2a] pb-6">
                <h1 className="text-3xl font-bold font-mono text-white flex items-center gap-3">
                    <Terminal className="w-8 h-8 text-secondary" />
                    SYSTEM_CAPABILITIES
                </h1>
                <p className="text-muted mt-2 font-mono text-sm max-w-2xl">
                    Technical proficiencies, tool mastery, and core security competencies mapped to SOC requirements.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillsData.map((section, idx) => (
                    <motion.div
                        key={section.category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                        <TerminalCard title={section.category} icon={section.icon} className="h-full">
                            <div className="flex flex-col gap-5 mt-2">
                                {section.skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center text-sm font-semibold tracking-wide">
                                            <span className="text-gray-200">{skill.name}</span>
                                            <span className="text-muted">{skill.level}%</span>
                                        </div>
                                        {/* Terminal-style progress bar */}
                                        <div className="h-1.5 w-full bg-[#1a1a1a] rounded-sm overflow-hidden border border-[#222]">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                                                className={`h-full bg-current ${section.color} opacity-80`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TerminalCard>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
