import { projects } from "../data/projects";
import { CaseStudyCard } from "./CaseStudyCard";

export function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, i) => (
        <CaseStudyCard key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
