import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import { 
  SmartphoneIcon, 
  BrainIcon, 
  CodeIcon, 
  MapPinIcon, 
  GraduationCapIcon, 
  AwardIcon,
  CheckIcon
} from "../Icons";

export default function AboutSection() {
  const { languages, coreStrengths } = portfolioData;

  const corePillars = [
    {
      title: "AI Evaluation & Response Quality",
      desc: "Delivering remote AI quality assurance rating at TELUS Digital and human-in-the-loop verification at Outlier AI. Evaluating model logic, factual consistency, audio transcription, and multilingual Kannada prompts.",
      icon: BrainIcon,
      color: "text-sky-600 bg-sky-50 border-sky-100",
    },
    {
      title: "Document AI & R&D Workflows",
      desc: "Engineering grounded document analysis workbenches like CASELens with strict anti-hallucination prompt schemas, 1-indexed source-page citations, dual-pane verification, and human audit checklists.",
      icon: CodeIcon,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
    {
      title: "On-Device ML & Native Mobile",
      desc: "Developing offline-first Android systems with Kotlin, Jetpack Compose, and Room DB. Running on-device Random Forest classifiers (99.4% accuracy across 22 crops) with zero cloud latency.",
      icon: SmartphoneIcon,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <SectionHeading 
        eyebrow="About Me"
        description="A look into my engineering philosophy, AI evaluation experience, and technical focus areas."
      >
        Bridging theoretical computer science with real-world intelligence
      </SectionHeading>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-6 space-y-5 text-slate-700 text-base leading-relaxed">
          <p>
            I am an Information Science &amp; Engineering undergraduate at <strong>Canara Engineering College, Mangaluru</strong> (CGPA: 7.92). My focus centers on AI-assisted software development, prompt engineering, AI evaluation, and building reliable LLM-powered applications.
          </p>

          <p>
            In industry practice, I have completed remote quality rating and AI evaluation for <strong>TELUS Digital AI Data Solutions</strong> (Quality Assurance Rater) and <strong>Outlier AI</strong> (Freelance AI Trainer &amp; Aether Generalist). This includes benchmarking model outputs for logical correctness, audio transcription, safety constraints, and regional localization in Kannada.
          </p>

          <p>
            On the software development side, I take machine learning models from dataset curation to deployable applications: building legal document extraction workbenches (<em>CASELens</em>), precision farming apps (<em>Smart-Crop</em>), and enterprise management portals (<em>Cloud SMS</em>, <em>HostelHub</em> — Runner-Up at CEATHERION 2025).
          </p>

          {/* Quick Info Badges */}
          <div className="pt-4 border-t border-slate-200/90 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200">
              <MapPinIcon size={14} className="text-slate-500" />
              Hassan &bull; Mangaluru, Karnataka
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200">
              <GraduationCapIcon size={14} className="text-slate-500" />
              B.E. ISE (2023–2027)
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200">
              <AwardIcon size={14} className="text-slate-500" />
              CEATHERION &apos;25 Runner-Up
            </span>
          </div>

          {/* Core Strengths */}
          {coreStrengths && (
            <div className="pt-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                Core Strengths
              </span>
              <div className="flex flex-wrap gap-1.5">
                {coreStrengths.map((str, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 text-slate-700 text-xs font-medium rounded-md border border-slate-200"
                  >
                    <CheckIcon size={11} className="text-emerald-600" />
                    {str}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages Supported */}
          <div className="pt-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
              Languages
            </span>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-sky-50 text-sky-800 text-xs font-medium rounded-md border border-sky-100"
                >
                  <strong className="font-semibold">{lang.language}:</strong> {lang.proficiency}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Core Engineering Pillars */}
        <div className="lg:col-span-6 space-y-4">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Core Engineering &amp; AI Focus
          </div>

          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2.5 rounded-lg border flex-shrink-0 ${pillar.color}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
