"use client";

import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Mail, MapPin, Phone, Globe, Star, ArrowUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  product: [
    { name: 'Prayer Times', href: '#' },
    { name: 'Qibla Finder', href: '#' },
    { name: 'Halal Checker', href: '#' },
    { name: 'Zakat Calculator', href: '#' },
    { name: 'Quran Reader', href: '#' },
    { name: 'All Tools', href: '#tools' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Mission', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  resources: [
    { name: 'Help Center', href: '#' },
    { name: 'API Documentation', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Islamic Calendar', href: '#' },
    { name: 'Prayer Guide', href: '#' },
    { name: 'Tutorials', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR Compliance', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Licenses', href: '#' },
  ],
};

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-gray-600' },
  { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
  { icon: Mail, label: 'Email', href: 'mailto:support@vismifytools.com', color: 'hover:text-emerald-400' },
];

const awards = [
  { name: 'Best Islamic App 2024', org: 'Islamic Tech Awards' },
  { name: 'Innovation Excellence', org: 'Muslim Innovation Hub' },
  { name: 'Community Choice', org: 'Islamic App Store' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(16,185,129,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(168,85,247,0.2),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Arabic Greeting */}
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h3 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              جزاک اللہُ خیراً
            </h3>
            <p className="text-xl text-gray-300 mb-2">
              May Allah reward you with goodness
            </p>
            <p className="text-sm text-gray-400">
              Thank you for being part of our Islamic community
            </p>
          </motion.div>

          {/* Logo and Description */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-2xl">V</span>
              </motion.div>
              <div className="text-left">
                <span className="font-poppins font-bold text-3xl block">VismifyTools</span>
                <span className="text-sm text-emerald-300 font-medium">Premium Islamic Platform</span>
              </div>
            </div>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
              Empowering Muslims worldwide with cutting-edge Islamic tools. 
              Built with love, powered by AI, trusted by millions.
            </p>
          </motion.div>

          {/* Awards */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <div className="text-left">
                  <div className="text-sm font-semibold">{award.name}</div>
                  <div className="text-xs text-gray-400">{award.org}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Links Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={category}>
              <h4 className="text-lg font-bold mb-6 text-emerald-300 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 font-medium flex items-center group"
                      whileHover={{ x: 4 }}
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Contact & Social Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-300">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">Global Headquarters</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:support@vismifytools.com" className="text-gray-300 hover:text-emerald-300 transition-colors">
                  support@vismifytools.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-300">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className={`p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 ${link.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Join our community of 1M+ Muslims worldwide
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-emerald-300">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Get the latest Islamic tools and features delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <Button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2025 VismifyTools. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>for the Ummah.</span>
            </div>

            {/* Language & Back to Top */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Available in 8 languages</span>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                className="p-3 bg-emerald-500 hover:bg-emerald-600 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-5 h-5" />
                <span className="sr-only">Back to top</span>
              </motion.button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </span>
              <span>•</span>
              <span>99.99% Uptime SLA</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
              <span>•</span>
              <span>GDPR Compliant</span>
            </div>
            <p className="mt-4 text-xs text-gray-500 max-w-4xl mx-auto">
              VismifyTools is committed to providing authentic Islamic tools while respecting user privacy and data security. 
              All prayer times and Islamic calculations are verified by Islamic scholars and institutions.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}