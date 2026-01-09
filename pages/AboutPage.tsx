import React from 'react';
import { 
  GraduationCap, TrendingUp, Briefcase, Search, Users, Settings, 
  Rocket, Cpu, Layers, Globe, Lightbulb, Zap, CheckCircle2, Target 
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const applicableItems = [
    { icon: <GraduationCap className="text-cyan-400" />, label: "個人心靈成長" },
    { icon: <TrendingUp className="text-blue-400" />, label: "人際關係拓展開發" },
    { icon: <Briefcase className="text-indigo-400" />, label: "人事組織管理運作" },
    { icon: <Search className="text-purple-400" />, label: "人才招募篩選" },
    { icon: <Users className="text-pink-400" />, label: "親子關係互動" },
    { icon: <TrendingUp className="text-rose-400" />, label: "諮詢變現增加收入" },
    { icon: <Settings className="text-cyan-500" />, label: "組織建構與調整" }
  ];

  const timelineEvents = [
    {
      year: "2018年",
      title: "品牌創立與系統誕生",
      items: [
        "10月創立品牌《 行韋邏輯 》",
        "開發《 生日密碼 》分析系統 1.0 版",
        "確立授課模式：《 1 VS 多 》、《 1 VS 1 》"
      ],
      icon: <Rocket className="text-cyan-400" />
    },
    {
      year: "2019年",
      title: "專業領域拓展",
      items: [
        "新增《 個人諮詢 》顧問服務",
        "分析系統課程進入《 保經界 》、《 直銷界 》"
      ],
      icon: <Briefcase className="text-blue-400" />
    },
    {
      year: "2020年",
      title: "系統優化與回訓機制",
      items: [
        "升級《 生日密碼 》分析系統 2.0 版",
        "新增課程：《 個人客製化 》延續、《 系統升級 》回訓"
      ],
      icon: <Cpu className="text-indigo-400" />
    },
    {
      year: "2021-2023年",
      title: "多元化課程與創業輔導",
      items: [
        "新增課程：《 親子關係 》、《 線上 》課程",
        "新增輔導項目：創業顧問、創品牌 LOGO 視覺設計",
        "個體戶升級：宣傳視覺優化",
        "收費諮詢顧問：教您如何變現"
      ],
      icon: <Layers className="text-purple-400" />
    },
    {
      year: "2024年",
      title: "全新里程碑",
      items: [
        "分析系統課程進入《 新住民界 》",
        "升級《 生日密碼 》分析系統 3.0 版",
        "正式設立《 行韋邏輯 》品牌宣傳網頁"
      ],
      icon: <Globe className="text-rose-400" />
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-slate-950">
      <div className="container mx-auto">
        
        {/* 標題區塊 */}
        <div className="mb-20 text-center animate-fade-in-up">
           <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-sm tracking-widest uppercase">
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            關於我們｜<span className="text-cyan-400">行韋邏輯</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-slate-400 mb-8">
            生日密碼分析系統
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* 講師介紹與核心價值 */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          {/* 區塊1：講師介紹 */}
          <div className="order-1 relative animate-fade-in-up">
             <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-10 blur-2xl"></div>
             <div className="relative rounded-3xl border border-slate-800 bg-slate-900/50 p-10 overflow-hidden shadow-2xl">
               <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                 <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full opacity-50 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                    <div className="relative w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-700 overflow-hidden shadow-inner">
                       <Lightbulb size={60} className="text-cyan-400" />
                    </div>
                 </div>
                 <div className="text-center md:text-left">
                   <h3 className="text-slate-400 text-lg uppercase tracking-[0.3em] font-medium mb-1">Speaker</h3>
                   <div className="flex items-baseline gap-3 justify-center md:justify-start">
                     <span className="text-4xl font-bold text-white">韋恩</span>
                     <span className="text-2xl font-light text-cyan-400 italic">Anson Wei</span>
                   </div>
                 </div>
               </div>
               
               <div className="space-y-6 text-slate-300 leading-relaxed">
                 <div className="p-6 bg-slate-950/50 border-l-4 border-cyan-500 rounded-r-xl">
                   <p className="font-medium italic">
                    「融合多年業務行銷 + 教育訓練講師的經驗，透過系統化教學模式，引導您從自我定位看見真實成長。」
                   </p>
                 </div>
                 <p className="text-lg">
                   2018.10 開發出【生日密碼分析系統】。本系統融合多方哲理（生命靈數、易學八卦、數字 DNA），透過簡單、易學、易懂、好用、好上手的方式進行解析。
                 </p>
               </div>
             </div>
          </div>
          
          {/* 區塊2：內容概述 */}
          <div className="order-2 space-y-10 animate-fade-in-up">
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 shadow-xl relative group">
               <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Cpu size={100} />
               </div>
               
               <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                 <Zap className="text-cyan-400" size={24} /> 系統核心價值
               </h4>
               
               <ul className="space-y-5 text-slate-300 text-lg">
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="text-cyan-500 mt-1 flex-shrink-0" size={20} />
                   <span>透過 <strong className="text-white">(西元生日)+(農曆生日)</strong> 系統化分析性格、特質、發展模式。</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="text-cyan-500 mt-1 flex-shrink-0" size={20} />
                   <span><strong className="text-white">確立自我定位</strong>、了解自己，從目的地導航回歸起始點。</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <CheckCircle2 className="text-cyan-500 mt-1 flex-shrink-0" size={20} />
                   <span>非命理玄學性解讀，著重透過行為的<strong className="text-white">自我調整與修正</strong>，看見真實有效的成長。</span>
                 </li>
               </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/30 transition-all">
                <Target className="text-blue-400 mb-4" size={32} />
                <h5 className="text-white font-bold mb-2">專業諮商服務</h5>
                <p className="text-slate-400 text-sm">
                  1 對 1 / 1 對多諮商。解決疑難雜症、科學驗證，提供量身進階課程。
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/30 transition-all">
                <GraduationCap className="text-cyan-400 mb-4" size={32} />
                <h5 className="text-white font-bold mb-2">系統教學優勢</h5>
                <p className="text-slate-400 text-sm">
                  秉持「好學、好用、好上手」原則，教您將諮詢變現，增加收入。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 品牌發展歷程區塊 */}
        <div className="mb-32 animate-fade-in-up">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">Milestones</p>
            <h3 className="text-3xl font-bold text-white mb-2">品牌發展歷程</h3>
            <div className="h-1 w-16 bg-cyan-500 mx-auto rounded-full mb-8"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* 垂直連線 */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500/20"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, idx) => (
                <div key={idx} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* 時間節點 */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-slate-950 border-2 border-cyan-500 rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    {event.icon}
                  </div>

                  {/* 內容卡片 */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-right'}`}>
                    <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-all hover:bg-slate-900/60 shadow-xl">
                      <div className={`flex items-center gap-3 mb-2 ${idx % 2 !== 0 ? 'justify-end' : ''}`}>
                         <span className="text-cyan-400 font-mono text-xl font-bold">{event.year}</span>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-4">{event.title}</h4>
                      <ul className={`space-y-2 text-slate-400 text-sm list-none`}>
                        {event.items.map((item, i) => (
                          <li key={i} className={`flex items-start gap-2 ${idx % 2 !== 0 ? 'flex-row-reverse text-right' : 'text-left'}`}>
                             <span className={`w-1.5 h-1.5 rounded-full bg-cyan-500/50 mt-1.5 flex-shrink-0`}></span>
                             <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 適用範圍區塊 */}
        <div className="pt-16 border-t border-slate-800 animate-fade-in-up">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-sm mb-4">Application Scope</p>
            <h3 className="text-3xl font-bold text-white mb-4">系統廣泛適用於以下領域</h3>
            <p className="text-slate-400 max-w-2xl mx-auto italic">
              不論是個人成長還是組織優化，生日密碼系統提供精準的邏輯路徑
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {applicableItems.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 px-8 py-5 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-800 hover:border-slate-700 transition-all group cursor-default shadow-lg"
              >
                <div className="p-3 bg-slate-950 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;