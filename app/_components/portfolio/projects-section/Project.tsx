import Image, { StaticImageData } from "next/image";
import ProjectButtons from "./ProjectButtons";
import clsx from "clsx";

export default function ProjectsSection({
  project,
}: {
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
    <div
      className={clsx(
        "relative mb-40 md:px-6 md:[&:not(:last-of-type)]:mb-60 lg:[&:not(:last-of-type)]:mb-72",
        {
          "md:px-[24px]":
            project.name === "Quizzical" ||
            project.name === "Dictionary Web App",
        }
      )}
    >
      {/* background color container */}
      <div
        className={clsx(
          "hidden md:absolute md:-top-[120px] md:block md:h-[calc(100%+240px)] lg:-top-36 lg:h-[calc(100%+288px)]",
          {
            "md:left-0 md:w-1/4 md:bg-projects-audiophile lg:w-1/3":
              project.name === "Audiophile",
            "md:right-0 md:w-1/3 md:bg-projects-securepass xl:w-2/5":
              project.name === "SecurePass",
            "md:left-0 md:w-1/5 md:bg-projects-quizzical lg:w-1/4 xl:w-1/3":
              project.name === "Quizzical",
            "md:right-0 md:w-1/5 md:bg-projects-dictionary lg:w-1/4 xl:w-1/3":
              project.name === "Dictionary Web App",
          }
        )}
      ></div>
      {/* project container */}
      <article
        className={clsx(
          "md:flex md:items-center md:justify-center md:gap-7 md:mx-auto lg:gap-12",
          {
            "md:flex-row-reverse":
              project.name === "SecurePass" ||
              project.name === "Dictionary Web App",
          }
        )}
      >
        {/* image container */}
        <div
          className={clsx("relative md:flex md:flex-1 md:h-full", {
            "lg:justify-end": project.name === "Audiophile",
            "md:justify-end": project.name === "Quizzical",
          })}
        >
          {/* background color mobile container */}
          <div
            className={clsx(
              "absolute -top-[40px] left-0 w-full h-32 md:hidden",
              {
                "h-32 bg-projects-audiophile": project.name === "Audiophile",
                "h-[13rem] bg-projects-securepass":
                  project.name === "SecurePass",
                "h-[13rem] bg-projects-quizzical": project.name === "Quizzical",
                "h-[13rem] bg-projects-dictionary":
                  project.name === "Dictionary Web App",
              }
            )}
          ></div>
          {project.name === "Audiophile" || project.name === "SecurePass" ? (
            <Image
              className={clsx(
                "relative h-auto drop-shadow-2xl dark:drop-shadow-none",
                {
                  "w-[calc(100%-40px)] mx-auto md:w-full md:mx-0 lg:max-w-[594px]":
                    project.name === "Audiophile",
                  "w-[225px] mx-auto md:w-[169px] md:mx-0 lg:w-[212px] xl:w-[235px]":
                    project.name === "SecurePass",
                }
              )}
              src={project.img}
              alt={project.alt}
              width={project.imgWidth}
              height={project.imgHeight}
              sizes="100vw"
            />
          ) : project.name === "Quizzical" ||
            project.name === "Dictionary Web App" ? (
            <div className="relative w-[calc(100%-40px)] max-w-[440px] h-[calc(100vw+25px)] mx-auto md:w-[346px] md:h-[400px] md:mx-0 xl:w-[400px]">
              <Image
                className="absolute top-[35%] left-0 z-20 w-[55%] h-auto mx-auto -translate-y-1/2 drop-shadow-2xl dark:drop-shadow-none md:w-[189.5px] xl:w-[230px]"
                src={project.img}
                alt={project.alt}
                width={project.imgWidth}
                height={project.imgHeight}
                sizes="100vw"
              />
              <Image
                className="absolute top-[65%] right-0 z-10 w-[55%] h-auto mx-auto -translate-y-1/2 drop-shadow-2xl dark:drop-shadow-none md:w-[189.5px] xl:w-[230px]"
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
          className={clsx("mt-8 mx-5 md:mt-0 md:mx-0 md:flex-1", {
            "md:flex md:flex-col md:items-end":
              project.name === "SecurePass" ||
              project.name === "Dictionary Web App",
          })}
        >
          <h3 className="text-neutral-200 dark:text-neutral-500 text-[2.3rem] font-bold leading-[2.5rem] md:text-[2.39rem] lg:text-5xl">
            {project.name}
          </h3>
          <p
            className={clsx(
              "mt-3 mb-4 font-sans text-neutral-200 dark:text-neutral-600 text-[1.125rem] font-light dark:opacity-60 md:w-[336px] md:mb-5 lg:w-[432px]",
              {
                "md:text-right":
                  project.name === "SecurePass" ||
                  project.name === "Dictionary Web App",
              }
            )}
          >
            {project.description}
          </p>

          <ProjectButtons {...{ liveSite, sourceCode }} />
        </div>
      </article>
    </div>
  );
}
