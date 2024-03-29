import clsx from "clsx";

export default function Tooltip({
  skill,
}: {
  skill: { id: number; name: string; tech: string };
}) {
  return (
    <>
      {/* show tooltip component on mouseover */}
      <div
        className={clsx(
          "opacity-transition absolute -top-[15px] z-10 text-xs font-normal leading-[1.42857143] text-start opacity-0 group-hover:opacity-100",
          {
            "-top-[17px]": skill.name === "figma" || skill.name === "vite",
            "left-[22.75px] md:left-[26px] lg:left-[23px]":
              skill.name === "css",
            "left-[18.25px] md:left-[22px] lg:left-[17.25px] xl:left-[18.75px]":
              skill.name === "figma",
            "left-[26.75px] md:left-[29.75px] lg:left-[26.25px]":
              skill.name === "git",
            "left-[4.25px] md:left-[7.5px] lg:left-[4.5px] xl:left-[4.25px]":
              skill.name === "javascript",
            "left-[14.5px] md:left-[18px] lg:left-[14.5px]":
              skill.name === "next",
            "left-[0.75px] md:left-[4px] lg:left-[0.75px]":
              skill.name === "postgresql",
            "left-[18px] md:left-[22px] lg:left-[18.25px]":
              skill.name === "react",
            "left-[21px] md:left-[24.25px] lg:left-[20.75px]":
              skill.name === "sass",
            "left-[11.25px] md:left-[14.25px] lg:left-[11px]":
              skill.name === "tailwind",
            "left-[4px] md:left-[7px] lg:left-[3.75px]":
              skill.name === "typescript",
            "left-[23.5px] md:left-[26.5px] lg:left-[23.25px]":
              skill.name === "vite",
          }
        )}
      >
        {/* arrow */}
        <div
          className={clsx(
            "absolute top-auto -bottom-1 left-1/2 -z-10 w-0 h-0 border-t-[5px] border-x-[5px] border-x-[transparent] ml-[-5px]",
            {
              "border-t-tech-css-100": skill.name === "css",
              "border-t-tech-figma-100": skill.name === "figma",
              "border-t-tech-git": skill.name === "git",
              "border-t-tech-html-200": skill.name === "html",
              "border-t-tech-javascript-100": skill.name === "javascript",
              "border-t-[#000] dark:border-t-tech-next": skill.name === "next",
              "border-t-tech-postgresql": skill.name === "postgresql",
              "border-t-tech-react": skill.name === "react",
              "border-t-tech-sass": skill.name === "sass",
              "border-t-tech-tailwind": skill.name === "tailwind",
              "border-t-tech-typescript-200": skill.name === "typescript",
              "border-t-tech-vite-500 dark:border-t-tech-vite-400":
                skill.name === "vite",
            }
          )}
        />
        {/* tooltip label */}
        <div
          className={clsx(
            "max-w-250px py-[3px] px-2 rounded text-neutral-200 font-sans font-semibold tracking-[0.35px] text-center",
            {
              "text-neutral-500":
                skill.name === "css" ||
                skill.name === "figma" ||
                skill.name === "git" ||
                skill.name === "html" ||
                skill.name === "postgresql" ||
                skill.name === "sass" ||
                skill.name === "typescript" ||
                skill.name === "vite",
              "dark:text-neutral-500": skill.name === "figma",
              "bg-tech-css-100": skill.name === "css",
              "label--figma": skill.name === "figma",
              "bg-tech-git": skill.name === "git",
              "bg-tech-html-200": skill.name === "html",
              "bg-tech-javascript-100": skill.name === "javascript",
              "bg-[#000] text-neutral-500 dark:bg-tech-next dark:text-neutral-200":
                skill.name === "next",
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
    </>
  );
}
