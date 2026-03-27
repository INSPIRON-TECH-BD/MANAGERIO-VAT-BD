// Mushak Form Types — Bangladesh NBR VAT System

export type MushakFormNumber = "6.3" | "6.4" | "6.5" | "6.7" | "11";

export interface MushakHeader {
  formNumber: MushakFormNumber;
  registeredName: string;   // VAT-registered entity name
  bin: string;              // 9-digit Business Identification Number
  address: string;
  period: { month: number; year: number };
  preparedBy: string;
  preparedDate: string;     // ISO date
}

// Mushak 6.3 — Sales Register (Output VAT)
export interface Mushak63Row {
  serial: number;
  date: string;
  buyerName: string;
  buyerBIN?: string;
  invoiceNumber: string;
  description: string;
  baseAmount: number;
  vatRate: number;
  vatAmount: number;
  totalAmount: number;
  remarks?: string;
}

export interface Mushak63 {
  header: MushakHeader;
  rows: Mushak63Row[];
  totals: {
    baseAmount: number;
    vatAmount: number;
    totalAmount: number;
  };
  validationErrors: string[];
}

// Mushak 6.4 — Purchase Register (Input VAT)
export interface Mushak64Row {
  serial: number;
  date: string;
  supplierName: string;
  supplierBIN?: string;
  invoiceNumber: string;
  description: string;
  baseAmount: number;
  vatRate: number;
  vatAmount: number;
  totalAmount: number;
  inputCreditClaimed: boolean;
  remarks?: string;
}

export interface Mushak64 {
  header: MushakHeader;
  rows: Mushak64Row[];
  totals: {
    baseAmount: number;
    vatAmount: number;
    totalAmount: number;
    totalInputCredit: number;
  };
  validationErrors: string[];
}

export interface MushakExportConfig {
  format: "pdf" | "xlsx" | "json";
  language: "bn" | "en";   // Bangla or English
  includeValidationReport: boolean;
}