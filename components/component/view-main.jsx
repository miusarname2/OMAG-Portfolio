"use client";

import { useLanguage } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { RoleProvider } from "@/components/role-provider";
import { IntroScreen } from "@/components/intro-screen";

export function ViewMain() {
  const { mounted } = useLanguage();

  if (!mounted) return null;

  return (
    <RoleProvider>
      <div className="w-full relative z-10 selection:bg-indigo-500/30">
        <IntroScreen />
        <Navbar />

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
    </RoleProvider>
  );
}
