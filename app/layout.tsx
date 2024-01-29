import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "./providers";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import clsx from "clsx";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brandon Nielsen | Web Developer",
  // title: {
  //   template: "Brandon Nielsen | %s",
  //   default: "Brandon Nielsen | Web Developer"
  // },
  description:
    "Brandon Nielsen, web developer specializing in Next.js and React.",
  authors: [{ name: "Brandon Nielsen" }],
  creator: "Brandon Nielsen",
  publisher: "Brandon Nielsen",
  keywords: [
    "web developer",
    "code",
    "web development",
    "next.js",
    "nextjs",
    "react",
    "javascript",
    "oregon",
    "small businesses",
    "frontend",
    "front-end",
    "software engineer",
    "programmer",
  ],
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Brandon Nielsen | Web Developer",
  //   description: "Check out my portfolio!",
  //   siteId: "1229246106791362560",
  //   creator: "@bnielsencodes",
  //   creatorId: "1229246106791362560",
  //   images: {
  //     url: "https://drive.google.com/file/d/10XR0FlHm8Y3jr5gmuNF57uH3mfyJof1y/view?usp=drive_link",
  //     alt: "Preview image for bnielsen.dev",
  //   },
  //   images:
  //     "https://drive.google.com/file/d/10XR0FlHm8Y3jr5gmuNF57uH3mfyJof1y/view?usp=drive_link",
  // },
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
  const portfolio = true;

  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      suppressHydrationWarning
    >
      <body
        className={clsx(
          `${roboto.variable} ${mosk.variable} font-mosk select-none antialiased`,
          { "bg-[#fafafa] dark:bg-[#1a1a1a]": portfolio }
        )}
      >
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
