import React, { useState } from 'react';
import { PortalHeader } from '../layout/PortalHeader';
import { StudentCard } from '../ui/StudentCard';
import { VitalCard } from '../ui/VitalCard';
import mealsIcon from '../../assets/icons/meals_icon.png';
import toiletingIcon from '../../assets/icons/toileting_icon.png';
import restNapIcon from '../../assets/icons/rest_nap_icon.png';
import waterIntakeIcon from '../../assets/icons/water_intake_icon.png';
import tryAtHomeIcon from '../../assets/icons/try_at_home_icon.png';
import momentsFromTodayIcon from '../../assets/icons/moments_from_today_icon.png';

const VITALS_DATA = [
  { title: 'Meals', value: 'Ate well', status: '100% finished', statusColor: 'text-[#006877]', icon: mealsIcon },
  { title: 'Water Intake', value: '3 Glasses', status: 'Hydrated', statusColor: 'text-[#00677d]', icon: waterIntakeIcon },
  { title: 'Rest / Nap', value: '45 mins', status: 'Peaceful', statusColor: 'text-[#2c6480]', icon: restNapIcon },
  { title: 'Toileting', value: 'Regular', status: 'Independent', statusColor: 'text-[#00677d]', icon: toiletingIcon },
];

export const ParentDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('Today');
  const [reaction, setReaction] = useState(null);
  const [homeCompleted, setHomeCompleted] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="bg-[#faf8ff] font-sans text-[#131b2e] antialiased flex flex-col min-h-screen pb-24 relative select-none">
      {/* Unified Header */}
      <PortalHeader user={user} onLogout={onLogout} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative w-full max-w-md mx-auto pt-4 pb-4 px-4 space-y-4">
        {/* Reusable Student Card */}
        <StudentCard />

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-[#e2e7ff]/60 rounded-xl">
          {['Today', 'Learning', 'Gallery', 'Messages'].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all text-center ${
                activeTab === tab
                  ? 'bg-white text-[#00677d] shadow-xs'
                  : 'text-[#3d494d] hover:text-[#00677d]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Daily Routine & Vitals */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-0.5">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-[#00677d]">vital_signs</span>
              <span className="text-[11px] font-manrope font-bold uppercase tracking-wider text-[#6d797e]">
                Daily Routine & Vitals
              </span>
            </div>
            <span className="text-[11px] font-manrope text-[#00677d] font-semibold">Updated 15m ago</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {VITALS_DATA.map((vital) => (
              <VitalCard
                key={vital.title}
                title={vital.title}
                value={vital.value}
                status={vital.status}
                statusColor={vital.statusColor}
                icon={vital.icon}
              />
            ))}
          </div>

          <div className="bg-white rounded-xl p-3 shadow-xs flex items-center justify-between border border-slate-100">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-manrope font-bold text-[#6d797e] uppercase tracking-wider">Mood & Energy</span>
                <span className="px-1.5 py-0.5 rounded bg-[#a3eeff]/40 text-[9px] font-manrope font-bold text-[#004e5a]">Thriving</span>
              </div>
              <p className="font-bold text-sm text-[#131b2e]">Happy & Curious ✨</p>
              <p className="text-[11px] font-manrope text-[#3d494d]">Socialized eagerly during small group discovery</p>
            </div>
            <div className="w-11 h-11 rounded-full bg-[#a3eeff] flex items-center justify-center text-2xl shadow-xs flex-shrink-0">
              🥰
            </div>
          </div>
        </div>

        {/* Today's Scientific Exploration Split Hero Card */}
        <div className="bg-white rounded-xl p-4 shadow-xs space-y-3 border border-slate-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00b4d8]"></span>
              <span className="text-[11px] font-manrope font-bold uppercase tracking-wider text-[#00677d]">
                Today's Scientific Exploration
              </span>
            </div>
            <span className="text-[10px] font-manrope font-bold px-2 py-0.5 rounded-full bg-[#e2e7ff] text-[#131b2e]">
              Cognitive Unit
            </span>
          </div>

          <div>
            <h3 className="font-extrabold text-xl text-[#00677d] leading-tight">Floating & Sinking</h3>
            <p className="text-xs text-[#3d494d] mt-0.5">
              Understanding buoyancy, density, and liquid displacement through play.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-manrope font-bold uppercase text-[#6d797e] block mb-1.5">Cognitive Skills</span>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 bg-[#f2f3ff] px-2 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-[15px] text-[#00677d]">lightbulb</span>
                    <span className="text-[11px] font-manrope font-bold text-[#131b2e]">Predicting</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#f2f3ff] px-2 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-[15px] text-[#006877]">travel_explore</span>
                    <span className="text-[11px] font-manrope font-bold text-[#131b2e]">Observing</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#f2f3ff] px-2 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-[15px] text-[#2c6480]">balance</span>
                    <span className="text-[11px] font-manrope font-bold text-[#131b2e]">Comparing</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#e2e7ff]/60 p-2 rounded-lg mt-1 flex items-center gap-1.5">
                <span className="text-sm">⛵</span>
                <div className="min-w-0">
                  <p className="text-[10px] font-manrope text-[#6d797e] uppercase font-bold">Story explored</p>
                  <p className="text-[11px] font-bold text-[#131b2e] truncate">The Little Cork Boat</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-inner h-44 bg-slate-100">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn5LBRwpkyjlc0kPepR6cNkPRiYTgjLsdnnzqc1rElG8lqJG2BgQz9lMQMwiQlmXvM-4PTFtdUm-_dfZ1PDgfCeli7toLNTkWfEOy1QyhWhAnYYI6XDGwN19rC9sMVObAOzrnGBfakHn__3iHnSEIhnAo_4sBDkDkRo9O_1OXY0HiHwbdrsCpBzBrArozvVDSY72BFSEpVB1GotQYZ9d93CfY7BJww1EpTCHGaqUQ0YhUoXtD26WXz"
                alt="Water Laboratory Activity"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-[#283044]/85 backdrop-blur-md px-2 py-1 rounded-lg">
                <p className="text-[10px] font-manrope font-bold text-[#eef0ff] flex items-center justify-between">
                  <span>Water Laboratory</span>
                  <span className="material-symbols-outlined text-[12px] text-[#a3eeff]">science</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Try at Home Extension Card */}
        <div className="bg-[#a3eeff]/40 rounded-xl p-4 shadow-xs space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-14 h-14 min-w-[56px] min-h-[56px] flex items-center justify-center flex-shrink-0">
              <img src={tryAtHomeIcon} alt="Try at Home" className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-[#004e5a] uppercase tracking-wider">Try at Home • Family Activity</span>
                <span className="material-symbols-outlined text-[18px] text-[#00677d]">tips_and_updates</span>
              </div>
              <p className="font-bold text-sm text-[#131b2e] mt-1 leading-snug">
                "Which three things in your kitchen do you think will float?"
              </p>
              <p className="text-[11px] text-[#3d494d] mt-1 leading-relaxed">
                Try an orange, a metal spoon, and a plastic lid in a bowl of water before bath time!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => { setHomeCompleted(!homeCompleted); showToast(homeCompleted ? "Task unmarked" : "Activity marked completed ✨"); }}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg font-bold text-xs shadow-xs transition-all ${
                homeCompleted ? 'bg-[#006877] text-white' : 'bg-[#00677d] text-white hover:opacity-90'
              }`}
            >
              <span className="material-symbols-outlined text-[15px]">check</span>
              <span>{homeCompleted ? 'Completed ✨' : 'Mark as Completed ✨'}</span>
            </button>
            <button
              type="button"
              onClick={() => showToast("Share link generated!")}
              className="flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-white text-[#00677d] font-bold text-xs shadow-xs hover:bg-[#e2e7ff] transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">add_a_photo</span>
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Moments from Today Gallery Strip */}
        <div className="bg-white rounded-xl p-3.5 shadow-xs space-y-2.5 border border-slate-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={momentsFromTodayIcon} alt="Moments from Today" className="w-8 h-8 object-contain" />
              <h3 className="font-bold text-sm text-[#131b2e]">Moments from Today</h3>
            </div>
            <button onClick={() => showToast("Opening 4 high-res gallery photos...")} className="flex items-center text-xs font-manrope font-bold text-[#00677d] hover:text-[#006877]">
              <span>4 Photos</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD3-vR0dEIx8wp3ovDqi7bPiuUTPpGKzgy12AH8akYuUtFN_2c1AF056YSflR6lOA8ICBQx_qKRbJWAQtvEG0P70te2kjYPeMXSPX-yowv7BmyI1InXZw5U4FNZJIpLOss9W_D9Uywksvbgt8tpBGDeGA2dfW1HL-CGglq-9kut458TzjKSYgUZLtLqA0NSUVjhiXb1dT30qmCXxQyPwrvFjVnfTe6wQFgkUBUelsyqGiXvV6_o-vkV",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAK0JmHtGBhwQcAUGm3QtCoEvLY2bdX08WhaVnsBhDiwSanotaYfNbH8wM26paMUSeuRi7pIrRQLnEAw_04CR6WiAhCfjyOstoBrf3aqo9RG_cLq-Fjjeowxbbo0tJNp3IxTDpJB9-imBo4kXCHP050CNTA0782Bvu01QMSePCMVcuadXMkcKTAyzrUmzm49voUoOQmbLBJFwf9uqd78NROO3_pbq0MTxU-B2S83A0AI7juW6vn8Trg",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCvtyrL9k03_RQui6p3bwj7DnoIlb7jXaGYlPJZS_nNMzJFDraP0Q4L7QCZa1NnXZgM9bl04M6LI4DbOSVHPxJO2YERYlDQVSwY4pXOj0Gl1p_HNnAXy5tuIGStMY1w45Mqk70GisClwLwFjMZ7e1a7KDAReYErd8bYBbT-PNB3qbTB6mJLV7kVN2gciwRlPqaoHwbHkayWNZ53kkgEYkoETEWl-gHaCZ8umId4yxqgG2xozaZynLj5",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuD16wRAcCMLmfT1ffGyX3Px3bos35qflBBkUqQRfkaeWFNL31knYezqCcKFa1T6T411__kWnRDfBJBk-RHGGCIr_2SnCWKpwxVutV0EqQGavRmaXSFfvqiQ0bURv5PKcGMX8ApZ8qhME8NPBmO0jilSzAM7gLVliNQnZiBWnwmql-ONiwiIterNgxa0E_CRSGcWph-U7_v_xOrLlNF_pjr9TaPem0qQpXJnlsE-Ju-RHyTvhMfYBqqC"
            ].map((imgUrl, idx) => (
              <div key={idx} onClick={() => showToast(`Photo ${idx + 1} selected`)} className="relative aspect-square rounded-lg overflow-hidden shadow-xs cursor-pointer group">
                <img src={imgUrl} alt={`Moment ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute bottom-1 right-1 bg-[#131b2e]/60 rounded px-1 text-[8px] text-white font-manrope">
                  {['09:40', '10:30', '11:50', '14:15'][idx]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teacher Note Card */}
        <div className="bg-white rounded-xl p-3.5 shadow-xs space-y-3 border border-slate-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#00b4d8] flex items-center justify-center text-[#00414f] font-bold text-xs shadow-xs">
                ML
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-xs text-[#131b2e]">Ms. Laura Martinez</h4>
                  <span className="px-1.5 py-0.5 rounded bg-[#e2e7ff] text-[9px] font-manrope font-bold text-[#00677d]">
                    Lead Educator
                  </span>
                </div>
                <p className="text-[10px] font-manrope text-[#6d797e]">Classroom Sunflowers • 12:45 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f2f3ff] p-3 rounded-xl space-y-2.5">
            <p className="text-xs text-[#131b2e] leading-relaxed">
              “Ananya showed great curiosity during our water play activity today! She immediately predicted the cork would float because it felt ‘fluffy and light.’ Wonderful intuition!”
            </p>
            <div className="flex items-center gap-2.5 p-2 rounded-lg bg-white shadow-xs">
              <button
                type="button"
                onClick={() => showToast("Playing audio note from Ms. Laura...")}
                className="w-7 h-7 rounded-full bg-[#00677d] text-white flex items-center justify-center shadow-xs active:scale-95"
              >
                <span className="material-symbols-outlined text-[15px]">play_arrow</span>
              </button>
              <div className="flex-1 flex items-center gap-1">
                <span className="w-1 h-3 bg-[#00677d] rounded-full"></span>
                <span className="w-1 h-4 bg-[#00677d] rounded-full"></span>
                <span className="w-1 h-2 bg-[#bcc9ce] rounded-full"></span>
                <span className="w-1 h-5 bg-[#bcc9ce] rounded-full"></span>
                <span className="w-1 h-3 bg-[#bcc9ce] rounded-full"></span>
                <span className="w-1 h-4 bg-[#bcc9ce] rounded-full"></span>
              </div>
              <span className="text-[10px] font-manrope font-semibold text-[#6d797e]">0:24</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-0.5">
            <span className="text-[10px] font-manrope font-semibold text-[#6d797e]">Family Reactions:</span>
            <div className="flex items-center gap-1.5">
              {['❤️ Loved', '👏 Proud', '💬 Reply'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => { setReaction(reaction === r ? null : r); showToast(`Reaction sent: ${r}`); }}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                    reaction === r
                      ? 'bg-[#00b4d8] text-[#00414f] shadow-xs'
                      : 'bg-[#e2e7ff] text-[#131b2e] hover:bg-[#dae2fd]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Motivational Footer Banner */}
        <div className="bg-gradient-to-r from-[#00677d] via-[#2c6480] to-[#006877] rounded-xl p-3.5 text-white shadow-xs flex items-center justify-between">
          <div className="space-y-0.5">
            <p className="font-bold text-xs leading-snug">Stronger connections. Greater understanding.</p>
            <p className="text-[10px] opacity-90">Better learning. Together, every single day.</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-[18px]">favorite</span>
          </div>
        </div>

        {/* Partnership Footnote */}
        <div className="text-center py-2 space-y-1">
          <p className="text-[10px] font-manrope font-bold text-[#6d797e] uppercase tracking-widest">
            NeuroPi Connect • My School ITALY
          </p>
          <p className="text-[10px] text-[#3d494d]">
            One Child. One Connect. Many Moments. Endless Growth.
          </p>
        </div>
      </main>

      {/* Toast Feedback Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-[#283044] text-[#eef0ff] text-xs font-manrope px-4 py-2 rounded-full shadow-lg z-50 animate-bounce">
          {toastMessage}
        </div>
      )}
    </div>
  );
};
