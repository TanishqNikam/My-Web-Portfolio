import Link from "next/link";
import { FileText, Calendar, ArrowRight } from "lucide-react";

export default function BlogCard({ report }) {
    return (
        <Link href={`/reports/${report.slug}`}>
            <div className="bg-[#111111] border border-[#2a2a2a] p-6 hover:border-secondary transition-all group flex flex-col h-full rounded-sm">
                <div className="flex items-center gap-2 text-xs text-muted font-mono mb-3">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                    <span>{report.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                    {report.title}
                </h3>

                <p className="text-sm text-muted mb-6 flex-grow line-clamp-3">
                    {report.description || "View full threat intelligence report."}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {report.tags?.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-[#1a1a1a] border border-[#333] rounded-sm text-gray-400">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="text-secondary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-mono tracking-wider">
                        READ <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </Link>
    );
}
