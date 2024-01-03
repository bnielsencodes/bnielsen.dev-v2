import Bio from "./bio/Bio";
import Skills from "./skills/Skills";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="pt-20 px-[19px] pb-20 bg-neutral-500 overflow-x-clip dark:bg-neutral-200 md:px-[21px]"
    >
      {/* section heading */}
      <h2 className="relative z-0 w-[145px] mx-auto mb-[130px] text-neutral-200 text-[2.5rem] font-bold text-center after:bg-neutral-400 dark:text-neutral-500 dark:after:bg-neutral-300 md:mb-[145px] lg:w-[153px] lg:mb-[160px] lg:text-[2.75rem] after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[104px] after:h-[14px] lg:after:bottom-[8px] lg:after:w-[111px]">
        About
      </h2>
      <div className="xl:flex xl:items-center xl:justify-center xl:gap-56">
        <Bio />
        <Skills />
      </div>
    </section>
  );
}
