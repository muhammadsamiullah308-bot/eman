"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Clock, Compass, Shield, Calculator, BookOpen, Heart, Star, Users, 
  ArrowRight, Zap, Globe, Smartphone, Palette, Settings, Filter,
  Search, Grid, List, ChevronDown, TrendingUp, Award, Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'all', name: 'All Tools', icon: Grid },
  { id: 'prayer', name: 'Prayer & Worship', icon: Clock },
  { id: 'learning', name: 'Learning', icon: BookOpen },
  { id: 'finance', name: 'Finance', icon: Calculator },
  { id: 'community', name: 'Community', icon: Users },
];

const tools = [
  {
    id: 1,
    icon: Clock,
    title: "AI Prayer Times",
    description: "Ultra-precise prayer times with AI-powered location detection, weather adjustments, and smart notifications.",
    gradient: "from-emerald-500 to-teal-500",
    category: "prayer",
    features: ["GPS Precision", "Weather Adaptive", "Smart Alerts"],
    rating: 4.9,
    users: "500K+",
    isNew: true,
    isPremium: true,
    delay: 0.1
  },
  {
    id: 2,
    icon: Compass,
    title: "Smart Qibla Finder",
    description: "Revolutionary Qibla direction with AR visualization, 3D compass, and satellite precision.",
    gradient: "from-blue-500 to-cyan-500",
    category: "prayer",
    features: ["AR Visualization", "3D Compass", "Satellite GPS"],
    rating: 4.8,
    users: "300K+",
    isNew: false,
    isPremium: true,
    delay: 0.2
  },
  {
    id: 3,
    icon: Shield,
    title: "Advanced Halal Checker",
    description: "AI-powered ingredient analysis with barcode scanning and comprehensive halal database.",
    gradient: "from-purple-500 to-violet-500",
    category: "learning",
    features: ["Barcode Scanner", "AI Analysis", "Global Database"],
    rating: 4.9,
    users: "750K+",
    isNew: true,
    isPremium: false,
    delay: 0.3
  },
  {
    id: 4,
    icon: Calculator,
    title: "Smart Zakat Calculator",
    description: "Comprehensive Zakat calculation with multiple madhabs, investment tracking, and automatic reminders.",
    gradient: "from-amber-500 to-orange-500",
    category: "finance",
    features: ["Multi-Madhab", "Investment Tracking", "Auto Reminders"],
    rating: 4.7,
    users: "200K+",
    isNew: false,
    isPremium: true,
    delay: 0.4
  },
  {
    id: 5,
    icon: BookOpen,
    title: "Interactive Quran",
    description: "Beautiful Quran reader with AI-powered tafsir, multiple reciters, and personalized learning.",
    gradient: "from-rose-500 to-pink-500",
    category: "learning",
    features: ["AI Tafsir", "Multiple Reciters", "Progress Tracking"],
    rating: 4.9,
    users: "1M+",
    isNew: false,
    isPremium: true,
    delay: 0.5
  },
  {
    id: 6,
    icon: Heart,
    title: "Digital Dhikr Counter",
    description: "Elegant tasbih with haptic feedback, goal tracking, and beautiful Islamic themes.",
    gradient: "from-indigo-500 to-purple-500",
    category: "prayer",
    features: ["Haptic Feedback", "Goal Tracking", "Custom Themes"],
    rating: 4.8,
    users: "400K+",
    isNew: false,
    isPremium: false,
    delay: 0.6
  },
  {
    id: 7,
    icon: Star,
    title: "Islamic Calendar Pro",
    description: "Complete Hijri calendar with event planning, moon phases, and global Islamic events.",
    gradient: "from-green-500 to-emerald-500",
    category: "learning",
    features: ["Event Planning", "Moon Phases", "Global Events"],
    rating: 4.6,
    users: "150K+",
    isNew: true,
    isPremium: true,
    delay: 0.7
  },
  {
    id: 8,
    icon: Users,
    title: "Muslim Community Hub",
    description: "Connect with Muslims worldwide, join study circles, and participate in community events.",
    gradient: "from-cyan-500 to-blue-500",
    category: "community",
    features: ["Global Network", "Study Circles", "Event Planning"],
    rating: 4.7,
    users: "250K+",
    isNew: true,
    isPremium: true,
    delay: 0.8
  }
];

const viewModes = [
  { id: 'grid', name: 'Grid View', icon: Grid },
  { id: 'list', name: 'List View', icon: List },
];

export function ToolsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const headerY = useTransform(scrollYProgress, [0, 1], [0, 25]);

  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'users':
        return parseInt(b.users.replace(/\D/g, '')) - parseInt(a.users.replace(/\D/g, ''));
      case 'newest':
        return b.isNew ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <section id="tools" ref={sectionRef} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Advanced Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-emerald-950/50"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          style={{ y: headerY }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-xl border border-emerald-200/20 dark:border-emerald-700/20 px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              50+ Premium Islamic Tools
            </span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl font-poppins font-black mb-8 text-headline">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Revolutionary Islamic
            </span>
            <br />
            <span className="gradient-text">Tools Collection</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed text-body-large">
            Experience the future of Islamic tools with AI-powered features, stunning design, 
            and lightning-fast performance. Everything you need for your spiritual journey.
          </p>
        </motion.div>

        {/* Advanced Filters & Search */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-lg"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg'
                    : 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50 text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Advanced Controls */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="users">Most Users</option>
                <option value="newest">Newest</option>
              </select>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="rounded-xl"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              {viewModes.map((mode) => (
                <Button
                  key={mode.id}
                  variant={viewMode === mode.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode(mode.id)}
                  className="rounded-xl"
                >
                  <mode.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Advanced Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-6 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-gray-200/50 dark:border-slate-700/50 rounded-2xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Rating
                    </label>
                    <select className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg">
                      <option>All Ratings</option>
                      <option>4.5+ Stars</option>
                      <option>4.0+ Stars</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Type
                    </label>
                    <select className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg">
                      <option>All Tools</option>
                      <option>Premium Only</option>
                      <option>Free Only</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Features
                    </label>
                    <select className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg">
                      <option>All Features</option>
                      <option>AI-Powered</option>
                      <option>Offline Support</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Tools Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>
          {sortedTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              className={`group relative ${viewMode === 'list' ? 'flex items-center space-x-6 p-6' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: tool.delay + index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/20 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:border-emerald-200 dark:group-hover:border-emerald-700 card-premium ${
                viewMode === 'list' ? 'flex-1' : 'p-8'
              }`}>
                {/* Premium Badge */}
                {tool.isPremium && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      PRO
                    </div>
                  </div>
                )}

                {/* New Badge */}
                {tool.isNew && (
                  <div className="absolute -top-2 -left-2 z-10">
                    <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      NEW
                    </div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
                
                <div className={viewMode === 'list' ? 'flex items-center space-x-6 p-6' : ''}>
                  {/* Icon */}
                  <motion.div
                    className={`bg-gradient-to-br ${tool.gradient} rounded-2xl flex items-center justify-center shadow-lg ${
                      viewMode === 'list' ? 'w-16 h-16 flex-shrink-0' : 'w-20 h-20 mb-6'
                    }`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    <tool.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className={viewMode === 'list' ? 'flex-1' : ''}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-poppins font-bold text-gray-800 dark:text-gray-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
                        {tool.title}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          {tool.rating}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {tool.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tool.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{tool.users}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>Trending</span>
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <span>Launch Tool</span>
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </span>
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto mb-8">
            <h3 className="text-3xl font-poppins font-bold mb-4 text-gray-800 dark:text-gray-100">
              Ready to Transform Your Islamic Journey?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join over 1 million Muslims worldwide who trust VismifyTools for their daily Islamic needs. 
              Experience the future of Islamic technology today.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Get Premium Access</span>
                </span>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg font-bold rounded-2xl border-2 border-emerald-200 dark:border-emerald-700 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <Smartphone className="w-5 h-5" />
                  <span>Download App</span>
                </span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}