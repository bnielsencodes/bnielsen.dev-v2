import { useState } from "react";
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
          "relative z-10 flex flex-col items-center justify-center gap-[5px] py-[18px] border-2 rounded-lg hover:cursor-help",
          {
            "border-neutral-300 bg-neutral-100": darkMode,
            "border-neutral-300 bg-neutral-600": !darkMode,
            "group-hover:border-tech-css-100": skill.name === "css",
            "group-hover:w-[86px] group-hover:h-[91px] group-hover:mt-[2px] group-hover:ml-[2px] group-hover:border-neutral-100":
              skill.name === "figma" || skill.name === "vite",
            "group-hover:border-tech-git": skill.name === "git",
            "group-hover:border-tech-html-200": skill.name === "html",
            "group-hover:border-tech-javascript-100":
              skill.name === "javascript",
            "group-hover:border-tech-next": skill.name === "next",
            "group-hover:border-tech-postgresql": skill.name === "postgresql",
            "group-hover:border-tech-react": skill.name === "react",
            "group-hover:border-tech-sass": skill.name === "sass",
            "group-hover:border-tech-tailwind": skill.name === "tailwind",
            "group-hover:border-tech-typescript-200":
              skill.name === "typescript",
            // "hover:border-tech-vite": props.skill.name === "vite",
          }
        )}
        onMouseEnter={() => {
          setShowViteBg(true);
        }}
        onMouseLeave={() => {
          setShowViteBg(false);
        }}
      >
        <Tooltip {...{ skill, showTooltip }} />

        {/* skill icon */}
        <div className={`w-[55px] h-[55px] icon--${skill.name}`}>
          <Icon {...{ skill, showViteBg }} />
        </div>
      </div>

      {/* hover border for figma skill */}
      {skill.name === "figma" && (
        <div className="figma-border-animation content-[''] absolute top-0 left-0 z-0 hidden w-[90px] h-[95px] rounded-lg group-hover:block "></div>
      )}

      {/* hover border for vite skill */}
      {skill.name === "vite" && (
        <div className="vite-border-animation content-[''] absolute top-0 left-0 z-0 hidden w-[90px] h-[95px] rounded-lg group-hover:block "></div>
      )}
    </div>
  );
}