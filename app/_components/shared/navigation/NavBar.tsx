import { useEffect, useState } from "react";
import ThemedLogo from "./ThemedLogo";
import NavList from "./NavList";
import ThemeToggle from "./ThemeToggle";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";

export default function NavBar({ blog }: { blog?: boolean }) {
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

  // Portfolio NavBar
  if (!blog) {
    return (
      <nav className="fixed top-0 right-0 left-0 z-30 flex items-center justify-start h-14 pl-5 border-b border-neutral-400 bg-neutral-600 bg-opacity-80 backdrop-blur-sm shadow-navbar dark:border-neutral-300 dark:bg-neutral-100 dark:bg-opacity-80 dark:shadow-none md:pl-6 lg:justify-between lg:pr-5">
        {/* logo and name */}
        <div className="flex items-center">
          <ThemedLogo />
          <a
            className="opacity-transition outline-light-theme flex items-center h-8 rounded-sm text-neutral-100 dark:outline-dark-theme dark:text-neutral-600 text-xl font-bold leading-[0.019rem] focus:opacity-80 lg:hover:opacity-80"
            href="#header"
          >
            Brandon Nielsen
          </a>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <NavList {...{ blog }} />
          <ThemeToggle />
        </div>

        {/* hamburger nav (hidden at lg breakpoint) */}
        <HamburgerMenu {...{ showMobileNav, toggleMobileNav }} />
        {showMobileNav && (
          <MobileNav {...{ showMobileNav, toggleMobileNav, blog }} />
        )}
      </nav>
    );
  }

  // Blog NavBar
  if (blog) {
    return (
      <nav className="fixed top-0 right-0 left-0 z-30 flex items-center h-14 border-b border-neutral-400 bg-neutral-600 bg-opacity-80 backdrop-blur-sm shadow-navbar dark:border-neutral-300 dark:bg-neutral-100 dark:bg-opacity-80 dark:shadow-none">
        <div className="relative flex items-center justify-start w-full pl-5 md:pl-8 lg:justify-between lg:max-w-[1100px] lg:px-8 lg:mx-auto">
          {/* logo and name */}
          <div className="flex items-center">
            <ThemedLogo />
            <a
              className="opacity-transition outline-light-theme flex items-center h-8 rounded-sm text-neutral-100 dark:outline-dark-theme dark:text-neutral-600 text-xl font-bold leading-[0.019rem] focus:opacity-80 lg:hover:opacity-80"
              href="/blog"
            >
              Brandon Nielsen
            </a>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <NavList {...{ blog }} />
            <ThemeToggle />
          </div>

          {/* hamburger nav (hidden at lg breakpoint) */}
          <HamburgerMenu {...{ showMobileNav, toggleMobileNav }} />
          {showMobileNav && (
            <MobileNav {...{ showMobileNav, toggleMobileNav, blog }} />
          )}
        </div>
      </nav>
    );
  }
}
