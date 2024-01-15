import ViewPortfolio from "./ViewPortfolioBtn";
import Socials from "../../shared/socials/Socials";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center bg-neutral-500 pb-9 pt-10 dark:bg-neutral-200">
      <ViewPortfolio />

      <small className="mb-6 mt-3 pl-[7px] font-sans text-[0.725rem] uppercase text-neutral-300 dark:text-neutral-400 xl:pl-2">
        Brandon Nielsen - 2023
      </small>

      <div className="block">
        <Socials parent="footer" direction="row" />
      </div>
    </footer>
  );
}
