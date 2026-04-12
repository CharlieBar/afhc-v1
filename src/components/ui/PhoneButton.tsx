import { Phone } from "lucide-react";
import { site } from "@/content/global/site";
import { cn } from "@/lib/utils";

type PhoneButtonVariant = "default" | "large" | "compact" | "ghost";

interface PhoneButtonProps {
  variant?: PhoneButtonVariant;
  className?: string;
}

const variantClasses: Record<PhoneButtonVariant, string> = {
  default:
    "bg-cta-red hover:bg-cta-red-hover text-white font-semibold px-6 py-3 text-sm rounded-lg shadow-lg min-h-[48px]",
  large:
    "bg-cta-red hover:bg-cta-red-hover text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg min-h-[56px]",
  compact:
    "bg-cta-red hover:bg-cta-red-hover text-white font-semibold px-4 py-2 text-sm rounded-lg shadow min-h-[40px]",
  ghost:
    "bg-transparent text-cta-red border border-cta-red hover:bg-red-50 font-semibold px-6 py-3 text-sm rounded-lg min-h-[48px]",
};

export default function PhoneButton({
  variant = "default",
  className,
}: PhoneButtonProps) {
  return (
    <a
      href={`tel:${site.phoneRaw}`}
      aria-label={`Call ${site.name} at ${site.phoneDisplay}`}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta-red focus-visible:ring-offset-2",
        variantClasses[variant],
        className
      )}
    >
      <Phone className="shrink-0" aria-hidden="true" size={16} />
      <span>{site.phone}</span>
    </a>
  );
}
