import React from "react";
import { ProjectItem } from "@/data/portfolio";
import { GithubIcon, ExternalLinkIcon } from "./Icons";

type ProjectCardProps = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, category, badge, technologies, description, highlights, githubLink, demoLink } = project;

  return (
    <div className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col h-full relative">
      {/* Card Header: Category & Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
          {category}
        </span>

        {badge && (
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
            badge.includes("Runner-Up") 
              ? "bg-amber-50 text-amber-800 border border-amber-200" 
              : "bg-sky-50 text-sky-700 border border-sky-100"
          }`}>
            {badge}
          </span>
        )}
      </div>

      {/* Project Title */}
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors mb-3 leading-snug">
        {title}
      </h3>

      {/* Highlights (if any) */}
      {highlights && highlights.length > 0 && (
        <div className="mb-4 space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
          {highlights.map((hl, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
              <span>{hl}</span>
            </div>
          ))}
        </div>
      )}

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description bullets */}
      <ul className="text-slate-600 text-sm space-y-2 mb-6 flex-grow">
        {description.slice(0, 3).map((point, i) => (
          <li key={i} className="flex items-start gap-2 leading-relaxed">
            <span className="text-slate-400 mt-1 flex-shrink-0">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Footer Links */}
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
        {githubLink && githubLink.trim() !== "" ? (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-colors"
          >
            <GithubIcon size={14} />
            <span>Source Code</span>
          </a>
        ) : (
          <span className="text-xs text-slate-400 italic">Code upon request</span>
        )}

        {demoLink && demoLink.trim() !== "" && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200/80 transition-colors ml-auto"
          >
            <span>Live Demo</span>
            <ExternalLinkIcon size={12} />
          </a>
        )}
      </div>
    </div>
  );
}
