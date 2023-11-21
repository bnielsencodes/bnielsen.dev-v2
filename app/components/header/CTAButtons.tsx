import clsx from "clsx";

export default function CTAButtons({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="flex gap-4 mt-[21px]">
      <button
        className={clsx("btn header-cta--left", {
          "btn-light": darkMode,
          "btn-dark shadow-custom": !darkMode,
        })}
      >
        <a href="#projects-section">View Work</a>
      </button>
      <button
        className={clsx(
          "btn header-cta--right border-[1px] border-neutral-300",
          {
            "btn-dark": darkMode,
            "btn-light shadow-custom": !darkMode,
          }
        )}
      >
        <a href="#contact-section">Contact</a>
      </button>
    </div>
  );
}
