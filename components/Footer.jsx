import { Terminal, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-[#2a2a2a] bg-[#0a0a0a] py-6 mt-16 font-mono text-sm text-muted">
            <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-secondary" />
                    <span>System running smoothly.</span>
                </div>

                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <a href="https://github.com/TanishqNikam" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#00f0ff] transition-all hover:-translate-y-1">
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/tanishq-nikam" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-[#00f0ff] transition-all hover:-translate-y-1">
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="mailto:tanishqnikam11@gmail.com" className="text-muted hover:text-secondary transition-all hover:-translate-y-1">
                        <Mail className="w-5 h-5" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>

                <div className="flex flex-col md:items-end items-center mt-4 md:mt-0">
                    <p>&copy; {new Date().getFullYear()} Tanishq Nikam. All rights reserved.</p>
                    <p className="text-[10px] text-[#333] mt-2 select-none font-mono tracking-widest hidden md:block" aria-hidden="true" title="What could this mean?">
                        [ seq: ↑ ↑ ↓ ↓ ← → ← → B A ]
                    </p>
                </div>
            </div>
        </footer>
    );
}
