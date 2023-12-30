import Avatar from "../shared/Avatar";
import CTAButtons from "./CTAButtons";
import Socials from "@/app/_components/socials/Socials";
import clsx from "clsx";

export default function Header({ darkMode }: { darkMode: boolean }) {
  return (
    <header
      id="header"
      className="relative flex flex-col items-start justify-center h-[100svh] pt-[56px] px-[17px] mb-[6px] md:px-[19px] lg:items-center lg:pl-[22px]"
    >
      {/* Avatar image on larger screens */}
      <Avatar parent="header" />

      {/* header intro */}
      <h1
        className={clsx(
          "all-transition w-full mt-5 mb-5 text-[11vw] font-extrabold leading-[1.15em] tracking-wide text-left md:text-[7.6vw] lg:w-[850px] lg:mt-[1.6rem] lg:text-[4.125rem] lg:leading-[1.1em] lg:text-center xl:w-[985px] xl:text-[76px] xl:font-extrabold xl:leading-[5.35rem]",
          {
            "text-neutral-600": darkMode,
            "text-neutral-100": !darkMode,
          }
        )}
      >
        Hello, I&apos;m Brandon Nielsen, a{" "}
        <span
          className={clsx("all-transition", {
            "header-text-stroke--dark": darkMode,
            "header-text-stroke": !darkMode,
          })}
        >
          W
        </span>
        <span
          className={clsx("all-transition", {
            "header-text-stroke--dark": darkMode,
            "header-text-stroke": !darkMode,
          })}
        >
          e
        </span>
        <span
          className={clsx("all-transition", {
            "header-text-stroke--dark": darkMode,
            "header-text-stroke": !darkMode,
          })}
        >
          b
        </span>{" "}
        <span
          className={clsx("all-transition", {
            "header-text-stroke--dark": darkMode,
            "header-text-stroke": !darkMode,
          })}
        >
          D
        </span>
        <span
          className={clsx("all-transition", {
            "header-text-stroke--dark": darkMode,
            "header-text-stroke": !darkMode,
          })}
        >
          e
        </span>
        <span
          className={clsx("all-transition", {
            "header-text-stroke--dark": darkMode,
            "header-text-stroke": !darkMode,
          })}
        >
          v
        </span>
        <span
          className={clsx("", {
            "header-text-stroke--dark": darkMode,
            "header-text-stroke": !darkMode,
          })}
        >
          e
        </span>
        <span
          className={clsx("all-transition", {
            "header-text-stroke--dark": darkMode,
            "header-text-stroke": !darkMode,
          })}
        >
          l
        </span>
        <span
          className={clsx("all-transition", {
            "header-text-stroke--dark": darkMode,
            "header-text-stroke": !darkMode,
          })}
        >
          o
        </span>
        <span
          className={clsx("all-transition", {
            "header-text-stroke--dark": darkMode,
            "header-text-stroke": !darkMode,
          })}
        >
          p
        </span>
        <span
          className={clsx("all-transition", {
            "header-text-stroke--dark": darkMode,
            "header-text-stroke": !darkMode,
          })}
        >
          e
        </span>
        <span
          className={clsx("all-transition", {
            "header-text-stroke--dark": darkMode,
            "header-text-stroke": !darkMode,
          })}
        >
          r
        </span>
        .
      </h1>

      <CTAButtons {...{ darkMode }} />

      {/* large screen socials */}
      <div className="hidden lg:absolute lg:bottom-4 lg:right-6 lg:block">
        <Socials parent="header" direction="column" {...{ darkMode }} />
      </div>
    </header>
  );
}
