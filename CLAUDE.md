<!-- CLAUDE.md · MANAGERIO-VAT-BD · Read every session. No exceptions. -->

# MANAGERIO-VAT-BD — AGENT CONTEXT

## MISSION

Build Bangladesh first Manager.io VAT extension.
Two deployments from one codebase:

1. extension/ = HTML/JS files that install INSIDE Manager.io (open-source, GitHub Pages)
2. service/ = Next.js SaaS at inspiron.software (commercial, Vercel)

**GitHub (public):** github.com/CyberHasan/managerio-vat-bd
**GitHub Pages:** cyberhasan.github.io/managerio-vat-bd/
**SaaS:** inspiron.software
**Operator:** MD ABU HASAN · INSPIRON TECH · hello@inspiron.tech
**Sector:** CHARLIE-CONTRACTS · OPERATION-NEURAL-BRIDGE

## PILOT ENVIRONMENT

- Manager.io CLOUD EDITION (not desktop)
- Cloud passes context via window.postMessage (apiEndpoint = cloud URL, not localhost)
- Extension must listen for postMessage — never hardcode localhost:5000
- Test URL: install extension via Manager.io Settings > Extensions > Add URL
- Repo: github.com/INSPIRONTECH/MANAGERIO-VAT-BD
- Extension URL (live): https://INSPIRONTECH.github.io/MANAGERIO-VAT-BD/
- Status: mushak-63.html v1.0 live | mushak-64.html in progress

## PROJECT STRUCTURE

extension/ OPEN SOURCE (public GitHub + GitHub Pages)
mushak-63.html Mushak 6.3 Sales Register — BUILD FIRST
mushak-64.html Mushak 6.4 Purchase Register
mushak-91.html Monthly VAT Return (Mushak 9.1)
vds-calculator.html VDS Auto-Calculator
tds-manager.html TDS Manager
index.html Extension hub selector
lib/
manager-io.js API client (works cloud + desktop)
vat-rates.js Bangladesh VAT rates (NBR-sourced, versioned)
mushak.js Mushak form generation logic
validator.js BIN + VAT validation

service/ COMMERCIAL (private, Next.js, Vercel)
app/
page.tsx inspiron.software landing
(tools)/ Free tools route group
mushak/page.tsx Free Mushak generator (watermarked)
vat/page.tsx VAT calculator
tds/page.tsx TDS rate finder
bin/page.tsx BIN validator
api/
claude/route.ts Claude API proxy (AI VAT advisor)
components/
lib/

docs/
MUSHAK-FORMS-REFERENCE.md NBR Mushak form field specs
VAT-RULES-BD.md Bangladesh VAT rates + SRO references
INSTALL-CLOUD.md How to install in Manager.io cloud
INSTALL-DESKTOP.md How to install in Manager.io desktop

## THE n-LAW PROTOCOL

01 Zero Approximation — VAT rates must match NBR source exactly. Never approximate.
02 Pure Vectoring — Logo SVG only. No raster. No inline paths outside RefinedLogo.
03 No Silicone — Zero vendor lock-in. Client data always exportable.
04 Persistent Audit — Every calculation logged. Root cause in < 120 seconds.
Error Tolerance: 0.1% maximum on all financial calculations.

## MANAGER.IO API — CRITICAL RULES

AUTH: Always receive via window.postMessage — NEVER hardcode any token or URL.

CASE CONVENTION (the biggest trap):
READ list (GET /api2/sales-invoices) = camelCase fields
READ form (GET /api2/sales-invoice-form/{key}) = PascalCase fields
WRITE form (POST /api2/sales-invoice-form) = PascalCase headers + camelCase lines

KEY ENDPOINTS FOR MUSHAK 6.3 (Sales Register):
GET /api2/sales-invoices?fields=Date,Reference,Customer,TaxCode,TaxAmount,Amount
GET /api2/tax-codes
GET /api2/customers

KEY ENDPOINTS FOR MUSHAK 6.4 (Purchase Register):
GET /api2/purchase-invoices?fields=Date,Reference,Supplier,TaxCode,TaxAmount,Amount
GET /api2/suppliers

## BANGLADESH VAT DOMAIN

Standard rate: 15%
IT Services: 5% | Restaurant: 5% | Contractors: 7.5% | Construction: 7.5%
VDS (VAT Deducted at Source): 44 specified services — buyer deducts from payment
BIN: 9-digit Business Identification Number (VAT registration)
Filing: Monthly (Mushak 9.1 due 15th of following month)
TDS filing: Quarterly (due 25th of month following quarter)
Fiscal year: July 1 to June 30

## MUSHAK FORMS — BUILD ORDER

1. mushak-63.html Mushak 6.3 Sales Register (OUTPUT VAT) — MVP, ship first
2. mushak-64.html Mushak 6.4 Purchase Register (INPUT VAT)
3. mushak-91.html Monthly Return summary
4. vds-calculator VDS auto-calc for specified services
5. tds-manager TDS tracking + quarterly filing

## TECH STACK

Extension: Vanilla HTML + CSS + JavaScript. Zero dependencies. Self-contained.
Service: Next.js 15 (App Router), React 19, TypeScript 5, Tailwind CSS 3.4
AI: Claude API (claude-sonnet-4-6) via /api/claude route
Deploy: Extension = GitHub Pages | Service = Vercel (inspiron.software)

## BRAND TOKENS (never raw hex)

action-gold: #FFD700
electric-cyan: #00D2FF
deep-navy-black: #010409
success-green: #00A86B
alert-red: #DC3545
institutional-white: #FFFFFF

## COMMIT PROTOCOL

feat(ext): New extension feature
feat(svc): New service feature
fix(ext): Extension bug fix
fix(vat): VAT calculation fix
docs(scope): Documentation
chore(scope): Tooling / deps

## SESSION LOGGING

Save to: SECTOR-ALPHA-COMMAND/INTELLIGENCE-CORE/SESSION-LOGS/
Format: YYYY-MM-DD_MANAGERIO-VAT-BD-BRIEF-TITLE.md

## ZED AGENT RULES

BRAINS
- HX = ⚡ HX — Fast (Haiku 4.5) → All coding + docs
- ST = 🔬 ST — Think (Sonnet)   → VAT / Mushak logic ONLY
- SD = 🧠 SD — Deep (Sonnet)    → Architecture / strategy ONLY
- GF = 🪙 GF — Scan (Gemini)    → Long external/vault docs ONLY

PROFILES
- SC = SCAN  → read-only tools
- BU = BUILD → full edit tools
- CH = CHAT  → no file tools

THREADS
- Name: [BRAIN]-[PROJECT]-[SLUG]
- One feature per thread
- Close after done; update CLAUDE.md + progress.md

SESSION START
- Run /start in new thread.

SESSION END
- Run /done, commit, push, close thread.

NEVER
- Use Sonnet/Think for simple edits (use HX).
- Attach old chat transcripts as context.
- Use 1M context in Zed.
- Mix unrelated features in one thread.
- Store secrets in repo.

---

_OPERATION-NEURAL-BRIDGE · SECTOR-CHARLIE-CONTRACTS_
_MD ABU HASAN · INSPIRON TECH · hello@inspiron.tech_
_Bangladesh first Manager.io VAT Extension_
