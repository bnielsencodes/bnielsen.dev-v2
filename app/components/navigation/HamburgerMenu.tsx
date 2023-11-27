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
        "fixed top-2 right-2 z-50 flex flex-col justify-around items-end gap-1 w-[40px] h-[40px] py-3 px-2 group lg:hidden",
        {
          "items-center": showMobileNav,
          "outline-dark-theme border-2 border-neutral-500": showMobileNav && darkMode,
          "outline-light-theme border-2 border-neutral-200": showMobileNav && !darkMode,
        }
      )}
      onClick={() => toggleMobileNav()}
      type="button"
      aria-label="mobile nav menu toggle"
    >
      <span
        className={clsx(
          "inline-block h-[2px] transition-transform duration-500",
          {
            "w-6 -rotate-[135deg] translate-y-1": showMobileNav,
            "w-7": !showMobileNav,
            "bg-neutral-400": showMobileNav && darkMode,
            "bg-neutral-300": showMobileNav && !darkMode,
            "bg-neutral-600": !showMobileNav && darkMode,
            "bg-neutral-100": !showMobileNav && !darkMode,
          }
        )}
      ></span>
      <span
        className={clsx(
          "inline-block w-6 h-[2px] transition-transform duration-500",
          {
            "rotate-[135deg] -translate-y-1": showMobileNav,
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
