import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import { 
  SmartphoneIcon, 
  BrainIcon, 
  CodeIcon, 
  MapPinIcon, 
  GraduationCapIcon, 
  AwardIcon 
} from "../Icons";

export default function AboutSection() {
  const { languages } = portfolioData;

  const corePillars = [
    {
      title: "On-Device ML & Native Mobile",
      desc: "Building offline-first Android apps with Kotlin and Jetpack Compose. Integrating on-device Random Forest models (99.4% accuracy), CameraX diagnostics, and local Room DB caching.",
      icon: SmartphoneIcon,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "AI Model Evaluation & Alignment",
      desc: "Performing human-in-the-loop verification at Outlier AI. Benchmarking LLMs for factual consistency, multi-hop reasoning, and linguistic nuance as a Kannada Language Specialist.",
      icon: BrainIcon,
      color: "text-sky-600 bg-sky-50 border-sky-100",
    },
    {
      title: "Full-Stack Web & Data Systems",
      desc: "Designing production-ready web backends and micro-SaaS platforms using Next.js 15, TypeScript, Node.js, Express, Flask, TiDB, and relational database architectures.",
      icon: CodeIcon,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <SectionHeading 
        eyebrow="About Me"
        description="A look into my engineering philosophy, technical focus areas, and current work."
      >
        Bridging theoretical computer science with real-world intelligence
      </SectionHeading>

      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Narrative */}
        <div className="lg:col-span-6 space-y-5 text-slate-700 text-base leading-relaxed">
          <p>
            I am an Information Science &amp; Engineering undergraduate at <strong>Canara Engineering College, Mangaluru</strong> (CGPA: 7.92). My core passion lies in turning complex machine learning and algorithmic logic into deployable, human-centric software.
          </p>

          <p>
            Alongside my academic curriculum, I work as a <strong>Freelance AI Trainer &amp; Evaluator at Outlier AI</strong>, where I assess and refine state-of-the-art generative models. This includes deep-dive evaluation for factual truthfulness, edge-case reasoning, and regional localization on the Aether project.
          </p>

          <p>
            Whether engineering an offline precision agriculture system like <em>Smart-Crop</em> with on-device Random Forest classification or competing under high-pressure 24-hour sprints (Runner-Up at CEATHERION 2025), I prioritize clean code, resilient data structures, and intuitive user experiences.
          </p>

          {/* Quick Info Badges */}
          <div className="pt-4 border-t border-slate-200/90 flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200">
              <MapPinIcon size={14} className="text-slate-500" />
              Karnataka, India
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
            Core Engineering Pillars
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
