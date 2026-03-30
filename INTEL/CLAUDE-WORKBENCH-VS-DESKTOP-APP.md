# 🧠 CLAUDE WORKBENCH VS DESKTOP APP — INSPIRON TECH · INTELS · MARCH 2026
> Distilled from full thread: what's the difference between = [platform.claude.com/workbench](https://platform.claude.com/workbench), and Claude Desktop App capabilities
> Created: 2026-03-28 | Owner: MD ABU HASAN

---

## 1. CORE COMPARISON: WORKBENCH VS DESKTOP APP

| Feature | Claude Workbench (Console) | Claude Desktop App |
| :--- | :--- | :--- |
| **Primary Use** | API Development & Prompt Engineering | Daily Productivity & Local Automation |
| **Access** | Browser-based ([platform.claude.com](https://platform.claude.com)) | Native Desktop Installation |
| **MCP Support** | No (API can call remote MCP, but no local host) | Yes (Acts as full local MCP Host) |
| **Local File Access** | Manual upload only | Direct R/W (via MCP or Drag-and-Drop) |
| **Model Selection** | Full API range (Opus, Sonnet, Haiku) | Subscription-based (Pro/Team/Enterprise) |
| **System Controls** | Full Developer-grade (Temp, Tokens, etc.) | Project Instructions |
| **Extensions** | No | Yes (.mcpb support) |
| **Billing** | Pay-per-token (API usage) | Monthly Subscription |

---

## 2. CLAUDE CONSOLE CAPABILITIES (platform.claude.com)

The Console is the **Developer Control Center** for building, testing, and managing API integrations.

### A. Workbench (The Prompt Playground)
- **Prompt Generator**: Describe a task in plain English → auto-generates a production-ready template.
- **Template Variables**: Use `{{VARIABLE_NAME}}` for dynamic inputs (RAG, User Data).
- **Evaluate Tab**: A/B test prompt versions with 1-5 quality grading and test case generation.
- **Get Code**: Instant export of tested prompts to Python or TypeScript SDK code.

### B. Advanced API Features
- **Messages API**: Programmatic multi-turn chat and analysis.
- **Batch Processing**: Process up to 100k requests in one job at **50% discount**.
- **Prompt Caching**: Cache large system prompts or documents (10% cost for cache hits).
- **Vision & PDF**: Direct support for image and document analysis via API.
- **Files API (Beta)**: Upload once, reference by ID across multiple sessions.

---

## 3. CLAUDE DESKTOP APP FEATURES

The Desktop App is the **Local Automation Powerhouse** for power users.

- **MCP Host**: Connect Claude to local files, databases, and editors (VS Code).
- **Global Hotkey**: Summon Claude from anywhere on your desktop instantly.
- **Screen Awareness**: Live screenshot analysis of your current workspace.
- **Projects**: Persistent context for specific business domains or repos.
- **Desktop Extensions**: One-click installation of local tools via `.mcpb`.

---

## 4. TOOL USE & AGENT SDK

| Tool | Capabilities | Pricing Impact |
| :--- | :--- | :--- |
| **Bash Tool** | Run terminal commands | +245 input tokens/call |
| **Code Execution** | Run Python/JS in sandbox | Free with web search |
| **Web Search** | Live internet search | $10 per 1k searches |
| **Web Fetch** | Parse public URLs | Standard token cost |
| **Computer Use** | Mouse/Keyboard control | +735 tokens + screenshot |

### Agent SDK (TypeScript/Python)
Build autonomous agents with:
- **Built-in Tools**: Read/Write/Edit, Bash, Glob, Grep.
- **Subagents**: Spawn child agents for complex parallel tasks.
- **Hooks**: Lifecycle triggers (`PreToolUse`, `PostToolUse`).
- **Permissions**: Human-in-the-loop approval for sensitive actions.

---

## 5. RELEVANT USE CASES FOR INSPIRON TECH

### Manager.io Implementation
- **Workbench**: Build a "Master Implementation Prompt" using `{{client_type}}` and `{{industry}}`.
- **Batch API**: Process 5,000+ historical transactions for audit or migration at 50% cost.
- **Caching**: Cache NBR VAT rules to reduce input costs for repetitive compliance checks.

### WEB-COMMAND-HQ Development
- **Next.js Integration**: Call Claude API via serverless routes (Way 1/Way 2).
- **Agent SDK**: Power the website chat assistant with local memory and doc fetching.
- **Proposal Generator**: Use structured prompts to auto-generate client-ready PDFs.

### Data Scraping (Legal Approach)
- **LinkedIn**: Manual paste → Claude structures data (no automated scraping).
- **Upwork**: RSS Feed → Claude scores jobs 1-10 for fit based on Hasan’s profile.
- **Web Fetch**: Fetch public job posts directly for analysis.

---

## 6. PRICING & QUOTAS (MARCH 2026)

| Model | Input (per MTok) | Output (per MTok) | Batch Rate |
| :--- | :--- | :--- | :--- |
| **Opus 4.6** | $5.00 | $25.00 | $2.50 / $12.50 |
| **Sonnet 4.6** | $3.00 | $15.00 | $1.50 / $7.50 |
| **Haiku 4.5** | $1.00 | $5.00 | $0.50 / $2.50 |

> [!TIP]
> **Total Monthly Estimate for INSPIRON TECH**: ~$13–36/month for daily implementation prompts, proposal generation, and site automation.
