import Link from "next/link";
import { Phone, MapPin, ShieldCheck, Award } from "lucide-react";
import { footer } from "@/content/global/navigation";
import { site } from "@/content/global/site";
import PhoneButton from "@/components/ui/PhoneButton";

// ─── Logo ────────────────────────────────────────────────────────────────────

function FooterLogo() {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — Home`}
      className="flex items-center gap-2.5"
    >
      <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[8px] bg-electric">
        <span className="font-heading text-[14px] font-extrabold leading-none text-white">
          AF
        </span>
      </span>
      <span className="font-heading text-[15px] font-extrabold tracking-[-0.02em] text-white">
        All Family
      </span>
    </Link>
  );
}

// ─── Accreditation badges (footer / dark variant) ────────────────────────────

function FooterAccreditations() {
  const iconMap: Record<string, React.ReactNode> = {
    "shield-check": <ShieldCheck size={11} aria-hidden="true" className="shrink-0" />,
    award: <Award size={11} aria-hidden="true" className="shrink-0" />,
  };

  return (
    <div className="flex flex-wrap gap-2">
      {site.accreditations.map((item) => (
        <div
          key={item.name}
          title={item.description}
          className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-2 py-1 text-white/50"
        >
          {iconMap[item.icon] ?? null}
          <span className="font-mono text-[10px] uppercase tracking-widest leading-none">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Footer columns ──────────────────────────────────────────────────────────

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p
        className="mb-4 font-mono text-[9px] uppercase tracking-[0.18em] text-accent"
        aria-label={`${heading} links`}
      >
        {heading}
      </p>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[13px] text-white/40 transition-colors duration-150 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-charcoal" aria-label="Site footer">
      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_repeat(5,minmax(0,1fr))]">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <FooterLogo />

            <p className="text-[13px] leading-relaxed text-white/50">
              {footer.description}
            </p>

            {/* Address */}
            <address className="not-italic">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 font-mono text-[11px] text-white/40 transition-colors duration-150 hover:text-white/70"
                aria-label={`${site.name} address: ${site.address.full}`}
              >
                <MapPin size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
                {site.address.full}
              </a>
            </address>

            {/* Phone CTA */}
            <PhoneButton variant="default" className="w-full justify-center sm:w-auto sm:justify-start" />

            {/* Accreditation badges */}
            <FooterAccreditations />
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <FooterColumn key={col.heading} heading={col.heading} links={col.links} />
          ))}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t px-6 py-6 sm:px-8 lg:px-14"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright + legal links */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-[12px] text-white/30">
              {footer.bottomBar.copyright}
            </p>
            <span className="hidden text-white/20 sm:inline" aria-hidden="true">
              |
            </span>
            <nav aria-label="Legal links" className="flex flex-wrap gap-x-4 gap-y-1">
              {footer.bottomBar.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[12px] text-white/30 transition-colors duration-150 hover:text-white/60"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Accreditation text badges */}
          <div className="flex flex-wrap items-center gap-2">
            {footer.bottomBar.accreditations.map((badge) => (
              <span
                key={badge}
                className="rounded border border-white/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-white/30"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
