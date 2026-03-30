# 🎨 BRAND DESIGN TOKENS — INSPIRON TECH · INTELS · MARCH 2026
> Sovereign Brand Manual v1.2.0 | Kinetic Palette
> Source: `tailwind.config.ts`

---

## 1. CORE BRAND TOKENS (KINETIC PALETTE)

> [!IMPORTANT]
> Never use raw hex codes in development. Always reference these tokens to ensure cross-platform consistency.

| Token | Hex | Role |
| :--- | :--- | :--- |
| **action-gold** | `#FFD700` | Primary Accent — Gold Indicator nodes |
| **electric-cyan** | `#00D2FF` | Core Brand — Operational Signal / Borders |
| **deep-navy-black**| `#010409` | Canvas Foundation (Background) |
| **institutional-white**| `#FFFFFF` | Typographic Base |

**Legacy Aliases (Backward Compatibility):**
- `navy`: `#002147`
- `gold`: `#FFD700`
- `aqua`: `#00D2FF`

**Typography**: 
- **Institutional Font**: `Neo Sans Pro` (Self-hosted in `/public/fonts/`).
- **Fallback**: `Inter` / `Barlow`.

---

## 2. COMPONENT ARCHITECTURE

### `RefinedLogo.tsx` — THE SINGLE SOURCE OF TRUTH
- **Location**: `components/Branding/RefinedLogo.tsx`
- **Rule**: This is the **only** component authorized to render the INSPIRON TECH logotype. Do not inline SVG paths elsewhere.

### Header & Navigation
- **GlobalHeader.tsx**: Owns desktop navigation and the mobile hamburger trigger.
- **TerminalDatapad.tsx**: The mobile drawer (85vw slide-in). Lives *inside* `GlobalHeader`.
- **Deprecated**: `MobileCommandMenu.tsx` (Pending deletion).

---

## 3. LOCAL DEVELOPMENT PROTOCOL

```bash
# 1. Clone & Enter
git clone https://github.com/INSPIRON-TECH-BD/WEB-COMMAND-HQ.git
cd WEB-COMMAND-HQ

# 2. Environment Setup
npm install

# 3. Development
npm run dev # http://localhost:3000

# 4. Production Build
npm run build
npm run start

# 5. Quality Control
npm run lint
```

---

## 4. DEPLOYMENT & ECOSYSTEM
- **Production**: [inspiron.tech](https://inspiron.tech) (Auto-deployed via Vercel).
- **Environment**: `.env.local` required for API routes (see `app/api/` for specifics).
- **Protocol**: Align with **n-Law Protocol** (Zero Approximation, Pure Vectoring, No Silicone, Persistent Audit).
