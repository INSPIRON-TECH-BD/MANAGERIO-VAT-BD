import type { VATTaxRate, VATCalculation, BINValidation } from "@/types/vat";

// 2025-2026 Bangladesh VAT Rates (NBR sourced)
const VAT_RATES: VATTaxRate[] = [
  { code: "STD", rate: 15, description: "Standard Rate", bengali: "সাধারণ হার", category: "standard" },
  { code: "IT", rate: 5, description: "IT & Digital Services", bengali: "আইটি সেবা", category: "reduced" },
  { code: "REST", rate: 5, description: "Restaurant & Catering", bengali: "রেস্টুরেন্ট", category: "reduced" },
  { code: "CONST", rate: 7.5, description: "Construction/Contractor", bengali: "নির্মাণ", category: "reduced" },
  { code: "ZERO", rate: 0, description: "Zero Rated / Export", bengali: "শূন্য হার", category: "zero" },
  { code: "VDS", rate: 15, description: "VAT Deducted at Source", bengali: "ভ্যাট উৎসে কর্তন", category: "vds" },
];

export const fmtBDT = (amount: number): string => {
  return amount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const validateBIN = (bin: string): BINValidation => {
  const cleaned = bin.replace(/\D/g, "");
  const isValid = cleaned.length === 9 || cleaned.length === 13;
  return {
    isValid,
    bin: cleaned,
    formatted: cleaned.replace(/(\d{4})(\d{3})(\d{2})/, "$1-$2-$3"),
  };
};

export const calculateVAT = (baseAmount: number, rateCode: string = "STD"): VATCalculation => {
  const rateInfo = VAT_RATES.find((r) => r.code === rateCode) || VAT_RATES[0];
  const vatAmount = Math.round(baseAmount * (rateInfo.rate / 100) * 100) / 100; // n-Law 01: round only at final step
  return {
    baseAmount,
    vatAmount,
    totalAmount: baseAmount + vatAmount,
    rateInfo,
  };
};

export const getPeriodRange = (month: number, year: number) => {
  const startDate = `${year}-${month.toString().padStart(2, "0")}-01`;
  const endDate = new Date(year, month, 0).toISOString().split("T")[0];
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;
  const dueDate = `${nextYear}-${nextMonth.toString().padStart(2, "0")}-15`;
  return { month, year, startDate, endDate, dueDate };
};
