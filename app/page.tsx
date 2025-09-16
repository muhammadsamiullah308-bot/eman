import { HeroSection } from '@/components/hero-section';
import { ToolsSection } from '@/components/tools-section';
import { AboutSection } from '@/components/about-section';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950 transition-colors duration-700">
      <Navbar />
      <HeroSection />
      <ToolsSection />
      <AboutSection />
      <Footer />
    </main>
  );
}