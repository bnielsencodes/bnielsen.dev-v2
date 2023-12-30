import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";
import Email from "./Email";
import clsx from "clsx";

export default function Socials({
  darkMode,
  social,
  parent,
}: {
  darkMode: boolean;
  social: {
    id: number;
    name: string;
    link: string;
  };
  parent: string;
}) {
  return (
    <li className="h-auto">
      <a
        className={clsx("focus:outine-2 focus:opacity-90 lg:hover:opacity-90", {
          "focus:outline-accent-200": darkMode,
          "focus:outline-accent-100": !darkMode,
        })}
        href={social.link}
      >
        {/* linkedin icon */}
        {social.name === "linkedIn" && (
          <LinkedIn parent={parent} {...{ darkMode }} />
        )}

        {/* github icon */}
        {social.name === "github" && (
          <GitHub parent={parent} {...{ darkMode }} />
        )}

        {/* email icon */}
        {social.name === "email" && <Email parent={parent} {...{ darkMode }} />}
      </a>
    </li>
  );
}
