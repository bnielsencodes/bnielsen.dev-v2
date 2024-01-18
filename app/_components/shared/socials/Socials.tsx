import { socials } from "@/app/_data/portfolio/portfolioData";
import Social from "./Social";
import clsx from "clsx";

export default function Socials({
  parent,
  direction,
}: {
  parent: string;
  direction: string;
}) {
  const socialElements = socials.map((social) => {
    return <Social key={social.id} parent={parent} {...{ social }} />;
  });

  return (
    <ul
      className={clsx("flex gap-4", {
        "flex-col": direction === "column",
        "flex-row": direction === "row",
      })}
    >
      {socialElements}
    </ul>
  );
}
