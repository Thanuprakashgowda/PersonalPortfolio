import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";

export default function AboutSection() {
  const { education } = portfolioData;
  const beInfo = education[0];

  return (
    <section id="about" className="py-24">
      <SectionHeading>About Me</SectionHeading>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="text-gray-600 leading-relaxed space-y-4">
          <p>
            Hello! I'm Thanuprakash, an engineering student located in {portfolioData.personalInfo.location}. 
            I'm currently pursuing my {beInfo.degree} at {beInfo.institution}.
          </p>
          <p>
            My journey in tech began with a curiosity for how web applications and cloud infrastructure operate. 
            Since then, I've expanded my knowledge into full-stack development, database management, and cloud fundamentals.
          </p>
          <p>
            I ({beInfo.graduation.toLowerCase()}) and am constantly looking for opportunities to apply what I learn in 
            real-world scenarios, build practical applications, and solve meaningful problems.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            Academic Performance
          </h3>
          
          <div className="space-y-4">
            {beInfo.sgpa.map((term, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-16 text-sm font-medium text-gray-500">{term.semester}</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(term.score / 10) * 100}%` }}
                  ></div>
                </div>
                <span className="w-10 text-sm font-bold text-gray-900 text-right">{term.score}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center text-sm">
            <span className="text-gray-500">Current CGPA (approx)</span>
            <span className="font-bold text-blue-600">
              {(beInfo.sgpa.reduce((acc, curr) => acc + curr.score, 0) / beInfo.sgpa.length).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
