import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Instrument_Serif, JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sans = Schibsted_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const description =
  "Full-stack engineer who ships AI products and gets developers to use them. 150+ merged PRs to Next.js, Mastra, LiteLLM, OpenHands and LlamaIndex. Open to Software Engineer and DevRel roles.";

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

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        {children}
      </body>
    </html>
  );
}
