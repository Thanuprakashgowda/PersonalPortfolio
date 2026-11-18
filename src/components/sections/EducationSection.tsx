import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import { GraduationCapIcon, AwardIcon } from "../Icons";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28">
      <SectionHeading
        eyebrow="Academic Background"
        description="Formal computer science education, foundational engineering coursework, and scholastic milestones."
      >
        Education
      </SectionHeading>

      <div className="space-y-6 max-w-4xl">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-sky-50 text-sky-700 border border-sky-100">
                    <GraduationCapIcon size={18} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {edu.degree}
                  </h3>
                </div>

                <p className="text-sm sm:text-base font-semibold text-slate-700 pl-8">
                  {edu.institution}
                </p>
              </div>

              {/* Graduation Period & Score */}
              <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 font-semibold rounded-md border border-slate-200">
                  {edu.graduation}
                </span>

                {edu.score && (
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-800 font-bold rounded-md border border-emerald-200">
                    {edu.score}
                  </span>
                )}
              </div>
            </div>

            {/* Highlights (if any) */}
            {edu.highlights && edu.highlights.length > 0 && (
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                {edu.highlights.map((h, hIdx) => (
                  <span
                    key={hIdx}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/80"
                  >
                    <AwardIcon size={12} className="text-slate-400" />
                    {h}
                  </span>
                ))}
              </div>
            )}

            {/* Relevant Coursework */}
            {edu.coursework && edu.coursework.length > 0 && (
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Relevant Coursework
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-xs font-medium px-2.5 py-0.5 bg-sky-50/80 text-sky-800 rounded-md border border-sky-100"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
