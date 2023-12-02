import clsx from "clsx";
import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";
import Email from "./Email";

export default function Socials({
  darkMode,
  social,
}: {
  darkMode: boolean;
  social: {
    id: number;
    name: string;
    link: string;
  };
}) {
  return (
    <li
      className={clsx("h-auto focus:opacity-80", {
        "outline-dark-theme": darkMode,
        "outline-light-theme": !darkMode,
      })}
    >
      <a
        href={social.link}
        aria-label={`Link to Brandon's ${social.name}`}
        title={`Link to Brandon's ${social.name}`}
      >
        {/* linkedin icon */}
        {social.name === "linkedIn" && <LinkedIn {...{ darkMode }} />}

        {/* github icon */}
        {social.name === "github" && <GitHub {...{ darkMode }} />}

        {/* email icon */}
        {social.name === "email" && <Email {...{ darkMode }} />}
      </a>
    </li>
  );
}
