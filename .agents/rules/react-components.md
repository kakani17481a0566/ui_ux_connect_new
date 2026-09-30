# React Component Reuse & Tailwind CSS Rules

- **Component Reuse**: Never create duplicate React components if a functional or base component already exists in `src/components/`. Extend existing components via props (`variant`, `size`, `className`, `children`) or composition.
- **Tailwind CSS Utility Usage**: Style all UI elements using standard Tailwind CSS utility classes. Avoid creating standalone `.css` stylesheets for component styling.
- **Dynamic Classes**: Combine utility classes safely using `clsx` and `tailwind-merge` (`cn` helper).
- **Component Placement**:
  - `src/components/ui/` for generic design system components (Button, Input, Modal, Badge).
  - `src/components/layout/` for structural components (Header, Sidebar, Container).
  - `src/components/<feature>/` for feature-specific modules.
