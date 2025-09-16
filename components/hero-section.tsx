"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Play, Star, Users, Zap, Shield, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { number: "1M+", label: "Active Users", icon: Users },
  { number: "99.99%", label: "Uptime", icon: Shield },
  { number: "<180ms", label: "Response Time", icon: Zap },
  { number: "195+", label: "Countries", icon: Globe }
];

const floatingElements = [
  { icon: "🕌", delay: 0, duration: 6 },
  { icon: "📿", delay: 1, duration: 8 },
  { icon: "🌙", delay: 2, duration: 7 },
  { icon: "⭐", delay: 3, duration: 9 },
  { icon: "🤲", delay: 4, duration: 6.5 },
];

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityRange = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section">
      {/* Advanced Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-blue-500/10 to-purple-600/20 dark:from-emerald-600/30 dark:via-blue-600/20 dark:to-purple-700/30"
        style={{ y: backgroundY }}
      >
        {/* Dynamic Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-400/40 to-teal-500/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-blue-400/40 to-cyan-500/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-400/40 to-pink-500/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Interactive Mouse-Following Gradient */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-300/20 to-blue-300/20 rounded-full filter blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x * 3,
            y: mousePosition.y * 3,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      </motion.div>

      {/* Floating Islamic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-20 dark:opacity-10"
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${30 + (index * 10)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            {element.icon}
          </motion.div>
        ))}
      </div>

      {/* Particle System */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/60 dark:bg-emerald-300/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center hero-content"
        style={{ y: textY, opacity: opacityRange }}
      >
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center mb-8"
        >
          <motion.div
            className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-xl border border-emerald-200/20 dark:border-emerald-700/20 px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-emerald-500" />
            </motion.div>
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              World's Most Advanced Islamic Platform
            </span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-6xl sm:text-7xl lg:text-8xl font-poppins font-black mb-8 leading-tight text-display"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.span 
            className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent gradient-text"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            VismifyTools
          </motion.span>
          <br />
          <motion.span 
            className="text-gray-800 dark:text-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Revolutionary
          </motion.span>
          <br />
          <motion.span 
            className="text-gray-700 dark:text-gray-200 text-5xl sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            Islamic Experience
          </motion.span>
        </motion.h1>

        {/* Enhanced Description */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-body-large">
            Experience the future of Islamic tools with AI-powered features, lightning-fast performance, 
            and stunning design. Trusted by over 1 million Muslims worldwide.
          </p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>99.99% Uptime</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>&lt;180ms Response</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>AI-Powered</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Premium CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-6 text-lg font-bold rounded-3xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 btn-premium"
              onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="flex items-center space-x-2">
                <span>Explore Premium Tools</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </Button>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="px-10 py-6 text-lg font-bold rounded-3xl border-2 border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 backdrop-blur-xl transition-all duration-300 group"
              onClick={() => setIsVideoPlaying(true)}
            >
              <span className="flex items-center space-x-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Premium Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div 
                className="text-3xl sm:text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-500 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4 aspect-video bg-gray-900 rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg">Demo video coming soon...</p>
                </div>
              </div>
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsVideoPlaying(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}