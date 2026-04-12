// src/components/sections/TrustBar.tsx
// All Family Health Care — Scrolling Trust/Accreditation Ticker Bar

import { site } from "@/content/global/site";

interface TrustBarItem {
  text: string;
}

interface TrustBarProps {
  items?: TrustBarItem[];
}

// Combine accreditations and stats into ticker items
const defaultItems: TrustBarItem[] = [
  ...site.accreditations.map((a) => ({ text: a.name })),
  ...site.stats.map((s) => ({ text: `${s.value} ${s.label}` })),
  { text: "Serving Chicago Since 2004" },
  { text: "24/7 On-Call Nursing" },
  { text: "Licensed in Illinois" },
  { text: "No Copays for Medicare Patients" },
];

export default function TrustBar({ items }: TrustBarProps) {
  const tickerItems = items ?? defaultItems;
  // Duplicate for seamless infinite loop
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div
      className="overflow-hidden border-y border-border bg-surface py-3.5"
      aria-label="Accreditations and trust signals"
    >
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker 28s linear infinite;
          width: max-content;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="ticker-track flex items-center gap-0">
        {doubled.map((item, idx) => (
          <span
            key={idx}
            className="flex items-center gap-6 px-6"
            aria-hidden={idx >= tickerItems.length ? "true" : undefined}
          >
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lime" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted whitespace-nowrap">
              {item.text}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
