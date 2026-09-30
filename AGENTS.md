# React & Tailwind CSS Development Guidelines

This file defines guidelines and constraints for AI agents and developers working on React applications using Tailwind CSS in this project.

---

## 1. Core Principles

### ♻️ Strict Component Reuse Policy (DO NOT Create Redundant Components)
Before writing or generating a new component, follow this mandatory workflow:
1. **Audit Existing Components**: Search `src/components/` (and subdirectories) to verify if an existing component can fulfill the requirements.
2. **Extend via Props**: Prefer adding props, variants, sizes, or composition slots to existing components rather than cloning or creating new single-use components.
3. **Compose Existing Primitives**: Build new feature views by composing existing base UI components (`Button`, `Input`, `Modal`, `Card`, `Badge`, `Avatar`, etc.).
4. **When to Create a New Component**:
   - Only create a new component if no suitable component exists AND the UI element has a distinct, reusable responsibility.
   - Always place generic UI elements in `src/components/ui/` and domain/feature-specific elements in `src/components/<feature>/`.

---

## 2. Tailwind CSS Rules

- **Utility-First Styling**: Use Tailwind CSS utility classes exclusively. Avoid custom CSS files or inline `style={...}` objects unless handling purely dynamic computed values (e.g., dynamic pixel positions).
- **Class Merging & Conditionals**: Use `clsx` and `tailwind-merge` (or standard conditional template literals) to combine default component classes with custom `className` props safely.
  ```jsx
  import { clsx } from 'clsx';
  import { twMerge } from 'tailwind-merge';

  export function cn(...inputs) {
    return twMerge(clsx(inputs));
  }
  ```
- **Design System Consistency**:
  - **Colors**: Use Tailwind theme colors (`slate`, `indigo`, `emerald`, `amber`, `rose`, etc.) or project-defined CSS custom properties configured in `tailwind.config.js`.
  - **Spacing & Layout**: Maintain uniform padding (`p-4`, `px-6`), margins (`mb-4`, `space-y-4`), and grid/flex layout patterns.
  - **Responsive Design**: Mobile-first design using Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`).
  - **Interactive States**: Always include appropriate hover (`hover:bg-...`), focus (`focus:ring-2 focus:outline-none`), active, and disabled (`disabled:opacity-50`) utility classes.

---

## 3. Component Architecture & React Guidelines

- **Functional Components**: Write pure, functional React components using hooks.
- **Prop Interface & Customizability**:
  - Accept a `className` prop on top-level component elements to allow layout customization from parent callers.
  - Forward standard HTML element props (e.g., `...props` or `React.ComponentPropsWithoutRef<'button'>`).
- **State Management**: Keep state as local as possible. Lift state up only when siblings need shared access.
- **Accessibility (a11y)**:
  - Use semantic HTML tags (`<button>`, `<header>`, `<main>`, `<nav>`, `<aside>`, `<section>`).
  - Provide proper `aria-*` attributes and `alt` text for images.
  - Ensure focus rings and keyboard navigation work cleanly.

---

## 4. File & Folder Structure

```
src/
├── components/
│   ├── ui/          # Generic reusable base UI primitives (Button, Modal, Input, Card, etc.)
│   ├── layout/      # Layout components (Navbar, Sidebar, Footer, Container)
│   └── <feature>/   # Domain/feature components (e.g., auth, dashboard, profile)
├── hooks/           # Custom React hooks
├── utils/           # Utility functions (e.g., cn helpers, formatters)
└── assets/          # Static images, icons, and SVG assets
```

---

## 5. Agent Action Checklist

When asked to implement a new UI feature or page:
- [ ] Inspect existing component hierarchy in `src/components/`.
- [ ] Reuse existing base components (`Button`, `Input`, `Card`, etc.) instead of re-implementing HTML tags styled with raw Tailwind classes everywhere.
- [ ] Apply Tailwind CSS classes for layout, typography, and responsive adjustments.
- [ ] Verify clean prop handling and accessible HTML semantics.
