"use client";

import Image from "next/image";

// Sample array mapping tools to their SimpleIcons slug for dynamically grabbing SVGs
const tools = [
    { name: "Splunk", slug: "splunk" },
    { name: "Wireshark", slug: "wireshark" },
    { name: "Kali Linux", slug: "kalilinux" },
    { name: "Python", slug: "python" },
    { name: "Bash", slug: "gnubash" },
    { name: "Linux", slug: "linux" },
    { name: "Docker", slug: "docker" },
];

// Repeat the tools array multiple times to ensure the marquee is always wider than any ultrawide screen
const displayTools = [...tools, ...tools, ...tools, ...tools];

// Helper to generate CDN URL for the SVG, color is matching our primary #00f0ff (00f0ff)
const getIconUrl = (slug) => `https://cdn.simpleicons.org/${slug}/00f0ff`;

export default function ToolsMarquee() {
    return (
        <div className="w-full overflow-hidden flex flex-col items-center justify-center py-8 border-y border-[#2a2a2a] bg-[#0d0d0d] relative">

            {/* Decorative Gradient Masks for smooth fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10 pointer-events-none" />

            {/* Primary animated track */}
            {/* The wrapper translates -50% to cycle cleanly between the two lists */}
            <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
                {/* List 1 */}
                <ul className="flex w-max shrink-0 items-center gap-12 md:gap-24 px-6 md:px-12">
                    {displayTools.map((tool, index) => (
                        <li key={`tool-a-${index}`} className="flex items-center justify-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <Image
                                    src={getIconUrl(tool.slug)}
                                    alt={tool.name}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-mono text-sm tracking-wider text-muted hidden md:block whitespace-nowrap">{tool.name}</span>
                        </li>
                    ))}
                </ul>

                {/* Duplicate list for seamless infinite scrolling */}
                <ul className="flex w-max shrink-0 items-center gap-12 md:gap-24 px-6 md:px-12" aria-hidden="true">
                    {displayTools.map((tool, index) => (
                        <li key={`tool-b-${index}`} className="flex items-center justify-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <Image
                                    src={getIconUrl(tool.slug)}
                                    alt={tool.name}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-mono text-sm tracking-wider text-muted hidden md:block whitespace-nowrap">{tool.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
