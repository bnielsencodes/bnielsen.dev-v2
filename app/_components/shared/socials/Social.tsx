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
  return (
    <li className="h-auto">
      <a
        className="opacity-transition focus:outine-2 focus:outline-accent-100 dark:focus:outline-accent-200 focus:opacity-90 lg:hover:opacity-90 dark:lg:hover:opacity-80"
        href={social.link}
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
