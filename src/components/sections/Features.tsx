'use client';

import { useEffect, useRef, useState } from 'react';
import {
  MessageSquare,
  Heart,
  Shield,
  Zap,
  Globe,
  Sparkles,
  Lock,
  Smartphone,
  Mic,
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Mic,
    title: 'Voice Calling',
    description:
      'Connect instantly with people through high-quality voice calls. Enjoy smooth and real-time conversations without interruptions.',
    gradient: 'from-yaari-blue to-yaari-blue-light',
    glowColor: 'shadow-glow-blue',
  },
  {
    icon: Heart,
    title: 'Real Connections',
    description:
      'Build genuine connections using your voice. No filters, no distractions — just real conversations with real people.',
    gradient: 'from-yaari-pink to-yaari-purple',
    glowColor: 'shadow-glow-pink',
  },
  {
    icon: Globe,
    title: 'Discover People',
    description:
      'Find and talk to new people from different places. Expand your network and meet interesting voices worldwide.',
    gradient: 'from-yaari-purple to-yaari-blue',
    glowColor: 'shadow-glow-blue',
  },
];

const additionalFeatures = [
  {
    icon: Shield,
    title: 'Secure Calls',
    description: 'Your voice conversations are safe and private',
  },
  {
    icon: Zap,
    title: 'Fast Connection',
    description: 'Instantly connect without delays',
  },
  {
    icon: Globe,
    title: 'Global Users',
    description: 'Talk with people around the world',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'You stay in control of your data',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Smooth experience on all devices',
  },
  {
    icon: Sparkles,
    title: 'Simple UI',
    description: 'Clean and easy-to-use interface',
  },
];

export function Features() {
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
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yaari-blue/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yaari-pink/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-yaari-blue-light text-sm font-medium mb-6">
            Voice First Features
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience the Power of{' '}
            <span className="gradient-text">Voice Connection</span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            RealFrnd is designed to help you connect with real people using voice.
            Simple, fast, and focused on meaningful conversations.
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="feature-card group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${feature.glowColor}`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                {feature.title}
              </h3>

              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-yaari-blue-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            And Much <span className="gradient-text">More</span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1,
                }}
                className="glass-card p-5 text-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-yaari-blue/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-yaari-blue-light" />
                </div>

                <h4 className="text-white font-medium text-sm mb-1">
                  {feature.title}
                </h4>

                <p className="text-white/50 text-xs">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}