import { useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { post } from "@/app/termsPostData";

export default function Header() {
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

  return (
    <header
      id="header"
      className="flex h-[412px] items-end bg-neutral-500 px-6 pt-[56px] dark:bg-neutral-200 md:h-[313px] md:px-8 lg:px-0"
    >
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-start justify-center pb-[45px] lg:px-8">
        <Breadcrumbs />

        {/* post title */}
        <h1 className="mb-2 mt-1 text-left text-[38px] font-bold leading-[2.5rem] text-neutral-100 dark:text-neutral-600 md:mb-1 md:mt-0 md:text-[32px] md:leading-[1.35em] lg:text-[38px]">
          {post.title}
        </h1>

        <p className="font-sans text-[17px] leading-[26px] text-neutral-300 dark:text-neutral-400">
          {post.subtitle}
        </p>
      </div>
    </header>
  );
}
