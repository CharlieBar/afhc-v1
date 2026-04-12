"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { navigation } from "@/content/global/navigation";
import { site } from "@/content/global/site";
import { cn } from "@/lib/utils";
import MobileNav from "./MobileNav";

// ─── Types ──────────────────────────────────────────────────────────────────

interface NavChild {
  label: string;
  href: string;
  description: string;
  icon: string;
}

interface NavItemWithChildren {
  label: string;
  children: NavChild[];
  href?: never;
}

interface NavItemWithHref {
  label: string;
  href: string;
  children?: never;
}

type NavItem = NavItemWithChildren | NavItemWithHref;

// ─── Dropdown ───────────────────────────────────────────────────────────────

function NavDropdown({ item }: { item: NavItemWithChildren }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "flex items-center gap-1 rounded-[6px] px-[14px] py-[7px] text-[13px] font-medium text-body transition-colors duration-150",
          "hover:bg-electric-light hover:text-electric",
          open && "bg-electric-light text-electric"
        )}
      >
        {item.label}
        <ChevronDown
          size={14}
          className={cn(
            "transition-transform duration-150",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          onMouseLeave={() => setOpen(false)}
          className="absolute left-0 top-full z-50 mt-1 w-72 rounded-xl border border-border bg-surface p-4 shadow-xl"
          role="menu"
        >
          <div className="grid grid-cols-1 gap-0.5">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="group flex flex-col rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-electric-light"
              >
                <span className="text-[13px] font-medium text-charcoal group-hover:text-electric">
                  {child.label}
                </span>
                {child.description && (
                  <span className="mt-0.5 text-[11px] text-muted">
                    {child.description}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Hamburger ──────────────────────────────────────────────────────────────

function Hamburger({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md transition-colors hover:bg-electric-light"
    >
      <span
        className={cn(
          "block h-[2px] w-5 rounded-sm bg-charcoal transition-transform duration-200",
          open && "translate-y-[7px] rotate-45"
        )}
      />
      <span
        className={cn(
          "block h-[2px] w-5 rounded-sm bg-charcoal transition-opacity duration-200",
          open && "opacity-0"
        )}
      />
      <span
        className={cn(
          "block h-[2px] w-5 rounded-sm bg-charcoal transition-transform duration-200",
          open && "-translate-y-[7px] -rotate-45"
        )}
      />
    </button>
  );
}

// ─── Header ─────────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 900) setMobileOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = navigation.primary as NavItem[];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[200] h-16 border-b border-border transition-shadow duration-200",
          scrolled && "shadow-[0_2px_16px_rgba(13,22,48,0.08)]"
        )}
        style={{
          background: "rgba(244,246,251,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div
          className="flex h-full items-center justify-between px-6 sm:px-8 md:px-10"
          style={{ maxWidth: "none" }}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            aria-label={`${site.name} — Home`}
            className="flex shrink-0 items-center gap-2.5"
          >
            <span
              className="flex h-[34px] w-[34px] items-center justify-center rounded-[8px] bg-electric"
              aria-hidden="true"
            >
              <span className="font-heading text-[14px] font-extrabold leading-none text-white">
                AF
              </span>
            </span>
            <span
              className="font-heading text-[15px] font-extrabold tracking-[-0.02em] text-charcoal"
              aria-hidden="true"
            >
              All Family
            </span>
          </Link>

          {/* ── Desktop nav (≥900px) ── */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 nav:flex"
          >
            {navItems.map((item) => {
              if (item.children) {
                return <NavDropdown key={item.label} item={item} />;
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[6px] px-[14px] py-[7px] text-[13px] font-medium text-body transition-colors duration-150 hover:bg-electric-light hover:text-electric"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-2">
            {/* Phone link — hidden below 600px */}
            <a
              href={`tel:${site.phoneRaw}`}
              aria-label={`Call ${site.name}`}
              className="hidden items-center gap-1.5 rounded-[6px] border px-3 py-[7px] font-mono text-[12px] text-electric transition-colors duration-150 hover:bg-electric-light sm:flex"
              style={{ borderColor: "rgba(24,71,240,0.3)" }}
            >
              <Phone size={13} aria-hidden="true" />
              {site.phone}
            </a>

            {/* Phone icon-only — visible only on mobile (<600px) */}
            <a
              href={`tel:${site.phoneRaw}`}
              aria-label={`Call ${site.name}`}
              className="flex h-9 w-9 items-center justify-center rounded-[6px] border text-electric transition-colors duration-150 hover:bg-electric-light sm:hidden"
              style={{ borderColor: "rgba(24,71,240,0.3)" }}
            >
              <Phone size={16} aria-hidden="true" />
            </a>

            {/* Free Assessment CTA — desktop only */}
            <Link
              href={navigation.secondaryCTA.href}
              className="hidden rounded-[6px] bg-electric px-[18px] py-[9px] text-[13px] font-semibold text-white transition-colors duration-150 hover:bg-electric-dark nav:inline-flex"
            >
              {navigation.secondaryCTA.text}
            </Link>

            {/* Hamburger — mobile only */}
            <div className="nav:hidden">
              <Hamburger
                open={mobileOpen}
                onClick={() => setMobileOpen((o) => !o)}
              />
            </div>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
