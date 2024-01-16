import { useEffect, useState } from "react";

export default function Breadcrumbs() {
  const [mounted, setMounted] = useState(false);

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
          <div className="flex flex-col justify-between gap-[5.1vw] mb-[28px] md:gap-[3.5vw] md:mb-[33px] lg:items-center lg:gap-[2.54vw] lg:mb-[32px] xl:gap-[33px] xl:max-w-[985px] xl:mx-auto xl:mb-[35px]">
            <div className="w-[53%] pt-[8.5%] rounded-lg bg-neutral-400 dark:bg-neutral-500 animate-pulse md:hidden lg:h-[45px]"></div>
            <div className="w-[96%] pt-[8.5%] rounded-lg bg-neutral-400 dark:bg-neutral-500 animate-pulse md:w-[70%] md:pt-[5.2%] lg:w-[88%] lg:pt-[4.4%] xl:w-full xl:pt-[5.8%]"></div>
            <div className="w-[97%] pt-[8.5%] rounded-lg bg-neutral-400 dark:bg-neutral-500 animate-pulse md:w-[98%] md:pt-[5.2%] lg:w-[60%] lg:pt-[4.4%] xl:w-[65%] xl:pt-[5.8%]"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      {/* breadcrumbs */}
      <div className="flex items-center text-neutral-300 dark:text-neutral-400 font-sans text-[15px] font-medium text-opacity-80">
        <a
          className="all-transition hover:underline hover:opacity-80"
          href="/blog"
        >
          Home
        </a>
        <p className="px-[8px] mb-1 text-[22px]">&#8250;</p>
        <a
          className="all-transition hover:underline hover:opacity-80"
          href="/blog/posts"
        >
          Posts
        </a>
        <p className="px-[8px] mb-1 text-[22px]">&#8250;</p>
        <a
          className="all-transition hover:underline hover:opacity-80"
          href="/blog/posts/web-development"
        >
          Web Development
        </a>
      </div>
    </>
  );
}
