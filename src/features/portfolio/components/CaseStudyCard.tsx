import Link from "next/link";
import Image from "next/image";
import type { Project } from "../types";

interface CaseStudyCardProps {
  project: Project;
  index: number;
}

export function CaseStudyCard({ project, index }: CaseStudyCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="surface-panel group block overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-lime/30"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.hero}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

        {/* Year badge */}
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-bg/70 backdrop-blur-sm text-cream-muted text-xs font-body">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-surface-2 border border-border text-cream-muted text-xs font-body"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-2 font-display text-xl font-bold text-cream transition-colors group-hover:text-lime">
          {project.title}
        </h3>
        <p className="font-body text-sm text-cream-muted leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Top result */}
        <div className="border-t border-white/10 pt-4">
          <p className="text-xs font-body text-lime font-medium">
            ✦ {project.results[0]}
          </p>
        </div>
      </div>
    </Link>
  );
}
