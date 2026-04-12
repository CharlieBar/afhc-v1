"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { navigation } from "@/content/global/navigation";
import { site } from "@/content/global/site";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────────────────

interface NavChild {
  label: string;
  href: string;
  description?: string;
  icon?: string;
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

// ─── Accordion section ──────────────────────────────────────────────────────

function MobileNavSection({ item, onClose }: { item: NavItemWithChildren; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between py-[11px] text-left text-[14px] font-medium text-charcoal"
      >
        {item.label}
        <ChevronDown
          size={16}
          className={cn(
            "text-muted transition-transform duration-150",
            expanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-2 pl-2">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="flex flex-col py-2 text-[13px] text-body hover:text-electric"
                >
                  <span className="font-medium">{child.label}</span>
                  {child.description && (
                    <span className="text-[11px] text-muted">{child.description}</span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MobileNav ───────────────────────────────────────────────────────────────

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = navigation.primary as NavItem[];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[190] bg-charcoal/20"
            style={{ top: "64px" }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-x-0 z-[195] overflow-y-auto bg-surface"
            style={{
              top: "64px",
              borderBottom: "1px solid var(--border)",
              boxShadow: "0 8px 32px rgba(13,22,48,0.10)",
              maxHeight: "calc(100vh - 64px)",
            }}
            aria-label="Mobile navigation"
            role="dialog"
          >
            <div className="px-6 pb-6 pt-4">
              {/* Phone CTA at top */}
              <a
                href={`tel:${site.phoneRaw}`}
                aria-label={`Call ${site.name}`}
                className="mb-4 flex items-center justify-center gap-2 rounded-[7px] bg-electric-light py-3 text-[14px] font-semibold text-electric"
                onClick={onClose}
              >
                <Phone size={15} aria-hidden="true" />
                {site.phone}
              </a>

              {/* Nav items */}
              <nav aria-label="Mobile navigation links">
                {navItems.map((item) => {
                  if (item.children) {
                    return (
                      <MobileNavSection
                        key={item.label}
                        item={item}
                        onClose={onClose}
                      />
                    );
                  }
                  return (
                    <div key={item.href} className="border-b border-border">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block py-[11px] text-[14px] font-medium text-charcoal hover:text-electric"
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                })}
              </nav>

              {/* Primary CTA at bottom */}
              <Link
                href={navigation.secondaryCTA.href}
                onClick={onClose}
                className="mt-5 flex items-center justify-center rounded-[7px] bg-electric px-4 py-[13px] text-[14px] font-semibold text-white hover:bg-electric-dark"
              >
                {navigation.secondaryCTA.text}
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
