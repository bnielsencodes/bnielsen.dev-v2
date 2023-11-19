import clsx from "clsx";

export default function Tooltip({
  skill,
  showTooltip,
}: {
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
              "left-[25px]": skill.name === "css",
              "left-[22px]": skill.name === "vite",
              "left-[17px]": skill.name === "figma" || skill.name === "next",
              "left-[27px]": skill.name === "git",
              "left-[20px]": skill.name === "html" || skill.name === "react",
              "left-[10px]": skill.name === "javascript",
              "left-[4px]": skill.name === "postgresql",
              "left-[23px]": skill.name === "sass",
              "left-[13px]": skill.name === "tailwind",
              "left-[7px]": skill.name === "typescript",
            }
          )}
        >
          {/* arrow */}
          <div
            className={clsx(
              "absolute -z-10 top-auto -bottom-1 left-1/2 w-0 h-0 border-t-[5px] border-x-[5px] border-x-neutral-100 -ml-[5px]",
              {
                "border-t-tech-css-100": skill.name === "css",
                "border-t-tech-figma-100": skill.name === "figma",
                "border-t-tech-git": skill.name === "git",
                "border-t-tech-html-200": skill.name === "html",
                "border-t-tech-javascript-100": skill.name === "javascript",
                "border-t-tech-next": skill.name === "next",
                "border-t-tech-postgresql": skill.name === "postgresql",
                "border-t-tech-react": skill.name === "react",
                "border-t-tech-sass": skill.name === "sass",
                "border-t-tech-tailwind": skill.name === "tailwind",
                "border-t-tech-typescript-200": skill.name === "typescript",
                "border-t-tech-vite-400": skill.name === "vite",
              }
            )}
          />
          {/* tooltip label */}
          <div
            className={clsx(
              "max-w-250px py-[3px] px-2 rounded text-neutral-200 font-semibold text-center",
              {
                "bg-tech-css-100": skill.name === "css",
                "label--figma": skill.name === "figma",
                "bg-tech-git": skill.name === "git",
                "bg-tech-html-200": skill.name === "html",
                "bg-tech-javascript-100": skill.name === "javascript",
                "bg-tech-next": skill.name === "next",
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
