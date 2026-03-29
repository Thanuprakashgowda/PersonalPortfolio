import { portfolioData } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import ProjectCard from "../ProjectCard";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24">
      <SectionHeading>Projects</SectionHeading>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            technologies={project.technologies}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  );
}
