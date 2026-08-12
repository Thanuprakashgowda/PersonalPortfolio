import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { linkedin, github, name } = portfolioData.personalInfo;

  const linkedinUrl = linkedin.startsWith("http") ? linkedin : `https://${linkedin}`;
  const githubUrl = github.startsWith("http") ? github : `https://${github}`;

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-8 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <p className="text-gray-500 text-sm mb-4">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm font-medium">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            LinkedIn ↗
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
