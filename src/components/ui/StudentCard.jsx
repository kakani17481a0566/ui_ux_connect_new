import React from 'react';
import defaultAvatar from '../../assets/student-avatar.png';

/**
 * Standardized Reusable Student Card used consistently across all portal pages
 */
export const StudentCard = ({
  name = 'Ananya Sharma',
  grade = 'Pre-K',
  room = 'Room 102 (Sunflowers)',
  status = 'Present',
  checkInTime = '9:05 AM',
  avatar = defaultAvatar,
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

      {/* Student Details & Photo Avatar */}
      <div className="flex items-center gap-3.5">
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 min-w-[56px] min-h-[56px] max-w-[56px] max-h-[56px] rounded-full overflow-hidden ring-2 ring-[#00677d]/40 shadow-sm bg-slate-100 flex items-center justify-center">
            <img
              src={avatar}
              alt={name}
              className="w-full h-full max-w-full max-h-full object-cover object-center select-none rounded-full"
            />
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-[#00677d] text-white flex items-center justify-center text-[9px] shadow-sm">
            <span className="material-symbols-outlined text-[11px]">star</span>
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
