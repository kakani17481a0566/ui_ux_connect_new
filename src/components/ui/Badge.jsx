import React from 'react';
import { cn } from './Button';

export const Badge = ({
  children,
  variant = 'primary',
  dot = false,
  className
}) => {
  const variants = {
    primary: "bg-surface-container-high text-secondary font-semibold",
    active: "bg-primary/10 text-primary border border-primary/20 font-bold",
    sandbox: "bg-amber-500/10 text-amber-700 border border-amber-500/20 font-bold",
    success: "bg-emerald-500/10 text-emerald-700 font-bold"
  };

  return (
    <div className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-manrope uppercase tracking-wider", variants[variant], className)}>
      {dot && <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>}
      {children}
    </div>
  );
};
