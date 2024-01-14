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
        "group fixed right-0 top-2 z-50 flex h-[40px] w-[40px] -translate-x-3 flex-col items-end justify-around gap-1 px-2 py-3 md:-translate-x-4 lg:hidden",
        {
          "outline-light-theme dark:outline-dark-theme -translate-x-[7px] items-center border-2 border-neutral-200 transition-transform duration-500 dark:border-2 dark:border-neutral-500 md:-translate-x-[8px]":
            showMobileNav,
        },
      )}
      onClick={() => toggleMobileNav()}
      type="button"
      aria-label="mobile nav menu toggle"
    >
      <span
        className={clsx(
          "inline-block h-[2px] transition-transform duration-500",
          {
            "w-6 translate-y-1 -rotate-[135deg] bg-neutral-300 dark:bg-neutral-400":
              showMobileNav,
            "w-7 bg-neutral-100 dark:bg-neutral-600": !showMobileNav,
          },
        )}
      ></span>
      <span
        className={clsx(
          "inline-block h-[2px] w-6 transition-transform duration-500",
          {
            "-translate-y-1 rotate-[135deg] bg-neutral-300 dark:bg-neutral-400":
              showMobileNav,
            "bg-neutral-100 dark:bg-neutral-600": !showMobileNav,
          },
        )}
      ></span>
    </button>
  );
}
