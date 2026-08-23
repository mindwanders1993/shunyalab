---
name: build
description: Use this skill after a plan is approved. It executes the Loop Engineering process (Build -> Test -> Reflect) for ShunyaLabs until code compiles cleanly and quality gates pass 100%.
---

# Phase 2: Loop Engineering (`build`)

When activated, execute these steps iteratively until successful:

1. **Build**: Implement the agreed-upon plan using surgical code edits in `src/`.
2. **Test (Quality Gate)**: Run from the project root (`/Users/mrrobot/Desktop/Projects/shunyalabs`):
   ```bash
   pnpm run build
   ```
   - Verifies Next.js App Router static compilation and dynamic route generation.
   - Ensures TypeScript type check (`npx tsc --noEmit`) passes with 0 errors.
   - Ensures zero broken imports or missing component exports.

3. **Reflect**:
   - If build **FAILS**: Read the error message, identify the root cause, fix the component/style, and re-test.
   - If build **PASSES**: Proceed to Step 4.

4. **Context Cleanup**: Summarize the changes made so far to consolidate context.

5. **Pause and Prompt**:
   Output the following to the user and WAIT for their response:
   > "Build and quality gates passed 100%. Options:
   > [1] Approve (Proceed to Commit)
   > [2] Refactor Code
   > [3] Test Docker Container"
