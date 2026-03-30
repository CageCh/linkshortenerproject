# Agent Instructions — LinkShortener Project

Purpose: provide clear, project-specific rules and conventions for LLM agents
working in this repository. Individual agent-role documents live under `/docs`.

Summary
- Project: Next.js + TypeScript + Drizzle (lightweight link shortener)
- Location for per-agent docs: `/docs/*.md`
- It is incredibly important: ALWAYS read the relevant individual instruction files in the /docs directory BEFORE generating ANY code. These per-task files contain project-specific rules, constraints, and guidance that must be followed for every change.

Core Principles
- Be precise: make the smallest focused change that accomplishes the task.
- Preserve style: follow existing code patterns (naming, indentation, imports).
- Non-invasive edits: avoid unrelated refactors or formatting changes.
- Test locally where feasible: run the project's existing scripts before claiming completion.

Agent Role and Behavior
- Treat this repository as authoritative: inspect files before editing.
- When uncertain, ask a clarification question rather than guessing.
- For multi-step tasks, always create and use the repository TODO list via the
	`manage_todo_list` tool, and mark steps as you complete them.

Required Tooling Rules
- Use the `apply_patch` tool to create or modify repository files. Keep patches
	minimal and self-contained (one logical change per patch when possible).
- After applying edits, run the repository error/lint checks using available
	tools (`get_errors`, npm scripts) and fix only errors introduced by your changes.
- When creating new docs, add them under `/docs` and add a brief pointer in this
	file if the change is significant.

Coding Standards (project-specific)
- Language: TypeScript + React (Next.js). Prefer explicit types for exported
	functions and public interfaces.
- Naming: use descriptive names (avoid one-letter variables), PascalCase for
	React components, camelCase for functions/variables.
- Files: keep exports default only when the module naturally has a single
	primary export (React pages/components). Prefer named exports for utilities.
- Formatting: follow the project's existing style (do not reformat unrelated files).
- Comments: add short rationales for non-obvious changes; avoid noisy comments.


Safety & Content Restrictions
- Do not produce or incorporate harmful, illegal, or disallowed content. If a
	user requests disallowed content, respond with: "Sorry, I can't assist with that."

How to Report Completion
- When a task is complete, update the `manage_todo_list` entries and provide
	a concise summary of changes, files touched, and verification steps taken.

Common Commands
- Start dev server: `npm run dev`
- Run lint/typecheck: `npm run lint` / `npm run typecheck` (if present)

Where to Find More
- Per-agent specifics and templates: `/docs/agent-instructions-template.md` and
	`/docs/` (examples included).
- Auth rules: `/docs/clerk-auth.md`
 - UI rules: `/docs/shadcn-ui.md`

Contact
- If an agent needs broader permission or guidance, leave a short note in the
	relevant PR or open an issue describing the proposed change and its rationale.

