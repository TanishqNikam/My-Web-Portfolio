import { getContentBySlug, getAllContent } from "@/lib/content";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, ShieldAlert, Terminal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
    const posts = await getAllContent("logs");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getContentBySlug("logs", slug);

    if (!post) {
        return { title: "Not Found" };
    }

    return {
        title: `${post.title} | SOC Investigations`,
        description: post.description,
    };
}

export default async function InvestigationDetail({ params }) {
    const { slug } = await params;
    const post = await getContentBySlug("logs", slug);

    if (!post) {
        notFound();
    }

    const severityColor =
        post.severity === "Critical" ? "text-red-500 bg-red-500/10 border border-red-500/30" :
            post.severity === "High" ? "text-orange-500 bg-orange-500/10 border border-orange-500/30" :
                post.severity === "Medium" ? "text-yellow-500 bg-yellow-500/10 border border-yellow-500/30" :
                    "text-green-500 bg-green-500/10 border border-green-500/30";

    return (
        <article className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl">
            <Link href="/logs" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors font-mono text-sm mb-8">
                <ArrowLeft className="w-4 h-4" /> BACK_TO_LOGS
            </Link>

            <div className="bg-[#111111] border border-[#2a2a2a] p-8 md:p-12 relative overflow-hidden">
                {/* Terminal decorative header */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                <div className="flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-sm">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-2 text-muted">
                                <Calendar className="w-4 h-4" /> {post.date}
                            </span>
                            <span className={cn("px-3 py-1 rounded-sm uppercase font-bold", severityColor)}>
                                SEV: {post.severity}
                            </span>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold font-mono tracking-tight text-white mb-2">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags?.map((tag, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 bg-[#0a0a0a] border border-[#2a2a2a] text-secondary font-mono flex items-center gap-1">
                                <Terminal className="w-3 h-3" /> {tag}
                            </span>
                        ))}
                    </div>

                    <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-white prose-headings:font-mono prose-a:text-primary hover:prose-a:text-primary/80 prose-code:text-[#00ff41] prose-code:bg-[#0a0a0a] prose-code:px-1 prose-code:rounded prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-[#2a2a2a] max-w-none mt-8 border-t border-[#2a2a2a] pt-8"
                        dangerouslySetInnerHTML={{ __html: post.htmlContent }}
                    />

                    {post.toolsUsed && (
                        <div className="mt-12 pt-8 border-t border-[#2a2a2a]">
                            <h3 className="text-lg font-mono font-bold mb-4 flex items-center gap-2 text-white">
                                <ShieldAlert className="w-5 h-5 text-primary" />
                                TOOLS_DEPLOYED
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {post.toolsUsed.map((tool, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-[#1a1a1a] border border-[#333] rounded text-sm text-gray-300">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}
