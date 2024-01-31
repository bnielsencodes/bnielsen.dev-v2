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
import clsx from "clsx";

export default function Blog() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="blog dark:dark bg-neutral-600 dark:bg-neutral-100">
        <NavBar />
        <Header />
        <div className="home-grid flex flex-col w-full pt-[calc(22.223vw+55px)] px-4 pb-40 md:items-start md:max-w-[1100px] md:px-8 md:mx-auto">
          <RecentlyPublished />
          <TopCategories />
          <PopularContent />
        </div>
        <Footer />
      </main>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <main className="blog bg-neutral-600">
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
        <div className="home-grid flex flex-col w-full pt-[56px] px-5 pb-40 md:items-start md:max-w-[1100px] md:px-8 md:mx-auto">
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
      <main className="blog dark bg-neutral-100">
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
        <div className="home-grid flex flex-col w-full pt-[56px] px-4 pb-40 md:items-start md:max-w-[1100px] md:px-8 md:mx-auto">
          <RecentlyPublished />
          <TopCategories />
          <PopularContent />
        </div>
        <Footer />
      </main>
    );
  }
}
