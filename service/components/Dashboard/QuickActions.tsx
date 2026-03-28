export default function QuickActions() {
  return (
    <div className="mt-12">
      <div className="section-label mb-6">
        ── COMMAND ACTIONS
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <button className="tool-card gold p-6 flex flex-col items-center justify-center text-center group min-h-[140px]">
          <span className="absolute top-4 right-4 text-[8px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded font-mono bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/20">
            AUTO
          </span>
          <div className="text-3xl mb-3">⚡</div>
          <div className="font-bold text-white text-sm mb-1">Generate 9.1</div>
          <div className="text-[9px] font-bold text-[#FFD700] uppercase tracking-widest font-mono mt-auto flex items-center gap-1">
            Execute <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </button>

        <button className="tool-card p-6 flex flex-col items-center justify-center text-center group min-h-[140px]">
          <div className="text-3xl mb-3">📄</div>
          <div className="font-bold text-white text-sm mb-1">Export Pack</div>
          <div className="text-[9px] font-bold text-[#00D2FF] uppercase tracking-widest font-mono mt-auto flex items-center gap-1">
            Download <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </button>

        <button className="tool-card p-6 flex flex-col items-center justify-center text-center group min-h-[140px]">
          <div className="text-3xl mb-3">🤖</div>
          <div className="font-bold text-white text-sm mb-1">VAT Advisor</div>
          <div className="text-[9px] font-bold text-[#00D2FF] uppercase tracking-widest font-mono mt-auto flex items-center gap-1">
            Connect <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </button>

        <button className="tool-card p-6 flex flex-col items-center justify-center text-center group min-h-[140px]">
          <div className="text-3xl mb-3">🔄</div>
          <div className="font-bold text-white text-sm mb-1">Manager.io</div>
          <div className="text-[9px] font-bold text-[#00D2FF] uppercase tracking-widest font-mono mt-auto flex items-center gap-1">
            Sync API <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </button>

      </div>
    </div>
  );
}
