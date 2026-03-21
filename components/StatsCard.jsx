import { Activity } from "lucide-react";

export default function StatsCard({ title, value, label, icon: Icon = Activity }) {
    return (
        <div className="bg-[#111111] border border-[#2a2a2a] rounded p-6 relative overflow-hidden group hover:border-primary transition-colors">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Icon className="w-24 h-24 text-primary" />
            </div>
            <div className="flex flex-col gap-1 relative z-10">
                <span className="text-muted font-mono text-xs uppercase tracking-wider flex items-center gap-2">
                    <Icon className="w-4 h-4 text-secondary" />
                    {title}
                </span>
                <span className="text-4xl font-bold font-mono text-primary my-2">{value}</span>
                {label && <span className="text-xs text-muted">{label}</span>}
            </div>
        </div>
    );
}
