import clsx from "clsx";

export default function HamburgerMenu({
  darkMode,
  showMobileNav,
  toggleMobileNav,
}: {
  darkMode: boolean;
  showMobileNav: boolean;
  toggleMobileNav: () => void;
}) {
  return (
    <button
      className={clsx(
        "fixed top-2 right-2 z-40 flex flex-col justify-around items-center gap-1 w-[40px] h-[40px] py-3 px-2 group",
        {
          "border-2 border-neutral-500": showMobileNav && darkMode,
          "border-2 border-neutral-200": showMobileNav && !darkMode,
        }
      )}
      onClick={() => toggleMobileNav()}
    >
      <span
        className={clsx(
          "inline-block w-5 h-[2px] transition-transform duration-400",
          {
            "rotate-45 translate-y-1": showMobileNav,
            "bg-neutral-400": showMobileNav && darkMode,
            "bg-neutral-300": showMobileNav && !darkMode,
            "bg-neutral-600": !showMobileNav && darkMode,
            "bg-neutral-100": !showMobileNav && !darkMode,
          }
        )}
      ></span>
      <span
        className={clsx(
          "inline-block w-5 h-[2px] transition-transform duration-400",
          {
            "-rotate-45 -translate-y-1": showMobileNav,
            "bg-neutral-400": showMobileNav && darkMode,
            "bg-neutral-300": showMobileNav && !darkMode,
            "bg-neutral-600": !showMobileNav && darkMode,
            "bg-neutral-100": !showMobileNav && !darkMode,
          }
        )}
      ></span>
    </button>
  );
}
