"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

export default function TerminalPage() {
    const [history, setHistory] = useState([
        { type: "system", content: "Welcome to TN-SOC Terminal OS v2.0." },
        { type: "system", content: "Type 'help' for a list of available commands." }
    ]);
    const [input, setInput] = useState("");
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    // Auto focus and scroll to bottom whenever history updates
    useEffect(() => {
        inputRef.current?.focus();
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === "Enter") {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: "user", content: `guest@tn-soc:~$ ${input}` }];
            
            if (cmd === "") {
                setHistory(newHistory);
            } else if (cmd === "help") {
                newHistory.push({ type: "system", content: "Available commands:" });
                newHistory.push({ type: "system", content: "  whoami      - Print current user privileges" });
                newHistory.push({ type: "system", content: "  ls          - List directory contents" });
                newHistory.push({ type: "system", content: "  cat <file>  - Read the contents of a file" });
                newHistory.push({ type: "system", content: "  clear       - Clear the terminal screen" });
                newHistory.push({ type: "system", content: "  sudo <cmd>  - Execute command as superuser" });
                newHistory.push({ type: "system", content: "  sudo hire   - [CLASSIFIED] Initiate recruitment protocol" });
                setHistory(newHistory);
            } else if (cmd === "whoami") {
                newHistory.push({ type: "system", content: "user: guest" });
                newHistory.push({ type: "system", content: "Hint: Only Tanishq Nikam has root access. Hire him to unlock full potential." });
                setHistory(newHistory);
            } else if (cmd === "ls") {
                newHistory.push({ type: "system", content: "resume.txt   skills.md   projects.dir   logs.dir   top-secret/" });
                setHistory(newHistory);
            } else if (cmd.startsWith("cat ")) {
                const target = cmd.split(" ")[1];
                if (target === "resume.txt") {
                    newHistory.push({ type: "system", content: "=================================================" });
                    newHistory.push({ type: "system", content: "TANISHQ NIKAM - CYBER SECURITY ANALYST" });
                    newHistory.push({ type: "system", content: "Currently building detection pipelines at Bosch." });
                    newHistory.push({ type: "system", content: "-> You can download the full PDF resume from the Navbar." });
                    newHistory.push({ type: "system", content: "=================================================" });
                } else if (target === "skills.md") {
                    newHistory.push({ type: "system", content: "Core competencies:" });
                    newHistory.push({ type: "system", content: " - SIEM (Splunk, Wazuh)" });
                    newHistory.push({ type: "system", content: " - Network Analysis (Wireshark, Zeek)" });
                    newHistory.push({ type: "system", content: " - Scripting (Python, Bash)" });
                    newHistory.push({ type: "system", content: " - Infrastructure (Linux, Docker, Windows Server)" });
                } else if (target === "top-secret/" || target === "top-secret") {
                    newHistory.push({ type: "system", content: "cat: top-secret: Is a directory" });
                } else {
                    newHistory.push({ type: "system", content: `cat: ${target}: No such file or directory` });
                }
                setHistory(newHistory);
            } else if (cmd === "clear") {
                setHistory([]);
            } else if (cmd === "sudo hire" || cmd === "sudo hire tanishq") {
                newHistory.push({ type: "system", content: "Authentication override accepted." });
                newHistory.push({ type: "system", content: "Initiating priority engagement sequence..." });
                newHistory.push({ type: "system", content: "[✔] Deploying Confetti Payload" });
                newHistory.push({ type: "system", content: "[✔] Establishing direct access bridge (resume.pdf)" });
                setHistory(newHistory);
            } else if (cmd.startsWith("sudo")) {
                newHistory.push({ type: "system", content: "guest is not in the sudoers file. This incident will be reported." });
                setHistory(newHistory);
            } else {
                newHistory.push({ type: "system", content: `bash: ${cmd}: command not found` });
            }
            
            setInput("");
        }
    };

    return (
        <div className="container mx-auto px-4 lg:px-8 py-12 max-w-4xl flex-grow flex flex-col h-full min-h-[75vh]">
            <div className="mb-6 border-b border-[#2a2a2a] pb-4 shrink-0">
                <h1 className="text-2xl font-bold font-mono text-white flex items-center gap-3">
                    <TerminalIcon className="w-6 h-6 text-[#00f0ff]" />
                    INTERACTIVE TERMINAL
                </h1>
                <p className="text-[#888] mt-1 font-mono text-xs">
                    Direct access to the TN-SOC mainframe. Use &apos;help&apos; to see available commands.
                </p>
            </div>

            <div 
                className="flex-grow bg-[#050505] border border-[#2a2a2a] rounded-lg p-5 font-mono text-sm shadow-[0_0_30px_rgba(0,240,255,0.03)] overflow-y-auto flex flex-col cursor-text relative"
                onClick={() => inputRef.current?.focus()}
            >
                {/* Background purely for aesthetic scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none opacity-20 z-0"></div>
                
                <div className="z-10 relative flex-grow flex flex-col">
                    {history.map((line, idx) => (
                        <div key={idx} className={`mb-1.5 whitespace-pre-wrap ${line.type === "user" ? "text-white" : "text-[#00f0ff]/80 font-semibold"}`}>
                            {line.content}
                        </div>
                    ))}
                    
                    <div className="flex items-center mt-2 text-white">
                        <span className="text-[#00ff41] mr-2 shrink-0">guest@tn-soc:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                            className="flex-grow bg-transparent border-none outline-none text-white focus:ring-0 p-0 m-0 w-full font-mono placeholder-[#2a2a2a]"
                            autoComplete="off"
                            spellCheck="false"
                            autoFocus
                        />
                    </div>
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    );
}
