import React from 'react';
import defaultAvatar from '../../assets/student-avatar.png';
import clockIcon from '../../assets/icons/clock_icon.png';
import bloodGroupIcon from '../../assets/icons/blood_group_generic_icon_180x180.png';

/**
 * Standardized Reusable Student Card used consistently across all portal pages
 */
export const StudentCard = ({
  name = 'Ananya Sharma',
  grade = 'Pre-K',
  bloodGroup = 'O+',
  status = 'Present',
  checkInTime = '9:05 AM',
  avatar = defaultAvatar,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 space-y-3 ${className}`}>
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
        <div className="flex items-center gap-1.5 text-rose-700 text-[11px] font-manrope font-semibold">
          <img src={bloodGroupIcon} alt="Blood Group" className="w-4 h-4 object-contain flex-shrink-0" />
          <span className="font-bold">{bloodGroup}</span>
        </div>

        <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-manrope font-semibold">
          <img src={clockIcon} alt="Clock" className="w-3.5 h-3.5 object-contain" />
          <span>Today, Oct 1</span>
        </div>
      </div>

      {/* Student Main Details */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3.5 min-w-0 flex-1">
          {/* Avatar with Star Badge */}
          <div className="relative flex-shrink-0">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#00677d]/30 shadow-xs bg-slate-100 flex items-center justify-center">
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-cover object-center select-none rounded-full"
              />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#00677d] text-white flex items-center justify-center text-[10px] shadow-sm ring-2 ring-white">
              <span className="material-symbols-outlined text-[12px]">star</span>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 min-w-0 space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-extrabold text-base sm:text-lg text-slate-900 truncate">{name}</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 font-manrope text-[10px] font-bold">
                {grade}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-manrope">
              <span className="material-symbols-outlined text-[16px] text-emerald-600">check_circle</span>
              <span className="text-[12px] text-slate-700 font-medium">
                {status} <span className="text-slate-400">•</span> Checked in at <strong className="text-[#00677d] font-bold">{checkInTime}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
