"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { useRole } from "@/components/role-provider";
import {
  siReact,
  siNextdotjs,
  siNodedotjs,
  siTypescript,
  siPython,
  siPhp,
  siLaravel,
  siMysql,
  siPostgresql,
  siMongodb,
  siTailwindcss,
  siDocker,
  siTensorflow,
  siPytorch,
  siScikitlearn,
  siPandas,
  siKeras,
  siJupyter,
  siOpenai
} from "simple-icons";

function SimpleIcon({ icon, className = "" }) {
  if (!icon) return null; // Fallback just in case simple-icons doesn't export one
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
}

const fsSkills = [
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Node.js", icon: siNodedotjs },
  { name: "TypeScript", icon: siTypescript },
  { name: "Python", icon: siPython },
  { name: "PHP", icon: siPhp },
  { name: "Laravel", icon: siLaravel },
  { name: "MySQL", icon: siMysql },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "MongoDB", icon: siMongodb },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Docker", icon: siDocker },
];

const aiSkills = [
  { name: "Python", icon: siPython },
  { name: "TensorFlow", icon: siTensorflow },
  { name: "PyTorch", icon: siPytorch },
  { name: "Scikit-Learn", icon: siScikitlearn },
  { name: "Pandas", icon: siPandas },
  { name: "Keras", icon: siKeras },
  { name: "Jupyter", icon: siJupyter },
  { name: "OpenAI", icon: siOpenai },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "MongoDB", icon: siMongodb },
  { name: "Docker", icon: siDocker },
];

export function SkillsSection() {
  const { t, mounted } = useLanguage();
  const { role } = useRole();

  if (!mounted) return null;

  const currentSkills = role === 'ai' ? aiSkills : fsSkills;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400 dark:from-indigo-400 dark:to-cyan-300">
              {t("core_tech")}
            </span>
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap gap-6 py-4 items-center group-hover:[animation-play-state:paused] transition-all duration-300">
          {[...currentSkills, ...currentSkills, ...currentSkills].map((skill, index) => (
            <motion.div
              key={`skill-${index}`}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center space-x-4 px-6 py-4 bg-white/50 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl shadow-sm border border-slate-200 dark:border-white/10 flex-shrink-0"
            >
              <div className="flex items-center justify-center p-2 bg-slate-100 dark:bg-slate-900/50 rounded-xl">
                <SimpleIcon icon={skill.icon} className="w-8 h-8" />
              </div>
              <span className="font-bold text-slate-700 dark:text-slate-200">{skill.name}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Fade gradients */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 dark:from-[#0f172a] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 dark:from-[#0f172a] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
