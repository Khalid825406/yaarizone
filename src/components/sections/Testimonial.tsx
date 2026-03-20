"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priyanka",
    image: "/user1.png",
    content:
      "Mujhe lagta tha online dosti fake hoti hai, but YaariZone pe mujhe genuine like-minded log mile. Yahan pics ki tension hi nahi, bas audio/video mein securely baatein karo dil se. Ab toh roz naye logon se baatein karti hoon.",
  },
  {
    name: "Suhani",
    image: "/user2.png",
    content:
      "Since I joined Real Frnd, other apps felt too much like dating or just scrolling. It’s more about real talks and finding people who actually vibe with you. Honestly feels safe and chill here.",
  },
  {
    name: "Gautam",
    image: "/user3.png",
    content:
      "I joined just to try, but ended up staying because it doesn’t feel fake. No pressure of photos, no judgement – just people talking and having fun. I even made a small group that feels like fam now.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index, cardsToShow]);

  const nextSlide = () => {
    setIndex((prev) =>
      (prev + 1) % (testimonials.length - cardsToShow + 1)
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0
        ? testimonials.length - cardsToShow
        : prev - 1
    );
  };

  return (
    <section className="bg-[#f3f4f6] ">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-16">
          Our users love us ❤️
        </h2>

        {/* Slider */}
        <div className="relative">

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (index * 100) / cardsToShow
                }%)`,
              }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="px-3"
                  style={{
                    minWidth: `${100 / cardsToShow}%`,
                  }}
                >
                  {/* Card */}
                  <div className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-md transition h-full">

                    {/* User */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={56}
                          height={56}
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.name}
                        </h3>

                        <div className="text-yellow-400 text-sm">
                          ★★★★★
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed text-sm">
                      “{item.content}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft  className="text-black"/>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="text-black"/>
          </button>

        </div>
      </div>
    </section>
  );
}