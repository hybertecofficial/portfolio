import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "text-center", className)}>
      {label && (
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="eyebrow-line" />
          <span className="section-label">{label}</span>
        </div>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-cream md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "font-body text-cream-muted text-base md:text-lg leading-relaxed",
          align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
