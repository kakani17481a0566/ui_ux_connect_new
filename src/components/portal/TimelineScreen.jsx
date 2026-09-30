import React, { useState } from 'react';
import logoImg from '../../assets/neuropi-logo.png';
import { Badge } from '../ui/Badge';

export const TimelineScreen = ({ onNavigate }) => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      month: 'SEPTEMBER',
      title: 'OBSERVES',
      desc: 'Listens to stories and conversations with interest.',
      evidence: 'Enjoys listening to rhymes and picture books.',
      color: '#6452B0',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      icon: 'search'
    },
    {
      month: 'OCTOBER',
      title: 'ATTEMPTS',
      desc: 'Tries to say new words and copy sounds.',
      evidence: 'Says a few new words with support.',
      color: '#189AB4',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      icon: 'edit'
    },
    {
      month: 'NOVEMBER',
      title: 'PARTICIPATES',
      desc: 'Joins in conversations and circle time discussions.',
      evidence: 'Answers simple questions and shares ideas.',
      color: '#E57A00',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      icon: 'groups'
    },
    {
      month: 'DECEMBER',
      title: 'USES INDEPENDENTLY',
      desc: 'Uses sentences to express needs, ideas and experiences.',
      evidence: 'Uses longer sentences and describes experiences.',
      color: '#E03A6A',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      icon: 'chat_bubble'
    },
    {
      month: 'BEYOND...',
      title: 'APPLIES IN NEW SITUATIONS',
      desc: 'Uses language in new situations and with different people.',
      evidence: 'Confidently communicates in new settings and with new people.',
      color: '#52A447',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      icon: 'rocket_launch'
    }
  ];

  return (
    <div className="bg-slate-100 font-sans text-slate-800 antialiased flex flex-col min-h-screen pb-24 relative select-none">
      {/* Header */}
      <header className="bg-[#0b5cbe] text-white pt-3 pb-3 px-4 shadow-md sticky top-0 z-30 flex items-center justify-between">
        <button
          onClick={() => onNavigate('home')}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition active:scale-95"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <h1 className="text-base font-semibold tracking-wide font-sans">Developmental Timeline</h1>
        <button
          onClick={() => alert("Developmental Timeline measures 5 progressive milestones across speech, cognitive & social domains.")}
          className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition active:scale-95"
          type="button"
        >
          <span className="material-symbols-outlined text-[20px]">info</span>
        </button>
      </header>

      <main className="flex-1 overflow-y-auto max-w-md sm:max-w-xl mx-auto w-full px-4 pt-4 space-y-4">
        {/* Brand Header */}
        <section className="flex items-center justify-between bg-white px-3 py-2 rounded-xl shadow-xs border border-slate-200/80">
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="NeuroPi Logo" className="h-6 w-auto object-contain" />
            <span className="text-xs font-bold text-slate-800">Connect</span>
          </div>
          <div className="h-4 w-px bg-slate-300"></div>
          <div className="flex items-center gap-1.5">
            <div className="leading-tight text-left">
              <div className="text-[10px] font-bold text-slate-700 leading-none">My School</div>
              <div className="text-[9px] font-extrabold text-blue-600 tracking-wider">ITALY</div>
            </div>
          </div>
        </section>

        {/* Child Profile Card */}
        <section className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-[#00677d] text-white font-bold flex items-center justify-center text-lg shadow-xs">
              AS
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-900 leading-tight">Ananya Sharma</h2>
              <Badge variant="active" className="text-[10px] py-0.5">Active</Badge>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Pre-Kindergarten</p>
            <p className="text-[11px] font-semibold text-blue-600">Age: 4y 5m</p>
          </div>
        </section>

        {/* Growth Trajectory Curve Card */}
        <section className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Communication & Speech</h3>
              <p className="text-[11px] text-slate-500">How your child is growing over time.</p>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              +48% growth
            </span>
          </div>

          <div className="relative h-20 w-full flex items-center justify-center pt-2">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 320 80" fill="none">
              <path d="M10 70 C 90 65, 170 45, 305 18" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
              <path d="M10 70 C 90 65, 170 45, 305 18" stroke="#4ADE80" strokeWidth="3" strokeLinecap="round" />
              <circle cx="10" cy="70" r="4" fill="#22C55E" />
              <circle cx="105" cy="62" r="4.5" fill="#22C55E" />
              <circle cx="195" cy="48" r="5" fill="#22C55E" />
              <circle cx="305" cy="18" r="6" fill="#16A34A" />
            </svg>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-600 font-medium">
            <span className="material-symbols-outlined text-[16px] text-emerald-500">favorite</span>
            <span>We celebrate every small step forward.</span>
          </div>
        </section>

        {/* Milestone Stepped Progression Flow */}
        <section className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Milestone Progression</h3>
              <p className="text-[10px] text-slate-400">Tap stages to explore details</p>
            </div>
            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-semibold">
              5 Stages
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-1">
            {stages.map((stage, idx) => (
              <div
                key={stage.month}
                onClick={() => setActiveStage(idx)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  activeStage === idx
                    ? `${stage.bgColor} ${stage.borderColor} shadow-xs ring-1 ring-offset-1`
                    : 'bg-slate-50 border-slate-200/60 hover:bg-slate-100/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: stage.color }}
                  >
                    {stage.month}
                  </span>
                  <span className="material-symbols-outlined text-[18px]" style={{ color: stage.color }}>
                    {stage.icon}
                  </span>
                </div>

                <h4 className="text-xs font-bold mt-2 uppercase tracking-wide" style={{ color: stage.color }}>
                  {stage.title}
                </h4>
                <p className="text-xs text-slate-700 mt-1 leading-snug">{stage.desc}</p>

                <div className="mt-2.5 bg-white/90 p-2 rounded-lg border border-slate-200/50 text-xs text-slate-700 flex items-start gap-1.5">
                  <span className="text-amber-500">★</span>
                  <span>{stage.evidence}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Badge */}
        <section className="bg-rose-50 border border-rose-200 rounded-xl p-3 flex items-center gap-2.5 text-rose-900 text-xs">
          <span className="material-symbols-outlined text-rose-500 text-[18px]">star</span>
          <p className="font-semibold">
            <span className="font-bold">Progress over comparison.</span> Every child develops uniquely.
          </p>
        </section>
      </main>
    </div>
  );
};
