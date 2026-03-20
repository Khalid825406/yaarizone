'use client';

import { Download } from 'lucide-react';
import type { CSSProperties } from 'react';

const btnStyle: CSSProperties = {
  background: "linear-gradient(90deg, #E91E8C 0%, #1565D8 100%)",
  boxShadow: "0 4px 18px rgba(233,30,140,0.35)",
};

export function DownloadBar() {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0
        z-50
        px-4 sm:px-6
        py-3 sm:py-4
        bg-[#070B14]/80 backdrop-blur-md
        border-t border-white/10
        md:hidden
      "
    >
      {/* ✅ FIX: Anchor tag added */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle}
        className="
          flex items-center justify-center gap-2.5
          w-full
          max-w-xl mx-auto
          active:scale-[0.98]
          text-white font-semibold
          text-sm sm:text-base
          px-6 py-3.5 sm:py-4
          rounded-2xl
          transition-all duration-300
          hover:opacity-90
        "
      >
        <span>Download Now</span>
        <Download className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
      </a>
    </div>
  );
}