# SESSION CHECKPOINT: MANAGERIO-VAT-BD (2026-03-28)

## 1. Project Context & Mission Overview

**Project:** Manager.io VAT Extension for Bangladesh (MANAGERIO-VAT-BD)
**Mission:** Build Bangladesh's first Manager.io VAT extension.
**Dual Deployment:**
    1. `extension/`: HTML/JS files for Manager.io (open-source, GitHub Pages)
    2. `service/`: Next.js SaaS (commercial, Vercel)
**Operator:** MD ABU HASAN · INSPIRON TECH
**Core Principles (n-Law Protocol):**
    - Zero Approximation (VAT rates exact)
    - Pure Vectoring (Logo SVG only)
    - No Silicone (Zero vendor lock-in)
    - Persistent Audit (Calculations logged, 0.1% Error Tolerance)
**Manager.io API:** `window.postMessage` for context (`apiEndpoint`, `apiAccessToken`). CamelCase for READ list, PascalCase for READ form/WRITE form.

## 2. Current Extension Status

-   **`mushak-63.html` (Sales Register):** Live (v1.0), functionally complete. Requires branding alignment.
-   **`mushak-64.html` (Purchase Register):** In progress, functionally complete. Requires branding alignment.
-   **`mushak-91.html` (Monthly VAT Return):** Functionally complete. Requires branding alignment and full content update.

## 3. Branding Guidelines (Commander Edition / Kinetic Palette)

**Source of Truth:** WEB-COMMAND-HQ (via `Manager.io_VAT_Extension_Progress_Bangladesh_Shared_Grok_Conversation.md`)

**Color Palette:**
-   `--bg: #010409`           (deep-navy-black)
-   `--card: #1a1f2e`         (operational card)
-   `--text: #ffffff`         (institutional-white)
-   `--accent-cyan: #00d2ff`  (electric-cyan)
-   `--accent-gold: #ffd700`  (action-gold)
-   `--red: #ff4d4d`          (alert-red)

**Shared `<style>` Block (for all `mushak-*.html` files in `<head>`):**
```html
<style>
  :root {
    --bg: #010409;           /* deep-navy-black */
    --card: #1a1f2e;         /* operational card */
    --text: #ffffff;         /* institutional-white */
    --accent-cyan: #00d2ff;  /* electric-cyan */
    --accent-gold: #ffd700;  /* action-gold */
    --red: #ff4d4d;
  }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: system-ui, -apple-system, sans-serif;
    margin: 0;
    padding: 0;
  }
  header {
    background: var(--bg);
    border-bottom: 2px solid var(--accent-gold);
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text);
  }
  .commander-logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .commander-logo h1 {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -1px;
    margin: 0;
  }
  .commander-logo p {
    color: var(--accent-cyan);
    font-size: 14px;
    margin-top: -4px;
  }
  .header-info {
    text-align: right;
    font-size: 12px;
    line-height: 1.3;
  }
  .header-info span {
    color: var(--accent-gold);
  }
  .container {
    max-width: 960px;
    margin: 32px auto;
    padding: 24px;
    background: var(--card);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  }
  .controls {
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
    flex-wrap: wrap;
    align-items: flex-end;
    background: rgba(255,255,255,0.03);
    padding: 20px;
    border-radius: 8px;
  }
  .form-group { flex: 1; min-width: 150px; }
  label { display: block; margin-bottom: 8px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.7; }
  select, input[type="text"] {
    width: 100%;
    padding: 10px 14px;
    border: 1px solid #333;
    border-radius: 6px;
    background: #010409;
    color: var(--text);
    font-size: 14px;
  }
  button {
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    background: var(--accent-gold);
    color: #010409;
    transition: 0.2s;
  }
  button:hover { box-shadow: 0 0 20px var(--accent-cyan); transform: translateY(-1px); }
  .section-title {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--accent-cyan);
    margin-top: 32px;
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(0,210,255,0.2);
  }
  table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
  th, td { padding: 12px 16px; border-bottom: 1px solid #333; text-align: left; }
  th { background: rgba(255,255,255,0.02); color: var(--accent-gold); font-size: 11px; text-transform: uppercase; }
  .net-payable {
    border: 2px solid var(--accent-gold);
    background: rgba(255, 215, 0, 0.05);
    color: var(--accent-cyan);
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    padding: 30px;
    border-radius: 8px;
    margin-top: 32px;
  }
  .n-law-footer {
    font-size: 0.75rem;
    opacity: 0.6;
    text-align: center;
    margin-top: 60px;
    border-top: 1px solid rgba(0,210,255,0.1);
    padding: 20px;
    letter-spacing: 0.5px;
  }
  @media print {
    body { background: #fff; color: #000; }
    header, .controls, button { display: none !important; }
    .container { max-width: 100%; box-shadow: none; }
    .net-payable { border: 2px solid #000; color: #000; }
  }
</style>
```

**Shared Commander Header (for all `mushak-*.html` files in `<body>`):**
```html
<header>
    <div class="commander-logo">
      <!-- Exact Refined Logo SVG from WEB-COMMAND-HQ -->
      <svg width="48" height="48" viewBox="0 0 358.846 350.3" fill="none">
        <circle cx="321.346" cy="37.5" r="37.5" fill="#FFD700"/>
        <path d="M321.346 75L321.346 275" stroke="#00D2FF" stroke-width="14"/>
      </svg>
      <div>
        <h1>INSPIRON VAT ENGINE</h1>
        <p>Commander Edition • NBR Compliant</p>
      </div>
    </div>
    <div class="header-info">
      OFFICIAL MANAGER.IO PARTNER<br>
      MD ABU HASAN • DHAKA, BD<br>
      <span>0.1% ERROR TOLERANCE</span>
    </div>
</header>
```

**Shared n-Law Footer (for all `mushak-*.html` files before `</body>`):**
```html
<div class="n-law-footer">
  Generated by INSPIRON Command HQ • Architected in Dhaka, Bangladesh<br>
  n-Law Protocol • Zero Approximation • All rights reserved to Commander MD ABU HASAN
</div>
```

## 4. Complete `mushak-91.html` (Commander Edition) Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mushak 9.1 - Monthly VAT Return | INSPIRON VAT ENGINE</title>
    <!-- [PASTE SHARED <STYLE> BLOCK HERE] -->
</head>
<body>
    <!-- [PASTE SHARED COMMANDER HEADER HERE] -->

    <div class="container">
        <div class="controls">
            <div class="form-group">
                <label>Month / মাস</label>
                <select id="month">
                    <option value="1">January</option><option value="2">February</option>
                    <option value="3">March</option><option value="4">April</option>
                    <option value="5">May</option><option value="6">June</option>
                    <option value="7">July</option><option value="8">August</option>
                    <option value="9">September</option><option value="10">October</option>
                    <option value="11">November</option><option value="12">December</option>
                </select>
            </div>
            <div class="form-group">
                <label>Year / বছর</label>
                <select id="year"></select>
            </div>
            <button onclick="generateReport()">GENERATE MUSHAK 9.1</button>
        </div>

        <div id="status" style="margin-bottom:20px; font-size:13px; color:var(--accent-cyan)"></div>
        <div id="result" style="display:none;"></div>
    </div>

    <!-- [PASTE SHARED N-LAW FOOTER HERE] -->

    <script>
        // API handshake and logic (as verified in Grok log)
        let apiEndpoint = "", apiAccessToken = "", RDY = false;
        window.addEventListener("message", function(e) {
            if (!e.data || e.data.type !== "manager-context") return;
            apiEndpoint = e.data.payload.apiEndpoint.replace(/\/+$/, "");
            apiAccessToken = e.data.payload.apiAccessToken;
            RDY = true;
            document.getElementById('status').innerText = "SYSTEMS ONLINE: Connected to Manager.io";
        });

        async function apiGet(path) {
            const resp = await fetch(apiEndpoint + "/api2" + path, {
                headers: { "Authorization": "Bearer " + apiAccessToken }
            });
            return resp.json();
        }

        function fmtBDT(n) { return n.toLocaleString('en-IN', { minimumFractionDigits: 2 }); }

        async function generateReport() {
            if (!RDY) { alert("Not connected to Manager.io context."); return; }
            const month = document.getElementById('month').value;
            const year = document.getElementById('year').value;
            const sd = `${year}-${month.padStart(2,'0')}-01`;
            const ed = new Date(year, month, 0).toISOString().split('T')[0];
            
            document.getElementById('status').innerText = "EXTRACTING DATA...";
            
            try {
                const [sales, purchases] = await Promise.all([
                    apiGet(`/sales-invoices?startDate=${sd}&endDate=${ed}`),
                    apiGet(`/purchase-invoices?startDate=${sd}&endDate=${ed}`)
                ]);

                let outVat = 0, inVat = 0, outBase = 0, inBase = 0;
                sales.forEach(i => { outVat += (i.taxAmount || 0); outBase += (i.amount || 0) - (i.taxAmount || 0); });
                purchases.forEach(i => { inVat += (i.taxAmount || 0); inBase += (i.amount || 0) - (i.taxAmount || 0); });

                // Apply n-Law 01: Rounding at the final step only
                outVat = Math.round(outVat * 100) / 100;
                inVat = Math.round(inVat * 100) / 100;
                outBase = Math.round(outBase * 100) / 100;
                inBase = Math.round(inBase * 100) / 100;

                const net = Math.round((outVat - inVat) * 100) / 100; // Final net VAT calculation

                document.getElementById('result').innerHTML = `
                    <div class="section-title">SECTION A: OUTPUT VAT (SALES)</div>
                    <table>
                        <tr><th>Description</th><th style="text-align:right">Value (BDT)</th></tr>
                        <tr><td>Taxable Sales (Base)</td><td style="text-align:right">${fmtBDT(outBase)}</td></tr>
                        <tr><td>Output VAT Amount</td><td style="text-align:right; color:var(--accent-gold)">${fmtBDT(outVat)}</td></tr>
                    </table>
                    <div class="section-title">SECTION B: INPUT VAT CREDIT (PURCHASES)</div>
                    <table>
                        <tr><th>Description</th><th style="text-align:right">Value (BDT)</th></tr>
                        <tr><td>Taxable Purchases (Base)</td><td style="text-align:right">${fmtBDT(inBase)}</td></tr>
                        <tr><td>Input VAT Credit</td><td style="text-align:right; color:var(--accent-cyan)">${fmtBDT(inVat)}</td></tr>
                    </table>
                    <div class="net-payable">
                        ${net >= 0 ? 'PAYABLE' : 'REFUNDABLE'}: ${fmtBDT(Math.abs(net))} BDT
                    </div>
                `;
                document.getElementById('result').style.display = 'block';
                document.getElementById('status').innerText = "REPORT GENERATED SUCCESSFULLY";
            } catch (e) {
                document.getElementById('status').innerText = "ERROR: " + e.message;
            }
        }

        (function init() {
            const yr = document.getElementById('year');
            const now = new Date().getFullYear();
            for(let i=0; i<5; i++) {
                let o = document.createElement('option');
                o.value = now-i; o.innerText = now-i; yr.appendChild(o);
            }
            // Set current month as default
            document.getElementById('month').value = new Date().getMonth() + 1;
        })();
    </script>
</body>
</html>
```

## 5. Execution Plan for You (Commander) Post-Reinstallation

1.  **Open `SESSION_CHECKPOINT.md`:** This file will be your primary context for the next session.
2.  **Update `mushak-91.html`:** Copy the "Complete `mushak-91.html` (Commander Edition) Code" (Section 4) and paste it to entirely replace the contents of `MANAGERIO-VAT-BD/extension/mushak-91.html`. Ensure you replace the placeholder comments `<!-- [PASTE SHARED <STYLE> BLOCK HERE] -->` etc., with the actual content from Section 3.
3.  **Update `mushak-63.html` & `mushak-64.html`:**
    -   Open `MANAGERIO-VAT-BD/extension/mushak-63.html` and `MANAGERIO-VAT-BD/extension/mushak-64.html`.
    -   Replace their existing `<style>` block (or import if present) with the "Shared `<style>` Block" from Section 3.
    -   Replace their existing `<header>` with the "Shared Commander Header" from Section 3.
    -   Insert the "Shared n-Law Footer" from Section 3 before their `</body>` tag.
4.  **Commit & Push to GitHub:**
    ```bash
    git add MANAGERIO-VAT-BD/extension/*.html
    git commit -m "feat(ext): Commander Edition branding applied to all Mushak extensions"
    git push origin main
    ```
5.  **Verify GitHub Pages Deployment:** Check `https://inspiron-tech-bd.github.io/MANAGERIO-VAT-BD/` and the specific extension URLs to ensure they are live and branded correctly.
6.  **Next Strategic Focus (New Session):** Initiate the "Service Layer Launch" (Next.js SaaS development) as outlined in the Grok conversation.

## 6. Important Acknowledgment

-   **Tool Limitation:** In this specific session, I experienced a limitation where `edit_file` and `replace_file_content` tools were not available. All code has been provided for manual copy-paste. This checkpoint allows for a fresh start with full tool access.

---
**END OF SESSION CHECKPOINT**