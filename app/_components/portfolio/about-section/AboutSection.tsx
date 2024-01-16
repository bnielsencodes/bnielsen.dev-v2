import Bio from "./bio/Bio";
import Skills from "./skills/Skills";
import clsx from "clsx";

export default function AboutSection({ loading }: { loading: boolean }) {
  return (
    <section
      id="about-section"
      className={clsx(
        "overflow-x-clip pt-20 px-[19px] pb-[200px] bg-neutral-500 dark:bg-neutral-200 md:px-[21px] lg:pb-[200px] xl:pb-[300px]",
        {
          "pt-[calc(22.223vw+79px)]": loading,
        }
      )}
    >
      {/* section heading */}
      <h2 className="relative z-0 w-[145px] mx-auto mb-[130px] text-neutral-200 dark:text-neutral-500 text-[2.5rem] font-bold text-center after:content-[''] after:absolute after:bottom-[5px] after:right-0 after:-z-10 after:w-[104px] after:h-[14px] after:bg-neutral-400 dark:after:bg-neutral-300 md:mb-[145px] lg:w-[153px] lg:mb-[160px] lg:text-[2.75rem] lg:after:bottom-[8px] lg:after:w-[111px]">
        About
      </h2>
      <div className="xl:flex xl:items-center xl:justify-center xl:gap-56">
        <Bio />
        <Skills />
      </div>
    </section>
  );
}
