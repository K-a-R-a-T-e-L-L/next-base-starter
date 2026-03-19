import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/globals.scss";
import AppProviders from "./providers";

export const metadata: Metadata = {
  title: "Next Base Starter",
  description:
    "Scalable Next.js starter with Tailwind, SCSS, React Query and Kubb OpenAPI codegen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
