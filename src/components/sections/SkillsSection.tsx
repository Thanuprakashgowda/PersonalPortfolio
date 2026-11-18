import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import { 
  CodeIcon, 
  SmartphoneIcon, 
  BrainIcon, 
  BriefcaseIcon, 
  GraduationCapIcon, 
  SparklesIcon 
} from "../Icons";

export default function SkillsSection() {
  const { skills } = portfolioData;

  const categoryIcons: Record<string, typeof CodeIcon> = {
    "AI, LLMs & Response Evaluation": BrainIcon,
    "Programming Languages": CodeIcon,
    "Backend & API Engineering": BriefcaseIcon,
    "Databases & Cloud Infrastructure": CodeIcon,
    "Developer Tools & Platforms": CodeIcon,
    "Research, Data Analytics & Project Support": SparklesIcon,
    "Mobile & Frontend Engineering": SmartphoneIcon,
    "Core Strengths & CS Fundamentals": GraduationCapIcon,
  };

  return (
    <section id="skills" className="py-20 md:py-28">
      <SectionHeading
        eyebrow="Technical Stack"
        description="Core programming languages, machine learning frameworks, mobile ecosystems, and system design tools."
      >
        Skills &amp; Capabilities
      </SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {skills.map((skillGroup, index) => {
          const Icon = categoryIcons[skillGroup.category] || CodeIcon;

          return (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {skillGroup.category}
                </h3>
              </div>

              {skillGroup.description && (
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  {skillGroup.description}
                </p>
              )}

              {/* Skill Pill Badges */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 text-slate-700 border border-slate-200/90 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
