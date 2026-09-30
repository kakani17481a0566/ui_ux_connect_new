import React from 'react';
import logoImg from '../../assets/neuropi-logo.png';

export const AuthHeaderNav = () => {
  return (
    <div className="w-full flex flex-col items-center pt-2 pb-1 bg-white">
      {/* Brand Logo Section */}
      <div className="flex flex-col items-center text-center w-full max-w-md">
        <div className="py-2 px-4 flex items-center justify-center w-full">
          <img
            src={logoImg}
            alt="NeuroPi Educational Experience"
            className="h-28 sm:h-36 max-w-full w-auto object-contain select-none mix-blend-multiply transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};
