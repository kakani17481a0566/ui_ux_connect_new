import React from 'react';
import logoImg from '../../assets/neuropi-logo.png';
import bellIcon from '../../assets/icons/notification_bell_icon.png';

export const PortalHeader = ({ user, onLogout, title, showBack, onBack }) => {
  const initial = (user?.firstName || 'C').charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 w-full z-50 bg-[#faf8ff]/95 backdrop-blur-xl border-b border-slate-200/60 shadow-xs">
      <div className="h-14 max-w-md sm:max-w-xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {showBack && (
            <button
              onClick={onBack}
              className="p-1 -ml-1 rounded-full text-slate-600 hover:text-[#00677d] transition-colors"
              title="Back to Home"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">arrow_back</span>
            </button>
          )}
          {/* Unified Brand Logo */}
          <img src={logoImg} alt="NeuroPi Educational Experience" className="h-9 sm:h-10 w-auto object-contain select-none" />
          {title && (
            <span className="hidden xs:inline-block text-xs font-bold text-[#00677d] border-l border-slate-300 pl-2 ml-1">
              {title}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Notifications"
            onClick={() => alert("Notifications: 2 unread school updates")}
            className="relative w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform p-0.5"
          >
            <img src={bellIcon} alt="Notifications" className="w-7 h-7 object-contain drop-shadow-xs" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#ba1a1a] ring-2 ring-[#faf8ff]"></span>
          </button>

          {/* User Profile Initial & Logout */}
          <div className="relative flex items-center gap-1.5 pl-1.5 pr-2 py-1 rounded-full bg-[#e2e7ff]/60">
            <div className="w-7 h-7 rounded-full bg-[#00677d] text-white flex items-center justify-center font-bold text-xs shadow-xs">
              {initial}
            </div>
            <button
              type="button"
              onClick={onLogout}
              title="Logout"
              className="text-[#6d797e] hover:text-[#ba1a1a] transition-colors p-0.5"
            >
              <span className="material-symbols-outlined text-[16px]">logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
