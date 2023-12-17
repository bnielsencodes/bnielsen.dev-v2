import { useState } from "react";
import Tooltip from "./Tooltip";
import Icon from "./Icon";
import clsx from "clsx";

export default function Skill({
  darkMode,
  skill,
}: {
  darkMode: boolean;
  skill: {
    id: number;
    name: string;
    tech: string;
  };
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showViteBg, setShowViteBg] = useState(false);

  return (
    <div className="relative group">
      <div
        className={clsx(
          "relative z-10 flex flex-col items-center justify-center gap-[5px] py-[18px] border-2 rounded-lg border-neutral-300 group group-hover:cursor-help",
          {
            "bg-gradient-to-b from-neutral-200 to-neutral-100": darkMode,
            "bg-gradient-to-b from-neutral-500 to-neutral-600 shadow-custom":
              !darkMode,
            "group-hover:border-tech-css-100": skill.name === "css",
            "w-[85.5px] h-[91px] border-none rounded-md mt-[2px] ml-[2px] md:w-[92px] lg:w-[85px] xl:w-[85.5px]":
              skill.name === "figma" || skill.name === "vite",
            "all-transition": skill.name !== "figma" && skill.name !== "vite",
            "group-hover:border-tech-git": skill.name === "git",
            "group-hover:border-tech-html-200": skill.name === "html",
            "group-hover:border-tech-javascript-100":
              skill.name === "javascript",
            "group-hover:border-tech-next": skill.name === "next" && darkMode,
            "group-hover:border-[#000]": skill.name === "next" && !darkMode,
            "group-hover:border-tech-postgresql": skill.name === "postgresql",
            "group-hover:border-tech-react": skill.name === "react",
            "group-hover:border-tech-sass": skill.name === "sass",
            "group-hover:border-tech-tailwind": skill.name === "tailwind",
            "group-hover:border-tech-typescript-200":
              skill.name === "typescript",
          }
        )}
        onMouseEnter={() => {
          setShowTooltip(true), setShowViteBg(true);
        }}
        onMouseLeave={() => {
          setShowTooltip(false), setShowViteBg(false);
        }}
      >
        <Tooltip {...{ darkMode, skill }} />

        {/* skill icon */}
        <Icon {...{ darkMode, skill, showViteBg }} />
      </div>

      {/* hover border for figma skill */}
      {skill.name === "figma" && (
        <div className="content-[''] absolute top-0 left-0 z-0 w-[89.5px] h-[95px] rounded-lg bg-neutral-300 opacity-100 all-transition group-hover:opacity-0 md:w-[96px] lg:w-[89px] xl:w-[89.5px]"></div>
      )}
      {/* hover transition border for figma skill */}
      {skill.name === "figma" && (
        <div className="content-[''] absolute top-0 left-0 z-0 w-[89.5px] h-[95px] rounded-lg opacity-0 group-hover:opacity-100 all-transition animate-figmaBorder md:w-[96px] lg:w-[89px] xl:w-[89.5px]"></div>
      )}

      {/* hover border for vite skill */}
      {skill.name === "vite" && (
        <div className="content-[''] absolute top-0 left-0 z-0 w-[89.5px] h-[95px] rounded-lg bg-neutral-300 opacity-100 all-transition group-hover:opacity-0 md:w-[96px] lg:w-[89px] xl:w-[89.5px]"></div>
      )}
      {/* hover transition border for vite skill */}
      {skill.name === "vite" && (
        <div className="content-[''] absolute top-0 left-0 z-0 w-[89.5px] h-[95px] rounded-lg opacity-0 group-hover:opacity-100 all-transition animate-viteBorder md:w-[96px] lg:w-[89px] xl:w-[89.5px]"></div>
      )}
    </div>
  );
}
