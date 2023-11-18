import useMediaQuery from "../../../lib/useMediaQuery";
import { skills, skillsLg } from "../../../data";
import Skill from "./Skill";
import clsx from "clsx";

export default function Skills({ darkMode }: { darkMode: boolean }) {
  const isBreakpoint = useMediaQuery(768);

  return (
    <aside className="flex flex-col justify-center w-[293px] pb-[25px] mt-[50px] mx-auto text-[0.9rem]">
      <p className="w-[105px] border-b-4 border-b-neutral-300 mx-auto text-neutral-500 text-[1.4rem] font-semibold">
        Top Skills
      </p>
      <div className="grid grid-cols-3 gap-x-3 gap-y-4 mt-8">
        {isBreakpoint
          ? skillsLg.map((skill) => {
              return (
                <Skill
                  key={skill.id}
                  {...{ skill, darkMode }}
                  // skill={skill}
                  // darkMode={darkMode}
                />
              );
            })
          : skills.map((skill) => {
              return (
                <Skill
                  key={skill.id}
                  {...{ darkMode, skill }}
                  // skill={skill}
                  // darkMode={darkMode}
                />
              );
            })}
      </div>
    </aside>
  );
}
