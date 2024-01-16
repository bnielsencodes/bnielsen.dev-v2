import { useState } from "react";
import Tooltip from "./Tooltip";
import Icon from "./Icon";
import clsx from "clsx";

export default function Skill({
  skill,
}: {
  skill: {
    id: number;
    name: string;
    tech: string;
  };
}) {
  const [showViteBg, setShowViteBg] = useState(false);
  return (
    <div className="group relative">
      <div
        className={clsx(
          "group relative z-10 flex flex-col items-center justify-center gap-[5px] py-[18px] border-2 border-neutral-300 rounded-lg shadow-xl dark:shadow-none bg-gradient-to-b from-neutral-500 to-neutral-600 dark:from-neutral-200 dark:to-neutral-100 group-hover:cursor-help",
          {
            "group-hover:border-tech-css-100": skill.name === "css",
            "ml-[2px] mt-[2px] h-[91px] w-[85.5px] rounded-md border-none md:w-[92px] lg:w-[85px] xl:w-[85.5px]":
              skill.name === "figma" || skill.name === "vite",
            "all-transition": skill.name !== "figma" && skill.name !== "vite",
            "group-hover:border-tech-git": skill.name === "git",
            "group-hover:border-tech-html-200": skill.name === "html",
            "group-hover:border-tech-javascript-100":
              skill.name === "javascript",
            "group-hover:border-[#000] dark:group-hover:border-tech-next":
              skill.name === "next",
            "group-hover:border-tech-postgresql": skill.name === "postgresql",
            "group-hover:border-tech-react": skill.name === "react",
            "group-hover:border-tech-sass": skill.name === "sass",
            "group-hover:border-tech-tailwind": skill.name === "tailwind",
            "group-hover:border-tech-typescript-200":
              skill.name === "typescript",
          }
        )}
        onMouseEnter={() => {
          setShowViteBg(true);
        }}
        onMouseLeave={() => {
          setShowViteBg(false);
        }}
      >
        <Tooltip {...{ skill }} />

        {/* skill icon */}
        <Icon {...{ skill, showViteBg }} />
      </div>

      {/* hover border for figma skill */}
      {skill.name === "figma" && (
        <div className="all-transition content-[''] absolute top-0 left-0 z-0 w-[89.5px] h-[95px] rounded-lg bg-neutral-300 opacity-100 group-hover:opacity-0 md:w-[96px] lg:w-[89px] xl:w-[89.5px]"></div>
      )}
      {/* hover transition border for figma skill */}
      {skill.name === "figma" && (
        <div className="all-transition content-[''] absolute top-0 left-0 z-0 w-[89.5px] h-[95px] animate-figmaBorder rounded-lg opacity-0 group-hover:opacity-100 md:w-[96px] lg:w-[89px] xl:w-[89.5px]"></div>
      )}

      {/* hover border for vite skill */}
      {skill.name === "vite" && (
        <div className="all-transition content-[''] absolute top-0 left-0 z-0 w-[89.5px] h-[95px] rounded-lg bg-neutral-300 opacity-100 group-hover:opacity-0 md:w-[96px] lg:w-[89px] xl:w-[89.5px]"></div>
      )}
      {/* hover transition border for vite skill */}
      {skill.name === "vite" && (
        <div className="all-transition content-[''] absolute top-0 left-0 z-0 w-[89.5px] h-[95px] animate-viteBorder rounded-lg opacity-0 group-hover:opacity-100 md:w-[96px] lg:w-[89px] xl:w-[89.5px]"></div>
      )}
    </div>
  );
}
