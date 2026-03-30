# ZED EDITOR — MASTER SOP
**Owner:** MD ABU HASAN · INSPIRON TECH  
**Classification:** TIER-3-OPERATIONS · ALPHA-COMMAND  
**Version:** 2.0 · 2026-03-28  
**Supersedes:** ZED-CLAUDE-COMPLETE-DOCTRINE.md, SOP-ZED-BEST-PRACTICES.md

---

## 1. SETTINGS.JSON — CANONICAL CONFIG

File location: `%APPDATA%\Zed\settings.json`

```json
{
  "theme": "One Dark Pro",
  "buffer_font_family": "JetBrains Mono",
  "buffer_font_size": 14,
  "format_on_save": "on",
  "autosave": { "after_delay": { "milliseconds": 800 } },
  "tab_size": 2,
  "soft_wrap": "editor_width",
  "git": { "inline_blame": { "enabled": true } },
  "features": { "edit_prediction_provider": "zeta" },
  "agent": {
    "default_model": { "provider": "anthropic", "model": "claude-haiku-4-5" },
    "version": "2"
  },
  "language_models": {
    "anthropic": {
      "available_models": [
        {
          "name": "claude-haiku-4-5",
          "display_name": "⚡ HX — Fast",
          "max_tokens": 200000,
          "max_output_tokens": 8192
        },
        {
          "name": "claude-sonnet-4-5",
          "display_name": "🧠 SD — Deep",
          "max_tokens": 200000,
          "max_output_tokens": 16384
        },
        {
          "name": "claude-sonnet-4-5",
          "display_name": "🔬 ST — Think",
          "max_tokens": 200000,
          "mode": { "type": "thinking", "budget_tokens": 6000 }
        }
      ]
    },
    "google": {
      "available_models": [
        {
          "name": "gemini-2.5-flash",
          "display_name": "🪙 GF — Scan",
          "max_tokens": 1000000
        }
      ]
    }
  }
}
```

**NEVER add:** claude-sonnet-4-6 or claude-opus-4 to Zed Agent Panel.  
**Rate limit reality:** Haiku = 50K input/min. Sonnet = 30K/min. Haiku wins for volume.

---

## 2. BRAIN REGISTRY

| Code | Display Name | Model | Input Cost | Use Case |
|---|---|---|---|---|
| `HX` | ⚡ HX — Fast | claude-haiku-4-5 | ~$0.80/MTok | **DEFAULT — everything** |
| `SD` | 🧠 SD — Deep | claude-sonnet-4-5 | ~$3.00/MTok | Architecture decisions only |
| `ST` | 🔬 ST — Think | claude-sonnet-4-5 (thinking) | ~$3.00/MTok | VAT formulas, NBR law edge cases |
| `GF` | 🪙 GF — Scan | gemini-2.5-flash | Near-free | Reading long docs, vault files |

**Cost discipline:**
- `HX` handles 95% of all work
- `ST` = max 1 thread per problem, close immediately after solved
- `GF` = only for reading, never for coding
- `SD` = only when designing multi-file architecture from scratch

---

## 3. PROFILE REGISTRY

| Code | Profile Name | Tools Enabled | Use For |
|---|---|---|---|
| `SC` | 📂 SCAN | read_file, list_directory, grep, find_path, diagnostics | Reading codebase, diagnosis, understanding |
| `BU` | 🔨 BUILD | All SC tools + edit_file, create_directory, terminal, move_path | Writing code, editing files, running commands |
| `CH` | 💬 CHAT | No file tools | Strategy, planning, instructions, questions |

**Profile rules:**
- `GF` brain → always `SC` profile (never let Gemini edit files)
- `HX` brain → `SC` for reading, `BU` for coding
- `ST` / `SD` brain → `BU` profile, one problem, close after done
- Never use `BU` profile when you only want to ask a question

---

## 4. PROJECT REGISTRY

| Code | Repo / Scope | Path |
|---|---|---|
| `P01` | MANAGERIO-VAT-BD | D:\000. REPOS\SECTOR-CLAUDE-ZED\MANAGERIO-VAT-BD |
| `P02` | WEB-COMMAND-HQ | D:\000. REPOS\WEB-COMMAND-HQ |
| `P03` | INSPIRON-SOFTWARE-TOOLS | D:\000. REPOS\INSPIRON-SOFTWARE-TOOLS |
| `ARG` | CONTRACT-ARGUS-PROPERTIES | D:\000. REPOS\CONTRACT-ARGUS-PROPERTIES |
| `CIV` | CYBER-INTELLIGENCE-VAULT | D:\000. REPOS\CYBER-INTELLIGENCE-VAULT |
| `BIZ` | Strategy / planning (no repo) | — |

---

## 5. THREAD NAMING CONVENTION

**Format:** `[BRAIN]-[PROJECT]-[SLUG]`

**Rules:**
- SLUG = 2–4 words max, hyphenated, ALL-CAPS
- One feature per thread
- Close thread after task is done
- Never reopen a closed thread for a new feature

**Examples:**

| Thread Name | What it does |
|---|---|
| `HX-P01-MUSH64-FIX` | Fix mushak-64.html stray line |
| `HX-P01-GHPAGES-YAML` | GitHub Pages workflow YAML |
| `HX-P01-MUSH91-BUILD` | Build mushak-91.html |
| `HX-P01-INDEX-HUB` | Build extension/index.html hub |
| `ST-P01-VAT-NETCALC` | Net VAT payable formula edge cases |
| `SD-P01-SERVICE-ARCH` | Design service/ Next.js architecture |
| `GF-CIV-MANAGER-DOCS` | Read Manager.io developer guide vault files |
| `GF-CIV-ZED-DOCS` | Read Zed editor vault docs |
| `HX-P02-HOTFIX-BORDER` | Fix white border on social asset generator |
| `HX-ARG-PAYSLIP-GEN` | Build Argus payslip generator |
| `SD-BIZ-ROADMAP-Q2` | Plan Q2 2026 extension roadmap |
| `HX-P01-CLAUDEMD-UPDATE` | Update CLAUDE.md with new session state |

---

## 6. TASK → BRAIN → PROFILE DECISION TREE

```
NEW TASK ARRIVES
│
├── Is this reading a long doc / vault file / API spec?
│   └── GF + SC profile
│
├── Is this editing code / HTML / JS / CLAUDE.md?
│   └── HX + BU profile
│
├── Is this a VAT formula / NBR law / Mushak logic edge case?
│   └── ST + BU profile → ONE thread → close after done
│
├── Is this designing multi-file architecture from scratch?
│   └── SD + BU profile → ONE thread → close after done
│
├── Is this a strategy / planning / roadmap question?
│   └── SD + CH profile (no file tools needed)
│
└── Is this running a terminal command / git / npm?
    └── HX + BU profile (terminal tool enabled)
```

---

## 7. CONTEXT RULES (TOKEN DISCIPLINE)

| Rule | What to do |
|---|---|
| **@mention only what's needed** | Never @mention entire project. Only relevant files. |
| **No thread transcripts** | Never attach previous session chat as context |
| **No 1M context window** | Extension files are 50KB max. Never need 1M. |
| **CLAUDE.md is your memory** | Update it. Don't repeat context in prompts. |
| **progress.md for state** | End of session → write state → next session reads it |
| **Compact before restart** | When token counter hits 80%+ → type `/compact` |
| **Fresh thread = fresh start** | Switching tasks? New thread. Don't continue unrelated work. |

**Expensive patterns to avoid:**
- Attaching entire vault docs in Agent Panel
- Using Sonnet for file renaming or simple edits
- Keeping threads open across multiple work sessions
- Asking Sonnet/Think to do what Haiku can do

---

## 8. CUSTOM SLASH COMMANDS

Add these to your Rules Library (`Ctrl+Shift+P` → `rules: open library`):

### `/start` — Session Start Ritual
```
READ CLAUDE.md and progress.md.
Confirm current state: what is done, what is next, any blockers.
Do not write any code. Just report state.
```

### `/done` — Session End Ritual
```
Update progress.md with:
1. What was completed this session
2. What is the next task
3. Any blockers or open questions
4. Last commit message

Then confirm: "progress.md updated."
```

### `/check` — Code Review (Read Only)
```
Read the file I mention. Do NOT edit anything.
Report: bugs, missing error handling, n-Law violations,
anything that breaks the zero-approximation rule.
Output as a numbered list.
```

### `/commit` — Generate Commit Message
```
Look at the changes made in this thread.
Generate a git commit message following this format:
type(scope): description

Types: feat, fix, docs, chore, refactor
Scopes: ext, svc, vat, api, lib, docs

Output only the commit message. Nothing else.
```

---

## 9. PROJECT RULES FILE (CLAUDE.md BLOCK)

Add this block to CLAUDE.md in every project root:

```markdown
## ZED AGENT RULES

### BRAINS
- HX = ⚡ HX — Fast (claude-haiku-4-5)  → ALL coding, edits, CLAUDE.md updates
- ST = 🔬 ST — Think (sonnet thinking)   → VAT formulas, NBR law ONLY
- SD = 🧠 SD — Deep (claude-sonnet-4-5)  → Multi-file architecture ONLY
- GF = 🪙 GF — Scan (gemini-2.5-flash)  → Reading long vault docs ONLY

### PROFILES
- SC = SCAN   → read-only (no edit_file)
- BU = BUILD  → full edit tools
- CH = CHAT   → no file tools

### THREAD NAMING
- Format: [BRAIN]-[PROJECT]-[SLUG]
- One feature per thread
- Close thread after done
- Update CLAUDE.md + progress.md on close

### SESSION START (every thread)
"READ CLAUDE.md — confirm state, then proceed."

### SESSION END (every thread)
Run /done → update progress.md → git commit → close thread

### NEVER
- Use Sonnet/Think for simple edits (Haiku does it cheaper)
- Attach session transcripts as context
- Use 1M context models on small files
- Mix unrelated features in one thread
- Push to main without operator confirmation
- Use raw hex values (use brand tokens)
- Hardcode any API keys or tokens
```

---

## 10. TOOL PERMISSIONS — WHAT TO ALLOW/DENY

When Zed asks for tool permission on first use:

| Tool | Allow? | Scope |
|---|---|---|
| `read_file` | ✅ Always | Permanent |
| `list_directory` | ✅ Always | Permanent |
| `grep` | ✅ Always | Permanent |
| `find_path` | ✅ Always | Permanent |
| `diagnostics` | ✅ Always | Permanent |
| `edit_file` | ✅ Session | Re-confirm each session |
| `create_directory` | ✅ Session | Re-confirm each session |
| `terminal` | ⚠️ Once | Confirm each command |
| `delete_path` | ❌ Never auto | Always manual confirm |
| `move_path` | ⚠️ Once | Confirm each use |
| `web_search` | ✅ Session | For HX/SD when needed |
| `web_fetch` | ✅ Session | For reading URLs |

**Rule:** `terminal` and `delete_path` are never set to "Always". Always review before executing.

---

## 11. MCP SERVERS (OPTIONAL FUTURE)

For when you need to extend beyond built-in tools:

```json
"context_servers": {
  "filesystem": {
    "command": {
      "path": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem",
               "D:/000. REPOS/SECTOR-CLAUDE-ZED"]
    }
  }
}
```

Only enable when you need cross-repo file access. Disable when not in use (costs tokens per tool list load).

---

## 12. KEYMAP.JSON — CANONICAL SHORTCUTS

File location: `%APPDATA%\Zed\keymap.json`

```json
[
  {
    "bindings": {
      "ctrl-alt-h": [
        "agent::NewThread",
        { "model": { "provider": "anthropic", "model": "claude-haiku-4-5" } }
      ]
    }
  },
  {
    "bindings": {
      "ctrl-alt-s": [
        "agent::NewThread",
        { "model": { "provider": "anthropic", "model": "claude-sonnet-4-5" } }
      ]
    }
  }
]
```

| Shortcut | Action |
|---|---|
| `Ctrl+Shift+A` | Open Agent Panel |
| `Ctrl+Alt+H` | New HX (Haiku) thread |
| `Ctrl+Alt+S` | New SD (Sonnet) thread |
| `Ctrl+?` | New thread (any model) |
| `Shift+Alt+Esc` | Expand message editor |
| `Ctrl+Enter` | Inline assistant on selection |
| `` Ctrl+` `` | Toggle terminal |
| `Ctrl+Shift+P` | Command palette |
| `Ctrl+P` | Quick open file |

---

## 13. ACTIVE PROJECT QUICK-REF (P01 — MANAGERIO-VAT-BD)

**Path:** `D:\000. REPOS\SECTOR-CLAUDE-ZED\MANAGERIO-VAT-BD`

| File | Status | Next Thread |
|---|---|---|
| extension/mushak-63.html | ✅ v1.0 live | — |
| extension/mushak-64.html | ⚠️ Fix line 1 | `HX-P01-MUSH64-FIX` |
| extension/mushak-91.html | ❌ Not built | `HX-P01-MUSH91-BUILD` |
| .github/workflows/pages.yml | ❌ Not built | `HX-P01-GHPAGES-YAML` |
| extension/index.html | ❌ Not built | `HX-P01-INDEX-HUB` |
| service/ (Next.js) | 🏗️ Foundation | `SD-P01-SERVICE-ARCH` |

**Next three actions in order:**
1. `HX-P01-MUSH64-FIX` → remove stray line 1 from mushak-64.html
2. `HX-P01-GHPAGES-YAML` → GitHub Pages workflow → get live URLs
3. `HX-P01-MUSH91-BUILD` → build Mushak 9.1 → complete the trio for lubos email

---

## 14. DAILY WORKFLOW CHECKLIST

```
OPEN SESSION
□ Open project folder in Zed: Ctrl+O → MANAGERIO-VAT-BD
□ Ctrl+Shift+A → new thread → HX brain → SC profile
□ Type: "READ CLAUDE.md and progress.md. Confirm state."
□ Review state → pick task from Active Project Quick-Ref above

DURING SESSION
□ One thread per task
□ @mention only the files relevant to that task
□ Review every diff before accepting
□ Run /check before committing any financial calculation changes

CLOSE SESSION
□ Run /done in current thread
□ git add . → git commit -m "[type(scope): message]" → git push
□ Close all threads
□ Update CLAUDE.md Status line if anything changed
```

---

## 15. SPEND MONITORING

Check monthly at: `platform.anthropic.com/usage`

| Target | Action |
|---|---|
| Under $3/month | ✅ Haiku discipline working |
| $3–8/month | ⚠️ Check which model is default in Agent Panel |
| Over $8/month | 🚨 Sonnet/Thinking being used for routine tasks — fix immediately |

**Current month (March 2026):** $2.14 of $100 limit. On track.  
**Monthly cap set:** $100 (safety net, won't be hit with Haiku discipline)

---

*OPERATION-NEURAL-BRIDGE · SECTOR-CHARLIE-CONTRACTS*  
*MD ABU HASAN · INSPIRON TECH · hello@inspiron.tech*  
*Last updated: 2026-03-28*
