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
  return (
    <>
      <div className="px-7 mb-32">
        {project.name === "Audiophile" || project.name === "SecurePass" ? (
          <Image
            className={clsx("relative h-auto", {
              "drop-shadow-none": darkMode,
              "drop-shadow-custom": !darkMode,
              "w-full": project.name === "Audiophile",
              "w-[calc(100%-150px)] mx-auto": project.name === "SecurePass",
            })}
            src={project.img}
            alt={project.alt}
            width={project.imgWidth}
            height={project.imgHeight}
            sizes="100vw"
          />
        ) : project.name === "Quizzical" ||
          project.name === "Dictionary Web App" ? (
          <div className="relative w-[319px] h-[400px] mx-auto">
            <Image
              className={clsx(
                "absolute top-[35%] left-0 z-20 -translate-y-1/2 w-[179.75px] h-auto mx-auto",
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
                "absolute top-[65%] right-0 z-10 -translate-y-1/2 w-[179.75px] h-auto mx-auto",
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

        <p
          className={clsx("mt-8 mb-3 text-4xl font-bold", {
            "text-neutral-500 ": darkMode,
            "text-neutral-200 ": !darkMode,
          })}
        >
          {project.name}
        </p>
        <p
          className={clsx("font-sans text-[1.05rem] font-light", {
            "text-neutral-400": darkMode,
            "text-neutral-300": !darkMode,
          })}
        >
          {project.description}
        </p>

        <ProjectButtons {...{ darkMode }} />
      </div>
    </>
  );
}
