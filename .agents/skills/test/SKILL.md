---
name: test
description: Dedicated QA, build validation, and Docker verification skill for ShunyaLabs.
---

# ShunyaLabs Test & QA Orchestration Skill (`test`)

## 🎯 Purpose
Run and diagnose the full ShunyaLabs verification pipeline before shipping code.

All commands run from the project root: `/Users/mrrobot/Desktop/Projects/shunyalabs`.

---

## 🧪 1. Local Next.js Build & Lint Verification
```bash
pnpm install
pnpm run build
```

---

## 🐳 2. Docker Stack Verification
```bash
# Rebuild and run container
docker compose up -d --build

# Verify HTTP 200 response
curl -sI http://localhost:3010 | head -n 5

# Verify contact endpoint
curl -s -X POST http://localhost:3010/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Testing QA"}'
```

---

## 📋 Quality Checklist
- [ ] Next.js production build passes with 0 type errors.
- [ ] Docker container is running and healthy on port 3010.
- [ ] Contact form API returns `{"success": true}`.
- [ ] No unrequested or leftover temporary files.
