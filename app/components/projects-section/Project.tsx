import Image, { StaticImageData } from "next/image";
import ProjectButtons from "./ProjectButtons";
import clsx from "clsx";

export default function ProjectsSection({
  darkMode,
  project,
}: {
  darkMode: boolean;
  project: {
    id: number;
    name: string;
    description: string;
    img: StaticImageData;
    alt: string;
    img2: StaticImageData;
    alt2: string;
    imgWidth: number;
    imgHeight: number;
    liveSite: string;
    sourceCode: string;
  };
}) {
  const liveSite = project.liveSite;
  const sourceCode = project.sourceCode;

  return (
    <div className="relative px-7 mb-40 md:px-9 md:mb-60 lg:mb-72">
      {/* background color container */}
      <div
        className={clsx(
          "hidden md:absolute md:-top-[120px] md:block md:h-[calc(100%+240px)] lg:-top-36 lg:h-[calc(100%+288px)]",
          {
            "md:left-0 md:w-1/4 lg:w-1/3 md:bg-projects-audiophile":
              project.name === "Audiophile",
            "md:right-0 md:w-1/3 xl:w-2/5 md:bg-projects-securepass":
              project.name === "SecurePass",
            "md:left-0 md:w-1/5 lg:w-1/4 xl:w-1/3 md:bg-projects-quizzical":
              project.name === "Quizzical",
            "md:right-0 md:w-1/5 lg:w-1/4 xl:w-1/3 md:bg-projects-dictionary":
              project.name === "Dictionary Web App",
          }
        )}
      ></div>
      {/* project container */}
      <div
        className={clsx(
          "md:flex md:items-center md:justify-center md:gap-7 md:mx-auto lg:gap-12",
          {
            "md:flex-row-reverse":
              project.name === "SecurePass" ||
              project.name === "Dictionary Web App",
            // "lg:gap-12": project.name === "SecurePass",
          }
        )}
      >
        {/* image container */}
        <div
          className={clsx(" md:flex md:flex-1 md:h-full", {
            "lg:justify-end": project.name === "Audiophile",
            "md:justify-end": project.name === "Quizzical",
          })}
        >
          {project.name === "Audiophile" || project.name === "SecurePass" ? (
            <Image
              className={clsx("relative h-auto", {
                "drop-shadow-none": darkMode,
                "drop-shadow-custom": !darkMode,
                "w-full lg:max-w-[594px]": project.name === "Audiophile",
                "w-[calc(100%-150px)] mx-auto md:w-[169px] md:mx-0 lg:w-[185px] xl:w-[210px]":
                  project.name === "SecurePass",
              })}
              src={project.img}
              alt={project.alt}
              width={project.imgWidth}
              height={project.imgHeight}
              sizes="100vw"
            />
          ) : project.name === "Quizzical" ||
            project.name === "Dictionary Web App" ? (
            <div className="relative w-[319px] h-[400px] mx-auto md:mx-0 lg:w-[400px]">
              <Image
                className={clsx(
                  "absolute top-[35%] left-0 z-20 -translate-y-1/2 w-[179.75px] h-auto mx-auto xl:w-[230px]",
                  {
                    "drop-shadow-none": darkMode,
                    "drop-shadow-custom": !darkMode,
                  }
                )}
                src={project.img}
                alt={project.alt}
                width={project.imgWidth}
                height={project.imgHeight}
                sizes="100vw"
              />
              <Image
                className={clsx(
                  "absolute top-[65%] right-0 z-10 -translate-y-1/2 w-[179.75px] h-auto mx-auto xl:w-[230px]",
                  {
                    "drop-shadow-none": darkMode,
                    "drop-shadow-custom": !darkMode,
                  }
                )}
                src={project.img2}
                alt={project.alt2}
                width={project.imgWidth}
                height={project.imgHeight}
                sizes="100vw"
              />
            </div>
          ) : null}
        </div>

        {/* project details container */}
        <div
          className={clsx("mt-8 md:flex-1 md:mt-0", {
            "md:flex md:flex-col md:items-end":
              project.name === "SecurePass" ||
              project.name === "Dictionary Web App",
          })}
        >
          <h3
            className={clsx(
              "text-4xl font-bold md:text-[2.39rem] lg:text-5xl",
              {
                "text-neutral-500 ": darkMode,
                "text-neutral-200 ": !darkMode,
              }
            )}
          >
            {project.name}
          </h3>
          <p
            className={clsx(
              "mt-3 mb-4 font-sans text-[1.05rem] font-light md:mb-5 md:text-[1.05rem] lg:w-[432px]",
              {
                "text-neutral-400": darkMode,
                "text-neutral-300": !darkMode,
                "md:text-right":
                  project.name === "SecurePass" ||
                  project.name === "Dictionary Web App",
              }
            )}
          >
            {project.description}
          </p>

          <ProjectButtons {...{ darkMode, liveSite, sourceCode }} />
        </div>
      </div>
    </div>
  );
}
