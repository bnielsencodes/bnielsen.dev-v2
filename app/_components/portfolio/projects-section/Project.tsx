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
        },
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
          },
        )}
      ></div>
      {/* project container */}
      <article
        className={clsx(
          "md:mx-auto md:flex md:items-center md:justify-center md:gap-7 lg:gap-12",
          {
            "md:flex-row-reverse":
              project.name === "SecurePass" ||
              project.name === "Dictionary Web App",
          },
        )}
      >
        {/* image container */}
        <div
          className={clsx("relative md:flex md:h-full md:flex-1", {
            "lg:justify-end": project.name === "Audiophile",
            "md:justify-end": project.name === "Quizzical",
          })}
        >
          {/* background color mobile container */}
          <div
            className={clsx(
              "absolute -top-[40px] left-0 h-32 w-full md:hidden",
              {
                "h-32 bg-projects-audiophile": project.name === "Audiophile",
                "h-[13rem] bg-projects-securepass":
                  project.name === "SecurePass",
                "h-[13rem] bg-projects-quizzical": project.name === "Quizzical",
                "h-[13rem] bg-projects-dictionary":
                  project.name === "Dictionary Web App",
              },
            )}
          ></div>
          {project.name === "Audiophile" || project.name === "SecurePass" ? (
            <Image
              className={clsx(
                "relative h-auto drop-shadow-2xl dark:drop-shadow-none",
                {
                  "mx-auto w-[calc(100%-40px)] md:mx-0 md:w-full lg:max-w-[594px]":
                    project.name === "Audiophile",
                  "mx-auto w-[225px] md:mx-0 md:w-[169px] lg:w-[212px] xl:w-[235px]":
                    project.name === "SecurePass",
                },
              )}
              src={project.img}
              alt={project.alt}
              width={project.imgWidth}
              height={project.imgHeight}
              sizes="100vw"
            />
          ) : project.name === "Quizzical" ||
            project.name === "Dictionary Web App" ? (
            <div className="relative mx-auto h-[calc(100vw+25px)] w-[calc(100%-40px)] max-w-[440px] md:mx-0 md:h-[400px] md:w-[346px] xl:w-[400px]">
              <Image
                className="absolute left-0 top-[35%] z-20 mx-auto h-auto w-[55%] -translate-y-1/2 drop-shadow-2xl dark:drop-shadow-none md:w-[189.5px] xl:w-[230px]"
                src={project.img}
                alt={project.alt}
                width={project.imgWidth}
                height={project.imgHeight}
                sizes="100vw"
              />
              <Image
                className="absolute right-0 top-[65%] z-10 mx-auto h-auto w-[55%] -translate-y-1/2 drop-shadow-2xl dark:drop-shadow-none md:w-[189.5px] xl:w-[230px]"
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
          className={clsx("mx-5 mt-8 md:mx-0 md:mt-0 md:flex-1", {
            "md:flex md:flex-col md:items-end":
              project.name === "SecurePass" ||
              project.name === "Dictionary Web App",
          })}
        >
          <h3 className="text-[2.3rem] font-bold leading-[2.5rem] text-neutral-200 dark:text-neutral-500 md:text-[2.39rem] lg:text-5xl">
            {project.name}
          </h3>
          <p
            className={clsx(
              "mb-4 mt-3 font-sans text-[1.125rem] font-light text-neutral-200 dark:text-neutral-600 dark:opacity-60 md:mb-5 md:w-[336px] lg:w-[432px]",
              {
                "md:text-right":
                  project.name === "SecurePass" ||
                  project.name === "Dictionary Web App",
              },
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
