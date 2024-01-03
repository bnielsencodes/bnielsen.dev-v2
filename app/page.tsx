"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import NavBar from "./_components/navigation/NavBar";
import Header from "./_components/header/Header";
import AboutSection from "./_components/about-section/AboutSection";
import ProjectsSection from "./_components/projects-section/ProjectsSection";
import ContactSection from "./_components/contact-section/ContactSection";
import Footer from "./_components/footer/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="bg-neutral-600 dark:bg-neutral-100">
        <NavBar />
        <Header />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <main className="bg-neutral-600 dark:bg-neutral-100">
        <NavBar />
        <Header />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <main className="bg-neutral-600 dark:bg-neutral-100">
        <NavBar />
        <Header />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    );
  }
}
