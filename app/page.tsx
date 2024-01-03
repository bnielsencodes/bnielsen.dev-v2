"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import waveDarkTop from "@/public/assets/images/section-dividers/wave-dark-top.svg";
import waveLightTop from "@/public/assets/images/section-dividers/wave-light-top.svg";
import waveDarkBottom from "@/public/assets/images/section-dividers/wave-dark-bottom.svg";
import waveLightBottom from "@/public/assets/images/section-dividers/wave-light-bottom.svg";
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
        <div className="w-full h-[81.5px] md:h-[170px] lg:h-[226.5px] xl:h-[319px]"></div>
        <AboutSection />
        <div className="w-full h-[83px] md:h-[169.25px] lg:h-[226.75px] xl:h-[319px]"></div>
        <ProjectsSection />
        <div className="w-full h-[82.5px] md:h-[169.7px] lg:h-[226.5px] xl:h-[319px]"></div>
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
        {/* section top divider */}
        <Image
          className="w-full -mb-[1px]"
          src={waveDarkTop}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <AboutSection />
        {/* section bottom divider */}
        <Image
          className="w-full -mt-[1px]"
          src={waveDarkBottom}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <ProjectsSection />
        {/* section top divider */}
        <Image
          className="w-full -mb-[1px]"
          src={waveDarkTop}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
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
        {/* section top divider */}
        <Image
          className="w-full -mb-[1px]"
          src={waveLightTop}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <AboutSection />
        {/* section bottom divider */}
        <Image
          className="w-full -mt-[1px]"
          src={waveLightBottom}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <ProjectsSection />
        {/* section top divider */}
        <Image
          className="w-full -mb-[1px]"
          src={waveLightTop}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <ContactSection />
        <Footer />
      </main>
    );
  }
}
