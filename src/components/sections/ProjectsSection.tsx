"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import ProjectCard from "../ProjectCard";
import { 
  SmartphoneIcon, 
  SparklesIcon, 
  GithubIcon, 
  CheckIcon 
} from "../Icons";

type CategoryFilter = "All" | "Android & AI" | "Machine Learning" | "Full-Stack Web" | "IoT & Systems";

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = [
    "All",
    "Android & AI",
    "Machine Learning",
    "Full-Stack Web",
    "IoT & Systems",
  ];

  // Filter projects based on category
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  // The flagship featured project is Smart-Crop
  const flagshipProject = projects.find((p) => p.title.includes("Smart-Crop"));
  const otherProjects = filteredProjects.filter((p) => p !== flagshipProject);

  return (
    <section id="projects" className="py-20 md:py-28">
      <SectionHeading
        eyebrow="Portfolio"
        description="A selection of machine learning architectures, native mobile apps, and full-stack software."
      >
        Featured Engineering Projects
      </SectionHeading>

      {/* Flagship Spotlight Project: Smart-Crop */}
      {flagshipProject && (activeCategory === "All" || activeCategory === "Android & AI") && (
        <div className="mb-12 relative bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between">
            {/* Left Content */}
            <div className="flex-1 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                  <SparklesIcon size={13} className="text-emerald-300" />
                  Flagship Project
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  Native Android &bull; On-Device ML
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                {flagshipProject.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                An offline-first precision agriculture mobile system engineered to empower Indian farmers without requiring cellular internet. Powered by an on-device Random Forest classifier reaching 99.4% accuracy across 22 crops, integrated with ICAR soil fertility scoring, multimodal leaf disease diagnostics via CameraX, and bilingual English/Kannada UI.
              </p>

              {/* High-Impact Highlights Matrix */}
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {flagshipProject.highlights?.map((hl, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon size={12} />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">
                      {hl}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {flagshipProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-semibold bg-slate-800/90 text-slate-200 rounded-lg border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {flagshipProject.githubLink && (
                  <a
                    href={flagshipProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-slate-900 text-xs sm:text-sm font-semibold hover:bg-slate-100 transition-colors"
                  >
                    <GithubIcon size={16} />
                    <span>View Repository</span>
                  </a>
                )}
                <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-950/80 text-emerald-300 text-xs font-semibold border border-emerald-800/50">
                  <SmartphoneIcon size={14} />
                  Native APK / Architecture Documented
                </span>
              </div>
            </div>

            {/* Right Architectural Spec Pill */}
            <div className="w-full lg:w-72 bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4 flex-shrink-0">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                System Highlights
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="pb-2.5 border-b border-white/10">
                  <div className="text-emerald-400 font-bold text-base">99.4%</div>
                  <div className="text-slate-400">On-Device Model Accuracy</div>
                </div>
                <div className="pb-2.5 border-b border-white/10">
                  <div className="text-sky-400 font-bold text-base">22 Crops</div>
                  <div className="text-slate-400">NPK, pH &amp; Climate Classifier</div>
                </div>
                <div className="pb-2.5 border-b border-white/10">
                  <div className="text-indigo-400 font-bold text-base">Zero-Cloud</div>
                  <div className="text-slate-400">Offline-first local Room DB</div>
                </div>
                <div>
                  <div className="text-amber-400 font-bold text-base">Bilingual</div>
                  <div className="text-slate-400">English &amp; Kannada Localization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200/80 pb-4">
        {categories.map((cat) => {
          const count = cat === "All"
            ? projects.length
            : projects.filter((p) => p.category === cat).length;
          
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                isActive
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                isActive ? "bg-slate-700 text-slate-200" : "bg-slate-200 text-slate-600"
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Other Projects */}
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {otherProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
