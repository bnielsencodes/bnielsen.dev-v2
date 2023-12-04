import clsx from "clsx";

export default function CTAButtons({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="flex gap-4 ml-[3px] md:ml-[5px] lg:ml-[2px] xl:ml-0">
      <a
        className={clsx("btn btn-primary", {
          "btn-light outline-dark-theme": darkMode,
          "btn-dark shadow-custom outline-light-theme": !darkMode,
        })}
        href="#projects-section"
        title="View work"
      >
        View Work
      </a>

      <a
        className={clsx("btn btn-secondary", {
          "btn-dark outline-dark-theme": darkMode,
          "btn-light shadow-custom outline-light-theme": !darkMode,
        })}
        href="#contact-section"
        title="Contact Brandon"
      >
        Contact
      </a>
    </div>
  );
}
