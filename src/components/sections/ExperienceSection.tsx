import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import { BriefcaseIcon, SparklesIcon, CheckIcon } from "../Icons";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-20 md:py-28">
      <SectionHeading 
        eyebrow="Experience" 
        description="Hands-on industry experience evaluating cutting-edge AI systems and models."
      >
        Work &amp; Applied Practice
      </SectionHeading>

      <div className="space-y-8 max-w-4xl">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="relative bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200"
          >
            {/* Top Row: Role, Company & Period */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {exp.role}
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-50 text-sky-700 border border-sky-100">
                    <SparklesIcon size={12} className="text-sky-600" />
                    {exp.company}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-1 text-slate-600">
                    <BriefcaseIcon size={14} className="text-slate-400" />
                    {exp.type || "Contract"}
                  </span>
                  <span>•</span>
                  <span>{exp.location || "Remote"}</span>
                </div>
              </div>

              {/* Period Pill */}
              <div className="self-start sm:self-auto px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                {exp.period}
              </div>
            </div>

            {/* Skills / Focus tags */}
            {exp.skills && exp.skills.length > 0 && (
              <div className="pt-4 flex flex-wrap gap-1.5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {/* Bullet descriptions */}
            <ul className="mt-5 space-y-3">
              {exp.description.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                    <CheckIcon size={10} />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
