"use client";
import { useState } from "react";
import Image from "next/image";
import waveDarkTop from "@/public/assets/dividers/wave-dark-top.svg";
import waveLightTop from "@/public/assets/dividers/wave-light-top.svg";
import waveDarkBottom from "@/public/assets/dividers/wave-dark-bottom.svg";
import waveLightBottom from "@/public/assets/dividers/wave-light-bottom.svg";
import NavBar from "./components/navigation/NavBar";
import Header from "./components/header/Header";
import AboutSection from "./components/about-section/AboutSection";
import ProjectsSection from "./components/projects-section/ProjectsSection";
import clsx from "clsx";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  // toggle dark mode
  function toggleTheme() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <>
      <main
        className={clsx("", {
          "bg-neutral-100": darkMode,
          "bg-neutral-600": !darkMode,
        })}
      >
        <NavBar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Header darkMode={darkMode} />
        {/* section top divider */}
        <Image
          className="w-full -mb-[1px]"
          src={darkMode ? waveDarkTop : waveLightTop}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <AboutSection darkMode={darkMode} />
        {/* section bottom divider */}
        <Image
          className="w-full -mt-[1px]"
          src={darkMode ? waveDarkBottom : waveLightBottom}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <ProjectsSection darkMode={darkMode} />
      </main>
    </>
  );
}
