import type { ReactNode } from "react";
import ReactQueryProvider from "@/processes/providers/ReactQueryProvider";

export default function AppProviders({ children }: { children: ReactNode }) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
}
