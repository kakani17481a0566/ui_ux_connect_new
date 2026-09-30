# UI/UX Optimization & Responsive Design Rules

These rules enforce high visual standards, responsive layout conventions, and performance guidelines across all UI components in `ui_ux_connect_new`.

---

## 1. Visual & Aesthetic Standards

- **Color Palette & Branding**:
  - Primary Accent Teal: `#00677d`
  - Portal Background Neutral: `#faf8ff` / `bg-slate-100`
  - Dark Mode & Overlay Neutrals: `slate-900`, `slate-800`, `slate-700`
  - Card/Modal Surfaces: `bg-white` with soft border `border-slate-200/80` or `border-slate-100`

- **Elevations & Backdrop Effects**:
  - Floating headers/footers/navbars MUST use `backdrop-blur-xl` with `bg-white/95` or `bg-slate-900/90`.
  - Shadows should use subtle multi-step shadows (`shadow-xl`, `shadow-md`, or `shadow-[0_-2px_12px_rgba(0,0,0,0.05)]`).

- **Typography & Icons**:
  - Use clean sans-serif typography (`font-sans` / `font-manrope`).
  - Icons MUST be crisp PNG/SVG assets or Lucide React icons with consistent sizing (`h-5 w-5`, `h-11 w-auto`).

---

## 2. Responsive Layout Conventions

- **Mobile First Container**:
  - Maximum container width on mobile/tablet viewports: `max-w-md sm:max-w-xl`.
  - Always center content using `mx-auto` for fixed or relative layouts.
  - Padding: `px-4 sm:px-6 py-4`.

- **Touch & Click Targets**:
  - Interactive buttons and navigation items MUST have minimum target sizes (`min-w-[44px]` or `min-w-[64px]` and `h-12`/`h-14`).
  - Provide visual click/hover feedback (`transition-all active:scale-95 hover:opacity-90`).

---

## 3. Component Architecture & State Guidelines

- **Component Hierarchy**:
  - Place base UI primitives (Button, Card, Input, Modal, Badge, Avatar) in `src/components/ui/`.
  - Place navigation & structural containers (PortalHeader, BottomNav) in `src/components/layout/`.
  - Place view screens and domain features in `src/components/portal/`, `src/components/dashboard/`, or `src/components/auth/`.

- **Prop & Class Merging**:
  - Always support custom `className` props.
  - Combine classes safely with standard utility merged helpers (`clsx` + `tailwind-merge`).

---

## 4. Verification & QA Rule

- Every new component or modified UI screen MUST be verified via `npm run build` to confirm zero build errors or broken imports before finalizing tasks.
