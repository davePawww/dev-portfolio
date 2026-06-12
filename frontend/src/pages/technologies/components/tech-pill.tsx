import type { FlattenedTech } from '@/lib/technologies';
import { TechIcon } from '@/lib/tech-icons';

type TechPillProps = {
  tech: FlattenedTech;
};

export function TechPill({ tech }: TechPillProps) {
  return (
    <div className="bg-card text-card-foreground flex flex-col items-center gap-1.5 rounded-xl border px-3 py-3 shadow-xs">
      <span className="text-muted-foreground/40 text-[9px] font-medium tracking-widest uppercase">
        {tech.category}
      </span>
      <TechIcon name={tech.icon} className="size-5 shrink-0" />
      <span className="text-center text-[11px] leading-tight font-medium">{tech.name}</span>
    </div>
  );
}
