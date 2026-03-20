// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import Image from "next/image";

// export function Hero() {
//   const slides = [
//     {
//       image: "/hero-01.webp",
//       title: "First Call",
//       subtitle: "only ₹1",
//       desc: "Start the Talk, Start the fun",
//     },
//     {
//       image: "/hero-02.webp",
//       title: "Voice & Video ",
//       subtitle: " Calls",
//       desc: "Call & Connect now",
//     },
//     {
//       image: "/hero-03.webp",
//       title: "RealFrnd: ",
//       subtitle: " Where Real  ",
//       desc: "  Bonds Begin",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative min-h-[80vh] overflow-hidden pt-16 sm:pt-20">

//       {/* Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(139,92,246,0.2),transparent_40%),#020617]" />

//       {/* ── MOBILE layout (< md): stacked, image below text ── */}
//       <div className="md:hidden relative z-10 flex flex-col min-h-[80vh]">

//         {/* Text block */}
//         <div className="px-6 pt-10 pb-6">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -24 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 24 }}
//               transition={{ duration: 0.4 }}
//             >
//               <h1 className="text-4xl font-extrabold text-white leading-tight mb-2">
//                 {slides[index].title}
//                 <br />
//                 <span className="gradient-text">{slides[index].subtitle}</span>
//               </h1>
//               <p className="text-3xl font-bold text-white leading-tight">
//                 {slides[index].desc}
//               </p>
//             </motion.div>
//           </AnimatePresence>

//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block mt-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
//           >
//             <img src="/google-play.png" alt="Get it on Google Play" className="h-14" />
//           </a>
//         </div>

//         {/* Hero image — flush to bottom, centered, full visible */}
//         <div className="flex-1 flex items-end justify-center px-4 pb-0">
//           <div className="relative w-full max-w-[320px]">
//             <div className="absolute bottom-0 inset-x-0 h-[50%] blur-3xl bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-transparent rounded-full" />
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 32 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -32 }}
//                 transition={{ duration: 0.4 }}
//                 className="relative w-full"
//               >
//                 <Image
//                   src={slides[index].image}
//                   width={460}
//                   height={780}
//                   priority
//                   className="w-full h-auto object-contain drop-shadow-2xl"
//                   alt="hero"
//                 />
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>

//       {/* ── DESKTOP layout (≥ md): original design unchanged ── */}

//       {/* TEXT SECTION */}
//       <div className="hidden md:flex relative z-10 max-w-[85rem] mx-auto lg:pr-[114px] min-h-[80vh] items-center">
//         <div className="max-w-[42rem] pb-20 md:pb-0">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 30 }}
//               transition={{ duration: 0.45 }}
//             >
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
//                 {slides[index].title}
//                 <br />
//                 <span className="gradient-text">
//                   {slides[index].subtitle}
//                 </span>
//               </h1>
//               <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
//                 {slides[index].desc}
//               </p>
//             </motion.div>
//           </AnimatePresence>

//           <a
//             href="#"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block backdrop-blur-md bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
//           >
//             <img src="/google-play.png" alt="playstore" className="h-20 sm:h-16 w-[200px]" />
//           </a>
//         </div>
//       </div>

//       {/* IMAGE SECTION — original absolute positioning for desktop */}
//       <div className="hidden md:flex absolute bottom-0 right-0 left-auto justify-end px-6 lg:px-[114px] pointer-events-none">
//         <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] xl:w-[460px]">
//           <div className="absolute bottom-0 w-full h-[60%] blur-3xl bg-gradient-to-tr from-blue-500/30 via-purple-500/20 to-transparent rounded-full" />
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.45 }}
//               className="w-full flex justify-center"
//             >
//               <Image
//                 src={slides[index].image}
//                 width={460}
//                 height={780}
//                 priority
//                 className="object-contain drop-shadow-2xl translate-y-4 md:translate-y-0"
//                 alt="hero"
//               />
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//     </section>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const slides = [
    {
      image: "/hero-01.webp",
      title: "First Call",
      subtitle: "only ₹1",
      desc: "Start the Talk, Start the fun",
    },
    {
      image: "/hero-02.webp",
      title: "Voice & Video ",
      subtitle: " Calls",
      desc: "Call & Connect now",
    },
    {
      image: "/hero-03.webp",
      title: "RealFrnd: ",
      subtitle: " Where Real  ",
      desc: "  Bonds Begin",
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
    <section className="relative min-h-[80vh] overflow-hidden pt-16 sm:pt-20">

      {/* Background — Yaari Zone: deep blue with pink/magenta glow */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(circle at 20% 20%, rgba(233,30,140,0.28) 0%, transparent 40%), radial-gradient(circle at 80% 0%, rgba(21,101,216,0.35) 0%, transparent 45%), #0D1B4B"
      }} />

      {/* ── MOBILE layout (< md): stacked, image below text ── */}
      <div className="md:hidden relative z-10 flex flex-col min-h-[80vh]">

        {/* Text block */}
        <div className="px-6 pt-10 pb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-4xl font-extrabold text-white leading-tight mb-2">
                {slides[index].title}
                <br />
                {/* gradient-text replaced with Yaari Zone pink→blue inline style */}
                <span style={{
                  background: "linear-gradient(90deg, #E91E8C 0%, #1565D8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  {slides[index].subtitle}
                </span>
              </h1>
              <p className="text-3xl font-bold text-white leading-tight">
                {slides[index].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 rounded-xl hover:opacity-90 transition"
            style={{
              backdropFilter: "blur(12px)",
              background: "rgba(233,30,140,0.08)",
              border: "1px solid rgba(233,30,140,0.25)",
            }}
          >
            <img src="/google-play.png" alt="Get it on Google Play" className="h-14" />
          </a>
        </div>

        {/* Hero image — flush to bottom, centered, full visible */}
        <div className="flex-1 flex items-end justify-center px-4 pb-0">
          <div className="relative w-full max-w-[320px]">
            {/* glow: pink + blue matching logo */}
            <div className="absolute bottom-0 inset-x-0 h-[50%] blur-3xl rounded-full" style={{
              background: "linear-gradient(135deg, rgba(233,30,140,0.35) 0%, rgba(21,101,216,0.25) 100%)"
            }} />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -32 }}
                transition={{ duration: 0.4 }}
                className="relative w-full"
              >
                <Image
                  src={slides[index].image}
                  width={460}
                  height={780}
                  priority
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  alt="hero"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout (≥ md): original design unchanged ── */}

      {/* TEXT SECTION */}
      <div className="hidden md:flex relative z-10 max-w-[85rem] mx-auto lg:pr-[114px] min-h-[80vh] items-center">
        <div className="max-w-[42rem] pb-20 md:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.45 }}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {slides[index].title}
                <br />
                <span style={{
                  background: "linear-gradient(90deg, #E91E8C 0%, #1565D8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  {slides[index].subtitle}
                </span>
              </h1>
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {slides[index].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl hover:opacity-90 transition"
            style={{
              backdropFilter: "blur(12px)",
              background: "rgba(233,30,140,0.08)",
              border: "1px solid rgba(233,30,140,0.25)",
            }}
          >
            <img src="/google-play.png" alt="playstore" className="h-20 sm:h-16 w-[200px]" />
          </a>
        </div>
      </div>

      {/* IMAGE SECTION — original absolute positioning for desktop */}
      <div className="hidden md:flex absolute bottom-0 right-0 left-auto justify-end px-6 lg:px-[114px] pointer-events-none">
        <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] xl:w-[460px]">
          {/* glow: pink + blue */}
          <div className="absolute bottom-0 w-full h-[60%] blur-3xl rounded-full" style={{
            background: "linear-gradient(135deg, rgba(233,30,140,0.35) 0%, rgba(21,101,216,0.25) 100%)"
          }} />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.45 }}
              className="w-full flex justify-center"
            >
              <Image
                src={slides[index].image}
                width={460}
                height={780}
                priority
                className="object-contain drop-shadow-2xl translate-y-4 md:translate-y-0"
                alt="hero"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
}