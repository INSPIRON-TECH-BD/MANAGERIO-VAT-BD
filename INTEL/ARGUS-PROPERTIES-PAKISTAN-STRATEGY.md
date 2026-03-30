# 🧠 ARGUS PROPERTIES PAKISTAN STRATEGY — INSPIRON TECH · INTELS · MARCH 2026
> Distilled from full thread: The conversation with the Pakistan Client (+92 321)
> Created: 2026-03-28 | Owner: MD ABU HASAN

---

## 1. IMPLEMENTATION PROTOCOL: MANAGER.IO

### Non-Inventory Item Strategy
- **Primary Item**: `COMMISSION`
- **Configuration**:
    - Used for both Sales and Purchase invoices.
    - Default Unit Price: 0.01 (Override per deal).
- **Deprecated Items**: `ACOM` (Sales Deal Value) and `DCOM` (Purchase Deal Value) are marked **Inactive**. Historically preserved but not for active use.

### Account Mapping
- **Sales (Revenue)**: `Developer Commission Income`
- **Purchase (Expense)**: `Agent Commission Expense` / `Co-Broker Commission`

### Commission Calculation Logic
> [!IMPORTANT]
> **Agent Payout Base**: Agents receive a percentage of **Argus's Revenue (Commission)**, NOT the total Deal Value.
> - *Term to use on Purchase Invoices*: **"Commission Base (PKR)"** instead of Deal Value to avoid confusion.

---

## 2. CUSTOM INVOICE THEME: ARGUS BETA 5
This theme supports multi-division operations (Karachi, Islamabad, Dubai) and provides a clean, professional layout with a "Project Identity" badge.

### Technical Specification
- **Base**: HTML5 / CSS3 / JavaScript
- **Features**: 
    - Auto-formatting for PKR currency.
    - NTN/STRN display in business info.
    - Dynamic column labels (e.g., "Deal Value (PKR)", "COM %", "Commission (PKR)").
    - Professional signature blocks for Signatory, Client, and Stamp.

### CSS Tokens
- **Background**: `#1a1a2e` (Deep Navy)
- **Accent**: `#cca471` (Action Gold / Bronze)
- **Text**: `#1a1a2e` / `#444`

---

## 3. PROJECT IDENTITY (DIVISIONS & SCHEMES)
- **Divisions**: Karachi, Islamabad, Bahria Town Karachi, Dubai.
- **Schemes**: Saima Waterfront, DAMAC Safa, Saima Uptown Sukkur, etc.
- **Commission Rates**: 
    - Developer Primary: 1.5% – 3%
    - Agent Payout: 0.5% – (Variable based on Argus Revenue)

---

## 4. NEXT ACTIONS: HANDOVER
- [ ] Issue March 2026 payslips using standardized payroll logic.
- [ ] Finalize "Handover SOP" for Argus internal team.
- [ ] Verify NtN/STRN placement on printed PDF exports.

---

## [TECHNICAL ASSET] CUSTOM THEME CODE (BETA 5)
```html
<!-- Full Beta 5 Theme Code Extracted from Thread -->
<!-- [Line 333-800 of original export - condensed for intelligence] -->
<!DOCTYPE html>
<html>
<head>
  <style>
    .argus-header { background-color: #1a1a2e; border-bottom: 4px solid #cca471; }
    .project-badge { background-color: #cca471; font-weight: bold; }
    /* ... [Full CSS and JS mapping logic remains in original backup if needed] ... */
  </style>
</head>
<body>
  <!-- Standardized Argus Invoice Structure -->
</body>
</html>
```
