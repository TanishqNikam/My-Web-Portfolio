import Link from "next/link";
import { Terminal, Calendar, AlertTriangle, ShieldAlert } from "lucide-react";

export default function InvestigationCard({ investigation }) {
    // Determine severity color
    const severityColor =
        investigation.severity === "Critical" ? "text-red-500 border-red-500/30" :
            investigation.severity === "High" ? "text-orange-500 border-orange-500/30" :
                investigation.severity === "Medium" ? "text-yellow-500 border-yellow-500/30" :
                    "text-green-500 border-green-500/30";

    return (
        <Link href={`/logs/${investigation.slug}`}>
            <div className="bg-[#111111] border border-[#2a2a2a] rounded-sm p-5 hover:border-primary transition-all group relative overflow-hidden h-full flex flex-col">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-primary transition-all duration-300" />

                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors line-clamp-2">
                        {investigation.title}
                    </h3>
                    <ShieldAlert className="w-5 h-5 text-muted shrink-0 ml-4 group-hover:text-primary transition-colors" />
                </div>

                <p className="text-sm text-muted mb-6 flex-grow line-clamp-3">
                    {investigation.description || "No description provided."}
                </p>

                <div className="flex flex-col gap-3 mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {investigation.tags?.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-[#1a1a1a] border border-[#333] rounded text-gray-300 flex items-center gap-1">
                                <Terminal className="w-3 h-3 text-secondary" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono mt-2 pt-4 border-t border-[#2a2a2a]">
                        <span className="flex items-center gap-1 text-muted">
                            <Calendar className="w-3 h-3" />
                            {investigation.date}
                        </span>
                        <span className={`px-2 py-0.5 border rounded-sm ${severityColor} bg-opacity-10 bg-black`}>
                            {investigation.severity || "Unknown"}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
