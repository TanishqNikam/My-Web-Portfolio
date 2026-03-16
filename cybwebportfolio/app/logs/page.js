import { getAllContent } from "@/lib/content";
import InvestigationCard from "@/components/InvestigationCard";
import { Shield } from "lucide-react";

export const metadata = {
    title: "Logs | T.NIKAM SOC Portfolio",
    description: "Detailed cybersecurity logs, incident responses, and threat reports in one place.",
};

export default async function LogsPage() {
    const investigations = await getAllContent("logs");

    return (
        <div className="container mx-auto px-4 lg:px-8 py-12">
            <div className="mb-10 border-b border-[#2a2a2a] pb-6">
                <h1 className="text-3xl font-bold font-mono text-white flex items-center gap-3">
                    <Shield className="w-8 h-8 text-primary" />
                    ANALYST_LOGS
                </h1>
                <p className="text-muted mt-2 font-mono text-sm">
                    A consolidated record of lab notes, intelligence briefs, and incident response breakdowns.
                </p>
            </div>

            {investigations.length === 0 ? (
                <div className="bg-[#111111] border border-[#2a2a2a] p-8 text-center text-muted font-mono rounded">
                    No logs found in the system.
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {investigations.map((investigation) => (
                        <InvestigationCard key={investigation.slug} investigation={investigation} />
                    ))}
                </div>
            )}
        </div>
    );
}
