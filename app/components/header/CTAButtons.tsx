import clsx from "clsx";

export default function CTAButtons({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="relative flex gap-4 ml-[3px] md:ml-[5px] lg:ml-[2px] xl:ml-0">
      {/* view work button */}
      <a
        className={clsx("btn btn-primary", {
          "btn-light outline-dark-theme text-neutral-200": darkMode,
          "btn-dark shadow-custom outline-light-theme text-neutral-500":
            !darkMode,
        })}
        href="#projects-section"
        title="View work"
      >
        View Work
      </a>
      {/* view work HOVER button */}
      <a
        className={clsx("absolute top-0 left-0 btn btn-primary", {
          "btn-light-alt outline-dark-theme text-neutral-200": darkMode,
          "btn-dark-alt outline-light-theme text-neutral-500": !darkMode,
        })}
        href="#projects-section"
        title="View work"
      >
        View Work
      </a>

      {/* contact button */}
      <a
        className={clsx("btn btn-secondary", {
          "btn-dark outline-dark-theme text-neutral-500": darkMode,
          "btn-light shadow-custom outline-light-theme text-neutral-200":
            !darkMode,
        })}
        href="#contact-section"
        title="Contact Brandon"
      >
        Contact
      </a>
      {/* contact HOVER button */}
      <a
        className={clsx("absolute top-0 right-0 btn btn-secondary", {
          "btn-dark-alt outline-dark-theme text-neutral-500": darkMode,
          "btn-light-alt outline-light-theme text-neutral-200": !darkMode,
        })}
        href="#contact-section"
        title="Contact Brandon"
      >
        Contact
      </a>
    </div>
  );
}
