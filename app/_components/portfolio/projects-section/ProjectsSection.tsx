import { projects as projectsData } from "@/app/_data/portfolio/portfolioData";
import Project from "./Project";

export default function ProjectsSection() {
  return (
    <section
      id="projects-section"
      className="pt-20 pb-10 bg-neutral-600 dark:bg-neutral-100 md:pb-[140px] overflow-x-clip lg:pb-[260px]"
    >
      {/* section heading */}
      <h2
        id="projects-section-heading"
        className="relative z-0 w-[130px] pt-20 mx-auto text-neutral-200 dark:text-neutral-500 text-[2.5rem] font-bold text-center after:content-[''] after:absolute after:bottom-[5px] after:right-0 after:-z-10 after:w-[93px] after:h-[14px] after:bg-neutral-400 dark:after:bg-neutral-300 lg:w-[143px] lg:text-[2.75rem] lg:after:bottom-[7px] lg:after:w-[101px]"
      >
        Work
      </h2>

      <div className="flex flex-col justify-center pb-[25px] mt-[165px] text-[0.9rem] lg:pb-0 lg:mt-[260px]">
        {projectsData.map((project) => {
          return <Project key={project.id} {...{ project }} />;
        })}
      </div>
    </section>
  );
}
