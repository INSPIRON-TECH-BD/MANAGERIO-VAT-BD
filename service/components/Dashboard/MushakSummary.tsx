export default function MushakSummary() {
  return (
    <div className="tool-card p-8 cursor-default">
      <div className="absolute top-6 right-6 text-[8px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full font-mono bg-[#00FF88]/10 text-[#00FF88] border border-[#00FF88]/25">
        ● LIVE
      </div>
      
      <h2 className="text-2xl font-bold mb-8 text-white tracking-wide">This Month Mushak Summary</h2>
      
      <div className="grid grid-cols-2 gap-6 z-10 relative">
        <div>
          <p className="text-xs text-white/40 font-bold uppercase tracking-widest font-mono">Output (6.3)</p>
          <p className="text-4xl font-black text-[#00D2FF] mt-2">৳ 4,87,650</p>
        </div>
        <div>
          <p className="text-xs text-white/40 font-bold uppercase tracking-widest font-mono">Input (6.4)</p>
          <p className="text-4xl font-black text-white mt-2">৳ 3,12,400</p>
        </div>
      </div>
      
      <div className="mt-8 bg-white/5 rounded-2xl p-6 text-center border border-white/10 relative z-10">
        <p className="text-xl font-bold text-white/70">Net Payable</p>
        <p className="text-6xl font-black text-[#FFD700] drop-shadow-sm mt-3">৳ 1,75,250</p>
        <p className="text-[10px] text-white/40 font-bold mt-5 uppercase tracking-[0.2em] font-mono">Due 15th April 2026</p>
      </div>
    </div>
  );
}
