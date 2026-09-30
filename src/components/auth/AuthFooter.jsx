import React from 'react';

export const AuthFooter = () => {
  return (
    <div className="flex flex-col gap-4 text-center mt-2">
      {/* SSO Divider */}
      <div className="relative flex items-center justify-center my-1">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-outline/20"></div>
        </div>
        <span className="relative px-3 bg-surface-container-lowest text-[11px] font-manrope font-semibold text-outline uppercase tracking-wider">
          Or Access Via
        </span>
      </div>

      {/* SSO Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => alert('Redirecting to Clever School District SSO...')}
          className="py-2.5 px-3 rounded-lg border border-outline/20 bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 text-xs font-semibold text-on-surface"
        >
          <span className="material-symbols-outlined text-primary text-[18px]">school</span>
          <span>District SSO</span>
        </button>
        <button
          type="button"
          onClick={() => alert('Redirecting to Google Workspace for Education...')}
          className="py-2.5 px-3 rounded-lg border border-outline/20 bg-surface-container-low hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 text-xs font-semibold text-on-surface"
        >
          <span className="material-symbols-outlined text-secondary text-[18px]">account_balance</span>
          <span>Google Ed SSO</span>
        </button>
      </div>

      {/* Security & Support Info */}
      <div className="flex items-center justify-between text-[11px] text-outline font-manrope pt-2 border-t border-outline/10">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px] text-primary">lock</span>
          256-bit Encrypted Portal
        </span>
        <a href="#support" onClick={(e) => { e.preventDefault(); alert('Parent Support Hotline: support@neuropi.edu | 1-800-555-NEURO'); }} className="hover:text-primary transition-colors font-medium">
          Need Help?
        </a>
      </div>
    </div>
  );
};
