"use client";

import { Mail, Linkedin, Github, MessageSquare, Send } from "lucide-react";
import TerminalCard from "@/components/TerminalCard";
import { useState } from "react";

export default function ContactPage() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.target);
        
        try {
            const response = await fetch("https://formsubmit.co/ajax/tanishqnikam11@gmail.com", {
                method: "POST",
                headers: { 
                    'Accept': 'application/json'
                },
                body: formData
            });
            
            if (response.ok) {
                setStatus("success");
                e.target.reset();
                setTimeout(() => setStatus(""), 5000); // Clear success message after 5 seconds
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="container mx-auto px-4 lg:px-8 py-12">
            <div className="mb-10 border-b border-[#2a2a2a] pb-6">
                <h1 className="text-3xl font-bold font-mono text-white flex items-center gap-3">
                    <MessageSquare className="w-8 h-8 text-primary" />
                    ESTABLISH_CONNECTION
                </h1>
                <p className="text-muted mt-2 font-mono text-sm max-w-2xl">
                    Secure communication channels. Open for opportunities, collaborations, and technical discussions.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                    <TerminalCard title="Direct Links" icon={Send}>
                        <div className="flex flex-col gap-4">
                            <a
                                href="mailto:tanishqnikam11@gmail.com"
                                className="flex items-center gap-4 p-4 border border-[#2a2a2a] rounded bg-[#0a0a0a] hover:border-primary group transition-colors"
                            >
                                <div className="p-3 bg-[#111] rounded group-hover:bg-primary/10 transition-colors">
                                    <Mail className="w-6 h-6 text-muted group-hover:text-primary transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold font-mono">Encrypted Email</h3>
                                    <p className="text-muted text-sm">tanishqnikam11@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="https://linkedin.com/in/tanishqnikam"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 p-4 border border-[#2a2a2a] rounded bg-[#0a0a0a] hover:border-[#0077b5] group transition-colors"
                            >
                                <div className="p-3 bg-[#111] rounded group-hover:bg-[#0077b5]/10 transition-colors">
                                    <Linkedin className="w-6 h-6 text-muted group-hover:text-[#0077b5] transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold font-mono">Professional Network</h3>
                                    <p className="text-muted text-sm">linkedin.com/in/tanishqnikam</p>
                                </div>
                            </a>

                            <a
                                href="https://github.com/tanishqnikam"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 p-4 border border-[#2a2a2a] rounded bg-[#0a0a0a] hover:border-white group transition-colors"
                            >
                                <div className="p-3 bg-[#111] rounded group-hover:bg-white/10 transition-colors">
                                    <Github className="w-6 h-6 text-muted group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold font-mono">Code Repositories</h3>
                                    <p className="text-muted text-sm">github.com/tanishqnikam</p>
                                </div>
                            </a>
                        </div>
                    </TerminalCard>
                </div>

                <div>
                    <TerminalCard title="Secure Transmission Protocol" icon={Send}>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-primary font-mono text-sm uppercase tracking-wider">
                                    <span className="text-muted mr-2">&gt;</span> Source_ID (Name)
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="bg-[#0a0a0a] border border-[#2a2a2a] p-3 rounded text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-primary font-mono text-sm uppercase tracking-wider">
                                    <span className="text-muted mr-2">&gt;</span> Return_Address (Email)
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="bg-[#0a0a0a] border border-[#2a2a2a] p-3 rounded text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors"
                                    placeholder="name@domain.com"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-primary font-mono text-sm uppercase tracking-wider">
                                    <span className="text-muted mr-2">&gt;</span> Payload (Message)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="bg-[#0a0a0a] border border-[#2a2a2a] p-3 rounded text-white font-mono text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Enter your transmission here..."
                                />
                            </div>

                            {/* Formsubmit anti-spam trick (honeypot) */}
                            <input type="text" name="_honey" style={{ display: 'none' }} />
                            
                            {/* Disable captcha to keep it seamless */}
                            <input type="hidden" name="_captcha" value="false" />

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="mt-4 bg-[#111111] border border-secondary text-secondary font-mono font-bold py-3 px-6 rounded hover:bg-secondary hover:text-black transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send className="w-4 h-4" /> 
                                {status === "submitting" ? "TRANSMITTING..." : 
                                 status === "success" ? "PAYLOAD_DELIVERED" : 
                                 "INITIATE_TRANSFER"}
                            </button>

                            {status === "success" && (
                                <p className="text-[#00ff41] text-xs font-mono mt-1 text-center animate-pulse">
                                    Connection established. Message securely transmitted.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 text-xs font-mono mt-1 text-center">
                                    Transmission failed. Please use direct encrypted email.
                                </p>
                            )}
                        </form>
                    </TerminalCard>
                </div>
            </div>
        </div>
    );
}
