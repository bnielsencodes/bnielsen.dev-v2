"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import waveLight from "@/public/assets/images/blog-wave-divider/wave-light.svg";
import waveDark from "@/public/assets/images/blog-wave-divider/wave-dark.svg";
import NavBar from "../_components/blog/navigation/NavBar";
import Header from "../_components/blog/home/Header";
import Footer from "../_components/blog/footer/Footer";

export default function Blog() {
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
        <div className="mt-[6px] w-full pl-[3px] md:mt-[15px] md:pl-[4.5px] lg:mt-[46px] xl:mt-[34px]">
          {/* header intro */}
          <div className="mb-[28px] flex flex-col justify-between gap-[5.1vw] md:mb-[33px] md:gap-[3.5vw] lg:mb-[32px] lg:items-center lg:gap-[2.54vw] xl:mx-auto xl:mb-[35px] xl:max-w-[985px] xl:gap-[33px]">
            <div className="w-[53%] animate-pulse rounded-lg bg-neutral-400 pt-[8.5%] dark:bg-neutral-500 md:hidden lg:h-[45px]"></div>
            <div className="w-[96%] animate-pulse rounded-lg bg-neutral-400 pt-[8.5%] dark:bg-neutral-500 md:w-[70%] md:pt-[5.2%] lg:w-[88%] lg:pt-[4.4%] xl:w-full xl:pt-[5.8%]"></div>
            <div className="w-[97%] animate-pulse rounded-lg bg-neutral-400 pt-[8.5%] dark:bg-neutral-500 md:w-[98%] md:pt-[5.2%] lg:w-[60%] lg:pt-[4.4%] xl:w-[65%] xl:pt-[5.8%]"></div>
          </div>
        </div>
      </header>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <main className="bg-neutral-600">
        <NavBar />
        <Header />
        <Image
          className="-mb-[1px] w-full bg-neutral-500"
          src={waveLight}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="md:grid-cols-blogHome md:grid-rows-blogHome flex w-full flex-col px-5 pb-16 pt-[56px] md:mx-auto md:grid md:max-w-[1100px] md:items-start md:gap-x-[96px] md:gap-y-[64px] md:px-8">
        </div>
        <Footer />
      </main>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <main className="bg-neutral-100">
        <NavBar />
        <Header />
        <Image
          className="-mb-[1px] w-full bg-neutral-200"
          src={waveDark}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="md:grid-cols-blogHome md:grid-rows-blogHome flex w-full flex-col px-5 pb-40 pt-[56px] md:mx-auto md:grid md:max-w-[1100px] md:items-start md:gap-x-[96px] md:gap-y-[64px] md:px-8">
        </div>
        <Footer />
      </main>
    );
  }
}
