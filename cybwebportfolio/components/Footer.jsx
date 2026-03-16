import { Terminal } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-[#2a2a2a] bg-[#0a0a0a] py-6 mt-16 font-mono text-sm text-muted">
            <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-secondary" />
                    <span>System running smoothly.</span>
                </div>
                <div>
                    <p>&copy; {new Date().getFullYear()} Tanishq Nikam. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
