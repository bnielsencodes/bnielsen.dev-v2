import Image from "next/image";
import darkLogo from "/public/assets/Main-Logo-800x600.png";
import lightLogo from "/public/assets/Inverted-Color-800x600.png";
import HamburgerMenu from "./HamburgerMenu";
import clsx from "clsx";

export default function NavBar(props: any) {
  return (
    <nav className={clsx("z-10 flex items-center justify-between h-14 pl-4 pr-2 border-b border-neutral-300", { "bg-neutral-100": props.darkMode, "bg-neutral-500": !props.darkMode })}>
      {/* logo and name */}
      <div className="flex">
        <Image
          className="w-8 h-8 mr-2"
          src={props.darkMode ? darkLogo : lightLogo}
          alt="letter N logo"
          width="800"
          height="600"
          sizes="100vw"
        />
        <p className={clsx("mt-1 font-bold", { "text-neutral-500": props.darkMode, "text-neutral-100": !props.darkMode })}>Brandon Nielsen</p>
      </div>
      <HamburgerMenu
        showMobileNav={props.showMobileNav}
        toggleMobileNav={props.toggleMobileNav}
        darkMode={props.darkMode}
      />
    </nav>
  );
}
