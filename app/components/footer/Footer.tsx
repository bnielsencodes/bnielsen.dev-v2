import ReturnHomeBtn from "./ReturnHomeBtn";
import Location from "./Location";
import clsx from "clsx";

export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <footer
      className={clsx(
        "relative flex items-start justify-between h-48 pt-8 pr-[27px] pl-[21px] md:pr-[34px] md:pl-7",
        {
          "bg-neutral-100": darkMode,
          "bg-neutral-600": !darkMode,
        }
      )}
    >
      <div className="absolute -top-5 flex justify-center w-full">
        <ReturnHomeBtn {...{ darkMode }} />
      </div>

      <div className="flex flex-col justify-between h-full pb-4">
          <Location {...{ darkMode }} />
        <small
          className={clsx("pl-[7px] font-sans text-[0.725rem] uppercase", {
            "text-neutral-400": darkMode,
            "text-neutral-300": !darkMode,
          })}
        >
          Brandon Nielsen - 2023
        </small>
      </div>
    </footer>
  );
}
