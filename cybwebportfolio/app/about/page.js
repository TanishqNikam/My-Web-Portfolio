import TerminalCard from "@/components/TerminalCard";
import { User, Target, Compass, Award, ShieldCheck, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "About | T.NIKAM SOC Portfolio",
    description: "Career objective and cybersecurity journey.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 lg:px-8 py-12">
            <div className="mb-10 border-b border-[#2a2a2a] pb-6">
                <h1 className="text-3xl font-bold font-mono text-white flex items-center gap-3">
                    <User className="w-8 h-8 text-primary" />
                    OPERATOR_PROFILE
                </h1>
                <p className="text-muted mt-2 font-mono text-sm max-w-2xl">
                    Background, objectives, and continuous learning path in the cybersecurity domain.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-8">
                    <TerminalCard title="Career Objective" icon={Target}>
                        <p className="text-gray-300 leading-relaxed text-base">
                            To secure a challenging role as a Security Operations Center (SOC) Analyst where I can leverage my strong foundational knowledge in networking, log analysis, and threat detection. I am committed to continuous learning, identifying vulnerabilities, and actively defending enterprise networks against sophisticated cyber threats.
                        </p>
                    </TerminalCard>

                    <TerminalCard title="Cybersecurity Journey" icon={Compass}>
                        <div className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-[#2a2a2a] before:to-transparent">
                            {/* Timeline Item 1 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-primary bg-[#0a0a0a] text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[-0.625rem] md:ml-0 z-10" />
                                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded bg-[#111111] border border-[#2a2a2a] hover:border-primary transition-colors">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-bold text-white font-mono">Present</span>
                                        <span className="text-xs text-secondary px-2 border border-secondary/30 rounded-sm">Active</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-primary mb-2">SOC Analyst Training</h3>
                                    <p className="text-sm text-muted">Deep diving into SIEM configurations (Splunk, Wazuh), advanced network analysis, and building custom homelabs for malware detonation.</p>
                                </div>
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[#555] bg-[#0a0a0a] text-muted shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[-0.625rem] md:ml-0 z-10 group-hover:border-primary transition-colors" />
                                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded bg-[#111111] border border-[#2a2a2a] hover:border-primary transition-colors">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-bold text-white font-mono">2025</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors">CompTIA Security+ Framework</h3>
                                    <p className="text-sm text-muted">Mastered core security principles, identity management, cryptography, and network security foundations.</p>
                                </div>
                            </div>

                            {/* Timeline Item 3 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[#555] bg-[#0a0a0a] text-muted shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-[-0.625rem] md:ml-0 z-10 group-hover:border-primary transition-colors" />
                                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.25rem)] p-4 rounded bg-[#111111] border border-[#2a2a2a] hover:border-primary transition-colors">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="font-bold text-white font-mono">2024</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors">IT Foundations & Networking</h3>
                                    <p className="text-sm text-muted">Started journey with robust understanding of TCP/IP, OSI, Linux system administration, and basic scripting.</p>
                                </div>
                            </div>
                        </div>
                    </TerminalCard>
                </div>

                <div className="flex flex-col gap-8">
                    <TerminalCard title="Platform Training" icon={Award}>
                        <ul className="flex flex-col gap-4">
                            <li className="flex justify-between items-center border-b border-[#2a2a2a] pb-2">
                                <span className="text-gray-300 font-semibold">TryHackMe</span>
                                <span className="text-secondary font-mono text-xs">Top 2%</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-[#2a2a2a] pb-2">
                                <span className="text-gray-300 font-semibold">HackTheBox</span>
                                <span className="text-primary font-mono text-xs">Pro Hacker</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-[#2a2a2a] pb-2">
                                <span className="text-gray-300 font-semibold">LetsDefend</span>
                                <span className="text-orange-400 font-mono text-xs">Tier 2 Analyst</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-gray-300 font-semibold">Blue Team Labs</span>
                                <span className="text-blue-400 font-mono text-xs">Level 4</span>
                            </li>
                        </ul>
                    </TerminalCard>

                    <TerminalCard title="Live Stats" icon={Activity}>
                        <div className="flex justify-center items-center w-full overflow-hidden rounded-md bg-transparent">
                            <iframe
                                src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=5640810"
                                style={{ border: 'none' }}
                                className="w-full h-[300px]"
                                title="TryHackMe Badge"
                            ></iframe>
                        </div>
                    </TerminalCard>

                    <TerminalCard title="Action Center" icon={ShieldCheck}>
                        <div className="flex flex-col gap-4">
                            <p className="text-muted text-sm border-l-2 border-primary pl-4">
                                "Offense informs defense. Understanding the attacker is the first step to stopping them."
                            </p>
                            <Link
                                href="/logs"
                                className="w-full py-3 bg-[#111111] border border-primary text-center text-primary font-bold font-mono hover:bg-primary hover:text-black transition-colors rounded-sm"
                            >
                                VIEW_LOGS
                            </Link>
                        </div>
                    </TerminalCard>
                </div>
            </div>
        </div>
    );
}
