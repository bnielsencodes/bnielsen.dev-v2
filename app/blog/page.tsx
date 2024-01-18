"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import waveLight from "@/public/assets/images/blog-wave-divider/wave-light.svg";
import waveDark from "@/public/assets/images/blog-wave-divider/wave-dark.svg";
import NavBar from "../_components/blog/navigation/NavBar";
import Header from "../_components/blog/home/Header";
import RecentlyPublished from "../_components/blog/home/RecentlyPublished";
import TopCategories from "../_components/blog/home/TopCategories";
import PopularContent from "../_components/blog/home/PopularContent";
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
        className="relative flex flex-col items-start justify-center h-[100svh] pt-[56px] px-[17px] mb-[6px] md:px-[19px] lg:items-center lg:pl-[22px]"
      >
        <div className="w-full pl-[3px] mt-[6px] md:pl-[4.5px] md:mt-[15px] lg:mt-[46px] xl:mt-[34px]">
          {/* header intro */}
          <div className="flex flex-col justify-between gap-[5.1vw] mb-[28px] md:gap-[3.5vw] md:mb-[33px] lg:items-center lg:gap-[2.54vw] lg:mb-[32px] xl:mx-auto xl:mb-[35px] xl:gap-[33px] xl:max-w-[985px]">
            <div className="w-[53%] pt-[8.5%] rounded-lg bg-neutral-400 dark:bg-neutral-500 animate-pulse md:hidden lg:h-[45px]"></div>
            <div className="w-[96%] pt-[8.5%] rounded-lg bg-neutral-400 dark:bg-neutral-500 animate-pulse md:w-[70%] md:pt-[5.2%] lg:w-[88%] lg:pt-[4.4%] xl:w-full xl:pt-[5.8%]"></div>
            <div className="w-[97%] pt-[8.5%] rounded-lg bg-neutral-400 dark:bg-neutral-500 animate-pulse md:w-[98%] md:pt-[5.2%] lg:w-[60%] lg:pt-[4.4%] xl:w-[65%] xl:pt-[5.8%]"></div>
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
          className="w-full mb-[-1px] bg-neutral-500"
          src={waveLight}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="flex w-full flex-col pt-[56px] px-5 pb-40 md:grid md:grid-cols-blogHome md:grid-rows-blogHome md:items-start md:gap-x-[96px] md:gap-y-[64px] md:max-w-[1100px] md:px-8 md:mx-auto">
          <RecentlyPublished />
          <TopCategories />
          <PopularContent />
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
          className="w-full mb-[-1px] bg-neutral-200"
          src={waveDark}
          alt="wave section divider"
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="flex w-full flex-col pt-[56px] px-4 pb-40 md:grid md:grid-cols-blogHome md:grid-rows-blogHome md:items-start md:gap-x-[96px] md:gap-y-[64px] md:max-w-[1100px] md:px-8 md:mx-auto">
          <RecentlyPublished />
          <TopCategories />
          <PopularContent />
        </div>
        <Footer />
      </main>
    );
  }
}
