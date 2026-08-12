import SectionHeading from "../SectionHeading";

export default function AboutSection() {

  return (
    <section id="about" className="py-24">
      <SectionHeading>About Me</SectionHeading>

      <div className="max-w-3xl text-gray-800 leading-relaxed space-y-4 text-lg">
        <p>
          I’m an Information Science & Engineering student at Canara Engineering College, Mangaluru (CGPA: 7.92). I specialize in building full-stack applications, REST APIs, AI-enabled tools, and machine learning decision-support solutions.
        </p>
        <p>
          Alongside software development, I work as a <strong>Freelance AI Trainer at Outlier AI</strong>, evaluating and refining complex AI model outputs for accuracy, logical reasoning, data quality, and compliance.
        </p>
        <p>
          My technical stack includes Python, Java, SQL, Flask, Node.js, Express.js, MySQL, MongoDB, Scikit-learn, Gemini AI, Power BI, and Vercel. I am passionate about solving real-world problems through data-driven decisions and rapid AI-assisted development.
        </p>
      </div>
    </section>
  );
}
