"use client";

import { useState } from "react";
import type { Mushak91Data, MushakFormProps } from "@/types/mushak";
import { fmtBDT, getPeriodRange, calculateVAT } from "@/lib/vat";

export default function MushakForm({ type, onGenerate }: MushakFormProps) {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Mushak91Data | null>(null);

  const generate = async () => {
    setLoading(true);
    // Simulate Manager.io fetch (replace with real API call in production)
    await new Promise((r) => setTimeout(r, 800));

    const period = getPeriodRange(month, year);
    const mockData: Mushak91Data = {
      outputVAT: 487650,
      inputCredit: 312400,
      netPayable: 175250,
      taxableSales: 3251000,
      taxablePurchases: 2082667,
      salesInvoiceCount: 87,
      purchaseInvoiceCount: 124,
      period,
      businessName: "INSPIRON TECH BD",
      bin: "123456789",
      generatedAt: new Date().toLocaleString("en-BD"),
    };

    setResult(mockData);
    onGenerate?.(mockData);
    setLoading(false);
  };

  return (
    <div className="tool-card p-8 mt-12 cursor-default">
      <div className="absolute top-6 right-6 text-[8px] font-bold tracking-[0.1em] uppercase px-2 py-0.5 rounded font-mono bg-white/10 text-white/50 border border-white/10">
        INPUT NODE
      </div>

      <h2 className="text-2xl font-bold mb-8 text-white tracking-wide">
        {type === "91" ? "Mushak 9.1 – Monthly VAT Return" : `Mushak ${type}`}
      </h2>

      <div className="grid grid-cols-2 gap-6 mb-8 relative z-10">
        <div>
          <label className="block text-[10px] text-[#00D2FF] font-bold mb-3 uppercase tracking-[0.2em] font-mono">Period Month // মাস</label>
          <select
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
            className="w-full bg-[#010409]/80 text-white p-4 rounded-xl border border-[#00D2FF]/30 focus:border-[#00D2FF] focus:outline-none focus:ring-1 focus:ring-[#00D2FF] font-bold transition-all appearance-none"
          >
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {new Date(2026, i, 1).toLocaleString("default", { month: "long" })}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[10px] text-[#00D2FF] font-bold mb-3 uppercase tracking-[0.2em] font-mono">Year // বছর</label>
          <select
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="w-full bg-[#010409]/80 text-white p-4 rounded-xl border border-[#00D2FF]/30 focus:border-[#00D2FF] focus:outline-none focus:ring-1 focus:ring-[#00D2FF] font-bold transition-all appearance-none"
          >
            {[2024, 2025, 2026, 2027].map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        onClick={generate}
        disabled={loading}
        className="w-full relative overflow-hidden group bg-transparent border border-[#FFD700]/30 hover:border-[#FFD700]/60 text-white font-bold py-6 rounded-xl text-sm transition-all disabled:opacity-50 tracking-widest uppercase font-mono"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        {loading ? (
          <span className="flex items-center justify-center gap-3"><span className="dot-live"></span> SYNCING SYSTEM...</span>
        ) : (
          <span className="text-[#FFD700]">GENERATE REPORT // তৈরি করুন</span>
        )}
      </button>

      {result && (
        <div className="mt-8 bg-black/40 rounded-2xl p-8 border border-white/5 text-center relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-6xl font-black text-[#FFD700] mt-2 drop-shadow-md">৳ {fmtBDT(result.netPayable)}</p>
            <p className="text-sm text-white/50 font-bold mt-4 tracking-widest uppercase font-mono">Net VAT {result.netPayable >= 0 ? "Payable" : "Refundable"}</p>
            <p className="text-[10px] text-[#00D2FF] font-bold mt-6 uppercase tracking-[0.3em] font-mono">DUE NODE: {result.period.dueDate}</p>
        </div>
      )}
    </div>
  );
}
