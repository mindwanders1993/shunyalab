---
name: commit
description: Use this skill after the build phase is approved. It prepares a git diff, drafts a conventional commit, and commits the code upon user approval.
---

# Phase 3: Verification & Commit (`commit`)

When activated, execute these steps:

1. **Review**: Run `git status` and `git diff` to review all pending changes. Ensure no scratch files, test artifacts, or unrequested modifications are included.
2. **Draft Message**: Create a Conventional Commit message following the format:
   `type(scope): concise imperative description`
   - Examples: `feat(portfolio): add AI pipeline case study`, `fix(nav): adjust backdrop blur on mobile`, `style(hero): update Teal accent gradient`
3. **Pause and Prompt**:
   Output the following to the user and WAIT for their response:
   > "Please review the proposed commit.
   > Message: `<proposed-message>`
   > Options:
   > [1] Approve (Commit changes)
   > [2] Edit Message"
4. **Execute**: If approved, run `git add .` and `git commit -m "<message>"`.
5. **Self-Learning Prompt**:
   Output:
   > "Commit successful. Options:
   > [1] Proceed to PR
   > [2] Done (Stay on branch)"
