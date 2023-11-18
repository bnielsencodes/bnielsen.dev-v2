import Bio from "./bio/Bio";
import Skills from "./skills/Skills";
import clsx from "clsx";

export default function AboutSection(props: any) {
  return (
    <section
      id="about-section"
      className={clsx("pt-20 pb-14 overflow-x-clip", {
        "bg-neutral-200": props.darkMode,
        "bg-neutral-500": !props.darkMode,
      })}
    >
      {/* section heading */}
      <p
        className={clsx(
          "relative z-0 w-[145px] mx-auto text-[2.5rem] font-bold text-center after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[102px] after:h-[14px]",
          {
            "text-neutral-500 after:bg-neutral-300": props.darkMode,
            "text-neutral-200 after:bg-neutral-400": !props.darkMode,
          }
        )}
      >
        About
      </p>
      <Bio />
      <Skills
      />
    </section>
  );
}
