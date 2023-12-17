import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brandon Nielsen | Web Developer",
  description: "Brandon Nielsen, web developer.",
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
