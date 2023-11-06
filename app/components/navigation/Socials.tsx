import Image from "next/image";
import iconLinkedInNeutral200 from "/public/assets/socials/linkedin/linkedin-neutral-200.svg";
import iconLinkedInNeutral400 from "/public/assets/socials/linkedin/linkedin-neutral-400.svg";
import iconLinkedInAccent100 from "/public/assets/socials/linkedin/linkedin-accent-100.svg";
import iconLinkedInAccent200 from "/public/assets/socials/linkedin/linkedin-accent-200.svg";
import iconGitHubNeutral200 from "/public/assets/socials/github/github-neutral-200.svg";
import iconGitHubNeutral400 from "/public/assets/socials/github/github-neutral-400.svg";
import iconGitHubAccent100 from "/public/assets/socials/github/github-accent-100.svg";
import iconGitHubAccent200 from "/public/assets/socials/github/github-accent-200.svg";
import clsx from "clsx";

export default function Socials(props: any) {
  return (
    <div>
      <ul className="flex">
        {/* linkedin */}
        <li>
          <a className="group" href="https://linkedin.com/in/bnielsencodes">
            {props.darkMode ? (
              <Image
                className="w-10 h-10 mr-2 group-hover:hidden"
                src={iconLinkedInNeutral400}
                alt="LinkedIn icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            ) : (
              <Image
                className="w-10 h-10 mr-2 group-hover:hidden"
                src={iconLinkedInNeutral200}
                alt="LinkedIn icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            )}
            {/* images shown on hover */}
            <Image
              className={clsx("w-10 h-10 mr-2 hidden", {
                "group-hover:block": props.darkMode,
              })}
              src={iconLinkedInAccent200}
              alt="LinkedIn icon"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              className={clsx("w-10 h-10 mr-2 hidden", {
                "group-hover:block": !props.darkMode,
              })}
              src={iconLinkedInAccent100}
              alt="LinkedIn icon"
              width="0"
              height="0"
              sizes="100vw"
            />
          </a>
        </li>
        {/* github */}
        <li>
          <a className="group" href="https://github.com/bnielsencodes">
            {props.darkMode ? (
              <Image
                className="w-10 h-10 group-hover:hidden"
                src={iconGitHubNeutral400}
                alt="GitHub icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            ) : (
              <Image
                className="w-10 h-10 group-hover:hidden"
                src={iconGitHubNeutral200}
                alt="GitHub icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            )}
            {/* images shown on hover */}
            <Image
              className={clsx("w-10 h-10 hidden", {
                "group-hover:block": props.darkMode,
              })}
              src={iconGitHubAccent200}
              alt="GitHub icon"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              className={clsx("w-10 h-10 hidden", {
                "group-hover:block": !props.darkMode,
              })}
              src={iconGitHubAccent100}
              alt="GitHub icon"
              width="0"
              height="0"
              sizes="100vw"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
