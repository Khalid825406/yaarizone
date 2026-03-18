"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const slides = [
    {
      image: "/hero-02.webp",
      title: "RealFrnd:",
      subtitle: "Where Real Bonds Begin",
      desc: "Connect instantly with real people through voice.",
    },
    {
      image: "/hero-02.webp",
      title: "Voice First Experience",
      subtitle: "Talk Freely",
      desc: "Enjoy smooth and clear voice conversations anytime.",
    },
    {
      image: "/hero-02.webp",
      title: "Real Connections",
      subtitle: "No Filters Needed",
      desc: "Build genuine connections with just your voice.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-16 sm:pt-20">
      {/* Background */}
      <div className="absolute inset-0 animated-bg" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-20 py-10 sm:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">

          {/* LEFT — Text Slider */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">
            {/* Fixed min-height prevents layout shift during slide transitions */}
            <div className="min-h-[150px] sm:min-h-[260px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.45 }}
                >
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    {slides[index].title}
                    <br />
                    <span className="gradient-text">{slides[index].subtitle}</span>
                  </h1>

                  <p className="text-white/70 text-base sm:text-lg mb-6 sm:mb-8 max-w-sm mx-auto md:mx-0">
                    {slides[index].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

           

            {/* Play Store Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.real11.realfrnd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 active:scale-95 transition-transform duration-200"
            >
              <img
                src="/google-play.png"
                alt="Get it on Google Play"
                className="h-10 sm:h-12"
              />
            </a>
          </div>

          {/* RIGHT — Image Slider */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            {/*
              On mobile: smaller height so it doesn't dominate the screen.
              On tablet+: standard 600px height.
            */}
            <div className="relative w-[300px] sm:w-[260px] md:w-[300px] lg:w-[340px] xl:w-[360px] h-[380px] sm:h-[480px] md:h-[560px] lg:h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[index].image}
                    alt={`App preview — ${slides[index].title}`}
                    fill
                    priority
                    className="object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}