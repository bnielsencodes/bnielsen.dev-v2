import ViewPortfolio from "./ViewPortfolioBtn";
import Socials from "../.././shared/socials/Socials";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center pt-10 pb-9 bg-neutral-500 dark:bg-neutral-200">
      <ViewPortfolio />

      <small className="pl-[7px] mt-3 mb-6 text-neutral-300 font-sans text-[0.725rem] uppercase dark:text-neutral-400 xl:pl-2">
        Brandon Nielsen - 2023
      </small>

      <div className="block">
        <Socials parent="footer" direction="row" />
      </div>
    </footer>
  );
}
