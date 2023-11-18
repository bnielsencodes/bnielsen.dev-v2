import clsx from "clsx";

export default function ProjectsSection({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      id="projects-section"
      className={clsx("pt-20 pb-8 overflow-x-clip", {
        "bg-neutral-100": darkMode,
        "bg-neutral-600": !darkMode,
      })}
    >
      {/* section heading */}
      <p
        className={clsx(
          "relative z-0 w-[130px] mx-auto mb-[10px] text-[2.5rem] font-bold text-center after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[93px] after:h-[14px]",
          {
            "text-neutral-500 after:bg-neutral-300": darkMode,
            "text-neutral-200 after:bg-neutral-400": !darkMode,
          }
        )}
      >
        Work
      </p>
      {/* <p
          className={clsx(
            "relative z-0 w-[190px] mx-auto mb-[10px] text-[2.5rem] font-bold text-center after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[143px] after:h-[14px]",
            {
              "text-neutral-500 after:bg-neutral-300": darkMode,
              "text-neutral-200 after:bg-neutral-400": !darkMode,
            }
          )}
        >
          Portfolio
        </p> */}
      <div className="flex flex-col justify-center pb-[25px] mt-[50px] text-[0.9rem] "></div>
    </section>
  );
}