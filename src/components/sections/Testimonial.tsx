"use client";

import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    avatar: "SJ",
    content:
      "Yaari Zone has completely transformed how I connect with my audience.",
    rating: 5,
    gradient: "from-yaari-blue to-yaari-blue-light",
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    avatar: "MC",
    content: "Privacy features and encryption give me peace of mind.",
    rating: 5,
    gradient: "from-yaari-pink to-yaari-purple",
  },
  {
    name: "Emma Williams",
    role: "College Student",
    avatar: "EW",
    content: "Met amazing friends here. Chat rooms are awesome!",
    rating: 5,
    gradient: "from-yaari-purple to-yaari-pink",
  },
  {
    name: "David Park",
    role: "Business Owner",
    avatar: "DP",
    content: "Perfect for team communication. Game changer!",
    rating: 5,
    gradient: "from-yaari-blue to-yaari-purple",
  },
  {
    name: "Lisa Anderson",
    role: "Travel Blogger",
    avatar: "LA",
    content: "Staying connected while traveling is super easy.",
    rating: 5,
    gradient: "from-yaari-pink to-yaari-blue",
  },
  {
    name: "James Miller",
    role: "Music Producer",
    avatar: "JM",
    content: "Audio quality is insane. No lag at all.",
    rating: 5,
    gradient: "from-yaari-purple to-yaari-blue-light",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);

    return () => window.removeEventListener("resize", updateCards);
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
    <section className="py-24 overflow-hidden">
      
      {/* ✅ 90% container */}
      <div className="w-[90%] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">
            Loved by <span className="gradient-text">Millions</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="relative ">

          <div className="overflow-hidden py-8 ">
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
                  <div className="glass-card p-6 h-full rounded-2xl hover:scale-105 transition-all duration-300">

                    {/* Quote */}
                    <Quote className="w-8 h-8 mb-3 opacity-30" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-white/80 mb-4 text-sm leading-relaxed">
                      "{item.content}"
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-3 mt-auto">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center`}
                      >
                        <span className="text-white text-sm font-bold">
                          {item.avatar}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-white text-sm font-semibold">
                          {item.name}
                        </h4>
                        <p className="text-white/50 text-xs">
                          {item.role}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
} 