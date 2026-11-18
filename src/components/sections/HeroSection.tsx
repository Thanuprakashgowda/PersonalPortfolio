import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { 
  GithubIcon, 
  LinkedinIcon, 
  DownloadIcon, 
  ArrowUpRightIcon,
  SparklesIcon
} from "../Icons";

export default function HeroSection() {
  const { name, role, status, tagline, resumeUrl, linkedin, github, stats } = portfolioData.personalInfo;

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-slate-200/80 bg-gradient-to-b from-slate-50/80 via-white to-white overflow-hidden"
    >
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-70 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Intro & Bio */}
          <div className="flex-1 max-w-2xl text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-6 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{status}</span>
            </div>

            {/* Name & Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Hi, I&apos;m <span className="text-slate-900 underline decoration-sky-400 decoration-wavy decoration-from-font">{name}</span>.
            </h1>

            {/* Role / Tagline */}
            <h2 className="mt-4 text-xl sm:text-2xl font-bold text-slate-700 tracking-tight flex items-center gap-2">
              <span className="text-sky-600">{role}</span>
            </h2>

            {/* High-Impact Summary */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {tagline}
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed">
              Undergraduate at Canara Engineering College experienced in taking machine learning models from dataset curation to on-device native Android inference, AI verification pipelines at Outlier AI, and scalable full-stack applications.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-sky-600 transition-all shadow-sm hover:shadow-md"
              >
                <span>View Projects</span>
                <ArrowUpRightIcon size={16} />
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-slate-800 border border-slate-300 text-sm font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all shadow-2xs"
              >
                <DownloadIcon size={16} className="text-slate-500" />
                <span>Resume</span>
              </a>

              <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block" />

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white text-slate-700 border border-slate-200 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white text-slate-700 border border-slate-200 hover:text-sky-600 hover:border-sky-300 hover:bg-sky-50 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Avatar & Tech Accents */}
          <div className="flex-shrink-0 relative">
            {/* Outer Subtle Halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-100 to-indigo-100 rounded-3xl blur-xl opacity-70 -z-10" />

            {/* Profile Frame */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-slate-200 bg-white shadow-md p-1.5">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt={`Portrait of ${name}`}
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating Quick Badges */}
            <div className="absolute -bottom-3 -left-4 bg-white/95 backdrop-blur-xs border border-slate-200 rounded-lg px-3 py-1.5 shadow-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-800">On-Device ML & Kotlin</span>
            </div>

            <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-xs border border-slate-200 rounded-lg px-3 py-1.5 shadow-md flex items-center gap-1.5 text-xs font-semibold text-slate-800">
              <SparklesIcon size={14} className="text-amber-500" />
              <span>AI Trainer @ Outlier</span>
            </div>
          </div>
        </div>

        {/* Impact Stats Grid Bar */}
        <div className="mt-16 pt-12 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-xs border border-slate-200/90 rounded-xl p-4 sm:p-5 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-700">
                {stat.label}
              </div>
              <div className="mt-0.5 text-xs text-slate-500 line-clamp-1">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
