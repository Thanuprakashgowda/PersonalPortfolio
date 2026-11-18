import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Footer() {
  const { name, linkedin, github, email } = portfolioData.personalInfo;

  return (
    <footer className="border-t border-slate-200 bg-slate-50/60 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand & Copyright */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
            <span className="w-5 h-5 rounded-md bg-slate-900 text-white flex items-center justify-center font-mono text-[10px]">
              TG
            </span>
            <span>{name}</span>
          </div>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        {/* Center/Right: Quick Social Nav */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 transition-colors flex items-center gap-1"
          >
            <LinkedinIcon size={14} />
            <span>LinkedIn</span>
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors flex items-center gap-1"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${email}`}
            className="hover:text-sky-600 transition-colors flex items-center gap-1"
          >
            <MailIcon size={14} />
            <span>Email</span>
          </a>

          <div className="h-4 w-px bg-slate-300 mx-1 hidden sm:block" />

          {/* Smooth Back to Top */}
          <a
            href="#hero"
            className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors flex items-center gap-1"
            title="Back to Top"
          >
            <span>Top</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
