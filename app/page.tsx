"use client";
import { useState, useEffect } from "react";
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
import clsx from "clsx";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  //
  //

  // prefers dark mode
  // useEffect(() => {
  //   const prefersDark = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   if (prefersDark) {
  //     setDarkMode(true);
  //   }
  // }, []);

  //
  //

  // toggle dark mode
  function toggleTheme() {
    setDarkMode((prevMode) => !prevMode);
  }

  //
  //

  return (
    <main
      className={clsx("", {
        "bg-neutral-100": darkMode,
        "bg-neutral-600": !darkMode,
      })}
    >
      <NavBar {...{ darkMode, toggleTheme }} />
      <Header {...{ darkMode }} />
      {/* section top divider */}
      <Image
        className="w-full -mb-[1px]"
        src={darkMode ? waveDarkTop : waveLightTop}
        alt="wave section divider"
        width="0"
        height="0"
        sizes="100vw"
      />
      <AboutSection {...{ darkMode }} />
      {/* section bottom divider */}
      <Image
        className="w-full -mt-[1px]"
        src={darkMode ? waveDarkBottom : waveLightBottom}
        alt="wave section divider"
        width="0"
        height="0"
        sizes="100vw"
      />
      <ProjectsSection {...{ darkMode }} />
      {/* section top divider */}
      <Image
        className="w-full -mb-[1px]"
        src={darkMode ? waveDarkTop : waveLightTop}
        alt="wave section divider"
        width="0"
        height="0"
        sizes="100vw"
      />
      <ContactSection {...{ darkMode }} />
      <Footer {...{ darkMode }} />
    </main>
  );
}
