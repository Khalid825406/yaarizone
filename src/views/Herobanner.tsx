"use client";

import Image from "next/image";

interface HeroBannerProps {
  title: string;
}

export function HeroBanner({ title }: HeroBannerProps) {
  return (
    <div
      className="
        relative mt-16 sm:mt-24
        h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px]
        flex items-center justify-center text-center overflow-hidden
        bg-[#0a0f1e]
      "
      role="banner"
    >
      {/* Background Image */}
      <Image
        src="/common-wv.webp"
        alt="Banner Background"
        fill
        priority
        className="object-center "
      />

   
      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6">
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            font-bold text-white leading-tight tracking-tight drop-shadow-lg
          "
        >
          {title}
        </h1>

     </div>
    </div>
  );
}