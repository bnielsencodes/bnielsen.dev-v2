import useMediaQuery from "../../../../_lib/useMediaQuery";
import { skills, skillsLg } from "../../../../portfolioData";
import Skill from "./Skill";

export default function Skills() {
  const isBreakpoint = useMediaQuery(768);

  return (
    <div className="mx-auto mt-[50px] flex w-[293px] flex-col justify-center gap-8 pb-[25px] text-[0.9rem] md:w-[420px] lg:w-[595px] xl:mx-0 xl:mt-0 xl:w-[293px]">
      <p className="mx-auto border-b-4 border-b-neutral-400 text-[1.625rem] font-bold text-neutral-200 dark:border-b-neutral-300 dark:text-neutral-500">
        Top Skills
      </p>
      <div className="grid grid-cols-3 gap-x-3 gap-y-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-3">
        {isBreakpoint
          ? skillsLg.map((skill) => {
              return <Skill key={skill.id} {...{ skill }} />;
            })
          : skills.map((skill) => {
              return <Skill key={skill.id} {...{ skill }} />;
            })}
      </div>
    </div>
  );
}
