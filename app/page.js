import { ChevronRight, Download, ShieldAlert, Cpu, Activity, Network } from "lucide-react";
import ThreatRadar from "@/components/ThreatRadar";
import ToolsMarquee from "@/components/ToolsMarquee";
import FeaturedLog from "@/components/FeaturedLog";
import ProjectCard from "@/components/ProjectCard";
import StatsCard from "@/components/StatsCard";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getAllContent } from "@/lib/content";
import TypingHeader from "@/components/TypingHeader";

export default async function Home() {
  const logs = await getAllContent('logs');
  const featuredLog = logs.length > 0 ? logs[0] : null;
  const projects = await getAllContent('projects');
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 flex flex-col gap-16">
      <section className="min-h-screen lg:min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 relative pt-8 lg:pt-0">
        <div className="flex-1 flex flex-col gap-6 z-10 w-full">
          <TypingHeader />

          <p className="text-muted text-lg max-w-xl leading-relaxed mt-4">
            I monitor, analyze, and defend digital fortresses. Passionate about
            threat hunting, incident response, and understanding attacker tradecraft.
            Always learning, always securing.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link
              href="/logs"
              className="bg-primary text-black font-semibold px-6 py-3 rounded-sm flex items-center gap-2 hover:bg-[#00c0cc] transition-colors"
            >
              View Logs <ChevronRight className="w-4 h-4" />
            </Link>

            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 border border-[#2a2a2a] px-6 py-3 rounded-sm hover:border-white transition-colors text-muted hover:text-white"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Resume
            </a>
          </div>
        </div>

        <div className="flex-1 w-full relative pointer-events-auto mt-8 lg:mt-0 flex items-center justify-center">
          <ThreatRadar />
        </div>
      </section>

      <section className="w-full full-bleed">
        <div className="container mx-auto px-4 lg:px-8 mb-4">
          <h3 className="text-muted font-mono text-sm tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Active Deployments
          </h3>
        </div>
        <ToolsMarquee />
      </section>

      {featuredLog && (
        <section className="container mx-auto px-4 lg:px-8">
          <div className="mb-6 border-b border-[#2a2a2a] pb-4">
            <h2 className="text-2xl font-bold font-mono text-white flex items-center gap-2">
              <span className="text-primary">&gt;</span> LATEST_INVESTIGATION
            </h2>
          </div>
          <FeaturedLog log={featuredLog} />
        </section>
      )}

      {featuredProjects.length > 0 && (
        <section className="container mx-auto px-4 lg:px-8">
          <div className="mb-6 border-b border-[#2a2a2a] pb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold font-mono text-white flex items-center gap-2">
              <span className="text-primary">&gt;</span> ACTIVE_PROJECTS
            </h2>
            <Link href="/projects" className="text-xs font-mono text-muted hover:text-primary transition-colors flex items-center gap-1">
              View All <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 lg:px-8">
        <div className="mb-8 border-b border-[#2a2a2a] pb-4">
          <h2 className="text-2xl font-bold font-mono text-white flex items-center gap-2">
            <span className="text-primary">&gt;</span> SOC_METRICS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard
            title="Analyst Logs"
            value="12+"
            label="Completed deep dives & intelligence"
            icon={ShieldAlert}
          />
          <StatsCard
            title="Labs Completed"
            value="45+"
            label="TryHackMe / HTB"
            icon={Network}
          />
          <StatsCard
            title="Tools Mastered"
            value="15+"
            label="SIEM, EDR, Network"
            icon={Cpu}
          />
        </div>
      </section>
    </div>
  );
}
