# shadcn UI Usage Guidelines

Purpose: Ensure consistent UI implementation across the app using shadcn UI.

Core Rule
- Always use shadcn UI components for all UI elements in this repository.
- Do NOT create custom UI components unless explicitly approved in writing.

Implementation Notes
- Use the existing shadcn component primitives and patterns (forms, buttons,
  inputs, dialogs, navigation, etc.).
- Prefer composition of shadcn components and utility classes over custom
  components or bespoke styling.
- When a new visual pattern is required, implement it by assembling shadcn
  components or extending theme tokens, not by introducing new bespoke
  components.

Exceptions
- If a genuine gap in shadcn makes a feature impossible, open an issue and
  request approval before adding custom components. Document the rationale
  and intended lifetime of the custom implementation.

Checklist for PRs
- Confirm all new UI elements use shadcn components.
- Remove or explain any custom components in the PR description.
- Include screenshots when appearance differs from existing patterns.

Contact
- See the project agent docs for more rules: /docs/AGENTS.md
