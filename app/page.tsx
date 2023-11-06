"use client";
import { useState } from "react";

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



