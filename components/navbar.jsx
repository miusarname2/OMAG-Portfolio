"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";
import { Sun, Moon, Monitor, BookOpen, Home, ArrowLeft } from "lucide-react";

export function Navbar({ isArticle = false }) {
  const { theme, setTheme } = useTheme();
  const { language, changeLanguage, t, mounted } = useLanguage();
  const pathname = usePathname();

  if (!mounted) return null;

  const isBlogPage = pathname?.startsWith("/blog");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 pointer-events-auto">
        {/* Left Side: Navigation Button */}
        <div className="flex items-center gap-2">
          {isArticle ? (
            <Link
              href="/blog"
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-lg border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t("back_to_blog")}</span>
            </Link>
          ) : isBlogPage ? (
            <Link
              href="/"
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-lg border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              <Home className="w-4 h-4" />
              <span>{t("nav_home")}</span>
            </Link>
          ) : (
            <Link
              href="/blog"
              className="flex items-center space-x-2 px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-lg border border-slate-200/50 dark:border-slate-800/50 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-105"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t("nav_blog")}</span>
            </Link>
          )}
        </div>

        {/* Right Side: Toggles */}
        <div className="flex items-center gap-2 md:gap-3">
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
      </div>
    </header>
  );
}
