import { useState } from "react";
import Image from "next/image";
import logoDark from "/public/assets/logo/Main-Logo-800x600.png";
import logoLight from "/public/assets/logo/Inverted-Color-800x600.png";
import HamburgerMenu from "./HamburgerMenu";
import MobileNav from "./MobileNav";
import clsx from "clsx";

export default function NavBar(props: any) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  function toggleMobileNav() {
    setShowMobileNav((prevState) => !prevState);
  }

  return (
    <nav
      className={clsx(
        "fixed top-0 right-0 left-0 z-20 flex items-center justify-start h-14 pl-4 pr-2 border-b bg-opacity-80 backdrop-blur-sm",
        {
          "bg-neutral-100 border-neutral-300": props.darkMode,
          "bg-neutral-600 border-neutral-400": !props.darkMode,
        }
      )}
    >
      {/* logo and name */}
      <Image
        className="w-8 h-8 mr-2"
        src={props.darkMode ? logoDark : logoLight}
        alt="letter N logo"
        width="800"
        height="600"
        sizes="100vw"
      />
      <p
        className={clsx("font-mono text-lg font-bold leading-[0.3px]", {
          "text-neutral-600": props.darkMode,
          "text-neutral-100": !props.darkMode,
        })}
      >
        Brandon Nielsen
      </p>
      <HamburgerMenu
        darkMode={props.darkMode}
        showMobileNav={showMobileNav}
        toggleMobileNav={toggleMobileNav}
      />
      {showMobileNav && (
        <MobileNav
          darkMode={props.darkMode}
          toggleTheme={props.toggleTheme}
          showMobileNav={showMobileNav}
          toggleMobileNav={toggleMobileNav}
        />
      )}
    </nav>
  );
}
