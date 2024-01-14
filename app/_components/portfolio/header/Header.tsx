import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Avatar from "../../shared/Avatar";
import CTAButtons from "./CTAButtons";
import Socials from "@/app/_components/shared/socials/Socials";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header
        id="header"
        className="relative mb-[6px] flex h-[100svh] flex-col items-start justify-center px-[17px] pt-[56px] md:px-[19px] lg:items-center lg:pl-[22px]"
      >
        {/* Avatar image on larger screens */}
        <Avatar parent="header" />

        <div className="mt-[6px] w-full pl-[3px] md:mt-[15px] md:pl-[4.5px] lg:mt-[46px] xl:mt-[34px]">
          {/* header intro */}
          <div className="mb-[28px] flex flex-col justify-between gap-[5.1vw] md:mb-[33px] md:gap-[3.5vw] lg:mb-[32px] lg:items-center lg:gap-[2.54vw] xl:mx-auto xl:mb-[35px] xl:max-w-[985px] xl:gap-[33px]">
            <div className="w-[53%] animate-pulse rounded-lg bg-neutral-400 pt-[8.5%] dark:bg-neutral-500 md:hidden lg:h-[45px]"></div>
            <div className="w-[96%] animate-pulse rounded-lg bg-neutral-400 pt-[8.5%] dark:bg-neutral-500 md:w-[70%] md:pt-[5.2%] lg:w-[88%] lg:pt-[4.4%] xl:w-full xl:pt-[5.8%]"></div>
            <div className="w-[97%] animate-pulse rounded-lg bg-neutral-400 pt-[8.5%] dark:bg-neutral-500 md:w-[98%] md:pt-[5.2%] lg:w-[60%] lg:pt-[4.4%] xl:w-[65%] xl:pt-[5.8%]"></div>
          </div>

          <CTAButtons />
        </div>

        {/* large screen socials */}
        <div className="hidden lg:absolute lg:bottom-4 lg:right-6 lg:block">
          <Socials parent="header" direction="column" />
        </div>
      </header>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <header
        id="header"
        className="relative mb-[6px] flex h-[100svh] flex-col items-start justify-center px-[17px] pt-[56px] md:px-[19px] lg:items-center lg:pl-[22px]"
      >
        {/* Avatar image on larger screens */}
        <Avatar parent="header" />

        {/* header intro */}
        <h1 className="all-transition mb-5 w-full text-left text-[11vw] font-extrabold leading-[1.15em] tracking-wide text-neutral-100 dark:text-neutral-600 md:text-[7.6vw] lg:mt-[1.6rem] lg:w-[850px] lg:text-center lg:text-[4.125rem] lg:leading-[1.1em] xl:w-[985px] xl:text-[76px] xl:font-extrabold xl:leading-[5.35rem]">
          Hello, I&apos;m Brandon Nielsen, a{" "}
          <span className="header-text-stroke--dark all-transition">W</span>
          <span className="header-text-stroke--dark all-transition">e</span>
          <span className="header-text-stroke--dark all-transition">
            b
          </span>{" "}
          <span className="header-text-stroke--dark all-transition">D</span>
          <span className="header-text-stroke--dark all-transition">e</span>
          <span className="header-text-stroke--dark all-transition">v</span>
          <span className="header-text-stroke--dark all-transition">e</span>
          <span className="header-text-stroke--dark all-transition">l</span>
          <span className="header-text-stroke--dark all-transition">o</span>
          <span className="header-text-stroke--dark all-transition">p</span>
          <span className="header-text-stroke--dark all-transition">e</span>
          <span className="header-text-stroke--dark all-transition">r</span>.
        </h1>

        <CTAButtons />

        {/* large screen socials */}
        <div className="hidden lg:absolute lg:bottom-4 lg:right-6 lg:block">
          <Socials parent="header" direction="column" />
        </div>
      </header>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <header
        id="header"
        className="relative mb-[6px] flex h-[100svh] flex-col items-start justify-center px-[17px] pt-[56px] md:px-[19px] lg:items-center lg:pl-[22px]"
      >
        {/* Avatar image on larger screens */}
        <Avatar parent="header" />

        {/* header intro */}
        <h1 className="all-transition mb-5 w-full text-left text-[11vw] font-extrabold leading-[1.15em] tracking-wide text-neutral-100 dark:text-neutral-600 md:text-[7.6vw] lg:mt-[1.6rem] lg:w-[850px] lg:text-center lg:text-[4.125rem] lg:leading-[1.1em] xl:w-[985px] xl:text-[76px] xl:font-extrabold xl:leading-[5.35rem]">
          Hello, I&apos;m Brandon Nielsen, a{" "}
          <span className="header-text-stroke all-transition">W</span>
          <span className="header-text-stroke all-transition">e</span>
          <span className="header-text-stroke all-transition">b</span>{" "}
          <span className="header-text-stroke all-transition">D</span>
          <span className="header-text-stroke all-transition">e</span>
          <span className="header-text-stroke all-transition">v</span>
          <span className="header-text-stroke all-transition">e</span>
          <span className="header-text-stroke all-transition">l</span>
          <span className="header-text-stroke all-transition">o</span>
          <span className="header-text-stroke all-transition">p</span>
          <span className="header-text-stroke all-transition">e</span>
          <span className="header-text-stroke all-transition">r</span>.
        </h1>

        <CTAButtons />

        {/* large screen socials */}
        <div className="hidden lg:absolute lg:bottom-4 lg:right-6 lg:block">
          <Socials parent="header" direction="column" />
        </div>
      </header>
    );
  }
}
