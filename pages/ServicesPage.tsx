import React from 'react';
import { Users, GraduationCap, TrendingUp, Globe } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Users size={40} />,
      title: "專業諮商分析",
      desc: "提供 1對1 與 1對多 的深度諮商服務。針對職場、情感或生活中的疑難雜症進行科學驗證與邏輯解剖，幫助您掃除人生盲點。"
    },
    {
      icon: <GraduationCap size={40} />,
      title: "系統教學課程",
      desc: "完整傳授生日密碼 3.0。課程強調「好學、好用、好上手」，旨在讓每位學員具備獨立諮詢與分析的能力。"
    },
    {
      icon: <TrendingUp size={40} />,
      title: "諮詢變現輔導",
      desc: "不只是學習知識，更教你如何將這項技能轉化為商業價值。我們提供整套諮詢流程建議，協助您建立個人品牌並增加收入。"
    },
    {
      icon: <Globe size={40} />,
      title: "企業組織顧問",
      desc: "針對企業團體提供顧問服務。協助人才招募篩選、人事組織管理運作、公關業務拓展開發，實現團隊效益極大化。"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6">全方位邏輯解析服務</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            從個人、親子到企業組織，<br className="hidden md:block"/>
            我們提供最科學的行為模式分析與調整建議。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="group px-8 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;