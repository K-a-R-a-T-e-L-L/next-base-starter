"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/shared/config/routes";

const links = [
  { href: routes.home, label: "Home" },
  { href: routes.about, label: "About" },
  { href: routes.docs, label: "Docs" },
] as const;

export default function AppNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex items-center gap-2">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              isActive
                ? "rounded-lg border border-slate-400 bg-slate-800 px-3 py-1.5 text-sm font-medium text-slate-100"
                : "rounded-lg border border-transparent px-3 py-1.5 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:text-slate-100"
            }
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
