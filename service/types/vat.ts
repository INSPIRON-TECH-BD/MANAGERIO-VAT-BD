export interface VATTaxRate {
  code: string;
  rate: number;
  description: string;
  bengali: string;
  category: "standard" | "reduced" | "zero" | "vds" | "tds";
}

export interface VATCalculation {
  baseAmount: number;
  vatAmount: number;
  totalAmount: number;
  rateInfo: VATTaxRate;
}

export interface BINValidation {
  isValid: boolean;
  bin: string;
  formatted: string;
}

export interface VATTransaction {
  id: string;
  date: string;
  invoiceNo: string;
  party: string;
  baseAmount: number;
  vatAmount: number;
  totalAmount: number;
  vatRateCode: string;
}
