import { portfolioData } from "@/data/portfolio";

export default function HeroSection() {
  const { name, role, objective } = portfolioData.personalInfo;
  
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center pt-20">
      <div className="space-y-6 max-w-3xl">
        <p className="text-blue-600 font-medium tracking-wide">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          {name}.
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-500 mb-6">
          I build things for the web and cloud.
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mt-8">
          I'm an <strong>{role}</strong> with a growing interest in cloud computing and data analytics. 
          {objective.replace("Information Science and Technology engineering student with a growing interest in cloud computing and data analytics.", "")}
        </p>

        <div className="flex flex-wrap gap-4 pt-10">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            View Projects
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            className="px-6 py-3 bg-white text-gray-700 border border-gray-200 font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
