'use client';

import { breakingHeadlines } from '@/data/articles';

export default function BreakingNewsTicker() {
  return (
    <div className="bg-[#CE1126] text-white flex items-center h-9 overflow-hidden">
      <div className="bg-black text-white text-xs font-black uppercase px-4 h-full flex items-center shrink-0 tracking-widest">
        Breaking
      </div>
      <div className="overflow-hidden flex-1 relative h-full flex items-center">
        <p className="ticker-scroll text-sm font-medium absolute whitespace-nowrap">
          {[...breakingHeadlines, ...breakingHeadlines].map((headline, i) => (
            <span key={i}>
              <span className="text-[#FCD116] mx-4 font-black">◆</span>
              {headline}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
