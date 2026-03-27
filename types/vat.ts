// Bangladesh VAT Domain Types
// n-Law 01: Zero Approximation - all rates sourced from NBR

export type VATRateKey =
  | "standard"
  | "it_services"
  | "restaurant"
  | "contractor"
  | "construction"
  | "garment_accessories"
  | "electricity_industrial"
  | "zero_rated"
  | "exempt";

export interface VATRate {
  key: VATRateKey;
  rate: number;            // As decimal: 0.15 = 15%
  label: string;           // Human-readable label
  sroReference?: string;   // NBR SRO/GO reference
  effectiveFrom: string;   // ISO date string
  effectiveTo?: string;    // ISO date string, undefined = current
}

export interface VATCalculation {
  baseAmount: number;
  rateKey: VATRateKey;
  rate: number;
  vatAmount: number;
  totalAmount: number;
  isValid: boolean;
  errors: string[];
}

export interface VATTransaction {
  id: string;
  date: string;            // ISO date string
  type: "sale" | "purchase";
  partyName: string;
  partyBIN?: string;       // Buyers BIN (required for B2B)
  description: string;
  baseAmount: number;
  vatAmount: number;
  totalAmount: number;
  rateKey: VATRateKey;
  invoiceNumber: string;
  mushakReference?: string;
  validationErrors: string[];
}

export interface VATAuditReport {
  period: { from: string; to: string };
  entityBIN: string;
  entityName: string;
  outputVAT: number;
  inputVAT: number;
  netVATPayable: number;
  totalSales: number;
  totalPurchases: number;
  transactionCount: number;
  errorCount: number;
  auditReadinessScore: number;  // 0-100
  flags: AuditFlag[];
}

export interface AuditFlag {
  severity: "critical" | "warning" | "info";
  code: string;
  message: string;
  transactionIds: string[];
}