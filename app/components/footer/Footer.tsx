import ReturnHomeBtn from "./ReturnHomeBtn";
import Socials from "@/app/components/shared/Socials";
import clsx from "clsx";

const isFooter = true;

export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <>
      <section
        className={clsx(
          "relative flex flex-col items-center justify-center h-40 pt-[25px]",
          { "bg-neutral-100": darkMode, "bg-neutral-600": !darkMode }
        )}
      >
        <ReturnHomeBtn {...{ darkMode }} />
        <Socials {...{ darkMode, isFooter }} />
        <p
          className={clsx("mt-[18px] font-sans text-[0.725rem] uppercase", {
            "text-neutral-400": darkMode,
            "text-neutral-300": !darkMode,
          })}
        >
          Brandon Nielsen - 2023
        </p>
      </section>
    </>
  );
}
