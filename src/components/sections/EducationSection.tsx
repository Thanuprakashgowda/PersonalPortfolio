import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 bg-gray-50/50">
      <SectionHeading>Education</SectionHeading>
      
      <div className="mt-12 space-y-8">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-6 hover:shadow-md transition-all duration-300"
          >
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
              <p className="text-lg text-blue-600 font-medium mb-4">{edu.institution}</p>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-800 text-sm">
                <span className="flex items-center gap-1.5 font-medium px-3 py-1 bg-gray-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {edu.graduation}
                </span>
                
                {edu.score && (
                  <span className="font-semibold text-gray-900">
                    Score: <span className="text-blue-600">{edu.score}</span>
                  </span>
                )}
              </div>

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span key={i} className="text-xs font-medium px-2.5 py-1 bg-blue-50/80 text-blue-700 rounded-md border border-blue-100">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Placeholder for future education listings */}
        {/* <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-400 bg-gray-50/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="font-medium text-sm">Future Education Here</span>
        </div> */}
      </div>
    </section>
  );
}
