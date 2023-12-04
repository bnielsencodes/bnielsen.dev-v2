import { useState } from "react";
import Image from "next/image";
import logoDark from "/public/assets/images/logo/Main-Logo-800x600.png";
import logoLight from "/public/assets/images/logo/Inverted-Color-800x600.png";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";
import clsx from "clsx";
import NavList from "./NavList";
import ThemeToggle from "./ThemeToggle";

export default function NavBar({
  darkMode,
  toggleTheme,
}: {
  darkMode: boolean;
  toggleTheme: () => void;
}) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  function toggleMobileNav() {
    setShowMobileNav((prevState) => !prevState);
  }

  return (
    <nav
      className={clsx(
        "fixed top-0 right-0 left-0 z-30 flex items-center justify-start h-14 pl-4 pr-2 border-b bg-opacity-80 backdrop-blur-sm md:pl-6 lg:justify-between lg:pr-5",
        {
          "bg-neutral-100 border-neutral-300": darkMode,
          "bg-neutral-600 border-neutral-400 shadow-navbar": !darkMode,
        }
      )}
    >
      {/* logo and name */}
      <div className="flex items-center">
        <Image
          className="w-8 h-8 mr-2"
          src={darkMode ? logoDark : logoLight}
          alt="letter N logo"
          width="800"
          height="600"
          sizes="100vw"
        />
        <p
          className={clsx("text-xl font-extrabold leading-[0.3px]", {
            "text-neutral-600": darkMode,
            "text-neutral-100": !darkMode,
          })}
        >
          Brandon Nielsen
        </p>
      </div>

      <div className="hidden lg:flex lg:items-center lg:gap-3">
        <NavList {...{ darkMode }} />
        <ThemeToggle {...{ darkMode, toggleTheme }} />
      </div>

      {/* hamburger nav (hidden at lg breakpoint) */}
      <HamburgerMenu {...{ darkMode, showMobileNav, toggleMobileNav }} />
      {showMobileNav && (
        <MobileNav
          {...{ darkMode, toggleTheme, showMobileNav, toggleMobileNav }}
        />
      )}
    </nav>
  );
}
