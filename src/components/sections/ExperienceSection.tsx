import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-24">
      <SectionHeading>Work Experience</SectionHeading>

      <div className="mt-12 space-y-8 max-w-4xl mx-auto">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 relative"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-gray-100 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-3">
                  {exp.role}
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100">
                    {exp.company}
                  </span>
                </h3>
                {exp.location && (
                  <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-10a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    {exp.location}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 px-3 py-1.5 bg-gray-50 rounded-lg self-start md:self-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                {exp.period}
              </div>
            </div>

            <ul className="space-y-3">
              {exp.description.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
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
