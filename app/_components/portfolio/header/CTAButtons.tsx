import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function CTAButtons() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-[16.5px] md:pl-[0.5px] lg:mx-auto lg:w-[250px] lg:pl-[2px] xl:pl-[1px]">
        <div className="h-[48px] w-[125px] animate-pulse rounded-lg bg-neutral-400 dark:bg-neutral-500"></div>
        <div className="h-[48px] w-[102px] animate-pulse rounded-lg bg-neutral-400 dark:bg-neutral-500"></div>
      </div>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <div className="relative ml-[3px] flex gap-4 md:ml-[5px] lg:ml-[2px] xl:ml-0">
        {/* view work button */}
        <a
          className="btn btn-primary btn-light text-neutral-200 shadow-xl focus:opacity-90"
          href="#projects-section"
        >
          View Work
        </a>
        {/* view work HOVER button */}
        <a
          className="btn btn-primary btn-light-alt absolute left-0 top-0 text-neutral-200"
          href="#projects-section"
          tabIndex={-1}
          aria-hidden={true}
        >
          View Work
        </a>

        {/* contact button */}
        <a
          className="btn btn-secondary btn-dark outline-dark-theme text-neutral-500 shadow-xl focus:opacity-80"
          href="#contact-section"
        >
          Contact
        </a>
        {/* contact HOVER button */}
        <a
          className="btn btn-secondary btn-dark-alt outline-dark-theme absolute right-0 top-0 text-neutral-500"
          href="#contact-section"
          tabIndex={-1}
          aria-hidden={true}
        >
          Contact
        </a>
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="relative ml-[3px] flex gap-4 md:ml-[5px] lg:ml-[2px] xl:ml-0">
        {/* view work button */}
        <a
          className="btn btn-primary btn-dark text-neutral-500 shadow-xl focus:opacity-90"
          href="#projects-section"
        >
          View Work
        </a>
        {/* view work HOVER button */}
        <a
          className="btn btn-primary btn-dark-alt absolute left-0 top-0 text-neutral-500"
          href="#projects-section"
          tabIndex={-1}
          aria-hidden={true}
        >
          View Work
        </a>

        {/* contact button */}
        <a
          className="btn btn-secondary btn-light outline-light-theme text-neutral-200 shadow-xl focus:opacity-80"
          href="#contact-section"
        >
          Contact
        </a>
        {/* contact HOVER button */}
        <a
          className="btn btn-secondary btn-light-alt outline-light-theme absolute right-0 top-0 text-neutral-200"
          href="#contact-section"
          tabIndex={-1}
          aria-hidden={true}
        >
          Contact
        </a>
      </div>
    );
  }
}
