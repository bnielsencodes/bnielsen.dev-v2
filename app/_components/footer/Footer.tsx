import ReturnHomeBtn from "./ReturnHomeBtn";
import Location from "./Location";
import ResumeBtn from "./ResumeBtn";
import Socials from "../socials/Socials";

export default function Footer() {
  return (
    <footer className="relative flex items-start justify-between h-40 pt-8 bg-neutral-600 dark:bg-neutral-100 md:pr-[22px] md:pl-4 xl:pl-[17px]">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <ReturnHomeBtn />
      </div>

      <div className="flex flex-col items-center justify-between h-full pb-4 mx-auto md:items-start md:mx-0">
        <div className="flex flex-col items-center justify-between gap-3 md:items-start">
          <Location />
          <ResumeBtn />
        </div>

        <small className="pl-[7px] text-neutral-300 font-sans text-[0.725rem] uppercase dark:text-neutral-400 xl:pl-2">
          Brandon Nielsen - 2023
        </small>
      </div>

      <div className="hidden md:block">
        <Socials parent="footer" direction="row" />
      </div>
    </footer>
  );
}
