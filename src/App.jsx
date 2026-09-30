import React, { useState } from 'react';
import { AuthHeaderNav } from './components/auth/AuthHeaderNav';
import { LoginForm } from './components/auth/LoginForm';
import { AuthFooter } from './components/auth/AuthFooter';
import { ParentDashboard } from './components/dashboard/ParentDashboard';
import { TimelineScreen } from './components/portal/TimelineScreen';
import { StoryTimeScreen } from './components/portal/StoryTimeScreen';
import { ObservationScreen } from './components/portal/ObservationScreen';
import { authService } from './api/authService';
import homeNavIcon from './assets/icons/home_nav.png';
import timelineNavIcon from './assets/icons/timeline_nav.png';
import storiesNavIcon from './assets/icons/stories_nav.png';
import observeNavIcon from './assets/icons/observe_nav.png';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' | 'timeline' | 'stories' | 'observation'

  const handleLogout = () => {
    authService.logout();
    setCurrentUser(null);
    setCurrentScreen('home');
  };

  // Render Post-Login Portal Screens
  if (currentUser) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center">
        <div className="w-full max-w-md sm:max-w-xl min-h-screen bg-[#faf8ff] shadow-xl relative">
          {currentScreen === 'home' && (
            <ParentDashboard
              user={currentUser}
              onLogout={handleLogout}
              onNavigate={(screen) => setCurrentScreen(screen)}
            />
          )}

          {currentScreen === 'timeline' && (
            <TimelineScreen onNavigate={(screen) => setCurrentScreen(screen)} />
          )}

          {currentScreen === 'stories' && (
            <StoryTimeScreen onNavigate={(screen) => setCurrentScreen(screen)} />
          )}

          {currentScreen === 'observation' && (
            <ObservationScreen onNavigate={(screen) => setCurrentScreen(screen)} />
          )}

          {/* Centered Responsive Bottom Navigation Bar */}
          <nav className="fixed bottom-0 left-0 right-0 w-full max-w-md sm:max-w-xl mx-auto z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/80 shadow-[0_-2px_12px_rgba(0,0,0,0.05)]">
            <div className="flex justify-around items-center h-16 px-2">
              <button
                type="button"
                onClick={() => setCurrentScreen('home')}
                className={`flex flex-col items-center justify-center min-w-[64px] h-14 transition-all ${
                  currentScreen === 'home' ? 'text-[#00677d] font-bold' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <img
                  src={homeNavIcon}
                  alt="Home"
                  className={`h-11 w-auto object-contain transition-all ${
                    currentScreen === 'home' ? 'opacity-100 scale-105' : 'opacity-75 hover:opacity-100'
                  }`}
                />
                {currentScreen === 'home' && <span className="w-1 h-1 rounded-full bg-[#00677d] -mt-0.5"></span>}
              </button>

              <button
                type="button"
                onClick={() => setCurrentScreen('timeline')}
                className={`flex flex-col items-center justify-center min-w-[64px] h-14 transition-all ${
                  currentScreen === 'timeline' ? 'text-[#00677d] font-bold' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <img
                  src={timelineNavIcon}
                  alt="Timeline"
                  className={`h-11 w-auto object-contain transition-all ${
                    currentScreen === 'timeline' ? 'opacity-100 scale-105' : 'opacity-75 hover:opacity-100'
                  }`}
                />
                {currentScreen === 'timeline' && <span className="w-1 h-1 rounded-full bg-[#00677d] -mt-0.5"></span>}
              </button>

              <button
                type="button"
                onClick={() => setCurrentScreen('stories')}
                className={`flex flex-col items-center justify-center min-w-[64px] h-14 transition-all ${
                  currentScreen === 'stories' ? 'text-[#00677d] font-bold' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <img
                  src={storiesNavIcon}
                  alt="Stories"
                  className={`h-11 w-auto object-contain transition-all ${
                    currentScreen === 'stories' ? 'opacity-100 scale-105' : 'opacity-75 hover:opacity-100'
                  }`}
                />
                {currentScreen === 'stories' && <span className="w-1 h-1 rounded-full bg-[#00677d] -mt-0.5"></span>}
              </button>

              <button
                type="button"
                onClick={() => setCurrentScreen('observation')}
                className={`flex flex-col items-center justify-center min-w-[64px] h-14 transition-all ${
                  currentScreen === 'observation' ? 'text-[#00677d] font-bold' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                <img
                  src={observeNavIcon}
                  alt="Observe"
                  className={`h-11 w-auto object-contain transition-all ${
                    currentScreen === 'observation' ? 'opacity-100 scale-105' : 'opacity-75 hover:opacity-100'
                  }`}
                />
                {currentScreen === 'observation' && <span className="w-1 h-1 rounded-full bg-[#00677d] -mt-0.5"></span>}
              </button>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  // Pre-Login Authentication Screen
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-8 bg-[#f8fafc] sm:bg-gradient-to-b sm:from-[#f8fafc] sm:to-[#f1f5f9] relative overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center gap-6 relative z-10">
        <AuthHeaderNav />

        <div className="w-full bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8 flex flex-col gap-6">
          <LoginForm onLoginSuccess={(user) => setCurrentUser(user)} />
        </div>

        <p className="text-xs text-slate-400 text-center font-manrope">
          © 2026 NeuroPi Educational Technologies. All rights reserved.
        </p>
      </div>
    </main>
  );
}
