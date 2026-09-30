---
name: skillopt
description: >-
  SkillOpt: Workflow and optimization guidelines for creating, refining, and auditing high-performance,
  visually stunning React + Tailwind CSS UI/UX components in ui_ux_connect_new.
---

# SkillOpt: UI/UX Optimization & Component Design Workflow

SkillOpt provides a structured optimization workflow for pair programming, auditing, and building state-of-the-art UI/UX components for `ui_ux_connect_new`.

---

## 🎯 Skill Objectives
1. **Visual & Aesthetic Excellence**: Wow users with modern glassmorphism, harmonious color palettes, subtle micro-interactions, and fluid responsive layouts.
2. **Strict Component Reuse**: Audit existing components in `src/components/` before writing new ones; extend via props and composition slots.
3. **Tailwind CSS Utility Efficiency**: Enforce clean utility class usage combined with `clsx` and `tailwind-merge` (`cn` helper).
4. **Accessibility & Semantics**: Ensure screen-reader friendly markup, proper ARIA tags, and keyboard focus states.

---

## 🛠️ Step-by-Step Optimization Workflow

### Phase 1: Pre-Implementation Audit
Before adding or modifying any UI feature:
1. Search `src/components/ui/`, `src/components/layout/`, and `src/components/<feature>/` for reusable primitives.
2. Check if props (`variant`, `size`, `className`, `children`, `onAction`) can be added to an existing component rather than creating a duplicate.
3. Verify icon and asset paths in `src/assets/`.

### Phase 2: Design & Aesthetics Enhancement
- **Color Harmony**: Use deep Slate/Indigo darks (`bg-slate-900`, `text-slate-100`) or clean crisp lights (`bg-[#faf8ff]`, `#00677d` primary teal).
- **Glassmorphism & Elevation**: Apply `backdrop-blur-xl`, semi-transparent backgrounds (`bg-white/95`), and soft multi-layered shadows (`shadow-[0_-2px_12px_rgba(0,0,0,0.05)]`).
- **Interactive Feedback**: Add hover scale transforms (`hover:scale-105`), active click effects (`active:scale-95`), and smooth transitions (`transition-all duration-200`).

### Phase 3: Component Construction & Prop API
- Always accept a `className` prop on top-level component containers.
- Merge classes using the `cn` helper utility:
  ```jsx
  import { cn } from '../../utils/cn'; // or clsx + tailwind-merge
  ```
- Forward standard HTML element attributes.

### Phase 4: Build Verification & Testing
- Run `npm run build` after making component structural or layout changes.
- Ensure zero lint/syntax warnings and clean module resolution.

---

## 📋 Checklist for SkillOpt Evaluation
- [ ] Checked for existing components to prevent redundancy.
- [ ] Used semantic HTML tags (`<nav>`, `<header>`, `<main>`, `<button>`).
- [ ] Used Tailwind utilities instead of inline CSS styles.
- [ ] Provided smooth hover, focus, and active states.
- [ ] Verified build integrity with `npm run build`.
