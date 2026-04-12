import { ShieldCheck, Award } from "lucide-react";
import { site } from "@/content/global/site";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  "shield-check": <ShieldCheck size={12} aria-hidden="true" className="shrink-0" />,
  award: <Award size={12} aria-hidden="true" className="shrink-0" />,
};

interface AccreditationBadgeProps {
  className?: string;
  /** Light variant renders on dark backgrounds (white text/border). Default renders on light backgrounds. */
  onDark?: boolean;
}

export default function AccreditationBadge({
  className,
  onDark = false,
}: AccreditationBadgeProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {site.accreditations.map((item) => (
        <div
          key={item.name}
          title={item.description}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md border px-2 py-1",
            onDark
              ? "border-white/20 text-white/60"
              : "border-border text-muted"
          )}
        >
          <span
            className={cn(onDark ? "text-white/50" : "text-muted")}
          >
            {iconMap[item.icon] ?? null}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest leading-none">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
