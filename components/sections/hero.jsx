"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { useRole } from "@/components/role-provider";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

export function HeroSection() {
  const { t, mounted } = useLanguage();
  const { role } = useRole();

  if (!mounted) return null;

  const cvFile = role === 'ai' ? '/Cvs/Oscar M Alvarez G .pdf' : '/Cvs/Oscar M Alvarez G Full Stack.pdf';
  const roleSubtitle = role === 'ai' 
    ? 'AI Engineer | Machine Learning | Data Science'
    : t("hero_title");

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-4 md:px-8">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-blue-500/10 dark:bg-cyan-500/5 blur-[80px] md:blur-[120px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 dark:bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl shrink-0 group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
          <img
            alt="Oscar M Alvarez G"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            src="/Image.jpg"
          />
        </motion.div>

        <div className="flex-1 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white"
          >
            Oscar M <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">Alvarez G</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed"
          >
            {roleSubtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            <Link
              className="group flex items-center justify-center px-6 h-12 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-md shadow-indigo-500/20"
              href={cvFile}
              target="_blank"
            >
              Descargar CV
            </Link>
            <Link
              className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:bg-slate-50 dark:hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-indigo-500/25"
              href="https://github.com/miusarname2"
              target="_blank"
            >
              <GithubIcon className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors" />
            </Link>
            <Link
              className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:bg-slate-50 dark:hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-blue-500/25"
              href="https://www.linkedin.com/in/oscar-mauricio-alvarez-dev"
              target="_blank"
            >
              <LinkedinIcon className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors" />
            </Link>
            <Link
              className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full hover:bg-slate-50 dark:hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-cyan-500/25"
              href="https://twitter.com/OscarMAlarezDev"
              target="_blank"
            >
              <TwitterIcon className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-white transition-colors" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
