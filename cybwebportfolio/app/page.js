"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Download, ShieldAlert, Cpu, Activity, Network } from "lucide-react";
import ThreatRadar from "@/components/ThreatRadar";
import ToolsMarquee from "@/components/ToolsMarquee";
import StatsCard from "@/components/StatsCard";
import Link from "next/link";
import { cn } from "@/lib/utils";

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_TIME = 2000;

const titles = [
  "SOC Analyst",
  "Cybersecurity Analyst",
  "Threat Detection Enthusiast",
  "Incident Response Learner"
];

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
        timeout = setTimeout(() => { }, 500);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        }, DELETING_SPEED);
      }
    } else {
      if (displayText === currentTitle) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_TIME);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, TYPING_SPEED);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 flex flex-col gap-16">
      <section className="min-h-screen lg:min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-12 relative pt-8 lg:pt-0">
        <div className="flex-1 flex flex-col gap-6 z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary font-mono tracking-wider mb-2">Hello, World. I am</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
              Tanishq Nikam
            </h1>
            <div className="h-8 md:h-12 flex items-center">
              <span className="text-xl md:text-3xl font-mono text-primary font-bold">
                {displayText}
                <span className="animate-pulse">_</span>
              </span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted text-lg max-w-xl leading-relaxed mt-4"
          >
            I monitor, analyze, and defend digital fortresses. Passionate about
            threat hunting, incident response, and understanding attacker tradecraft.
            Always learning, always securing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
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
          </motion.div>
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

      <section>
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
