import MushakSummary from "@/components/Dashboard/MushakSummary";
import QuickActions from "@/components/Dashboard/QuickActions";
import { RefinedLogo } from "@/components/Branding/RefinedLogo";

export default function DashboardPage() {
  return (
    <>
      <header>
        <div>
          <RefinedLogo size={32} />
          <div className="absolute top-[52px] text-[9px] tracking-[0.18em] uppercase text-white/20 font-mono">
            inspiron.software // vat-engine
          </div>
        </div>
        <div className="status">
          <span className="dot-live"></span>
          ALL SYSTEMS ONLINE
        </div>
      </header>

      <div className="max-w-[1000px] mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <div className="eyebrow mx-auto mb-5">
            VAT ENGINE // v9.1
          </div>
          <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tight leading-none mb-4">
            Mushak <span className="text-[#FFD700]">Automation</span>
          </h1>
          <p className="text-sm text-white/35 tracking-wider leading-relaxed">
            Manager.io integrated VAT layer.<br/>Zero manual entries. NBR 2012 compliant.
          </p>
        </div>

        <div className="section-label mb-6">
          ── LIVE ENGINE
        </div>

        <div className="grid grid-cols-1 gap-6">
          <MushakSummary />
        </div>
        <QuickActions />
      </div>
    </>
  );
}
