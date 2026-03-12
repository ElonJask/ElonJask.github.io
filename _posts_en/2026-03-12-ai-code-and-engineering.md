---
layout: post
title: "As AI Gets Better at Writing Code, The Scarce Skill Is Explaining Direction Clearly"
date: 2026-03-12 10:30:00 +0800
summary: "Code is getting cheaper. Software engineering is not disappearing. What becomes scarce is the ability to define the problem, build the validation loop, and manage AI with clear direction."
categories: Tech
topic: tech-notes
tags: [AI, software-engineering, agents, developer-productivity]
lang: en-US
translation_key: ai-code-and-engineering-2026
---

Over the past two months, one idea has become harder and harder to ignore:

**Writing code is rapidly losing its old status as a scarce craft.**

That does not mean engineers are disappearing. It does not mean software matters less. If anything, software will become even more abundant, code will become cheaper, and the expensive part will shift away from typing implementation by hand toward defining problems, setting constraints, and validating outcomes.

In other words, AI is eating the most scalable part of programming, while amplifying the hardest part of software engineering.

That is likely the real shift of the next few years.

---

## 1. There Will Be More Code, But “Being Able to Code” Will Not Be Enough

For a long time, we judged engineers by a familiar set of visible strengths:

- how many languages they knew
- how fast they could write code
- whether they could build a feature alone
- how quickly they could start implementation after reading a requirement

Those skills still matter. But their relative value is starting to fall.

The reason is not mysterious. In the past, implementation capacity was scarce. Turning an idea into working software required a lot of manual translation. Now more of that translation layer can be delegated to agents. You describe the task, provide context, point out mistakes, and the system can keep generating implementation, tests, refactors, or even PRs.

So what changes?

It means “can this person write the code?” is moving from a differentiator to infrastructure.

Teams will increasingly need fewer people whose only advantage is shipping implementation fast, and more people who can answer questions like:

- Should this feature exist at all?
- What should be built first?
- How should the task be decomposed for an agent?
- What counts as success?
- If something breaks, is the problem in the model, the workflow, or the architecture?

Code still matters. But code itself is no longer the scarcest asset.

---

## 2. AI Is Best at Constrained Acceleration, Not Freeform Creation

A lot of disappointment with AI coding comes from giving it the wrong kind of problem.

People ask agents to:

- invent a product from scratch
- explore vague business logic with no clear boundary
- take over a messy legacy system with no tests and no documentation
- complete a large system from one sentence of intent

That is exactly how you get bad results.

The pattern that now seems most important to me is this:

**AI coding works best not when it is asked to invent everything, but when it is asked to move quickly inside a clear set of constraints.**

What does that require? At least four things:

### 1. A Reference Point
An existing implementation, an API spec, a prior version of the codebase, or even a solid pseudocode sketch can dramatically improve agent performance.

### 2. Automatic Validation
Tests, type checks, lint rules, CI, browser checks — these are not decorations. They are the guardrails that let agents correct themselves.

### 3. An Architectural Plan
Instead of throwing a blob of requirements at the model, you define module boundaries, execution order, and interface constraints first.

### 4. Ongoing Human Direction
Agents are productive, but they do not have real ownership. They can be confidently wrong and continue down a bad path for a very long time. Someone still needs to hold the wheel.

That is why I increasingly see agents as a very high-output execution layer, not as a substitute for product or engineering judgment.

They can move fast. But humans still need to decide where the road goes.

---

## 3. Software Engineering Is Not Disappearing. It Is Moving Back Into Focus

The biggest mistake in many discussions about AI coding is treating “writing code” and “software engineering” as the same thing.

They are not.

Writing code is closer to construction.
Software engineering is closer to:

- clarifying requirements
- defining boundaries
- making architectural decisions
- controlling quality
- isolating risk
- deciding maintainability trade-offs
- owning failures when systems go wrong

In the past, construction itself was expensive enough that people often confused it with the core value of engineering. Once construction becomes cheaper, the rest of the discipline comes back into focus.

That also explains a common frustration:

> If AI can already write so much code, why do teams not feel dramatically lighter?

Because removing the implementation bottleneck does not automatically solve the harder problems:

- whether the direction is right
- whether the code is reliable
- whether the system is maintainable
- whether the team is optimizing the right thing

And in some cases, those problems get worse faster.

If a team used to ship 3 changes a week and now ships 30, weak tests, stale documentation, shaky architecture, and hidden technical debt all become visible much sooner.

AI will not automatically rescue a team with weak engineering practices. Often it just exposes the weakness earlier.

---

## 4. The Scarce Skill Is Moving From Implementation to Orchestration

I think one shift will become increasingly obvious:

**The engineer’s role will gradually move from code implementer to problem orchestrator.**

“Orchestration” here is not a fashionable buzzword. It is a concrete bundle of skills:

- breaking fuzzy requests into executable tasks
- recognizing which tasks fit agents and which do not
- providing enough context without flooding the system
- designing feedback loops for self-correction
- making decisions at key checkpoints instead of drowning in line-by-line supervision

Put simply, the strongest engineers of the next few years may not be the ones who most enjoy typing code by hand. They may be the ones who are best at organizing a full human-plus-agent workflow.

That sounds a little like management, but it is not exactly traditional management.

It is more like this:

> You are managing a digital team that can write code, make mistakes, hallucinate, and still deliver enormous execution leverage.

If all you can do is implement by yourself, but you cannot decompose problems, set standards, or evaluate outcomes, your advantage gets thinner.

If you can make the problem clearer, the constraints tighter, and the acceptance criteria sharper, the amount of useful execution you can unlock gets much larger.

---

## 5. What Changes Most for Ordinary Engineers?

The most practical shift is probably not “everyone will be replaced.” It is that the baseline expectation for engineers will rise.

Skills that once belonged mostly to senior engineers are moving earlier in the stack:

- defining task boundaries independently
- reading and maintaining test systems
- making small but correct architectural decisions
- spotting plausible but wrong AI output
- making trade-offs between speed and quality

That makes life harder for juniors, and also for people who are used to seeing themselves purely as ticket executors.

But it is not entirely bad news.

If AI absorbs more of the mechanical work, human growth may also be pulled forward. People may be forced earlier into system thinking, into the overlap between product and engineering, and into understanding why thinking clearly matters more than merely shipping implementation.

The real danger is not “not knowing how to prompt.”

The real danger is reaching the AI era and still seeing yourself as someone who receives requirements, writes implementation, and closes tickets.

That role may not disappear tomorrow, but its bargaining power will likely keep declining.

---

## 6. Final Note

My view is fairly simple.

AI will not make software engineering disappear.

It will make code cheaper and engineering judgment more expensive.

Code will keep exploding in volume. Software will keep multiplying. What will matter is not who can type more lines, but who can keep direction clear inside a much higher-output system.

So if we ask what kind of engineer becomes truly scarce in the AI era, my answer is straightforward:

**Not the person who can write the most code, but the person who can explain the problem clearly, build the right constraints, and verify the result with discipline.**

That kind of engineer does not get cheaper. It gets more valuable.
