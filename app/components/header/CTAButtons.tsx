import clsx from "clsx";

export default function CTAButtons({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="flex gap-4 mt-[21px]">
      <a className="accent-outline" href="#projects-section">
        <button
          className={clsx("btn btn-primary", {
            "btn-light": darkMode,
            "btn-dark shadow-custom": !darkMode,
          })}
          type="button"
        >
            View Work
        </button>
      </a>

      <a className="accent-outline" href="#contact-section">
        <button
          className={clsx("btn btn-secondary", {
            "btn-dark": darkMode,
            "btn-light shadow-custom": !darkMode,
          })}
          type="button"
        >
            Contact
        </button>
      </a>
    </div>
  );
}
