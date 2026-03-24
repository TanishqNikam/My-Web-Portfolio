"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skull } from "lucide-react";

export default function RansomwareButton() {
    const [isTriggered, setIsTriggered] = useState(false);
    const [progress, setProgress] = useState(0);
    const [done, setDone] = useState(false);

    const trigger = () => {
        setIsTriggered(true);
        setProgress(0);
        setDone(false);
        const interval = setInterval(() => {
            setProgress(p => {
                const next = p + Math.floor(Math.random() * 15) + 5;
                if (next >= 100) {
                    clearInterval(interval);
                    setDone(true);
                    return 100;
                }
                return next;
            });
        }, 300);
    };

    return (
        <div className="mt-24 flex justify-center pb-12 w-full">
            <button 
                onClick={trigger}
                className="text-[10px] sm:text-xs text-muted/30 hover:text-red-500 font-mono tracking-widest border border-dashed border-transparent hover:border-red-500/30 p-2 rounded transition-all transition-colors duration-500 cursor-help"
            >
                [ COMPRESS_CONFIDENTIAL_ARCHIVE.exe ]
            </button>

            <AnimatePresence>
                {isTriggered && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100000] bg-red-950/90 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <motion.div 
                            initial={{ scale: 0.9 }} animate={{ scale: 1 }}
                            className="bg-[#050505] border-2 border-red-500 max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-[0_0_50px_rgba(255,0,0,0.5)] font-mono text-center flex flex-col items-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_1px,transparent_1px,transparent_2px)] pointer-events-none z-0" />
                            
                            <Skull className={`w-16 h-16 text-red-500 mb-6 z-10 ${done ? 'animate-pulse' : 'animate-spin'}`} />
                            
                            <h2 className="text-xl sm:text-3xl font-bold text-red-500 mb-2 uppercase tracking-widest z-10">
                                {done ? "SYSTEM LOCKED" : "ENCRYPTING FILES..."}
                            </h2>
                            
                            <div className="w-full h-4 bg-red-950 rounded-full mt-4 mb-6 overflow-hidden border border-red-500/30 relative z-10">
                                <motion.div 
                                    className="h-full bg-red-500 transition-all duration-300 ease-out"
                                    style={{ width: `${Math.min(progress, 100)}%` }}
                                />
                                <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white drop-shadow-md">{Math.min(progress, 100)}%</span>
                            </div>

                            {done ? (
                                <div className="text-left w-full bg-red-500/10 p-4 border border-red-500/30 rounded mb-6 text-sm text-red-400 z-10">
                                    <p className="mb-2 font-bold uppercase text-white tracking-wider border-b border-red-500/30 pb-2">All files encrypted</p>
                                    <p className="mb-2 mt-2">Your portfolio access has been suspended. All local files are encrypted with military-grade AES-256.</p>
                                    <p className="mb-4">To purchase the decryption key, send <span className="text-white font-bold">1.5 BTC</span> to the wallet below, or simply send an interview invite to:</p>
                                    <p className="font-bold text-white text-center bg-black p-3 rounded border border-red-500/50 my-2 shadow-[0_0_10px_red]">tanishqnikam11@gmail.com</p>
                                </div>
                            ) : (
                                <p className="text-red-400 text-sm mb-6 animate-pulse font-bold tracking-widest z-10">DO NOT TURN OFF YOUR COMPUTER</p>
                            )}

                            <button 
                                onClick={() => setIsTriggered(false)}
                                disabled={!done}
                                className="w-full py-3 bg-red-500/20 border border-red-500 text-red-500 font-bold tracking-widest uppercase hover:bg-red-500 hover:text-white transition-colors disabled:opacity-50 disabled:bg-transparent disabled:text-red-900 disabled:border-red-900 z-10"
                            >
                                {done ? "I WILL COMPLY" : "UPLOADING KEYS..."}
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
