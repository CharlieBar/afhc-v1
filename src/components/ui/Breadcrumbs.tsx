// src/components/ui/Breadcrumbs.tsx
// All Family Health Care — Breadcrumb Navigation Component

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("py-3", className)}
    >
      <ol
        className="flex flex-wrap items-center gap-1 font-mono text-[11px]"
        role="list"
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <li key={idx} className="flex items-center gap-1" role="listitem">
              {isLast || !item.href ? (
                <span
                  className={cn(
                    isLast ? "text-charcoal font-medium" : "text-muted"
                  )}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-electric focus:outline-none focus:text-electric focus:underline"
                >
                  {item.label}
                </Link>
              )}

              {!isLast && (
                <ChevronRight
                  className="h-3 w-3 text-border flex-shrink-0"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
