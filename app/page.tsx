"use client";
import { useState } from "react";
import NavBar from "./components/navigation/NavBar";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  // toggle dark mode
  function toggleTheme() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <>
      <main className={`${darkMode ? "bg-neutral-100" : "bg-neutral-400"}`}>
        <NavBar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Header darkMode={darkMode} />
        <Skills />
      </main>
    </>
  );
}
