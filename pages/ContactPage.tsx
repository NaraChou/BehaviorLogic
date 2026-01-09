import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => (
  <div className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
    <div className="container mx-auto max-w-4xl">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl p-8 md:p-12 relative animate-fade-in-up">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">預約諮商與課程</h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed max-w-2xl">
              無論您是想尋求個人突破、解決親子難題，還是希望引進企業組織培訓，歡迎透過以下方式聯繫我們。
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 w-full">
              {/* Email */}
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-slate-950/50 border border-slate-800/50 hover:border-cyan-500/50 transition-all group w-full hover:bg-slate-900/80">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-lg shadow-cyan-500/10">
                  <Mail size={28} />
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">Email</p>
                  <p className="text-white font-medium text-lg break-all">anson02092000<br />@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-slate-950/50 border border-slate-800/50 hover:border-cyan-500/50 transition-all group w-full hover:bg-slate-900/80">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-lg shadow-cyan-500/10">
                  <Phone size={28} />
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">諮詢專線</p>
                  <p className="text-white font-medium text-lg">+886 923 712 299</p>
                </div>
              </div>

              {/* LINE */}
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-slate-950/50 border border-slate-800/50 hover:border-cyan-500/50 transition-all group w-full hover:bg-slate-900/80">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-lg shadow-cyan-500/10">
                  <MessageCircle size={28} />
                </div>
                <div className="text-center">
                   <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">LINE ID</p>
                   <p className="text-white font-medium text-lg">0923712299</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
);

export default ContactPage;