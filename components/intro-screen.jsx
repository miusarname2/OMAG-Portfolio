"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Code2, BrainCircuit } from "lucide-react";
import { useRole } from "./role-provider";
import { useLanguage } from "./language-provider";

export function IntroScreen() {
  const { role, setRole } = useRole();
  const { language } = useLanguage();

  const handleSelect = (selectedRole) => {
    setRole(selectedRole);
  };

  const texts = {
    en: {
      title: "Choose Your Experience",
      fullstack: "Full Stack Developer",
      ai: "AI Engineer",
      fsDesc: "Explore my work building robust web applications and scalable systems.",
      aiDesc: "Discover my projects in machine learning, AI agents, and data science."
    },
    es: {
      title: "Elige tu Experiencia",
      fullstack: "Full Stack Developer",
      ai: "AI Engineer",
      fsDesc: "Explora mi trabajo construyendo aplicaciones web robustas y sistemas escalables.",
      aiDesc: "Descubre mis proyectos en machine learning, agentes de IA y ciencia de datos."
    }
  };

  const t = texts[language] || texts.en;

  return (
    <AnimatePresence>
      {!role && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent dark:from-indigo-500/5"
            />
          </div>

          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-12 text-center tracking-tight z-10"
          >
            {t.title}
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 z-10 max-w-4xl w-full">
            {/* Full Stack Card */}
            <motion.button
              onClick={() => handleSelect('fullstack')}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 p-8 text-left border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                  <Code2 size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {t.fullstack}
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  {t.fsDesc}
                </p>
              </div>
            </motion.button>

            {/* AI Engineer Card */}
            <motion.button
              onClick={() => handleSelect('ai')}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 p-8 text-left border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <BrainCircuit size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {t.ai}
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  {t.aiDesc}
                </p>
              </div>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
