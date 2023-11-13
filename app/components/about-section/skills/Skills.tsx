import useMediaQuery from "../../../lib/useMediaQuery";
import { skills, skillsLg } from "../../../data";
import Skill from "./Skill";
import clsx from "clsx";

export default function Skills(props: any) {
  const isBreakpoint = useMediaQuery(768);

  return (
    <aside className="w-[293px] mx-auto">
      <p className="w-[105px] border-b-4 border-b-neutral-300 mx-auto text-neutral-500 text-[1.4rem] font-semibold">
        Top Skills
      </p>
      <div className="grid grid-cols-3 gap-x-3 gap-y-4 mt-8">
        {isBreakpoint
          ? skillsLg.map((skill) => {
              return (
                <Skill key={skill.id} skill={skill} darkMode={props.darkMode} />
              );
            })
          : skills.map((skill) => {
              return (
                <Skill key={skill.id} skill={skill} darkMode={props.darkMode} />
              );
            })}
      </div>
    </aside>
  );
}
