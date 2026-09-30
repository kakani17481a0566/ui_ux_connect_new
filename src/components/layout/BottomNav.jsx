import React from 'react';
import homeVibrantIcon from '../../assets/icons/home_vibrant_180x180.png';
import timelineVibrantIcon from '../../assets/icons/timeline_vibrant_180x180.png';
import storiesVibrantIcon from '../../assets/icons/stories_vibrant_180x180.png';
import observeVibrantIcon from '../../assets/icons/observe_vibrant_180x180.png';

const NAV_ITEMS = [
  {
    id: 'home',
    label: 'Home',
    image: homeVibrantIcon,
  },
  {
    id: 'timeline',
    label: 'Timeline',
    image: timelineVibrantIcon,
  },
  {
    id: 'stories',
    label: 'Stories',
    image: storiesVibrantIcon,
  },
  {
    id: 'observation',
    label: 'Observe',
    image: observeVibrantIcon,
  },
];

const cn = (...classes) => classes.filter(Boolean).join(' ');

export function BottomNav({ currentScreen, onNavigate }) {
  return (
    <nav
      aria-label="Main navigation"
      className="
        fixed inset-x-0 bottom-0 z-50
        mx-auto
        w-full max-w-md sm:max-w-xl
        border-t border-slate-200/70
        bg-white/90
        px-3 pt-2
        shadow-[0_-8px_30px_rgba(15,23,42,0.06)]
        backdrop-blur-xl
        supports-[backdrop-filter]:bg-white/80
        pb-[max(8px,env(safe-area-inset-bottom))]
      "
    >
      <div className="grid grid-cols-4 gap-1">
        {NAV_ITEMS.map((item) => {
          const active = currentScreen === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              aria-label={item.label}
              aria-current={active ? 'page' : undefined}
              className={cn(
                'group relative',
                'flex min-h-[58px] flex-col items-center justify-center',
                'rounded-2xl px-2 py-1.5',
                'outline-none',
                'transition-all duration-300 ease-out',
                'active:scale-[0.96]',
                'focus-visible:ring-2',
                'focus-visible:ring-[#007B91]/30',
                active ? 'bg-[#E8F8FB]' : 'hover:bg-slate-50'
              )}
            >
              {/* Active indicator bar */}
              <span
                className={cn(
                  'absolute top-0 h-[3px] rounded-full',
                  'bg-gradient-to-r from-[#00677D] to-[#18B5C8]',
                  'transition-all duration-300',
                  active ? 'w-7 opacity-100' : 'w-0 opacity-0'
                )}
              />

              <div
                className={cn(
                  'flex h-12 items-center justify-center',
                  'transition-transform duration-300',
                  active && '-translate-y-0.5'
                )}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  draggable={false}
                  className={cn(
                    'h-11 w-11 object-contain',
                    'transition-all duration-300 ease-out',
                    active
                      ? 'scale-110 drop-shadow-[0_4px_8px_rgba(0,103,125,0.20)] opacity-100'
                      : 'scale-100 opacity-85 group-hover:opacity-100'
                  )}
                />
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;