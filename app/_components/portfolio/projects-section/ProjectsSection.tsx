import { projects } from "@/app/data";
import Project from "./Project";

export default function ProjectsSection() {
  const projectElements = projects.map((project) => {
    return <Project key={project.id} {...{ project }} />;
  });

  return (
    <section
      id="projects-section"
      className="overflow-x-clip bg-neutral-600 pb-10 pt-20 dark:bg-neutral-100 md:pb-[140px] lg:pb-[260px]"
    >
      {/* section heading */}
      <h2
        id="projects-section-heading"
        className="relative z-0 mx-auto w-[130px] pt-10 text-center text-[2.5rem] font-bold text-neutral-200 after:absolute after:bottom-[5px] after:right-0 after:-z-10 after:h-[14px] after:w-[93px] after:bg-neutral-400 after:content-[''] dark:text-neutral-500 dark:after:bg-neutral-300 lg:w-[143px] lg:text-[2.75rem] lg:after:bottom-[7px] lg:after:w-[101px]"
      >
        Work
      </h2>
      <div className="mt-[165px] flex flex-col justify-center pb-[25px] text-[0.9rem] lg:mt-[260px] lg:pb-0">
        {projectElements}
      </div>
    </section>
  );
}
