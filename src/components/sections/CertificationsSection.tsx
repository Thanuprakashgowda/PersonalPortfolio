import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";

export default function CertificationsSection() {
  const { certifications, achievements } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-gray-50/50">
      <SectionHeading>Learning & Achievements</SectionHeading>
      
      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-2 5l9-5l-9-5l2 5z"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Certifications & Learning
          </h3>
          <ul className="space-y-6">
            {certifications.map((cert, index) => (
              <li key={index} className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                <span className="text-gray-800 leading-relaxed">{cert}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
           <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
            Achievements & Activities
          </h3>
          <ul className="space-y-6">
            {achievements.map((ach, index) => (
              <li key={index} className="flex gap-4 items-start">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></span>
                <span className="text-gray-800 leading-relaxed">{ach}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
