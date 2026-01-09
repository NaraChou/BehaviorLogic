import React from 'react';
import { ArrowRight, BookOpen, Users, Settings } from 'lucide-react';

interface HomePageProps {
  setActivePage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => (
  <div className="pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>

    <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8 animate-fade-in-up z-10 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-500/50 text-cyan-300 text-sm font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(34,211,238,0.3)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          Behavior Logic
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-xl">
          生日密碼 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 filter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
            邏輯新定位
          </span>
        </h1>
        
        <p className="text-lg text-slate-300 leading-relaxed max-w-xl font-medium">
          生日是一切的起點，密碼關乎自我定位。<br />行為慣性皆有脈絡，邏輯剖析陪您重啟。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button 
            onClick={() => setActivePage('contact')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-full font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-2 border border-cyan-400/20"
          >
            了解更多 <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
          <div className="group">
            <div className="mb-3 text-cyan-400 transition-transform group-hover:-translate-y-1 duration-300">
               <BookOpen size={32} strokeWidth={1.5} className="drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"/>
            </div>
            <div className="text-2xl font-bold text-white mb-1 drop-shadow-lg">系統課程<span className="text-cyan-400 text-lg">教學</span></div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">1vs1、1vs多 課程教學</div>
          </div>
          <div className="group">
            <div className="mb-3 text-cyan-400 transition-transform group-hover:-translate-y-1 duration-300">
               <Users size={32} strokeWidth={1.5} className="drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"/>
            </div>
            <div className="text-2xl font-bold text-white mb-1 drop-shadow-lg">諮商諮詢<span className="text-cyan-400 text-lg">分析</span></div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">解決疑難雜症、科學驗證</div>
          </div>
          <div className="group">
             <div className="mb-3 text-cyan-400 transition-transform group-hover:-translate-y-1 duration-300">
               <Settings size={32} strokeWidth={1.5} className="drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"/>
            </div>
            <div className="text-2xl font-bold text-white mb-1 drop-shadow-lg">輔導組織<span className="text-cyan-400 text-lg">調整</span></div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">企業顧問與招募篩選</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative h-[600px] w-full select-none pointer-events-none perspective-1000 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border-[2px] border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite] shadow-[0_0_20px_rgba(34,211,238,0.15)]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-dashed border-blue-400/40 rounded-full animate-[spin_30s_linear_infinite_reverse] shadow-[0_0_15px_rgba(96,165,250,0.15)]"></div>
         
         <div className="absolute top-[8%] left-[15%] text-7xl font-mono font-bold text-white animate-float neon-text-white" style={{animationDelay: '0.5s'}}>1</div>
         <div className="absolute top-[38%] right-[12%] text-8xl font-sans font-bold text-blue-400 animate-float neon-text-blue" style={{animationDelay: '3s'}}>2</div>
         <div className="absolute top-[28%] left-[2%] text-[9rem] font-bold text-cyan-400 animate-float neon-text-cyan" style={{animationDelay: '1.5s'}}>3</div>
         <div className="absolute top-[48%] left-[48%] -translate-x-1/2 -translate-y-1/2 text-[10rem] font-bold text-white/90 font-mono animate-float neon-text-white z-10" style={{animationDelay: '1s'}}>4</div>
         <div className="absolute bottom-[12%] right-[5%] text-[8rem] font-mono font-bold text-purple-400 animate-float neon-text-purple" style={{animationDelay: '2.5s'}}>5</div>
         <div className="absolute bottom-[18%] left-[12%] text-[6rem] font-bold text-slate-200 animate-float drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" style={{animationDelay: '1s'}}>6</div>
         <div className="absolute top-[-5%] right-[-5%] text-[12rem] font-bold text-cyan-500/20 animate-float drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]" style={{animationDelay: '0s'}}>7</div>
         <div className="absolute top-[12%] right-[30%] text-[5rem] font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-400 animate-float drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" style={{animationDelay: '4s'}}>8</div>
         <div className="absolute bottom-[25%] left-[35%] text-7xl font-sans font-bold text-pink-400 animate-float neon-text-purple" style={{animationDelay: '2.2s'}}>9</div>
      </div>
    </div>
  </div>
);

export default HomePage;