import LinkedIn from "./LinkedIn";
import GitHub from "./GitHub";
import Email from "./Email";

export default function Social({
  social,
  parent,
}: {
  social: {
    id: number;
    name: string;
    link: string;
  };
  parent: string;
}) {
  const label = `Link to Brandon's ${social.name}`
  
  return (
    <li className="h-auto">
      <a
        className="opacity-transition outline-light-theme dark:outline-dark-theme lg:hover:opacity-90 dark:lg:hover:opacity-80"
        href={social.link}
        aria-label={label}
      >
        {/* linkedin icon */}
        {social.name === "linkedIn" && <LinkedIn parent={parent} />}

        {/* github icon */}
        {social.name === "github" && <GitHub parent={parent} />}

        {/* email icon */}
        {social.name === "email" && <Email parent={parent} />}
      </a>
    </li>
  );
}
