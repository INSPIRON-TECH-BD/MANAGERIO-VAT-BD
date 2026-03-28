export interface MushakPeriod {
  month: number;
  year: number;
  startDate: string;
  endDate: string;
  dueDate: string; // 15th of next month
}

export interface MushakSummary {
  outputVAT: number;
  inputCredit: number;
  netPayable: number;
  taxableSales: number;
  taxablePurchases: number;
  salesInvoiceCount: number;
  purchaseInvoiceCount: number;
  period: MushakPeriod;
}

export interface Mushak91Data extends MushakSummary {
  businessName: string;
  bin: string;
  generatedAt: string;
}

export type MushakFormType = "63" | "64" | "91"; // Add more later (6.5, 6.7, 11)

export interface MushakFormProps {
  type: MushakFormType;
  onGenerate?: (data: Mushak91Data) => void;
}
