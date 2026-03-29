import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-8 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <p className="text-gray-500 text-sm mb-4">
          © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href={`https://${portfolioData.personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`https://${portfolioData.personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
