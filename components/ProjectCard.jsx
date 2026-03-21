import Link from "next/link";
import { Github, ArrowUpRight, Tag, CheckCircle, Loader, Server } from "lucide-react";

const statusConfig = {
    "Complete": { color: "text-green-500 border-green-500/30 bg-green-500/10", icon: CheckCircle },
    "Active": { color: "text-primary border-primary/30 bg-primary/10", icon: Loader },
    "In Progress": { color: "text-orange-500 border-orange-500/30 bg-orange-500/10", icon: Loader },
};

const typeConfig = {
    "Security Script": { color: "text-yellow-400 border-yellow-400/20 bg-yellow-400/5" },
    "Home Lab": { color: "text-purple-400 border-purple-400/20 bg-purple-400/5" },
    "Detection Tool": { color: "text-blue-400 border-blue-400/20 bg-blue-400/5" },
};

export default function ProjectCard({ project, featured = false }) {
    const status = statusConfig[project.status] || statusConfig["Active"];
    const StatusIcon = status.icon;
    const typeStyle = typeConfig[project.type] || typeConfig["Detection Tool"];

    return (
        <div className={`relative group flex flex-col bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 ${featured ? "h-full" : ""}`}>
            {/* Top accent bar */}
            <div className="h-0.5 w-full bg-gradient-to-r from-primary via-secondary to-transparent" />

            <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        {/* Type + Status badges */}
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-xs font-mono px-2 py-0.5 rounded-sm border ${typeStyle.color}`}>
                                {project.type}
                            </span>
                            <span className={`flex items-center gap-1 text-xs font-mono px-2 py-0.5 rounded-sm border ${status.color}`}>
                                <StatusIcon className="w-3 h-3" />
                                {project.status}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold font-mono text-white group-hover:text-primary transition-colors leading-tight">
                            {project.title}
                        </h3>
                    </div>

                    {/* GitHub link */}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 w-9 h-9 flex items-center justify-center border border-[#2a2a2a] rounded-sm hover:border-primary hover:text-primary text-muted transition-all"
                            title="View on GitHub"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                    )}
                    {!project.github && (
                        <div className="shrink-0 w-9 h-9 flex items-center justify-center border border-[#2a2a2a] rounded-sm text-muted/30" title="Local Lab">
                            <Server className="w-4 h-4" />
                        </div>
                    )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed flex-1">
                    {project.description}
                </p>

                {/* Tools/Tags */}
                {project.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[#2a2a2a]">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono bg-[#111] border border-[#2a2a2a] text-gray-400 px-2 py-0.5 rounded-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
