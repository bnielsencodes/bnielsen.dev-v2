import Bio from "./bio/Bio";
import Skills from "./skills/Skills";
import clsx from "clsx";

export default function AboutSection({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      id="about-section"
      className={clsx("pt-20 px-7 pb-20 overflow-x-clip", {
        "bg-neutral-200": darkMode,
        "bg-neutral-500": !darkMode,
      })}
    >
      {/* section heading */}
      <h2
        className={clsx(
          "relative z-0 w-[145px] mx-auto mb-[120px] text-[2.5rem] font-bold text-center lg:w-[153px] lg:text-[2.75rem] after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[102px] after:h-[14px] lg:after:bottom-[8px] lg:after:w-[111px]",
          {
            "text-neutral-500 after:bg-neutral-300": darkMode,
            "text-neutral-200 after:bg-neutral-400": !darkMode,
          }
        )}
      >
        About
      </h2>
      <Bio {...{ darkMode }} />
      <Skills {...{ darkMode }} />
    </section>
  );
}
