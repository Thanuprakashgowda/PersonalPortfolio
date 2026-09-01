import SectionHeading from "../SectionHeading";

export default function AboutSection() {

  return (
    <section id="about" className="py-24">
      <SectionHeading>About Me</SectionHeading>

      <div className="max-w-4xl text-gray-800 leading-relaxed space-y-4 text-base md:text-lg">
        <p>
          I’m an Information Science &amp; Engineering student at Canara Engineering College, Mangaluru (CGPA: 7.95). I specialize in building full-stack applications, AI-enabled systems, REST APIs, and machine learning decision-support solutions.
        </p>
        <p>
          Alongside software development, I work as a <strong>Freelance AI Trainer at Outlier AI</strong>, evaluating and refining complex AI model outputs for accuracy, logical reasoning, data quality, and policy compliance.
        </p>
        <p>
          My technical stack includes Python, Java, SQL, Next.js 15, Flask, Node.js, Express.js, TypeScript, MySQL, MongoDB, Vercel Postgres, Scikit-learn, Gemini AI, Power BI, Tableau, and Vercel. I am passionate about solving real-world problems through data-driven decisions and rapid AI-assisted development (vibe coding).
        </p>
      </div>
    </section>
  );
}
