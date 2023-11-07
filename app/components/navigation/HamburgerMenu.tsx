import clsx from "clsx";

export default function HamburgerMenu(props: any) {
  return (
    <button
      className={clsx(
        "absolute top-2 right-2 z-30 flex flex-col justify-around items-center gap-1 w-[40px] h-[40px] py-[13px] px-2 group",
        {
          "border border-neutral-500": props.showMobileNav && props.darkMode,
          "border border-neutral-100": props.showMobileNav && !props.darkMode,
        }
      )}
      onClick={() => props.toggleMobileNav()}
    >
      <span
        className={clsx(
          "inline-block w-5 h-[2px] transition-transform duration-400",
          {
            "rotate-45 translate-y-1": props.showMobileNav,
            "bg-neutral-400": props.showMobileNav && props.darkMode,
            "bg-neutral-200": props.showMobileNav && !props.darkMode,
            "bg-neutral-500": !props.showMobileNav && props.darkMode,
            "bg-neutral-100": !props.showMobileNav && !props.darkMode,
          }
        )}
      ></span>
      <span
        className={clsx(
          "inline-block w-5 h-[2px] transition-transform duration-400",
          {
            "-rotate-45 -translate-y-1": props.showMobileNav,
            "bg-neutral-400": props.showMobileNav && props.darkMode,
            "bg-neutral-200": props.showMobileNav && !props.darkMode,
            "bg-neutral-500": !props.showMobileNav && props.darkMode,
            "bg-neutral-100": !props.showMobileNav && !props.darkMode,
          }
        )}
      ></span>
    </button>
  );
}
