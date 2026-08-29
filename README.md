<div align="center">

# MANAGERIO-VAT-BD

**Bangladesh NBR VAT & Mushak Automation Extension for Manager.io**

[![GitHub](https://img.shields.io/badge/GitHub-INSPIRONTECH%2FMANAGERIO--VAT--BD-181717?style=flat-square&logo=github)](https://github.com/INSPIRONTECH/MANAGERIO-VAT-BD)
[![Manager.io](https://img.shields.io/badge/Manager.io-Extension-FFD700?style=flat-square)](https://manager.io)
[![Status](https://img.shields.io/badge/Status-Active-30D158?style=flat-square)]()

</div>

---

> Developed by [INSPIRON TECH](https://inspiron.tech) — Official Manager.io Advisor & Partner, Bangladesh.

## Overview

**MANAGERIO-VAT-BD** provides Bangladesh-specific VAT compliance tools for Manager.io, covering the National Board of Revenue (NBR) Mushak form requirements. The project has a **dual-deploy architecture**: an open-source HTML extension and a commercial Next.js service.

---

## Mushak Form Coverage

| Form | Type | Description |
|---|---|---|
| **Mushak 6.3** | VAT Invoice | Standard VAT challan for sales with buyer BIN enforcement |
| **Mushak 6.4** | VAT Credit Note | Adjustment note for returns and corrections |
| **Mushak 9.1** | VAT Return | Monthly VAT return summary computation |

---

## Dual-Deploy Architecture

```
MANAGERIO-VAT-BD/
├── extension/                   ← Open-source HTML extension
│   ├── mushak-63.html              Mushak 6.3 VAT Invoice
│   ├── mushak-64.html              Mushak 6.4 Credit Note
│   ├── mushak-91.html              Mushak 9.1 VAT Return
│   └── lib/                        Shared utilities
│
└── service/                     ← Commercial Next.js application
    ├── app/                        App Router pages
    ├── components/                 Shared UI components
    ├── lib/                        Business logic & API clients
    └── types/                      TypeScript type definitions
```

| Layer | Tech | Deploy Target | Visibility |
|---|---|---|---|
| **Extension** | Static HTML + Liquid | GitHub Pages | Open-source (CC BY 4.0) |
| **Service** | Next.js 15, React 19, Tailwind CSS | Vercel → `inspiron.software` | Commercial |

---

## Tech Stack (Service)

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS 3
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **PDF:** @react-pdf/renderer
- **Icons:** Lucide React

---

## Local Development

### Extension (static HTML)

```bash
cd extension/
python3 -m http.server 8080
# Open http://localhost:8080/mushak-63.html
```

### Service (Next.js)

```bash
cd service/
npm install
npm run dev
# Open http://localhost:3000
```

---

## Part of INSPIRON TECH Ecosystem

This repo is a **git submodule** inside [`INSPIRON-ERP-OPS/PRODUCT/vat-bd/`](https://github.com/CyberHasan/INSPIRON-ERP-OPS).

- **Extension HTML** is promoted to [`INSPIRON-SUITE`](https://github.com/INSPIRONTECH/INSPIRON-SUITE) via the promote-gate workflow.
- **Service** is deployed independently via Vercel under the `INSPIRONTECH` org.

---

## Contact

**MD ABU HASAN** — Founder, INSPIRON TECH
🌐 [inspiron.tech](https://inspiron.tech) | 💼 [Upwork](https://upwork.com/freelancers/cyberhasan) | 💬 [WhatsApp](https://wa.me/8801719300849)
