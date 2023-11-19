import useMediaQuery from "../../../lib/useMediaQuery";
import { skills, skillsLg } from "../../../data";
import Skill from "./Skill";
import clsx from "clsx";

export default function Skills({ darkMode }: { darkMode: boolean }) {
  const isBreakpoint = useMediaQuery(768);

  return (
    <aside className="flex flex-col justify-center w-[293px] pb-[25px] mt-[50px] mx-auto text-[0.9rem]">
      <p
        className={clsx("border-b-4  mx-auto font-bold text-[1.4rem]", {
          "text-neutral-500 border-b-neutral-300": darkMode,
          "text-neutral-200 border-b-neutral-400": !darkMode,
        })}
      >
        Top Skills
      </p>
      <div className="grid grid-cols-3 gap-x-3 gap-y-4 mt-8">
        {isBreakpoint
          ? skillsLg.map((skill) => {
              return <Skill key={skill.id} {...{ skill, darkMode }} />;
            })
          : skills.map((skill) => {
              return <Skill key={skill.id} {...{ darkMode, skill }} />;
            })}
      </div>
    </aside>
  );
}
