import Link from "next/link";
import { ArrowUpRight, Clock, AlertTriangle, ShieldCheck, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FeaturedLog({ log }) {
    if (!log) return null;

    // Helper to determine severity color
    const getSeverityColor = (severity) => {
        switch (severity?.toLowerCase()) {
            case 'high': return 'text-red-500 border-red-500/30 bg-red-500/10';
            case 'medium': return 'text-orange-500 border-orange-500/30 bg-orange-500/10';
            case 'low': return 'text-primary border-primary/30 bg-primary/10';
            default: return 'text-muted border-border bg-[#111]';
        }
    };

    return (
        <div className="w-full relative group">
            {/* Thematic animated background glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-[#00ff41] rounded-lg opacity-20 blur group-hover:opacity-40 transition duration-700" />

            <div className="relative w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-6 lg:p-8 flex flex-col md:flex-row gap-8 items-start justify-between">

                {/* Content Side */}
                <div className="flex-1 flex flex-col gap-4">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="flex items-center gap-1 text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded-sm border border-primary/20 uppercase tracking-wider">
                            <AlertTriangle className="w-3 h-3" />
                            Latest_Intel
                        </span>

                        {log.severity && (
                            <span className={cn(
                                "text-xs font-mono px-2 py-1 rounded-sm border uppercase tracking-wider",
                                getSeverityColor(log.severity)
                            )}>
                                SEV: {log.severity}
                            </span>
                        )}
                        <span className="flex items-center gap-1.5 text-xs font-mono text-muted ml-auto md:ml-0">
                            <Clock className="w-3.5 h-3.5" />
                            {log.date}
                        </span>
                    </div>

                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white font-mono mb-3 group-hover:text-primary transition-colors">
                            {log.title}
                        </h3>
                        {log.description && (
                            <p className="text-muted text-sm md:text-base leading-relaxed max-w-2xl border-l-2 border-[#2a2a2a] pl-4">
                                {log.description}
                            </p>
                        )}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {log.tags?.map(tag => (
                            <span key={tag} className="text-xs bg-[#111] border border-[#2a2a2a] text-gray-400 px-2 py-1 rounded-sm">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Side */}
                <div className="w-full md:w-auto flex flex-col items-center justify-center shrink-0 border-t md:border-t-0 md:border-l border-[#2a2a2a] pt-6 md:pt-0 md:pl-8 mt-4 md:mt-0">
                    <Link
                        href={`/logs/${log.slug}`}
                        className="w-full md:w-auto group/btn relative inline-flex items-center justify-center px-8 py-3 bg-[#111] border border-primary text-primary font-mono font-bold tracking-wider hover:bg-primary hover:text-black transition-all duration-300 rounded-sm"
                    >
                        <span className="flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            Analyze_Log
                            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </span>
                    </Link>
                    <p className="text-[10px] text-muted font-mono uppercase mt-4 text-center tracking-widest opacity-60">
                        Status: <span className="text-green-500">Documented</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
