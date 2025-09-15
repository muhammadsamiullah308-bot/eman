"use client";

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Globe, Zap, Shield, Heart, Users, Award, TrendingUp, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Available worldwide with multi-language support and cultural adaptations",
    stats: "195+ Countries",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized for speed with <180ms response time and 99.99% uptime",
    stats: "<180ms Response",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    description: "Your data stays private with end-to-end encryption and zero tracking",
    stats: "100% Secure",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Built by Muslims for the Muslim community with authentic Islamic values",
    stats: "1M+ Users",
    color: "from-red-500 to-pink-500"
  }
];

const achievements = [
  { icon: Users, number: "1M+", label: "Active Users", description: "Muslims worldwide trust our platform" },
  { icon: Star, number: "4.9", label: "App Rating", description: "Highest rated Islamic app" },
  { icon: Globe, number: "195+", label: "Countries", description: "Global reach and accessibility" },
  { icon: Award, number: "50+", label: "Awards", description: "Industry recognition and excellence" },
  { icon: TrendingUp, number: "99.99%", label: "Uptime", description: "Reliable service guarantee" },
  { icon: CheckCircle, number: "24/7", label: "Support", description: "Always here to help you" }
];

const testimonials = [
  {
    name: "Ahmed Hassan",
    location: "Cairo, Egypt",
    avatar: "👨‍💼",
    rating: 5,
    text: "VismifyTools has transformed my daily Islamic practices. The prayer times are incredibly accurate and the Qibla finder works perfectly even in remote areas."
  },
  {
    name: "Fatima Al-Zahra",
    location: "London, UK",
    avatar: "👩‍🎓",
    rating: 5,
    text: "As a busy professional, having all Islamic tools in one place is a blessing. The interface is beautiful and the features are comprehensive."
  },
  {
    name: "Muhammad Ali",
    location: "Jakarta, Indonesia",
    avatar: "👨‍🏫",
    rating: 5,
    text: "The Quran reader with AI-powered tafsir has deepened my understanding. This platform is truly revolutionary for Muslim communities."
  }
];

export function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Advanced Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-emerald-950/50"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/30 dark:bg-emerald-300/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-xl border border-emerald-200/20 dark:border-emerald-700/20 px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              Trusted by 1M+ Muslims Worldwide
            </span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-poppins font-black mb-8 text-headline">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              About
            </span>
            <br />
            <span className="gradient-text">VismifyTools</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-body-large">
              VismifyTools represents the pinnacle of Islamic technology, combining cutting-edge AI, 
              stunning design, and authentic Islamic values to create the world's most advanced 
              Islamic platform.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
              Our mission is to empower Muslims worldwide with tools that enhance their spiritual journey 
              while maintaining the highest standards of accuracy, privacy, and Islamic authenticity.
            </p>
          </div>
        </motion.div>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-emerald-200 dark:group-hover:border-emerald-700 card-premium h-full">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-poppins font-bold mb-4 text-gray-800 dark:text-gray-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Stats */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    {feature.stats}
                  </span>
                  <motion.div
                    className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2 }}
                  >
                    <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-poppins font-bold mb-4 text-gray-800 dark:text-gray-100">
              Achievements & Recognition
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence has earned us recognition from the global Muslim community
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {achievement.number}
                </motion.div>
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-poppins font-bold mb-4 text-gray-800 dark:text-gray-100">
              What Our Community Says
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Real feedback from Muslims around the world who trust VismifyTools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-emerald-200 dark:group-hover:border-emerald-700 h-full">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 dark:text-gray-100">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="max-w-3xl mx-auto mb-8">
            <h3 className="text-4xl font-poppins font-bold mb-6 text-gray-800 dark:text-gray-100">
              Join the Islamic Technology Revolution
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Experience the future of Islamic tools today. Join over 1 million Muslims who have 
              already transformed their spiritual journey with VismifyTools.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg"
                className="px-10 py-6 text-lg font-bold rounded-2xl border-2 border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Join Community</span>
                </span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}