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
    <li
      className="h-auto hover:opacity-90 focus:opacity-80"
    >
      <a
        href={social.link}
        aria-label={`Link to Brandon's ${social.name}`}
        title={`Link to Brandon's ${social.name}`}
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
