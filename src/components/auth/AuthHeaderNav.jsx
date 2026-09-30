import React from 'react';
import { Badge } from '../ui/Badge';
import logoImg from '../../assets/neuropi-logo.png';

export const AuthHeaderNav = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col items-center pt-2">
      {/* Soft Glow Background */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-primary-container/20 via-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Brand Logo Section */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-sm">
        <div className="py-2 flex items-center justify-center">
          <img
            src={logoImg}
            alt="NeuroPi Educational Experience"
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-sm select-none"
          />
        </div>
      </div>
    </div>
  );
};
