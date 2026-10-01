import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const description =
  "Full-stack engineer building AI agents and production web apps. 150+ merged open-source PRs across Next.js, Mastra, LlamaIndex, LiteLLM and OpenHands.";

export const metadata: Metadata = {
  metadataBase: new URL("https://neha-portfoliooo.vercel.app"),
  title: "Neha Prasad · Full-stack engineer",
  description,
  openGraph: {
    title: "Neha Prasad",
    description,
    images: ["/portner.png"],
  },
  twitter: {
    card: "summary",
    creator: "@nehaaaa_6",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#161213" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>{children}</body>
    </html>
  );
}
