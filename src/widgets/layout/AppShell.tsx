import Link from "next/link";
import type { ReactNode } from "react";
import { routes } from "@/shared/config/routes";
import Container from "@/shared/ui/Container";
import AppNav from "@/widgets/navigation/AppNav";

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href={routes.home} className="text-sm font-semibold tracking-wide text-slate-100">
              Next Base Starter
            </Link>
            <AppNav />
          </div>
        </Container>
      </header>

      <main className="py-10">
        <Container>{children}</Container>
      </main>

      <footer className="border-t border-slate-800/80 py-6">
        <Container>
          <p className="text-xs text-slate-400">Built with Next.js, Tailwind, SCSS, React Query and Kubb.</p>
        </Container>
      </footer>
    </div>
  );
}
