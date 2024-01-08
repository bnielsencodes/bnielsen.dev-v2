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
      <div className="flex gap-[16.5px] md:pl-[0.5px] lg:w-[250px] lg:pl-[2px] lg:mx-auto xl:pl-[1px]">
        <div className="w-[125px] h-[48px] bg-neutral-400 animate-pulse rounded-lg dark:bg-neutral-500"></div>
        <div className="w-[102px] h-[48px] bg-neutral-400 animate-pulse rounded-lg dark:bg-neutral-500"></div>
      </div>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <div className="relative flex gap-4 ml-[3px] md:ml-[5px] lg:ml-[2px] xl:ml-0">
        {/* view work button */}
        <a
          className="btn btn-primary btn-light text-neutral-200 shadow-xl focus:opacity-90"
          href="#projects-section"
        >
          View Work
        </a>
        {/* view work HOVER button */}
        <a
          className="btn btn-primary btn-light-alt absolute top-0 left-0 text-neutral-200"
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
          className="btn btn-secondary btn-dark-alt outline-dark-theme absolute top-0 right-0 text-neutral-500"
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
      <div className="relative flex gap-4 ml-[3px] md:ml-[5px] lg:ml-[2px] xl:ml-0">
        {/* view work button */}
        <a
          className="btn btn-primary btn-dark shadow-xl text-neutral-500 focus:opacity-90"
          href="#projects-section"
        >
          View Work
        </a>
        {/* view work HOVER button */}
        <a
          className="btn btn-primary btn-dark-alt absolute top-0 left-0 text-neutral-500"
          href="#projects-section"
          tabIndex={-1}
          aria-hidden={true}
        >
          View Work
        </a>

        {/* contact button */}
        <a
          className="btn btn-secondary btn-light outline-light-theme shadow-xl text-neutral-200 focus:opacity-80"
          href="#contact-section"
        >
          Contact
        </a>
        {/* contact HOVER button */}
        <a
          className="btn btn-secondary btn-light-alt outline-light-theme absolute top-0 right-0 text-neutral-200"
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
