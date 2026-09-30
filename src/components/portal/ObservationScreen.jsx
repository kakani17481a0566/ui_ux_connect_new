import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const ObservationScreen = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [noteText, setNoteText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { name: 'New word', icon: 'spellcheck', bg: 'bg-[#1e88e5]' },
    { name: 'New skill', icon: 'star', bg: 'bg-[#66bb6a]' },
    { name: 'New interest', icon: 'favorite', bg: 'bg-[#fb8c00]' },
    { name: 'New behaviour', icon: 'sentiment_satisfied', bg: 'bg-[#8e24aa]' },
    { name: 'Question the child asked', icon: 'help', bg: 'bg-[#e53935]' },
    { name: 'Social interaction', icon: 'groups', bg: 'bg-[#0288d1]' },
    { name: 'Emotional moment', icon: 'mood', bg: 'bg-[#fbc02d]' },
    { name: 'Independence milestone', icon: 'flag', bg: 'bg-[#43a047]' },
    { name: 'Physical skill', icon: 'directions_run', bg: 'bg-[#7b1fa2]' },
    { name: 'Creative activity', icon: 'palette', bg: 'bg-[#00897b]' },
    { name: 'Photo / Video', icon: 'photo_camera', bg: 'bg-[#d81b60]' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onNavigate('home');
    }, 2000);
  };

  return (
    <div className="bg-[#f5f8fc] font-sans text-slate-800 antialiased flex flex-col min-h-screen pb-24 relative select-none">
      {/* Header */}
      <header className="bg-[#0076ce] text-white pt-3 pb-3 px-4 shadow-xs flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onNavigate('home')}
            className="p-1 rounded-full hover:bg-white/10 active:scale-95 transition-transform"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <h1 className="text-base font-semibold tracking-wide">I Noticed Something</h1>
        </div>
        <span className="material-symbols-outlined text-rose-300 text-[20px]">favorite</span>
      </header>

      {/* Main Form */}
      <main className="flex-1 max-w-md sm:max-w-xl mx-auto w-full px-4 pt-4 space-y-4">
        {submitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl text-center space-y-3 mt-8">
            <span className="material-symbols-outlined text-emerald-600 text-[36px]">task_alt</span>
            <h3 className="text-lg font-bold text-emerald-800">Observation Shared!</h3>
            <p className="text-xs text-emerald-700">Thank you for contributing to your child's learning journey.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-800 tracking-tight leading-snug">
                What did you notice about<br />your child?
              </h2>
              <span className="material-symbols-outlined text-rose-400 text-[24px]">favorite</span>
            </div>

            {/* Category List */}
            <div className="space-y-2">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center bg-white rounded-xl px-3 py-2.5 shadow-xs border transition cursor-pointer ${
                    selectedCategory === cat.name
                      ? 'border-[#0076ce] ring-2 ring-[#0076ce]/20 bg-blue-50/40'
                      : 'border-slate-200/70 hover:border-blue-200'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-full ${cat.bg} text-white flex items-center justify-center font-bold text-xs shadow-xs`}>
                    <span className="material-symbols-outlined text-[16px]">{cat.icon}</span>
                  </div>
                  <span className="ml-3 text-xs font-semibold text-slate-700">{cat.name}</span>
                </div>
              ))}
            </div>

            {/* Optional Observation Notes */}
            {selectedCategory && (
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-bold text-slate-700">Add details / note (Optional)</label>
                <textarea
                  rows="3"
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder={`Describe what happened for "${selectedCategory}"...`}
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-[#0076ce] focus:outline-none"
                ></textarea>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                disabled={!selectedCategory}
                className="w-full bg-gradient-to-r from-[#f43f5e] to-[#ec4899] text-white font-bold py-3 text-sm rounded-xl shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
                <span>Submit Observation</span>
              </Button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
};
