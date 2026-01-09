import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const renderContent = () => {
    switch (activePage) {
      case 'home': return <HomePage setActivePage={setActivePage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen min-w-[320px] bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-white relative overflow-x-hidden">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main className="transition-opacity duration-500 ease-in-out lg:px-[60px] lg:py-[30px]">
        {renderContent()}
      </main>

      <ScrollToTopButton />

      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6 lg:px-[60px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
             <div className="w-10 h-10 flex items-center justify-center">
                <img src="https://raw.githubusercontent.com/NaraChou/behavior-logic/main/logo.png" alt="Logo" className="w-full h-full object-contain" />
             </div>
             <span className="text-xl font-bold text-white">行韋邏輯</span>
          </div>
          <p className="text-slate-600 text-sm">
            &copy; 2025 行韋邏輯 Behavior-Logic. All rights reserved. 
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out forwards;
        }
        .neon-text-white { text-shadow: 0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4); }
        .neon-text-blue { text-shadow: 0 0 10px rgba(96,165,250,0.6), 0 0 20px rgba(96,165,250,0.3); }
        .neon-text-cyan { text-shadow: 0 0 10px rgba(34,211,238,0.6), 0 0 20px rgba(34,211,238,0.3); }
        .neon-text-purple { text-shadow: 0 0 10px rgba(192,132,252,0.6), 0 0 20px rgba(192,132,252,0.3); }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </div>
  );
}