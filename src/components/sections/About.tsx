"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    image: "/icon-01.png",
    title: "Conversations that turn into RealFrnd-ships",
  },
  {
    image: "/icon-02.png",
    title: "Interactive Activities for Deeper Connections",
  },
  {
    image: "/icon-03.png",
    title: "Verified & Moderated Social Circles",
  },
  {
    image: "/icon-04.png",
    title: "Real Frnds, Real Conversations",
  },
];

export function About() {
  return (
    <section className="bg-[#f3f4f6] py-16 lg:py-18">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE (SINGLE IMAGE) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-start"
          >
            <Image
              src="/lets-talk.webp" // 👈 ek hi final image (same like screenshot)
              alt="RealFrnd visual"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-tight">
              Why RealFrnd, Not Just Any Friend?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
                >
                <div className="w-12 h-12 flex items-center justify-center bg-white-100 rounded-xl">
  <Image
    src={item.image}
    alt={item.title}
    width={50}
    height={50}
    className="object-contain"
  />
</div>

                  <p className="text-gray-800 font-medium leading-snug">
                    {item.title}
                  </p>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}