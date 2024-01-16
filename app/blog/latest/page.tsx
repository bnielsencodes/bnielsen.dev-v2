// next line should look to be moved to the child
"use client";
import { useEffect, useState } from "react";
import { recentlyPublished } from "@/app/termsPostData";
import Link from "next/link";
import Image from "next/image";
import arrowRight from "@/public/assets/icons/arrow-right.svg";
import NavBar from "../../_components/blog/navigation/NavBar";
import Footer from "../../_components/blog/footer/Footer";

export default function Latest() {
  const [mounted, setMounted] = useState(false);

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

  const recentlyPublishedElements = recentlyPublished.map((post) => {
    // return <Term key={term.id} {...{ term }} />;
    return (
      <li
        className="group rounded-lg px-4 py-9 bg-neutral-500 dark:bg-neutral-200 md:px-5 lg:px-6"
        key={post.id}
        {...{ post }}
      >
        <Link href="/blog/posts/web-development/web-related-terms">
          <p className=" text-neutral-100 dark:text-neutral-600 text-2xl font-extrabold group-hover:text-accent-100 dark:group-hover:text-accent-200">
            {post.title}
          </p>
          <p className="my-4 text-neutral-200 dark:text-neutral-500 font-sans text-[18px] font-medium">
            {post.description}
          </p>
          <div className="flex gap-2">
            <p className="text-neutral-200 dark:text-neutral-500 font-sans text-[16px] font-extrabold">
              Read more
            </p>
            <Image
              className="hidden w-[21px] h-[21px] mt-[1.5px] mr-[11px] group-hover:block"
              src={arrowRight}
              alt="arrow pointing right"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        </Link>
      </li>
    );
  });

  return (
    <main className="bg-neutral-600 dark:bg-neutral-100">
      <NavBar />
      <div className="pb-[100px] lg:max-w-[1100px] lg:mx-auto">
        <div className="flex items-end justify-between px-8 pt-[186px] md:px-12 lg:px-14 xl:px-8">
          <h1 className="text-neutral-200 dark:text-neutral-500 text-4xl font-bold md:text-5xl">
            Latest Posts
          </h1>
          <p className="hidden text-neutral-200 dark:text-neutral-500 font-sans text-xl md:block">
            {recentlyPublished.length}{" "}
            {recentlyPublished.length > 1 ? "Articles" : "Article"}
          </p>
        </div>
        <ul className="flex flex-col gap-8 px-5 mt-5 mb-[128px] text-neutral-300 dark:text-neutral-400 font-sans text-[14.5px] lg:grid lg:grid-cols-2 lg:px-8 xl:px-0">
          {recentlyPublishedElements}
        </ul>
      </div>
      <Footer />
    </main>
  );
}
