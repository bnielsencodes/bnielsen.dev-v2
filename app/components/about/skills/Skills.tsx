import useScreenSize from "../../../lib/useScreenSize";
import { skills, skillsLg } from "../../../data";
import Skill from "./Skill";
import clsx from "clsx";

export default function Skills(props: any) {
  const screenSize = useScreenSize();

  return (
    <section className="w-[293px] mx-auto">
      <p className="w-[105px] border-b-4 border-b-neutral-300 mx-auto text-neutral-500 text-[1.4rem] font-semibold">
        Top Skills
      </p>
      <div className="grid grid-cols-3 gap-x-3 gap-y-4 mt-8">
        {screenSize.width >= 768
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
    </section>
  );
}
