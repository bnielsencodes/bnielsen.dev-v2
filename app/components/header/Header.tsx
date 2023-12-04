import Avatar from "../shared/Avatar";
import CTAButtons from "./CTAButtons";
import Socials from "@/app/components/socials/Socials";
import clsx from "clsx";

export default function Header({ darkMode }: { darkMode: boolean }) {
  return (
    <header
      id="header"
      className="relative flex flex-col items-start justify-center h-screen pt-[56px] px-[17px] mb-[6px] md:px-[19px] lg:items-start lg:pl-[22px] xl:items-center"
    >
      {/* Avatar image on larger screens */}
      <Avatar parent="header" />

      {/* header intro */}
      <h1
        className={clsx(
          "w-full mt-5 mb-5 text-[2.579rem] font-extrabold leading-[1.15em] tracking-wide text-left md:w-[731px] md:text-[59px] lg:w-[850px] lg:mt-[1.6rem] lg:text-[66px] lg:leading-[1.1em] xl:w-[985px] xl:text-[76px] xl:font-extrabold xl:leading-[5.35rem] xl:text-center",
          {
            "text-neutral-600": darkMode,
            "text-neutral-100": !darkMode,
          }
        )}
      >
        Hello, I&apos;m Brandon Nielsen, a{" "}
        <span
          className={clsx("", {
            "header-text-stroke--dark text-neutral-100": darkMode,
            "header-text-stroke text-neutral-600": !darkMode,
          })}
        >
          Web Developer
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
