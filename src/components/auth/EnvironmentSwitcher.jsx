import React from 'react';
import { cn } from '../ui/Button';

export const EnvironmentSwitcher = ({ environment, onSwitch }) => {
  return (
    <div className="w-full bg-surface-container-low p-1 rounded-lg flex items-center justify-between gap-1">
      <button
        type="button"
        onClick={() => onSwitch('production')}
        className={cn(
          "flex-1 py-1.5 rounded-md text-xs font-manrope font-semibold transition-all flex items-center justify-center gap-1.5",
          environment === 'production'
            ? "bg-surface-container-lowest text-primary shadow-sm font-bold"
            : "text-on-surface-variant font-medium hover:text-on-surface"
        )}
      >
        <span className="material-symbols-outlined text-[16px]">verified_user</span>
        <span>Production</span>
      </button>

      <button
        type="button"
        onClick={() => onSwitch('sandbox')}
        className={cn(
          "flex-1 py-1.5 rounded-md text-xs font-manrope font-semibold transition-all flex items-center justify-center gap-1.5",
          environment === 'sandbox'
            ? "bg-surface-container-lowest text-secondary shadow-sm font-bold"
            : "text-on-surface-variant font-medium hover:text-on-surface"
        )}
      >
        <span className="material-symbols-outlined text-[16px]">science</span>
        <span>Sandbox Mode</span>
      </button>
    </div>
  );
};
