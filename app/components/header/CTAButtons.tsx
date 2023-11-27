import clsx from "clsx";

export default function CTAButtons({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="flex gap-4 mt-[21px]">
      <a
        className={clsx("btn btn-primary accent-outline", {
          "btn-light": darkMode,
          "btn-dark shadow-custom": !darkMode,
        })}
        href="#projects-section"
        title="View work"
      >
        View Work
      </a>

      <a
        className={clsx("btn btn-secondary accent-outline", {
          "btn-dark": darkMode,
          "btn-light shadow-custom": !darkMode,
        })}
        href="#contact-section"
        title="Contact Brandon"
      >
        Contact
      </a>
    </div>
  );
}
