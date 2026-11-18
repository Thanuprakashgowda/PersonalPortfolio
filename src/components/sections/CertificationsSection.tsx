import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import { AwardIcon, TrophyIcon, ExternalLinkIcon } from "../Icons";

export default function CertificationsSection() {
  const { certifications, achievements } = portfolioData;

  return (
    <section id="credentials" className="py-20 md:py-28">
      <SectionHeading
        eyebrow="Verification & Recognition"
        description="Verified industry credentials, competitive hackathon awards, and technical milestones."
      >
        Certifications &amp; Achievements
      </SectionHeading>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Certifications */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-md bg-sky-50 text-sky-700 border border-sky-100">
              <AwardIcon size={18} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Verified Certifications
            </h3>
          </div>

          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>

                  {cert.badge && (
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 flex-shrink-0">
                      {cert.badge}
                    </span>
                  )}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{cert.date || "Completed"}</span>

                  {cert.link && cert.link.trim() !== "" ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-sky-600 hover:text-sky-700 hover:underline"
                    >
                      <span>Verify Credential</span>
                      <ExternalLinkIcon size={12} />
                    </a>
                  ) : (
                    <span className="text-slate-400">Institutional Record</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Achievements & Awards */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100">
              <TrophyIcon size={18} />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Honors &amp; Hackathon Awards
            </h3>
          </div>

          <div className="space-y-3">
            {achievements.map((ach, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs hover:shadow-xs hover:border-slate-300 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrophyIcon size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {ach.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5 mb-2">
                      {ach.organization}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
