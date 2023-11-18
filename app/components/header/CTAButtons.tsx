import clsx from "clsx";

export default function CTAButtons({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="flex gap-4 mt-[15px]">
      <button
        className={clsx("py-[10px] px-5 rounded-lg font-semibold", {
          "bg-gradient-to-b from-neutral-500 to-neutral-600 text-neutral-100":
            darkMode,
          "bg-gradient-to-b from-neutral-200 to-neutral-100 text-neutral-600":
            !darkMode,
        })}
      >
        View Work
      </button>
      <button
        className={clsx("py-[10px] px-5 border rounded-lg font-semibold", {
          "border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 text-neutral-500":
            darkMode,
          "border-neutral-300 bg-gradient-to-b from-neutral-500 to-neutral-600 text-neutral-200":
            !darkMode,
        })}
      >
        Contact
      </button>
    </div>
  );
}
