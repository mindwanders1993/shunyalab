---
name: plan
description: Use this skill to initiate a new feature, UI update, or refactor for ShunyaLabs. It analyzes the codebase and creates a surgical implementation plan for user approval.
---

# Phase 1: Context & Plan Engineering (`plan`)

When activated, execute these steps:

1. **Understand Goal**: Read the user's request. Ask clarifying questions if the goal or design requirements are ambiguous.
2. **Context Gathering**: View relevant files in `src/app/`, `src/components/`, or `docs/` to understand the component hierarchy and Tailwind design tokens.
3. **Draft Plan**: Create a markdown artifact outlining:
   - **Goal**: One-sentence summary of what will be built or refactored.
   - **Branch**: Proposed branch name (e.g., `feat/<name>` or `fix/<name>`).
   - **Files to Modify**: Exact list of files.
   - **Karpathy Check**: Confirm this is the simplest viable approach (Surgical Changes, Simplicity First).
4. **Pause and Prompt**:
   Output the following to the user and WAIT for their response:
   > "Here is the implementation plan. Options:
   > [1] Approve (Proceed to Build)
   > [2] Ideate (Modify Plan)
   > [3] Reject"
