import type { ReactNode } from "react";
import AppShell from "@/widgets/layout/AppShell";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return <AppShell>{children}</AppShell>;
}
