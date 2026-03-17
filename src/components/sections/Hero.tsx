'use client';

import { MessageCircle, Video, Users, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 animated-bg" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-yaari-blue/30 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yaari-pink/30 rounded-full blur-[150px] animate-pulse-glow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yaari-purple/20 rounded-full blur-[200px] animate-pulse-glow animation-delay-4000" />
      </div>

      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Now Available on iOS & Android</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Connect with <span className="gradient-text">Real Friends</span>
            <br />
            Anytime, Anywhere
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Chat, video call, and meet new people easily. Yaari Zone brings you closer to your friends
            with seamless communication and real connections.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="#download"
              className="btn-gradient-blue flex items-center gap-3 text-lg px-8 py-4 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              Download App
            </a>
            <a
              href="#chat"
              className="btn-outline-glass flex items-center gap-3 text-lg px-8 py-4 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Start Chatting
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: '10M+', label: 'Active Users' },
              { value: '50M+', label: 'Downloads' },
              { value: '4.9', label: 'App Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            {
              icon: Video,
              title: 'HD Video Calls',
              description: 'Crystal clear video quality',
              gradient: 'from-yaari-blue to-yaari-blue-light',
            },
            {
              icon: MessageCircle,
              title: 'Instant Messaging',
              description: 'Real-time chat experience',
              gradient: 'from-yaari-pink to-yaari-purple',
            },
            {
              icon: Users,
              title: 'Group Chats',
              description: 'Connect with multiple friends',
              gradient: 'from-yaari-purple to-yaari-blue',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="glass-card-strong p-6 flex items-center gap-4 group hover:scale-105 transition-transform duration-500"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
