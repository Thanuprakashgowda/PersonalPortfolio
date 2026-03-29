import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";

export default function AboutSection() {
  const { education } = portfolioData;
  const beInfo = education[0];

  return (
    <section id="about" className="py-24">
      <SectionHeading>About Me</SectionHeading>
      
      <div className="max-w-3xl text-gray-600 leading-relaxed space-y-4 text-lg">
        <p>
          Hello! I'm Thanuprakash, an engineering student located in {portfolioData.personalInfo.location}. 
          I'm currently pursuing my {beInfo.degree} at {beInfo.institution}.
        </p>
        <p>
          My journey in tech began with a curiosity for how web applications and cloud infrastructure operate. 
          Since then, I've expanded my knowledge into full-stack development, database management, and cloud fundamentals.
        </p>
        <p>
          I ({beInfo.graduation.toLowerCase()}) and am constantly looking for opportunities to apply what I learn in 
          real-world scenarios, build practical applications, and solve meaningful problems.
        </p>
      </div>
    </section>
  );
}
