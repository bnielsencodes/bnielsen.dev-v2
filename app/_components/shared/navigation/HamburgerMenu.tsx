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
        "group fixed top-2 right-0 z-50 flex flex-col items-end justify-around gap-1 w-[40px] h-[40px] px-2 py-3 -translate-x-3 md:-translate-x-4 lg:hidden",
        {
          "outline-light-theme dark:outline-dark-theme items-center border-2 dark:border-2 border-neutral-200 dark:border-neutral-500 -translate-x-[7px] transition-transform duration-500 md:-translate-x-[8px]":
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
            "w-6 bg-neutral-300 dark:bg-neutral-400 translate-y-1 -rotate-[135deg]":
              showMobileNav,
            "w-7 bg-neutral-100 dark:bg-neutral-600": !showMobileNav,
          }
        )}
      ></span>
      <span
        className={clsx(
          "inline-block h-[2px] w-6 transition-transform duration-500",
          {
            "bg-neutral-300 dark:bg-neutral-400 -translate-y-1 rotate-[135deg]":
              showMobileNav,
            "bg-neutral-100 dark:bg-neutral-600": !showMobileNav,
          }
        )}
      ></span>
    </button>
  );
}
