'use client';

import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Users, value: '10M+', label: 'Active Users', color: 'text-yaari-blue-light' },
  { icon: TrendingUp, value: '150+', label: 'Countries', color: 'text-yaari-pink' },
  { icon: Award, value: '50+', label: 'Awards Won', color: 'text-yaari-purple' },
];

const values = [
  {
    icon: Heart,
    title: 'User First',
    description: 'Every decision we make puts our users at the center. Your experience matters most.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We constantly push boundaries to bring you cutting-edge features and technology.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description: 'We believe in being open about how we work and how we handle your data.',
  },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-yaari-blue/10 rounded-full blur-[200px] -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass-card text-yaari-pink text-sm font-medium mb-6">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Building Bridges, <span className="gradient-text">Not Walls</span>
            </h2>

            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Yaari Zone was born from a simple belief: everyone deserves meaningful connections.
              In a world where digital interactions often feel impersonal, we set out to create
              a platform that brings people closer together.
            </p>

            <p className="text-white/60 leading-relaxed mb-8">
              Founded in 2020, we have grown from a small startup to a global community of millions.
              Our team of passionate engineers, designers, and community builders work tirelessly
              to ensure that every interaction on Yaari Zone is safe, enjoyable, and authentic.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Our Core <span className="gradient-text">Values</span>
            </h3>

            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="glass-card p-6 flex items-start gap-5 group hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yaari-blue to-yaari-pink flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-2">{value.title}</h4>
                  <p className="text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}

            <div className="glass-card-strong p-6 mt-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-yaari-blue to-yaari-pink border-2 border-background flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">{String.fromCharCode(65 + i)}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-white font-medium">Join our growing team</p>
                  <a href="#" className="text-yaari-blue-light text-sm hover:underline">
                    View open positions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
