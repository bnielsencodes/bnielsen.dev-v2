import { socials } from "@/app/data";
import Social from "./Social";
import clsx from "clsx";

export default function Socials({
  darkMode,
  parent,
  direction,
}: {
  darkMode: boolean;
  parent: string;
  direction: string;
}) {
  const socialElements = socials.map((social) => {
    return <Social key={social.id} parent={parent} {...{ darkMode, social }} />;
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
