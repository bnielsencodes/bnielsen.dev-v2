import { useEffect, useState } from "react";
import ThemedLogo from "../../shared/navigation/ThemedLogo";
import NavList from "./NavList";
import ThemeToggle from "../../shared/navigation/ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";

export default function NavBar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  function toggleMobileNav() {
    setShowMobileNav((prevState) => !prevState);
  }

  useEffect(() => {
    if (showMobileNav) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "scroll";
    return () => {};
  }, [showMobileNav]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex items-center h-14 border-b border-neutral-400 dark:border-neutral-300 shadow-navbar dark:shadow-none bg-neutral-600 dark:bg-neutral-100 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-sm">
      <div className="relative flex items-center justify-start w-full pl-4 md:pl-8 lg:justify-between lg:max-w-[1100px] lg:pl-8 lg:pr-7 lg:mx-auto">
        {/* logo and name */}
        <div className="flex items-center">
          <ThemedLogo />
          <a
            className="opacity-transition outline-light-theme dark:outline-dark-theme flex items-center h-8 rounded-sm text-neutral-100 dark:text-neutral-600 text-xl font-bold leading-[0.019rem] focus:opacity-80 lg:hover:opacity-80"
            href="/blog"
          >
            Brandon Nielsen
          </a>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <NavList />
          <ThemeToggle />
        </div>

        {/* hamburger nav (hidden at lg breakpoint) */}
        <HamburgerMenu {...{ showMobileNav, toggleMobileNav }} />
        {showMobileNav && <MobileNav {...{ showMobileNav, toggleMobileNav }} />}
      </div>
    </nav>
  );
}
