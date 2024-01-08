import clsx from "clsx";

export default function HamburgerMenu({
  showMobileNav,
  toggleMobileNav,
}: {
  showMobileNav: boolean;
  toggleMobileNav: () => void;
}) {
  return (
    <button
      className={clsx(
        "fixed top-2 right-0 z-50 flex flex-col justify-around items-end gap-1 w-[40px] h-[40px] py-3 px-2 -translate-x-3 md:-translate-x-4 group lg:hidden",
        {
          "outline-light-theme transition-transform items-center border-2 border-neutral-200 -translate-x-[7px] duration-500 dark:outline-dark-theme dark:border-2 dark:border-neutral-500 md:-translate-x-[8px]":
            showMobileNav,
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
            "w-6 bg-neutral-300 -rotate-[135deg] translate-y-1 dark:bg-neutral-400":
              showMobileNav,
            "w-7 bg-neutral-100 dark:bg-neutral-600": !showMobileNav,
          }
        )}
      ></span>
      <span
        className={clsx(
          "inline-block w-6 h-[2px] transition-transform duration-500",
          {
            "bg-neutral-300 rotate-[135deg] -translate-y-1 dark:bg-neutral-400":
              showMobileNav,
            "bg-neutral-100 dark:bg-neutral-600": !showMobileNav,
          }
        )}
      ></span>
    </button>
  );
}
