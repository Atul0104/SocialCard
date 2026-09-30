import type { Metadata } from "next";
import "./globals.css";
import { PageLoader } from "@/components/PageLoader";
import { profile } from "@/data/profile";

const origin = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: { default: `${profile.name} | Software QA`, template: `%s | ${profile.name}` },
  description: "Meet Atul Ganesh Rathod, a software quality assurance professional focused on reliable, user-centered software.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: origin, title: `${profile.name} | Software QA`, description: "Software quality assurance with a thoughtful, user-first approach." },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><PageLoader />{children}</body></html>;
}
