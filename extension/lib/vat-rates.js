/**
 * Bangladesh VAT Rates — lib/vat-rates.js
 * Source: NBR VAT Act 2012 + SROs
 * n-Law 01: Never approximate. These rates must match NBR source exactly.
 * Version: 2025-2026 Assessment Year
 */

var BD_VAT_RATES = {
  version: "2025-2026",
  effectiveFrom: "2025-07-01",
  rates: {
    STANDARD: {
      rate: 0.15,
      label: "Standard (15%)",
      labelBN: "সাধারণ (১৫%)",
      sro: "VAT Act 2012 S.15",
    },
    IT_SERVICES: {
      rate: 0.05,
      label: "IT Services (5%)",
      labelBN: "আইটি সেবা (৫%)",
      sro: "SRO 240-AIN/2019",
    },
    RESTAURANT: {
      rate: 0.05,
      label: "Restaurant (5%)",
      labelBN: "রেস্তোরাঁ (৫%)",
      sro: "SRO 240-AIN/2019",
    },
    CONTRACTOR: {
      rate: 0.075,
      label: "Contractor (7.5%)",
      labelBN: "ঠিকাদার (৭.৫%)",
      sro: "SRO 240-AIN/2019",
    },
    CONSTRUCTION: {
      rate: 0.075,
      label: "Construction (7.5%)",
      labelBN: "নির্মাণ (৭.৫%)",
      sro: "SRO 240-AIN/2019",
    },
    GARMENT_ACCESSORIES: {
      rate: 0.075,
      label: "Garment Accessories (7.5%)",
      labelBN: "গার্মেন্টস আনুষাঙ্গিক (৭.৫%)",
      sro: "SRO",
    },
    ELECTRICITY_INDUSTRIAL: {
      rate: 0.05,
      label: "Industrial Electricity (5%)",
      labelBN: "শিল্প বিদ্যুৎ (৫%)",
      sro: "SRO",
    },
    ZERO_RATED: {
      rate: 0.0,
      label: "Zero Rated (0%)",
      labelBN: "শূন্য হার (০%)",
      sro: "VAT Act 2012 S.23",
    },
    EXEMPT: {
      rate: null,
      label: "Exempt",
      labelBN: "অব্যাহতি",
      sro: "VAT Act 2012 S.26",
    },
  },

  // VDS (VAT Deducted at Source) — 44 specified services
  // Buyer is required to deduct VAT at source when paying these services
  VDS_APPLICABLE_SERVICES: [
    "Audit and accounting firms",
    "Consulting firms",
    "Supervisory firms",
    "Law firms",
    "IT firms (development services)",
    "Media buying agencies",
    "Event management companies",
    "Cleaning service companies",
    "Security service companies",
    "Repair and maintenance",
    // Note: Full list of 44 services per NBR SRO
  ],

  // TDS (Tax Deducted at Source) — Key rates
  TDS_RATES: {
    CONTRACTOR_WITH_PRS: {
      rate: 0.03,
      cashSurcharge: false,
      label: "Contractor (with PSR)",
    },
    CONTRACTOR_WITHOUT_PRS: {
      rate: 0.06,
      cashSurcharge: false,
      label: "Contractor (without PSR)",
    },
    CASH_PAYMENT_SURCHARGE: 0.5, // 50% surcharge if payment is in cash
    QUARTERLY_FILING_DUE: 25, // 25th of month following quarter end
  },

  // Filing Deadlines
  DEADLINES: {
    VAT_MONTHLY: { dueDay: 15, description: "Mushak 9.1 monthly return" },
    TDS_QUARTERLY: { dueDay: 25, description: "TDS quarterly deposit" },
    FISCAL_YEAR_START: "07-01", // July 1
  },
};

// Get rate by key
function getVATRate(key) {
  return BD_VAT_RATES.rates[key] || BD_VAT_RATES.rates.STANDARD;
}

// Calculate VAT amount
// n-Law 01: Zero Approximation — round to 2 decimal places only at final step
function calculateVAT(baseAmount, rateKey) {
  var rateInfo = getVATRate(rateKey);
  if (!rateInfo || rateInfo.rate === null) {
    return {
      baseAmount: baseAmount,
      vatAmount: 0,
      totalAmount: baseAmount,
      rateInfo: rateInfo,
    };
  }
  var vatAmount = baseAmount * rateInfo.rate;
  return {
    baseAmount: Math.round(baseAmount * 100) / 100,
    vatAmount: Math.round(vatAmount * 100) / 100,
    totalAmount: Math.round((baseAmount + vatAmount) * 100) / 100,
    rateInfo: rateInfo,
  };
}

// Validate BIN (Bangladesh BIN = 9 digits)
function validateBIN(bin) {
  if (!bin) return { valid: false, error: "BIN missing" };
  var cleaned = bin.replace(/\D/g, "");
  if (cleaned.length !== 9)
    return {
      valid: false,
      error: "BIN must be 9 digits, got " + cleaned.length,
    };
  return { valid: true, bin: cleaned };
}

// Format BDT amount with commas (BD format)
function formatBDT(amount) {
  if (amount === null || amount === undefined) return "0.00";
  return parseFloat(amount)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Export for use in extension HTML files
if (typeof module !== "undefined") {
  module.exports = {
    BD_VAT_RATES,
    getVATRate,
    calculateVAT,
    validateBIN,
    formatBDT,
  };
}
