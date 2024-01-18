import useMediaQuery from "@/app/_lib/useMediaQuery";
import { skills, skillsLg } from "@/app/_data/portfolio/portfolioData";
import Skill from "./Skill";

export default function Skills() {
  const isBreakpoint = useMediaQuery(768);

  return (
    <div className="flex flex-col justify-center gap-8 w-[293px] pb-[25px] mt-[50px] mx-auto text-[0.9rem] md:w-[420px] lg:w-[595px] xl:w-[293px] xl:mt-0 xl:mx-0">
      <p className="border-b-4 border-b-neutral-400 dark:border-b-neutral-300 mx-auto text-neutral-200 dark:text-neutral-500 text-[1.625rem] font-bold">
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
