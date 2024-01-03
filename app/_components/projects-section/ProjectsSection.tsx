import { projects } from "@/app/data";
import Project from "./Project";

export default function ProjectsSection() {
  const projectElements = projects.map((project) => {
    return <Project key={project.id} {...{ project }} />;
  });

  return (
    <section
      id="projects-section"
      className="pt-[150px] pb-[170px] bg-neutral-600 overflow-x-clip dark:bg-neutral-100"
    >
      {/* section heading */}
      <h2 className="relative z-0 w-[130px] mx-auto text-neutral-200 text-[2.5rem] font-bold text-center lg:w-[143px] lg:text-[2.75rem] after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[93px] after:h-[14px] after:bg-neutral-400 dark:text-neutral-500 dark:after:bg-neutral-300 lg:after:w-[101px] lg:after:bottom-[7px]">
        Work
      </h2>
      <div className="flex flex-col justify-center pb-[25px] mt-[165px] text-[0.9rem] lg:mt-[260px] lg:pb-0">
        {projectElements}
      </div>
    </section>
  );
}
