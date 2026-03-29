import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";

export default function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-gray-50/50">
      <SectionHeading>Technical Skills</SectionHeading>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {skills.map((skillGroup, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col hover:border-blue-100 transition-colors"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
            <ul className="space-y-3 mt-auto">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600">
                  <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
