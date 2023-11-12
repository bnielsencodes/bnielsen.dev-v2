import Icon from "./Icon";
import clsx from "clsx";

export default function Skill(props: any) {
  return (
    <div className="relative group">
      <div
        className={clsx(
          "relative z-10 flex flex-col items-center justify-center gap-[5px] py-[18px] border-2 rounded-lg hover:cursor-help",
          {
            "border-neutral-300 bg-neutral-100": props.darkMode,
            "border-neutral-300 bg-neutral-600": !props.darkMode,
            "group-hover:border-tech-css-100": props.skill.name === "css",
            "group-hover:w-[86px] group-hover:h-[91px] group-hover:mt-[2px] group-hover:ml-[2px] group-hover:border-neutral-100":
              props.skill.name === "figma" || props.skill.name === "vite",
            "group-hover:border-tech-git": props.skill.name === "git",
            "group-hover:border-tech-html-200": props.skill.name === "html",
            "group-hover:border-tech-javascript-100":
              props.skill.name === "javascript",
            "group-hover:border-tech-next": props.skill.name === "next",
            "group-hover:border-tech-postgresql":
              props.skill.name === "postgresql",
            "group-hover:border-tech-react": props.skill.name === "react",
            "group-hover:border-tech-sass": props.skill.name === "sass",
            "group-hover:border-tech-tailwind": props.skill.name === "tailwind",
            "group-hover:border-tech-typescript-200":
              props.skill.name === "typescript",
          }
        )}
      >
        <div className={`w-[55px] h-[55px] icon--${props.skill.name}`}>
          <Icon name={props.skill.name} />
        </div>
      </div>

      {props.skill.name === "figma" && (
        <div className="figma-border-animation content-[''] absolute top-0 left-0 z-0 hidden w-[90px] h-[95px] rounded-lg group-hover:block "></div>
      )}

      {props.skill.name === "vite" && (
        <div className="vite-border-animation content-[''] absolute top-0 left-0 z-0 hidden w-[90px] h-[95px] rounded-lg group-hover:block "></div>
      )}
    </div>
  );
}
