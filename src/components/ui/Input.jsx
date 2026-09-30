import React, { useState } from 'react';
import { cn } from './Button';

/**
 * Reusable Input component supporting icons, password visibility toggle, labels & error messages
 */
export const Input = React.forwardRef(({
  label,
  id,
  type = 'text',
  icon,
  imageIcon,
  rightElement,
  error,
  actionLink,
  className,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  const currentType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="flex flex-col gap-1 w-full">
      {(label || actionLink) && (
        <div className="flex justify-between items-center">
          {label && (
            <label htmlFor={id} className="font-manrope text-xs font-semibold text-on-surface-variant">
              {label}
            </label>
          )}
          {actionLink}
        </div>
      )}

      <div className="relative flex items-center w-full">
        {imageIcon ? (
          <img src={imageIcon} alt="" className="absolute left-3 w-6 h-6 object-contain pointer-events-none" />
        ) : icon ? (
          <span className="absolute left-3.5 text-outline pointer-events-none material-symbols-outlined text-[20px]">
            {icon}
          </span>
        ) : null}

        <input
          ref={ref}
          id={id}
          type={currentType}
          className={cn(
            "w-full h-11 bg-surface-container-low rounded-lg text-sm text-on-surface placeholder:text-outline/70 transition-all",
            "focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container",
            (icon || imageIcon) ? "pl-11" : "pl-3.5",
            (isPassword || rightElement) ? "pr-11" : "pr-3.5",
            error && "ring-2 ring-error/50 bg-error/5",
            className
          )}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            aria-label="Toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 text-outline hover:text-on-surface transition-colors p-1 flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-[20px]">
              {showPassword ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        )}

        {!isPassword && rightElement && (
          <div className="absolute right-3 flex items-center justify-center">
            {rightElement}
          </div>
        )}
      </div>

      {error && (
        <span className="text-xs text-error font-medium mt-0.5">{error}</span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
