import Avatar from "../shared/Avatar";
import CTAButtons from "./CTAButtons";
import Socials from "@/app/components/socials/Socials";
import clsx from "clsx";

export default function Header({ darkMode }: { darkMode: boolean }) {
  return (
    <header
      id="header"
      className="relative flex flex-col items-center justify-center h-screen pt-[56px] px-[26px] mb-[6px] lg:items-start lg:pt-0 lg:pl-[31px] xl:items-center"
    >
      {/* Avatar image on larger screens */}
      <Avatar parent="header" />

      {/* header intro */}
      <h1
        className={clsx(
          "w-[323px] mt-5 mb-6 text-[2.414rem] font-extrabold leading-[2.8rem] tracking-wide text-left md:w-[704px] md:text-[57px] md:leading-[3.85rem] lg:w-[830px] lg:text-[66px] lg:leading-[4.35rem] xl:w-[985px] xl:mt-[1.2rem] xl:text-[76px] xl:font-extrabold xl:leading-[5.35rem] xl:text-center",
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
