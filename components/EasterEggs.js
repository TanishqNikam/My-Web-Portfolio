"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Terminal } from "lucide-react";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a"
];

export default function EasterEggs() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [matrixMode, setMatrixMode] = useState(false);
  const [honeypotState, setHoneypotState] = useState("idle"); // idle | alert | joke

  // 1. Console Log Secret
  useEffect(() => {
    const cyberArt = `
    ████████████████████████████████████████████████████████
    █                                                      █
    █   SYSTEM COMPROMISED... JUST KIDDING                 █
    █                                                      █
    █   Looking under the hood?                            █
    █   I see you. You have an eye for detail.             █
    █   Let's talk: tanishqnikam11@gmail.com               █
    █                                                      █
    ████████████████████████████████████████████████████████
    `;
    console.log(
      "%c" + cyberArt,
      "color: #00ff41; font-family: monospace; font-size: 13px; font-weight: bold; text-shadow: 0 0 5px #00ff41;"
    );
  }, []);

  // 2. Konami Code Listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === KONAMI_CODE[konamiIndex]) {
        if (konamiIndex === KONAMI_CODE.length - 1) {
          // Success!
          setMatrixMode((prev) => {
            const nextMode = !prev;
            if (nextMode) {
              document.body.classList.add('matrix-mode');
            } else {
              document.body.classList.remove('matrix-mode');
            }
            return nextMode;
          });
          setKonamiIndex(0);
        } else {
          setKonamiIndex((prev) => prev + 1);
        }
      } else {
        setKonamiIndex(0); // Reset on wrong key
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiIndex]);

  // 3. Honeypot Trigger Handler
  const triggerHoneypot = () => {
    setHoneypotState("alert");
    setTimeout(() => {
      setHoneypotState("joke");
      setTimeout(() => {
        setHoneypotState("idle");
      }, 7000); // auto-hide joke after 7 seconds
    }, 3000); // 3 seconds of terrifying alert
  };

  return (
    <>
      {/* The Honeypot Button */}
      <button 
        onClick={triggerHoneypot}
        className="fixed bottom-1 right-1 opacity-5 hover:opacity-100 text-[10px] font-mono text-white/50 hover:text-red-500 transition-all z-[100] px-2 py-1 cursor-crosshair"
      >
        [DEACTIVATE_DEFENSES]
      </button>

      {/* Honeypot Modals */}
      <AnimatePresence>
        {honeypotState === "alert" && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-red-950/95 flex items-center justify-center p-4"
          >
            {/* Fake CRT/Scanline overlay for extra effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.1)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
            
            <motion.div 
              animate={{ scale: [1, 1.02, 1] }} 
              transition={{ repeat: Infinity, duration: 0.2 }}
              className="bg-black border-4 border-red-600 p-8 max-w-lg w-full rounded-sm flex flex-col items-center text-center shadow-[0_0_100px_rgba(220,38,38,0.6)] relative z-10"
            >
              <ShieldAlert className="w-24 h-24 text-red-500 animate-pulse mb-6" />
              <h2 className="text-4xl font-mono font-bold text-red-500 mb-4 tracking-widest uppercase">Critical Alert</h2>
              <p className="text-red-400 font-mono text-xl uppercase tracking-widest mt-2">
                Unauthorized access detected. <br/><br/>
                <span className="text-white animate-pulse">Initiating counter-measures...</span>
              </p>
            </motion.div>
          </motion.div>
        )}

        {honeypotState === "joke" && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          >
            <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-8 max-w-lg w-full rounded flex flex-col items-center text-center shadow-2xl">
              <Terminal className="w-16 h-16 text-primary mb-6" />
              <h2 className="text-2xl font-mono font-bold text-white mb-4">Just Kidding!</h2>
              <p className="text-muted font-mono mb-6 leading-relaxed">
                I would never actually hack you back. But seriously, never click unverified buttons on the internet!
                <br/><br/>
                Good curiosity, though. 🛡️
              </p>
              <button 
                onClick={() => setHoneypotState("idle")}
                className="px-6 py-3 bg-primary text-black font-mono font-bold rounded-sm hover:bg-[#00cc33] transition-colors uppercase tracking-widest"
              >
                Acknowledge
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
