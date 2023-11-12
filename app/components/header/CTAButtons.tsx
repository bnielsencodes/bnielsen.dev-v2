import clsx from "clsx";

export default function CTAButtons(props: any) {
  return (
    <div className="flex gap-4 mt-[15px]">
      <button
        className={clsx("py-[10px] px-5 rounded-lg font-semibold", {
          "bg-gradient-to-b from-neutral-500 to-neutral-600 text-neutral-100":
            props.darkMode,
          "bg-gradient-to-b from-neutral-200 to-neutral-100 text-neutral-600":
            !props.darkMode,
        })}
      >
        View Work
      </button>
      <button
        className={clsx("py-[10px] px-5 border rounded-lg font-semibold", {
          "border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 text-neutral-500":
            props.darkMode,
          "border-neutral-300 bg-gradient-to-b from-neutral-500 to-neutral-600 text-neutral-200":
            !props.darkMode,
        })}
      >
        Contact
      </button>
    </div>
  );
}
