"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { useRole } from "@/components/role-provider";
import { GithubIcon } from "@/components/icons";

export function ProjectsSection() {
  const { t, mounted } = useLanguage();
  const { role } = useRole();

  if (!mounted) return null;

  const fsProjects = [
    {
      id: "url-shorten",
      title: "Url Shorten",
      image: "/url-short.svg",
      link: "http://urlshorten.projects.omag.cloud",
      github: "http://github.com/miusarname2/UrlShorten",
      descKey: "url_shorten_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["React", "Nodejs", "MongoDB", "TypeScript"]
    },
    {
      id: "client-admin",
      title: "Client Administrator",
      image: "/AdminClient.png",
      link: null,
      github: "http://github.com/miusarname2/laravel-test-CRUD",
      descKey: "client_admin_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["PHP", "Laravel", "MySQL", "Docker"]
    },
    {
      id: "viaje-col",
      title: "Viaje por Colombia API",
      image: "/Flight.svg",
      link: "https://viajeporcolombiaapi.projects.omag.cloud/api-docs",
      github: "http://github.com/miusarname2/test-biintelli",
      descKey: "viaje_col_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["Node.js", "TypeScript", "Prisma", "MySQL"]
    },
    {
      id: "seismic",
      title: "Seismic Data App",
      image: "/SiesmicData.png",
      link: "https://siesmicdata.projects.omag.cloud",
      github: "http://github.com/miusarname2/Ruby_TestFrogmii",
      descKey: "seismic_desc",
      statusKey: "status_adapting",
      statusClasses: "bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-400",
      tags: ["Ruby", "SQLite", "React", "Docker"]
    },
    {
      id: "tablontask",
      title: "TablonTask",
      image: "/TablonTask Image.png",
      link: null,
      github: "http://github.com/miusarname2/Trello-Clone",
      descKey: "tablontask_desc",
      statusKey: "status_in_dev",
      statusClasses: "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400",
      tags: ["Next.js", "Tailwind", "C# .NET", "SQLServer"]
    },
    {
      id: "swiftide",
      title: "Swift IDE (Unnamed)",
      image: "/Warning.svg",
      link: null,
      github: null,
      descKey: "swift_ide_desc",
      statusKey: "status_paused",
      statusClasses: "bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400",
      tags: ["Tauri", "React", "Rust"]
    },
    {
      id: "serviflow",
      title: "Serviflow - Maintenance",
      image: "/ServiFlow Image.png",
      link: null,
      github: "https://github.com/CloudPulses/serviflow-mantenimiento",
      descKey: "serviflow_desc",
      statusKey: "status_beta",
      statusClasses: "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-400",
      tags: ["React", "Node.js", "PostgreSQL"]
    },
    {
      id: "gardenapp",
      title: "GardenApp - Plant Monitor",
      image: "/GardenApp.png",
      link: null,
      github: "https://github.com/miusarname2/GardenApp",
      descKey: "gardenapp_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["React Native", "IoT"]
    },
    {
      id: "dian",
      title: "DIAN Excel Optimizer",
      image: "/Unifier.png",
      link: null,
      github: null,
      descKey: "dian_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["Python", "Pandas", "Flet"]
    },
    {
      id: "bodegas-node",
      title: "Bodegas Node Express",
      image: "/api-backend.svg",
      link: null,
      github: "https://github.com/miusarname2/bodegasNodeExpress",
      descKey: "bodegas_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["Node.js", "Express", "MongoDB"]
    },
    {
      id: "mongo-alquiler",
      title: "Mongo Alquiler API",
      image: "/api-backend.svg",
      link: null,
      github: "https://github.com/miusarname2/MongoAlquiler",
      descKey: "mongo_alquiler_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["REST API", "JWT", "Backend"]
    },
    {
      id: "proyecto-admin",
      title: "Proyecto Admin API",
      image: "/api-backend.svg",
      link: null,
      github: null,
      descKey: "proyecto_admin_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["Node.js", "Prisma", "CRUD"]
    },
    {
      id: "temporal-test",
      title: "Movies API (Spring Boot)",
      image: "/api-backend.svg",
      link: null,
      github: "https://github.com/miusarname2/TemporalTestSpringBoot",
      descKey: "temporal_test_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["Java", "Spring Boot", "MySQL"]
    },
    {
      id: "wordtopdf-converter",
      title: "Word to PDF API",
      image: "/api-backend.svg",
      link: null,
      github: "https://github.com/miusarname2/wordToPdfConverter",
      descKey: "wordtopdf_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["Node.js", "Express", "REST API"]
    },
    {
      id: "fravicol-dashboard",
      title: "Datos Fravicol Dashboard",
      image: "/Warning.svg",
      link: null,
      github: null,
      descKey: "fravicol_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["React", "Dashboard", "KPIs"]
    }
  ];

  const learningProjects = [
    {
      id: "api-version",
      title: "API Version Attempt",
      image: "/api-backend.svg",
      link: null,
      github: "https://github.com/miusarname2/Api-Version-Attemp-2",
      descKey: "api_version_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["Express.js", "API", "Versioning"]
    },
    {
      id: "learning-c",
      title: "Learning C",
      image: "/C_Programming_Language.svg.webp",
      link: null,
      github: "https://github.com/miusarname2/Learning-C",
      descKey: "learning_c_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["C", "Tutorial", "Education"]
    },
    {
      id: "landing-dev",
      title: "AWS S3 Landing Page",
      image: "/Amazon_Web_Services_Logo.svg",
      link: null,
      github: null,
      descKey: "landing_dev_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["AWS S3", "Cloud", "HTML/CSS"]
    },
    {
      id: "firstdesktop-kotlin",
      title: "Kotlin Compose Desktop",
      image: "/placeholder.svg",
      link: null,
      github: "https://github.com/miusarname2/FirstDesktop-Project_Kotlin",
      descKey: "firstdesktop_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["Kotlin", "Compose", "Desktop"]
    },
    {
      id: "parcial-poo",
      title: "POO Parcial Java",
      image: "/placeholder.svg",
      link: null,
      github: null,
      descKey: "parcialpoo_desc",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["Java", "Swing", "OOP"]
    }
  ];

  const aiProjects = [
    {
      id: "ai-chatbot",
      title: "AI Support Chatbot",
      image: "/placeholder.svg",
      link: null,
      github: "https://github.com/miusarname2/ai-chatbot",
      descKey: "AI-powered customer support chatbot using OpenAI API and RAG architecture.",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["Python", "OpenAI", "LangChain", "VectorDB"]
    },
    {
      id: "sales-forecasting",
      title: "Sales Forecasting Model",
      image: "/placeholder.svg",
      link: null,
      github: null,
      descKey: "Predictive model for retail sales using time-series analysis and XGBoost.",
      statusKey: "status_finished",
      statusClasses: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400",
      tags: ["Python", "Pandas", "XGBoost", "Scikit-Learn"]
    },
    {
      id: "image-classifier",
      title: "Medical Image Classifier",
      image: "/placeholder.svg",
      link: null,
      github: null,
      descKey: "Deep learning model built with PyTorch for classifying X-ray images.",
      statusKey: "status_in_dev",
      statusClasses: "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400",
      tags: ["PyTorch", "Computer Vision", "CNN"]
    }
  ];

  const projects = role === 'ai' ? aiProjects : fsProjects;

  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400 dark:from-indigo-400 dark:to-cyan-300">
              {t("featured_proj")}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-white/5"
            >
              <div className="w-full aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                    <img 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100" 
                      src={project.image} 
                    />
                  </a>
                ) : (
                  <img 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100" 
                    src={project.image} 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-1 relative z-10 bg-white dark:bg-transparent">
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-indigo-500 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md text-xs font-semibold backdrop-blur-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {t(project.descKey)}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-white/10">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                      <GithubIcon className="w-4 h-4 mr-2" /> {t("code")}
                    </a>
                  ) : (
                    <span className="inline-flex items-center text-sm font-medium text-slate-400 dark:text-slate-500">
                      <GithubIcon className="w-4 h-4 mr-2" /> {t("private")}
                    </span>
                  )}
                  
                  <span className={`${project.statusClasses} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>
                    {t(project.statusKey)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {role !== 'ai' && (
        <div className="max-w-6xl mx-auto px-4 md:px-8 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16 flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400 dark:from-emerald-400 dark:to-teal-300">
                {t("learning_proj_title")}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-white/5"
              >
                <div className="w-full aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100" 
                        src={project.image} 
                      />
                    </a>
                  ) : (
                    <img 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100" 
                      src={project.image} 
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-1 relative z-10 bg-white dark:bg-transparent">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md text-xs font-semibold backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {t(project.descKey)}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-white/10">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-teal-400 transition-colors">
                        <GithubIcon className="w-4 h-4 mr-2" /> {t("code")}
                      </a>
                    ) : (
                      <span className="inline-flex items-center text-sm font-medium text-slate-400 dark:text-slate-500">
                        <GithubIcon className="w-4 h-4 mr-2" /> {t("private")}
                      </span>
                    )}
                    
                    <span className={`${project.statusClasses} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>
                      {t(project.statusKey)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
