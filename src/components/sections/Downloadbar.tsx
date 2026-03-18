'use client';

import { Download } from 'lucide-react';

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
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center justify-center gap-2.5
          w-full
          max-w-xl mx-auto
          bg-gradient-to-r from-[#0f2b8a] to-[#1a3fc4]
          hover:from-[#1a3fc4] hover:to-[#0f2b8a]
          active:scale-[0.98]
          text-white font-semibold
          text-sm sm:text-base
          px-6 py-3.5 sm:py-4
          rounded-2xl
          shadow-lg shadow-blue-900/40
          transition-all duration-300
        "
      >
        <span>Download Now</span>
        <Download className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
      </a>
    </div>
  );
}