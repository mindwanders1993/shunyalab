---
name: uat
description: User Acceptance Testing (UAT) manual testing guide and visual verification protocol for ShunyaLabs.
---

# ShunyaLabs User Acceptance Testing (`uat`)

## 🎯 Verification Matrix

### 1. Visual & Theme Inspection
- **Dark Mode Consistency:** Verify dark background (`#09090b`), Teal gradient accents (`#14b8a6`), and glassmorphism borders (`border-zinc-800`).
- **Typography:** Ensure font hierarchy from display headers (`font-extrabold`) to mono badges (`font-mono`).
- **Responsive Layout:** Check desktop (1280px+), tablet (768px), and mobile (375px) breakpoints.

### 2. Navigation & Anchor Links
- [ ] Navbar brand logo `[ 0 ]` links to top `/`.
- [ ] Navbar links scroll smoothly to `#philosophy`, `#services`, `#portfolio`, `#team`, `#contact`.
- [ ] Mobile hamburger menu toggles open/close properly.

### 3. Contact & WhatsApp Funnel
- [ ] Form submission submits data to `/api/contact` and shows confirmation message.
- [ ] WhatsApp CTA opens WhatsApp chat prefilled with project inquiry details.

### 4. External Outbound Links
- [ ] Hopping Cars case study link opens [https://hoppingcars.com/car-painting-begur-bangalore.html](https://hoppingcars.com/car-painting-begur-bangalore.html).
- [ ] KaizenCodes case study link opens [https://dev.kaizencodes.com](https://dev.kaizencodes.com).
- [ ] Team member LinkedIn links open in a new tab with `rel="noopener noreferrer"`.
