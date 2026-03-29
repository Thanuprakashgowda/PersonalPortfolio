import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function HeroSection() {
  const { name, role, objective, resumeUrl } = portfolioData.personalInfo;

  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center pt-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
        <div className="space-y-6 max-w-2xl flex-1">
          <p className="text-blue-600 font-medium tracking-wide">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
            {name}.
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-500 mb-6">
            I build things for the web.
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-xl md:max-w-2xl mt-8 whitespace-pre-line">
            I'm an <strong>{role}</strong>. <br /><br />
            {objective}
          </p>

          <div className="flex flex-wrap gap-4 pt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              View Projects
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-gray-700 border border-gray-200 font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative rounded-2xl overflow-hidden border-4 border-gray-50 shadow-lg bg-gray-100 flex items-center justify-center mt-10 md:mt-0">
          <Image
            src="/profile.jpg"
            alt={`Profile photo of ${name}`}
            fill
            sizes="(max-width: 768px) 192px, 256px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
