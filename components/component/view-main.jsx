"use client";

import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";
import { Sun, Moon, Monitor } from "lucide-react";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";

export function ViewMain() {
  const { theme, setTheme } = useTheme();
  const { language, changeLanguage, mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <div className="w-full relative z-10 selection:bg-indigo-500/30">
      {/* Fixed Toggles Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-end gap-3 pointer-events-auto">
          {/* Language Toggle */}
          <div className="flex bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-full shadow-lg border border-slate-200/50 dark:border-slate-800/50 p-1">
            <button
              onClick={() => changeLanguage('en')}
              className={`flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${language === 'en' ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              <span className="text-sm leading-none">🇺🇸</span> <span>EN</span>
            </button>
            <button
              onClick={() => changeLanguage('es')}
              className={`flex items-center justify-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${language === 'es' ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
            >
              <span className="text-sm leading-none">🇪🇸</span> <span>ES</span>
            </button>
          </div>

          {/* Theme Toggle */}
          <div className="flex bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-full shadow-lg border border-slate-200/50 dark:border-slate-800/50 p-1">
            <button
              onClick={() => setTheme('light')}
              className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              title="Light Mode"
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              title="Dark Mode"
            >
              <Moon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setTheme('system')}
              className={`flex items-center justify-center p-2 rounded-full transition-all duration-300 ${theme === 'system' ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              title="System Preference"
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-8 md:gap-16">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} Oscar M Alvarez G. All rights reserved.</p>
        <p className="mt-1">Designed & Built with <span className="text-red-500">♥</span></p>
      </footer>
    </div>
  );
}
