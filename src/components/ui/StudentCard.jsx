import React from 'react';

/**
 * Standardized Reusable Student Card used consistently across all portal pages
 */
export const StudentCard = ({
  name = 'Ananya Sharma',
  grade = 'Pre-K',
  room = 'Room 102 (Sunflowers)',
  status = 'Present',
  checkInTime = '9:05 AM',
  initials = 'AS',
  age = '4y 5m',
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-xl p-3.5 shadow-xs border border-slate-100 space-y-3 ${className}`}>
      {/* Live Status & Room Badge Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#a3eeff]/40 text-[#004e5a] text-[11px] font-manrope font-bold">
          <span className="w-2 h-2 rounded-full bg-[#00b4d8] animate-pulse"></span>
          <span>Live • {room}</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-manrope text-[#6d797e] font-semibold">
          <span className="material-symbols-outlined text-[14px] text-[#00677d]">schedule</span>
          <span>Today, Oct 1</span>
        </div>
      </div>

      {/* Student Details & Avatar */}
      <div className="flex items-center gap-3.5">
        <div className="relative flex-shrink-0">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-[#00677d]/20 shadow-xs bg-[#00677d] text-white flex items-center justify-center text-xl font-bold">
            {initials}
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#00677d] text-white flex items-center justify-center text-[9px] shadow">
            <span className="material-symbols-outlined text-[10px]">star</span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h2 className="font-extrabold text-base sm:text-lg text-[#131b2e] truncate">{name}</h2>
            <span className="px-2.5 py-0.5 rounded-full bg-[#8debff] text-[#006b7a] font-manrope text-[10px] font-bold">
              {grade}
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="material-symbols-outlined text-[14px] text-[#00677d]">check_circle</span>
            <span className="text-[11px] font-manrope text-[#3d494d] font-medium">
              {status} • Checked in at <strong className="text-[#00677d] font-bold">{checkInTime}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
