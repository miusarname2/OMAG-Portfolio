"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";

export function ExperienceSection() {
  const { t, mounted } = useLanguage();

  if (!mounted) return null;

  const experiences = [
    {
      id: "botslovers",
      titleKey: "title_fullstack",
      company: "Botslovers",
      dateKey: "date_botslovers",
    },
    {
      id: "avance",
      titleKey: "title_software",
      company: "Corporacion Avance",
      dateKey: "date_avance",
    },
    {
      id: "ag",
      titleKey: "title_backend",
      company: "AG Consultores y Asociados",
      dateKey: "date_ag",
    },
    {
      id: "soltic",
      titleKey: "title_junior",
      company: "Soltic",
      dateKey: "date_soltic",
    },
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400 dark:from-indigo-400 dark:to-cyan-300">
              {t("work_exp")}
            </span>
          </h2>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-[#0f172a] bg-indigo-500 dark:bg-indigo-400 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/50 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-sm group-hover:shadow-md group-hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-semibold text-indigo-500 dark:text-cyan-400 tracking-wider uppercase">
                    {t(exp.dateKey)}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t(exp.titleKey)}
                  </h3>
                  <span className="text-slate-600 dark:text-slate-400 font-medium">
                    {exp.company}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
