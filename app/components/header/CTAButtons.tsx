import clsx from "clsx";

export default function CTAButtons({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="relative flex gap-4 ml-[3px] md:ml-[5px] lg:ml-[2px] xl:ml-0">
      {/* view work button */}
      <a
        className={clsx("btn btn-primary focus:opacity-90", {
          "btn-light text-neutral-200": darkMode,
          "btn-dark shadow-custom text-neutral-500": !darkMode,
        })}
        href="#projects-section"
      >
        View Work
      </a>
      {/* view work HOVER button */}
      <a
        className={clsx("absolute top-0 left-0 btn btn-primary", {
          "btn-light-alt text-neutral-200": darkMode,
          "btn-dark-alt text-neutral-500": !darkMode,
        })}
        href="#projects-section"
        tabIndex={-1}
        aria-hidden={true}
      >
        View Work
      </a>

      {/* contact button */}
      <a
        className={clsx("btn btn-secondary focus:opacity-90", {
          "btn-dark outline-dark-theme text-neutral-500": darkMode,
          "btn-light shadow-custom outline-light-theme text-neutral-200":
            !darkMode,
        })}
        href="#contact-section"
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
        tabIndex={-1}
        aria-hidden={true}
      >
        Contact
      </a>
    </div>
  );
}
