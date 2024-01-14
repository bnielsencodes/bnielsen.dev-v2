"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import waveDark from "@/public/assets/images/section-divider/wave-dark.svg";
import waveLight from "@/public/assets/images/section-divider/wave-light.svg";
import NavBar from "./_components/portfolio/navigation/NavBar";
import Header from "./_components/portfolio/header/Header";
import AboutSection from "./_components/portfolio/about-section/AboutSection";
import ProjectsSection from "./_components/portfolio/projects-section/ProjectsSection";
import ContactSection from "./_components/portfolio/contact-section/ContactSection";
import Footer from "./_components/portfolio/footer/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const blog = false;

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    let loading = true;

    return (
      <main className="bg-neutral-600 dark:bg-neutral-100">
        <NavBar {...{ blog }} />
        <Header />
        <AboutSection {...{ loading }} />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    );
  }

  if (resolvedTheme === "dark") {
    let loading = false;

    return (
      <main className="dark:bg-neutral-100">
        <NavBar {...{ blog }} />
        <Header />
        <Image
          className="w-full -mb-[1px]"
          src={waveDark}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <AboutSection {...{ loading }} />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    );
  }

  if (resolvedTheme === "light") {
    let loading = false;

    return (
      <main className="bg-neutral-600">
        <NavBar {...{ blog }} />
        <Header />
        <Image
          className="w-full"
          src={waveLight}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <AboutSection {...{ loading }} />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    );
  }
}
