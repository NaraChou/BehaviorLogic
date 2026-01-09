import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: '首頁' },
    { id: 'about', label: '關於我們' },
    { id: 'services', label: '服務項目' },
    { id: 'contact', label: '聯絡我們' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 lg:px-[60px] flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={() => setActivePage('home')}
        >
          <div className="relative w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-105">
             <img src="https://raw.githubusercontent.com/NaraChou/behavior-logic/main/logo.png" alt="行韋邏輯 Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]" />
          </div>
          <span className="text-2xl font-bold tracking-wide text-white">
            行韋邏輯 <span className="text-cyan-400">.</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                activePage === item.id 
                  ? 'text-white bg-white/10 shadow-inner' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {activePage === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 animate-pulse"></span>
              )}
            </button>
          ))}
        </div>

        <button 
          className="lg:hidden text-white p-3 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-2xl animate-fade-in-down lg:hidden">
          <div className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActivePage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-4 rounded-lg text-base font-medium transition-colors border-l-4 ${
                  activePage === item.id 
                    ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500' 
                    : 'border-transparent text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;