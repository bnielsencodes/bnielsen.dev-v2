import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ProjectButtons({
  liveSite,
  sourceCode,
}: {
  liveSite: string;
  sourceCode: string;
}) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex">
        <div className="mr-4 h-[48px] w-[107px] animate-pulse rounded-lg bg-neutral-400 dark:bg-neutral-500"></div>
        <div className="h-[48px] w-[138px] animate-pulse rounded-lg bg-neutral-400 dark:bg-neutral-500"></div>
      </div>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <div className="relative flex w-[261px] gap-4">
        {/* live site button */}
        <a
          className="btn btn-primary btn-light text-neutral-200 shadow-xl focus:opacity-90"
          href={liveSite}
          target="_blank"
        >
          Live Site
        </a>
        {/* live site HOVER button */}
        <a
          className="btn btn-primary btn-light-alt absolute left-0 top-0 text-neutral-200"
          href={liveSite}
          target="_blank"
          tabIndex={-1}
          aria-hidden={true}
        >
          Live Site
        </a>

        {/* source code button */}
        <a
          className="btn btn-secondary btn-dark outline-dark-theme text-neutral-500 shadow-xl focus:opacity-90"
          href={sourceCode}
          target="_blank"
        >
          Source Code
        </a>
        {/* source code HOVER button */}
        <a
          className="btn btn-secondary btn-dark-alt outline-dark-theme absolute right-[0.5px] top-0 text-neutral-500"
          href={sourceCode}
          target="_blank"
          tabIndex={-1}
          aria-hidden={true}
        >
          Source Code
        </a>
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="relative flex w-[261px] gap-4">
        {/* live site button */}
        <a
          className="btn btn-primary btn-dark text-neutral-500 shadow-xl focus:opacity-90"
          href={liveSite}
          target="_blank"
        >
          Live Site
        </a>
        {/* live site HOVER button */}
        <a
          className="btn btn-primary btn-dark-alt absolute left-0 top-0 text-neutral-500"
          href={liveSite}
          target="_blank"
          tabIndex={-1}
          aria-hidden={true}
        >
          Live Site
        </a>

        {/* source code button */}
        <a
          className="btn btn-secondary btn-light outline-light-theme text-neutral-200 shadow-xl focus:opacity-90"
          href={sourceCode}
          target="_blank"
        >
          Source Code
        </a>
        {/* source code HOVER button */}
        <a
          className="btn btn-secondary btn-light-alt outline-light-theme absolute right-[0.5px] top-0 text-neutral-200"
          href={sourceCode}
          target="_blank"
          tabIndex={-1}
          aria-hidden={true}
        >
          Source Code
        </a>
      </div>
    );
  }
}
