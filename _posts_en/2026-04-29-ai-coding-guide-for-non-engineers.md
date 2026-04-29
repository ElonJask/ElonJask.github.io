---
layout: post
title: "AI Coding in Practice: How Non-Engineers Can Use Claude Code Effectively"
date: 2026-04-29 10:00:00 +0800
summary: "The barrier is lower than you think. Anyone who can use chat-based AI like Doubao can learn Claude Code with some practice. The key is writing precise requirements, giving AI enough context, and verifying results carefully."
categories: Tech
topic: tech-notes
tags: [AI, Claude Code, productivity, vibe-coding]
lang: en-US
translation_key: ai-coding-guide-for-non-engineers-2026
---

I recently read an article by Tw93 about AI Coding that resonated deeply with me. He systematically introduced how non-technical people—product managers, business analysts, operations teams—can get started with Claude Code. After reading it, I felt many insights were worth extracting and sharing, so I put together this article.

The core idea is simple: **The barrier is lower than you think. Anyone who can use chat-based AI like Doubao can learn Claude Code with some practice. The rest is just getting used to handing over execution to it.**

---

## 1. From Chat Box to Terminal: Two Fundamentally Different Workflows

Many people are used to chat-based AI like Doubao or ChatGPT, and feel intimidated when they see a terminal. But these two modes have completely different workflows:

**Chat-based AI**: Describe requirement → AI generates code → Copy-paste elsewhere to test → Back and forth

**Claude Code**: Executes directly in your terminal project, reads, modifies, runs, verifies, then comes back to you when done

The difference? Chat-based AI needs you to be the porter. Claude Code lets AI do the work. You don't need to know how to write code—you just need to describe the problem and verify the results.

If you really don't want to touch the terminal, Anthropic has released an official desktop app called **Cowork** that can directly read and write to your Downloads and Documents folders—perfect for complete beginners.

---

## 2. Four Technical Fundamentals: You Don't Need to Write, But You Need to Read

The author emphasizes that non-technical users don't need to write code, but they should understand four basic concepts:

1. **Common frameworks**: Know what React, Vue, and Next.js solve
2. **Software basics**: Terminal commands, Git, VS Code, Chrome DevTools
3. **Core programming ideas**: Functions, variables/state, why code is split across multiple files
4. **Reading code and errors**: More useful than writing code—just throw error messages back at the AI

Spend a night or two going through freeCodeCamp or MDN basics, or watch the CS Crash Course on YouTube or Harvard's CS50. You don't need mastery—just basic awareness.

Recommended reading:
- *Inspired* — Product judgment
- *Linux and the Unix Philosophy* — Engineering thinking
- *Erta Listening* (左耳听风) — A programmer expert's perspective

---

## 3. What Claude Code Is Best At

After trying Cursor, Windsurf, and other tools, the author's primary tool remains Claude Code. Its core advantages:

- Strong model capability, looks at the entire project together
- Lives in the terminal—git, tests, scripts can all be called directly
- Essentially a general-purpose Agent—Anthropic's own non-engineering teams (sales, risk, finance) use it to process CRM data and customer emails

**Key criteria**: Two conditions must both be met—**clear goals** + **easily verifiable results**

Best use cases:
1. Building prototypes and internal tools
2. Processing CSVs, creating sales reports
3. Document work like extracting contract terms or comparing versions
4. Extracting information from links/PDFs from specific angles

> "How fast the model is doesn't matter—how accurate it does. If it finishes in 10 minutes but you spend 20 minutes debugging, it's worse than if it takes 20 minutes but the result is immediately usable."

---

## 4. Software for One: Build Software Just for You

Kevin Roose coined the concept of **software for one**—you don't need to build apps for millions of users; you can build tools just for yourself.

His examples: Stash (organizing links), LunchBox Buddy (preparing kids' lunchboxes). For non-technical people, it could be a tool that converts voice memos to meeting minutes, or a dashboard that reminds you of three things every day.

**A gradual progression**:

| Time | Task | Output |
|------|------|--------|
| Day 1 | Have it modify an existing Excel or Markdown file | Learn the basics |
| Week 1 | Build a single-page personal site or daily dashboard (15 minutes to set up) | A small showcaseable project |
| Month 1 | Turn one thing you do repeatedly 2-3 times a week into a command or page | A daily efficiency tool |
| Month 3 | Pick a software-for-one idea and build a tool just for you | A complete small tool |

---

## 5. CLAUDE.md: Write a Handoff Document for AI

CLAUDE.md sits in your project root. Claude Code reads it every time it starts. It's like a handoff document for a new colleague, except AI reads it thoroughly from scratch every time and follows it strictly.

**Three key principles**:

1. **Keep it short**: Under 150 lines—too long squeezes conversation space
2. **Use direct language**: Use imperative voice. "All comments must be in Chinese" works much better than "The team prefers Chinese comments"—soft language is less effective with AI
3. **Every rule must be verifiable**: Like "Functions over 50 lines must be split"

**Four most valuable rules**:
- Ask before acting
- Simplicity first
- Only touch what's asked
- Verify when done

**Key technique: Preserve during compression**

Adding a "preserve during compression" section at the end is critical. Claude Code automatically compresses long conversations, and **decision rationale is usually the first thing to go**. For example, if you said "use POST instead of GET because data volume is large," after compression only "use POST" remains—the reason is lost, and next time AI might give a completely different approach.

Recommended four-section structure:
- **Project background**: Tech stack, team members
- **Work rules**: Specific rules (Chinese comments, English variable names, explain before changing)
- **Prohibitions**: Don't refactor unprompted, don't delete files, don't install dependencies without confirmation
- **Preserve during compression** (priority): 1. Architecture decisions and rationale → 2. What files were changed and how → 3. Current progress → 4. Incomplete TODOs

---

## 6. Requirement Description: Every Extra Detail Prevents a Rework

> "Every extra specific detail prevents one rework."

**Vague version**: "Help me build a customer follow-up tool" → Needs rework

**Precise version**: Sales follow-up tool, single HTML file stored locally. Left side shows company name, next follow-up date, status; right side shows communication history, date, key points; top has three filters (status, time, keyword); data stored in localStorage, no backend.

→ The precise version can produce a usable result the same day

Tw93 cited an extreme example: yetone's macOS voice input tool requirements. Every specific detail prevents AI from guessing wrong:

| What was written | What happens without it |
|------------------|------------------------|
| macOS native + Swift | Might build a Python web app or Electron app |
| Default to Simplified Chinese zh-CN | Defaults to English, Chinese recognition rate is terrible |
| NSPanel + .hudWindow capsule window | Pops up a regular window, blocking the input field |
| LLM correction "extremely conservative" | Over-polishes, changes original meaning |

**Key points for business requirement writing**:
- Start by clarifying the problem and user
- Explicitly define scope (no login, no sharing, etc.)
- List edge cases separately
- Give numerical acceptance criteria (like "first screen loads in 1.5 seconds")
- Avoid vague words like "TBD"—Claude Code will guess when it sees placeholders, and it's usually not what you want

---

## 7. Plan and Auto Mode: Review the Plan Before Acting

**Plan mode** (press Shift+Tab twice): Lists the plan first, then executes. Like reviewing a proposal in a meeting before starting work. Good for complex tasks, prevents AI from overstepping.

The author learned this the hard way: when having AI refactor a login module, it deleted a utility class that would be needed later, costing half an hour to roll back. Since then, complex tasks always start with Plan mode.

**Auto mode** (press Shift+Tab to cycle): Safe operations run directly, risky operations ask first. Available on Max, Team, Enterprise; Pro not yet available.

When starting out, default to Auto mode.

---

## 8. Verification and Error Recovery: Three-Layer Verification + Root Cause Diagnosis

### Three-layer verification

1. **Did the command pass**: Build and tests run green
2. **Seeing is believing**: Open the page, check numbers, test key flows
3. **Check against the list**: Go through acceptance criteria one by one

### How to recover when something breaks

- **Git snapshot**: Before major changes, have AI run `git status` to see clearly, then commit a checkpoint. If it breaks, say "revert to the last checkpoint"
- **Undo last step**: Say "undo all changes just made" or press `/rewind`

### Avoid death loops: Diagnose root cause first

> "Don't touch the code until the root cause is clear."

**Death loop**: Error → Fix → New error → Fix again → After 4-5 rounds the problem becomes a mess

**Correct path**:
1. Have AI answer "which file, which line, why"
2. Vague answer → Keep investigating
3. Clear answer → Then fix
4. AI says "let me try changing X to see if it works" → Stop it, answer the root cause first

---

## 9. Advanced Tips: alias, opusplan, and Long Session Management

### alias quick start

```bash
alias c='CLAUDE_CODE_AUTO_COMPACT_WINDOW=400000 claude --dangerously-skip-permissions'
```

- `--dangerously-skip-permissions`: Skips all permission confirmations (not recommended for beginners)
- `CLAUDE_CODE_AUTO_COMPACT_WINDOW=400000`: Moves auto-compression point to 400k

### opusplan mode

Type `/model opusplan` (hidden command): Planning uses Opus, execution uses Sonnet—saves both money and time.

### Long session management

- **`/clear` when a task is done**: One session, one task—switching between unrelated tasks in the same context makes it increasingly confused
- **Have it write handoff notes before long tasks end**: `HANDOFF.md` with what was done, what didn't work, and what to do next
- **Pick it up the next day in a new session**

---

## 10. Waza Skill System: 8 Ready-to-Use Skills

Tw93 built 8 Skill tools:

| Skill | Use case |
|-------|----------|
| `/think` | Think about the technical approach before starting |
| `/design` | Design product-quality pages, rejecting AI template feel |
| `/hunt` | Debug problems—no code changes until root cause is clear |
| `/check` | Final gate before finishing—diff review |
| `/read` | Convert web pages/PDFs to clean Markdown |
| `/write` | Make expressions clearer |
| `/learn` | Research workflow from collecting materials to writing articles |
| `/health` | Health check for CLAUDE.md and rules |

Install: `npx skills add tw93/Waza -g`

Special recommendation: `/design` for product/business/ops—screenshot + `/design` makes AI first ask about target users, vibe, styles you dislike, micro-interactions, rather than just spitting out an "AI template-looking" page.

**Three common types of custom Skills**:

1. **Workflow type**: Package fixed steps (like organizing meeting notes)
2. **Checklist type**: Run through before going live to avoid missing items
3. **Domain expert type**: Codify judgment frameworks (like production issue investigation)

**Writing tips**:
- description writes trigger conditions, not feature descriptions: "Call when you have raw meeting notes to organize" is much more accurate than "Organize meeting recordings into structured weekly reports"
- One Skill does one thing only

---

## 11. Other Useful Tools

### Kami: AI Typesetting Tool

Install: `npx skills add tw93/Kami -g`

8 templates (one-pager, portfolio, slides, resume, etc.), consistent style. Use cases: Meeting notes → brief, project progress → one-pager, personal experience → resume.

### OpenCLI: Turn Web Actions into Commands

Website: opencli.info

Built-in CLI adapters for Xiaohongshu, Zhihu, Twitter/X, Bilibili, and more—turns web actions into commands. Use cases include scraping Xiaohongshu research data, auto-compiling multi-platform sentiment into daily reports.

### Claude Design: Prototypes Without Code

Website: claude.ai/design

Launched by Anthropic in April 2026. Upload screenshots or documents to generate interactive prototypes, slides, or landing pages. Product managers can use it to draw prototypes for review, then hand them to Claude Code to turn into code.

---

## 12. Small Habits After Getting Comfortable

1. **Screenshots are faster than text**: Drop an image to describe interface issues—layout, colors, hierarchy all come through
2. **Break tasks into small pieces**: Tasks that can be described in one sentence almost never go wrong
3. **Restart when the conversation goes off track**: Clearing context and starting over is faster than trying to correct it repeatedly
4. **Memory remembers preferences across projects**: Say "remember I like to see the plan first" and it's permanent
5. **Double-tap ESC to edit the last message**: No need to restart the session

---

## 13. Security Habits

1. In CLAUDE.md, require explaining what will be done before every execution
2. Ask about unfamiliar commands before confirming
3. Don't practice on production environments
4. Store API keys in environment variables or `.env` files, never paste them into chat
5. For features involving login, payments, or personal information, use services like Clerk or Stripe rather than building from scratch

---

## Final Thoughts

After reading Tw93's article, my biggest takeaway is: **The barrier to AI Coding really isn't that high.**

Many people feel intimidated by terminals and think command lines are exclusive to programmers. But in reality, Claude Code is essentially a "very blunt but technically brilliant programmer"—you just need to explain the problem clearly and set good acceptance criteria, and it does the work.

From modifying an Excel file, to building a small tool, to automating weekly repetitive work, everyone can find their own "software for one."

The key isn't whether you can write code—it's whether you can explain the problem clearly.

---

**Further reading**:
- [AI Coding: A Practical Guide for Non-Engineers](https://tw93.fun/2026-04-26/ai-coding.html)
- [The Claude Code You Don't Know: Architecture, Governance, and Engineering Practice](https://tw93.fun/2026-03-12/claude.html)
- [The Agent You Don't Know: Principles, Architecture, and Engineering Practice](https://tw93.fun/2026-03-21/agent.html)
- [Claude Code Official Documentation](https://code.claude.com/docs/en/overview)
