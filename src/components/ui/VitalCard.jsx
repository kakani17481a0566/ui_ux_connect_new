import React from 'react';

/**
 * Reusable VitalCard component for rendering daily routine & vital stats
 */
export const VitalCard = ({
  title,
  value,
  status,
  statusColor = 'text-[#00677d]',
  icon,
  iconAlt = title,
  className = '',
}) => {
  return (
    <div className={`bg-white rounded-xl p-3 shadow-xs flex items-center justify-between border border-slate-100 ${className}`}>
      <div className="space-y-1">
        <span className="text-[10px] font-manrope font-bold text-[#6d797e] block uppercase tracking-wider">
          {title}
        </span>
        <p className="font-bold text-sm text-[#131b2e] leading-none">{value}</p>
        <div className={`flex items-center gap-1 text-[11px] font-manrope font-semibold ${statusColor}`}>
          <span>{status}</span>
        </div>
      </div>
      <div className="w-12 h-12 min-w-[48px] min-h-[48px] flex items-center justify-center flex-shrink-0">
        <img src={icon} alt={iconAlt} className="w-full h-full object-contain" />
      </div>
    </div>
  );
};
