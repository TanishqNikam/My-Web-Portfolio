import { cn } from "@/lib/utils";

export default function TerminalCard({ children, className, title, icon: Icon }) {
    return (
        <div className={cn("bg-[#111111] border border-[#2a2a2a] rounded overflow-hidden shadow-lg", className)}>
            {/* Terminal Header */}
            <div className="bg-[#0a0a0a] border-b border-[#2a2a2a] px-4 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4 text-primary" />}
                    <span className="text-xs text-muted font-mono uppercase tracking-widest">{title || "Terminal"}</span>
                </div>
                <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6 font-mono text-sm">
                {children}
            </div>
        </div>
    );
}
