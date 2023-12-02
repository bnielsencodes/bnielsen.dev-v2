import Avatar from "../shared/Avatar";
import CTAButtons from "./CTAButtons";
import Socials from "@/app/components/socials/Socials";
import clsx from "clsx";

export default function Header({ darkMode }: { darkMode: boolean }) {
  return (
    <header
      id="header"
      className="relative flex flex-col items-center justify-center h-screen pt-[56px] px-7 mb-[6px]"
    >
      <Avatar parent="header" />

      <h1
        className={clsx(
          "text-[2.48rem] font-bold leading-[3rem] tracking-wide text-left md:w-[622px] md:text-[52px] lg:leading-[3.25rem] xl:w-[813px] xl:text-[66px] xl:font-extrabold xl:leading-[4.25rem]",
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

      <div className="hidden lg:absolute lg:bottom-4 lg:right-4 lg:block">
        <Socials {...{ darkMode }} />
      </div>
    </header>
  );
}
