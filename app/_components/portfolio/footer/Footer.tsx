import ReturnHomeBtn from "./ReturnHomeBtn";
import Location from "./Location";
import ResumeBtn from "./ResumeBtn";
import Socials from "../../shared/socials/Socials";

export default function Footer() {
  return (
    <footer className="relative flex h-40 items-start justify-between bg-neutral-600 pt-8 dark:bg-neutral-100 md:pl-4 md:pr-[22px] xl:pl-[17px]">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <ReturnHomeBtn />
      </div>

      <div className="mx-auto flex h-full flex-col items-center justify-between pb-4 md:mx-0 md:items-start">
        <div className="flex flex-col items-center justify-between gap-3 md:items-start">
          <Location />
          <ResumeBtn />
        </div>

        <small className="pl-[7px] font-sans text-[0.725rem] uppercase text-neutral-300 dark:text-neutral-400 xl:pl-2">
          Brandon Nielsen - 2023
        </small>
      </div>

      <div className="hidden md:block">
        <Socials parent="footer" direction="row" />
      </div>
    </footer>
  );
}
