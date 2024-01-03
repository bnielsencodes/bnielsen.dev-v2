import Bio from "./bio/Bio";
import Skills from "./skills/Skills";

export default function AboutSection() {
  return (
    <section
      id="about-section"
      className="pt-[140px] px-[19px] pb-[100px] overflow-x-clip md:px-[21px] lg:pt-[240px] lg:pb-[90px] xl:pt-[280px] xl:pb-[120px]"
    >
      {/* section heading */}
      <h2 className="relative z-0 w-[145px] mx-auto mb-[130px] text-neutral-200 text-[2.5rem] font-bold text-center after:bg-neutral-400 dark:text-neutral-500 dark:after:bg-neutral-300 md:mb-[145px] lg:w-[153px] lg:mb-[120px] lg:text-[2.75rem] after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[104px] after:h-[14px] lg:after:bottom-[8px] lg:after:w-[111px]">
        About
      </h2>
      <div className="xl:flex xl:items-center xl:justify-center xl:gap-56">
        <Bio />
        <Skills />
      </div>
    </section>
  );
}
