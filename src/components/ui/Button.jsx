import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Reusable Button component with variant and loading state support
 */
export const Button = React.forwardRef(({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  loadingText,
  disabled,
  type = 'button',
  ...props
}, ref) => {
  const baseStyles = "rounded-full font-bold shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-primary-container disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-primary-container text-on-primary hover:opacity-95",
    secondary: "bg-secondary text-on-secondary hover:bg-secondary/90",
    outline: "border border-outline/30 bg-surface-container-lowest text-on-surface hover:bg-surface-container-low",
    ghost: "bg-transparent text-primary hover:bg-surface-container-high"
  };

  const sizes = {
    sm: "py-1.5 px-4 text-xs",
    md: "py-3 px-6 text-sm",
    lg: "py-3.5 px-8 text-base"
  };

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
          <span>{loadingText || children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
});

Button.displayName = 'Button';
