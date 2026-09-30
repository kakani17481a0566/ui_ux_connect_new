import React, { useState } from 'react';
import { AuthHeaderNav } from './components/auth/AuthHeaderNav';
import { LoginForm } from './components/auth/LoginForm';
import { AuthFooter } from './components/auth/AuthFooter';
import { ParentDashboard } from './components/dashboard/ParentDashboard';
import { TimelineScreen } from './components/portal/TimelineScreen';
import { StoryTimeScreen } from './components/portal/StoryTimeScreen';
import { ObservationScreen } from './components/portal/ObservationScreen';
import { BottomNav } from './components/layout/BottomNav';
import { authService } from './api/authService';

export default function App() {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('neuropi_user_data');
      const token = authService.isAuthenticated();
      return (token && savedUser) ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });
  const [currentScreen, setCurrentScreen] = useState('home'); // 'home' | 'timeline' | 'stories' | 'observation'

  const handleLoginSuccess = (user) => {
    try {
      localStorage.setItem('neuropi_user_data', JSON.stringify(user));
    } catch (e) {
      console.error('Failed to save session user data', e);
    }
    setCurrentUser(user);
  };

  const handleLogout = () => {
    authService.logout();
    localStorage.removeItem('neuropi_user_data');
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
          <BottomNav
            currentScreen={currentScreen}
            onNavigate={(screen) => setCurrentScreen(screen)}
          />
        </div>
      </div>
    );
  }

  // Pre-Login Authentication Screen
  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center px-4 py-8 bg-white relative overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center gap-6 relative z-10">
        <AuthHeaderNav />

        <div className="w-full bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8 flex flex-col gap-6">
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>

        <p className="text-xs text-slate-400 text-center font-manrope">
          © 2026 NeuroPi Educational Technologies. All rights reserved.
        </p>
      </div>
    </main>
  );
}
