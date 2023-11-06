import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  // toggle dark mode
  function toggleTheme() {
    setDarkMode((prevMode) => !prevMode);
  }




