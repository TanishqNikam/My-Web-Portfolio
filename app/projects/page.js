import ProjectCard from "@/components/ProjectCard";
import { getAllContent } from "@/lib/content";
import { FolderGit2 } from "lucide-react";

export const metadata = {
    title: "Projects | T.NIKAM SOC Portfolio",
    description: "Hands-on cybersecurity projects, scripts, and home lab setups.",
};

export default async function ProjectsPage() {
    const projects = await getAllContent("projects");

    return (
        <div className="container mx-auto px-4 lg:px-8 py-12">
            {/* Page Header */}
            <div className="mb-10 border-b border-[#2a2a2a] pb-6">
                <h1 className="text-3xl font-bold font-mono text-white flex items-center gap-3">
                    <FolderGit2 className="w-8 h-8 text-secondary" />
                    ACTIVE_PROJECTS
                </h1>
                <p className="text-muted mt-2 font-mono text-sm max-w-2xl">
                    Hands-on security projects, detection engineering scripts, and home lab environments.
                </p>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-sm font-mono text-muted">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    {projects.filter(p => p.status === "Complete").length} Complete
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-muted">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {projects.filter(p => p.status === "Active").length} Active
                </div>
                <div className="flex items-center gap-2 text-sm font-mono text-muted">
                    <span className="w-2 h-2 rounded-full bg-orange-500" />
                    {projects.filter(p => p.status === "In Progress").length} In Progress
                </div>
            </div>

            {/* Projects Grid */}
            {projects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-muted font-mono">
                    <p className="text-primary text-4xl mb-4">_</p>
                    <p>No projects found. Check back soon.</p>
                </div>
            )}
        </div>
    );
}
