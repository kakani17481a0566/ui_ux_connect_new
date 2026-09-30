import React from 'react';
import { PortalHeader } from '../layout/PortalHeader';

export const StoryTimeScreen = ({ user, onLogout, onNavigate }) => {
  return (
    <div className="bg-slate-100 font-sans text-slate-800 antialiased flex flex-col min-h-screen pb-24 relative select-none">
      {/* Shared Portal Header */}
      <PortalHeader
        user={user}
        onLogout={onLogout}
        title="Story Time"
        showBack
        onBack={() => onNavigate('home')}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto max-w-md sm:max-w-xl mx-auto w-full px-4 pt-4 space-y-4">
        {/* Story Title & Video Card */}
        <section className="space-y-2">
          <div>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Today's Story</span>
            <h2 className="text-2xl font-extrabold text-[#034982] tracking-tight">The Little Boat</h2>
          </div>

          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-gradient-to-b from-sky-200 via-sky-100 to-sky-300 border border-sky-100 cursor-pointer group flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0284c7]/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/95 text-[#0284c7] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[32px] ml-1">play_arrow</span>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Activities List */}
        <section className="space-y-2 pt-1">
          {[
            { title: 'Watch Animation', icon: 'play_arrow', bg: 'bg-sky-500' },
            { title: 'New Words (Aa)', icon: 'spellcheck', bg: 'bg-rose-500' },
            { title: 'Discussion Prompts', icon: 'forum', bg: 'bg-purple-500' },
            { title: 'Songs / Rhymes', icon: 'music_note', bg: 'bg-amber-500' },
            { title: 'Try at Home Activity', icon: 'cottage', bg: 'bg-emerald-500' }
          ].map((item) => (
            <div
              key={item.title}
              onClick={() => alert(`Opening module: ${item.title}`)}
              className="flex items-center justify-between p-3.5 bg-white rounded-xl shadow-xs border border-slate-200/80 hover:bg-slate-50 transition cursor-pointer"
            >
              <div className="flex items-center gap-3.5">
                <div className={`w-9 h-9 rounded-lg ${item.bg} text-white flex items-center justify-center shadow-xs`}>
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                </div>
                <span className="text-sm font-bold text-slate-800">{item.title}</span>
              </div>
              <span className="material-symbols-outlined text-slate-400 text-[18px]">chevron_right</span>
            </div>
          ))}
        </section>

        {/* Continuous Journey Summary Card */}
        <section className="bg-amber-50/90 border border-amber-200 rounded-2xl p-4 shadow-xs space-y-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-600 text-[20px]">school</span>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900">A Continuous Journey</h3>
              <p className="text-[11px] text-amber-700">School & Home. Stronger Together.</p>
            </div>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            Same story. Same concepts. <span className="font-bold text-slate-900">Stronger learning—together.</span>
          </p>

          <div className="grid grid-cols-6 gap-1 pt-2 text-center text-[10px] font-bold">
            <span className="bg-white/80 py-1 rounded text-sky-600">1. Teach</span>
            <span className="bg-white/80 py-1 rounded text-emerald-600">2. Learn</span>
            <span className="bg-white/80 py-1 rounded text-purple-600">3. Home</span>
            <span className="bg-white/80 py-1 rounded text-rose-600">4. Discuss</span>
            <span className="bg-white/80 py-1 rounded text-amber-600">5. Recall</span>
            <span className="bg-white/80 py-1 rounded text-cyan-600">6. Connect</span>
          </div>
        </section>
      </main>
    </div>
  );
};
