"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { motion } from "framer-motion";

const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_TIME = 2000;

const titles = [
    "Cybersecurity Analyst in Training",
    "Analytical Thinker",
    "Security-Focused",
    "Community Builder"
];

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback) {
    const query = window.matchMedia(REDUCED_MOTION_QUERY);
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
    return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
    return false;
}

export default function TypingHeader() {
    const [displayText, setDisplayText] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const reducedMotion = useSyncExternalStore(
        subscribeToReducedMotion,
        getReducedMotionSnapshot,
        getReducedMotionServerSnapshot
    );
    const shownText = reducedMotion ? titles[0] : displayText;

    useEffect(() => {
        if (reducedMotion) return;

        let timeout;
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
            if (displayText === "") {
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }, DELETING_SPEED);
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
    }, [displayText, isDeleting, titleIndex, reducedMotion]);

    return (
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
                    {shownText}
                    <span className="animate-pulse">_</span>
                </span>
            </div>
        </motion.div>
    );
}
