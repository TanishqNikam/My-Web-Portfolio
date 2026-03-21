"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

const messages = [
  "INITIALIZING SYSTEM KERNEL...",
  "BYPASSING MAINFRAME FIREWALLS...",
  "ESTABLISHING SECURE CONNECTION...",
  "DECRYPTING ASSETS...",
  "ACCESS GRANTED."
];

export default function BootLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 100);

    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev < messages.length - 1) return prev + 1;
        clearInterval(messageInterval);
        return prev;
      });
    }, 600);

    // End loader after 3.5s
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center font-mono pointer-events-none"
        >
          <div className="w-full max-w-md px-6 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <Shield className="w-16 h-16 text-[#00f0ff] animate-pulse" strokeWidth={1.5} />
            </div>

            {/* Terminal Output */}
            <div className="h-24 flex flex-col justify-end overflow-hidden space-y-1">
              {messages.slice(0, currentMessageIndex + 1).map((msg, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-sm tracking-wider ${
                    idx === messages.length - 1 ? "text-[#00ff41]" : "text-[#00f0ff]/70"
                  }`}
                >
                  {`> ${msg}`}
                </motion.p>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-[#1a1a1a] rounded overflow-hidden mt-2 relative">
              <motion.div
                className="absolute left-0 top-0 bottom-0 bg-[#00f0ff]"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* Progress Text */}
            <div className="flex justify-between text-[11px] text-[#555] tracking-widest mt-1">
              <span>SYSTEM.BOOT</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
