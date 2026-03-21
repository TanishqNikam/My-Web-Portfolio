import Link from 'next/link';
import { ShieldAlert, ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full border border-red-500/30 bg-[#0d0303] p-8 md:p-12 rounded-lg relative overflow-hidden flex flex-col items-center text-center shadow-[0_0_30px_rgba(239,68,68,0.05)]">
        
        {/* Background glow animations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 w-full h-1 bg-red-500/50 shadow-[0_0_15px_rgba(239,68,68,1)] animate-pulse" />
        
        <ShieldAlert className="w-16 h-16 text-red-500 animate-pulse mb-6 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" strokeWidth={1.5} />
        
        <div className="font-mono mb-2 flex items-center justify-center gap-2">
          <Terminal className="w-4 h-4 text-red-400" />
          <span className="text-red-500/80 text-lg md:text-xl font-bold tracking-[0.2em] uppercase">
            System Error 404
          </span>
        </div>
        
        <h1 className="text-2xl md:text-4xl font-bold font-mono text-white mb-5 tracking-tight uppercase border-b border-red-500/20 pb-4 inline-block">
          UNAUTHORIZED ACCESS DETECTED
        </h1>
        
        <p className="text-red-400/80 font-mono text-sm leading-relaxed mb-8 border-l-2 border-red-500/40 pl-4 text-left max-w-md">
          Connection severed. The requested asset does not exist or has been classified. All unauthorized monitoring tools have been disabled and logged.
        </p>

        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 bg-red-500/5 border border-red-500/30 text-red-400 font-mono text-sm uppercase tracking-wider rounded-sm hover:bg-red-500/20 hover:text-red-300 transition-all group duration-300"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Reroute to Secure Zone (Home)
        </Link>
      </div>
    </div>
  );
}
