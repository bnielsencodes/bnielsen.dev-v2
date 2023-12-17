import Bio from "./bio/Bio";
import Skills from "./skills/Skills";
import clsx from "clsx";

export default function AboutSection({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      id="about-section"
      className={clsx("pt-20 px-[19px] pb-20 overflow-x-clip md:px-[21px]", {
        "bg-neutral-200": darkMode,
        "bg-neutral-500": !darkMode,
      })}
    >
      {/* section heading */}
      <h2
        className={clsx(
          "relative z-0 w-[145px] mx-auto mb-[130px] text-[2.5rem] font-bold text-center md:mb-[145px] lg:w-[153px] lg:mb-[160px] lg:text-[2.75rem] after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[104px] after:h-[14px] lg:after:bottom-[8px] lg:after:w-[111px]",
          {
            "text-neutral-500 after:bg-neutral-300": darkMode,
            "text-neutral-200 after:bg-neutral-400": !darkMode,
          }
        )}
      >
        About
      </h2>
      <div className="xl:flex xl:items-center xl:justify-center xl:gap-56">
        <Bio {...{ darkMode }} />
        <Skills {...{ darkMode }} />
      </div>
    </section>
  );
}
