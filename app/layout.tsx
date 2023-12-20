import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brandon Nielsen | Web Developer",
  description: "Brandon Nielsen, Oregon based web developer.",
  author: "Brandon Nielsen",
  keywords: ["web developer", "Next.js", "nextjs", "React", "JavaScript", "Oregon", "small businesses", "frontend", "front-end", "software engineer", "programmer" ],
  twitter: {
    card: "summary_large_image",
    title: "bnielsen.dev",
    description: "Brandon Nielsen | Oregon based web developer",
    siteId: "1229246106791362560",
    creator: "@bnielsencodes",
    creatorId: "1229246106791362560",
    images: ["../public/assets/screenshots/social-light.png"],
    imageAlt: "Screenshot of bnielsen.dev",
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const mosk = localFont({
  src: [
    {
      path: "../public/assets/fonts/Mosk_Light-300.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/assets/fonts/Mosk_Normal-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Mosk_Medium-500.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/assets/fonts/Mosk_Semi-Bold-600.ttf",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "../public/assets/fonts/Mosk_Bold-700.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/assets/fonts/Mosk_Extra-Bold-800.ttf",
      weight: "800",
      style: "extra-bold",
    },
  ],
  variable: "--font-mosk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body
        className={`${roboto.variable} ${mosk.variable} font-mosk antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
