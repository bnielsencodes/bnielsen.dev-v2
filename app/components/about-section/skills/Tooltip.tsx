import clsx from "clsx";

export default function Tooltip({
  darkMode,
  skill,
  showTooltip,
}: {
  darkMode: boolean;
  skill: { id: number; name: string; tech: string };
  showTooltip: boolean;
}) {
  return (
    <>
      {/* show tooltip component on mouseover */}
      {showTooltip && (
        <div
          className={clsx(
            "absolute -top-[15px] z-10 font-normal text-xs leading-[1.42857143] text-start",
            {
              "-top-[17px]": skill.name === "figma" || skill.name === "vite",
              "left-[20px] md:left-[23px] lg:left-[20px]":
                skill.name === "figma" || skill.name === "react",
              "left-[24px] md:left-[28px] lg:left-[24px]": skill.name === "css",
              "left-[18px] md:left-[22px] lg:left-[17.5px] xl:left-[19px]":
                skill.name === "figma",
              "left-[28px] md:left-[31px] lg:left-[27px]": skill.name === "git",
              "left-[7px] md:left-[10px] lg:left-[7px] xl:left-[6px]": skill.name === "javascript",
              "left-[16px] md:left-[19px] lg:left-[16px]": skill.name === "next",
              "left-[2.75px] md:left-[5.5px] lg:left-[3px]": skill.name === "postgresql",
              "left-[22px] md:left-[25px] lg:left-[22px]": skill.name === "sass",
              "left-[12.5px] md:left-[15.5px] lg:left-[12.5px]": skill.name === "tailwind",
              "left-[6px] md:left-[9px] lg:left-[6px]": skill.name === "typescript",
              "left-[24.5px] md:left-[27.5px] lg:left-[24.5px]": skill.name === "vite",
            }
          )}
        >
          {/* arrow */}
          <div
            className={clsx(
              "absolute -z-10 top-auto -bottom-1 left-1/2 w-0 h-0 border-t-[5px] border-x-[5px] border-x-[transparent] -ml-[5px]",
              {
                "border-t-tech-next": skill.name === "next" && darkMode,
                "border-t-[#000]": skill.name === "next" && !darkMode,
                "border-t-tech-vite-400": skill.name === "vite" && darkMode,
                "border-t-tech-vite-500": skill.name === "vite" && !darkMode,
                "border-t-tech-css-100": skill.name === "css",
                "border-t-tech-figma-100": skill.name === "figma",
                "border-t-tech-git": skill.name === "git",
                "border-t-tech-html-200": skill.name === "html",
                "border-t-tech-javascript-100": skill.name === "javascript",
                "border-t-tech-postgresql": skill.name === "postgresql",
                "border-t-tech-react": skill.name === "react",
                "border-t-tech-sass": skill.name === "sass",
                "border-t-tech-tailwind": skill.name === "tailwind",
                "border-t-tech-typescript-200": skill.name === "typescript",
              }
            )}
          />
          {/* tooltip label */}
          <div
            className={clsx(
              "max-w-250px py-[3px] px-2 rounded font-sans font-semibold text-center",
              {
                "text-neutral-200": darkMode,
                "bg-tech-next": skill.name === "next" && darkMode,
                "bg-[#000] text-neutral-500":
                  skill.name === "next" && !darkMode,
                "text-neutral-600": skill.name === "vite" && !darkMode,
                "text-neutral-500":
                  (skill.name === "css" && !darkMode) ||
                  (skill.name === "git" && !darkMode) ||
                  (skill.name === "postgresql" && !darkMode) ||
                  (skill.name === "sass" && !darkMode) ||
                  (skill.name === "typescript" && !darkMode),
                "bg-tech-css-100": skill.name === "css",
                "label--figma": skill.name === "figma",
                "bg-tech-git": skill.name === "git",
                "bg-tech-html-200": skill.name === "html",
                "bg-tech-javascript-100": skill.name === "javascript",
                "bg-tech-postgresql": skill.name === "postgresql",
                "bg-tech-react": skill.name === "react",
                "bg-tech-sass": skill.name === "sass",
                "bg-tech-tailwind": skill.name === "tailwind",
                "bg-tech-typescript-200": skill.name === "typescript",
                "label--vite": skill.name === "vite",
              }
            )}
          >
            {skill.tech}
          </div>
        </div>
      )}
    </>
  );
}
