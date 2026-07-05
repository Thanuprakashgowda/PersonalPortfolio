import SectionHeading from "../SectionHeading";

export default function AboutSection() {

  return (
    <section id="about" className="py-24">
      <SectionHeading>About Me</SectionHeading>

      <div className="max-w-3xl text-gray-800 leading-relaxed space-y-4 text-lg">
        <p>
          I’m an Information Science engineering student from Hassan, Karnataka, currently pursuing my B.E. at Canara Engineering College, Mangaluru (CGPA 7.95). I enjoy building practical full stack applications and exploring data analytics, often using vibe coding platforms while keeping an eye on emerging AI trends.
        </p>
        <p>
          I work with technologies like Node.js, Flask, Next.js, MySQL, MongoDB, Tableau, and Power BI to turn ideas into functional projects.
        </p>
        <p>
          I actively learn through hackathons, online platforms, and mini-projects, focusing on clean code, system design, and deploying real-world applications.
        </p>
      </div>
    </section>
  );
}
