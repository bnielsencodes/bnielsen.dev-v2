import clsx from "clsx";

export default function CTAButtons({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="flex gap-4 mt-[21px]">
      <button
        className={clsx("py-[10px] px-5 rounded-lg text-lg font-bold", {
          "bg-gradient-to-b from-neutral-500 to-neutral-600 text-neutral-100":
            darkMode,
          "shadow-custom bg-gradient-to-b from-neutral-200 to-neutral-100 text-neutral-600":
            !darkMode,
        })}
      >
        <a href="#projects-section">View Work</a>
      </button>
      <button
        className={clsx("py-[10px] px-5 border rounded-lg text-lg font-bold", {
          "border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 text-neutral-500":
            darkMode,
          "shadow-custom border-neutral-300 bg-gradient-to-b from-neutral-500 to-neutral-600 text-neutral-200":
            !darkMode,
        })}
      >
        <a href="#contact-section">Contact</a>
      </button>
    </div>
  );
}
