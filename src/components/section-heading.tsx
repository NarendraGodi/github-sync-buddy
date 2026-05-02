import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  prompt?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  prompt = "~",
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", className)}>
      <p className="font-mono text-xs text-primary mb-2">
        <span className="text-muted-foreground">{prompt}</span>
        <span className="mx-1">{">"}</span>
        {title.toLowerCase().replace(/\s+/g, "_")}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
