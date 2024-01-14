import { useEffect, useState } from "react";
import ThemedLogo from "../../shared/navigation/ThemedLogo";
import NavList from "./NavList";
import ThemeToggle from "../../shared/navigation/ThemeToggle";
import HamburgerMenu from "../../shared/navigation/HamburgerMenu";
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
    <nav className="fixed left-0 right-0 top-0 z-30 flex h-14 items-center border-b border-neutral-400 bg-neutral-600 bg-opacity-80 shadow-navbar backdrop-blur-sm dark:border-neutral-300 dark:bg-neutral-100 dark:bg-opacity-80 dark:shadow-none">
      <div className="relative flex w-full items-center justify-start pl-5 md:pl-8 lg:mx-auto lg:max-w-[1100px] lg:justify-between lg:px-8">
        {/* logo and name */}
        <div className="flex items-center">
          <ThemedLogo />
          <a
            className="opacity-transition outline-light-theme dark:outline-dark-theme flex h-8 items-center rounded-sm text-xl font-bold leading-[0.019rem] text-neutral-100 focus:opacity-80 dark:text-neutral-600 lg:hover:opacity-80"
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
