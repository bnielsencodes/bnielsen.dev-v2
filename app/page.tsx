"use client";
import { useState } from "react";
import NavBar from "./components/navigation/NavBar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);

  // toggle dark mode
  function toggleTheme() {
    setDarkMode((prevMode) => !prevMode);
  }

  function toggleMobileNav() {
    setShowMobileNav((prevState) => !prevState);
  }

  return (
    <>
      <main className={`${darkMode ? "bg-neutral-100" : "bg-neutral-400"}`}>
        <NavBar
          darkMode={darkMode}
          showMobileNav={showMobileNav}
          toggleMobileNav={toggleMobileNav}
        />
      </main>
    </>
  );
}


