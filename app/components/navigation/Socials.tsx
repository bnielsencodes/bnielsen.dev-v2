import Image from "next/image";
import iconLinkedInNeutral200 from "/public/assets/socials/linkedin/linkedin-neutral-200.svg";
import iconLinkedInNeutral400 from "/public/assets/socials/linkedin/linkedin-neutral-400.svg";
import iconLinkedInAccent100 from "/public/assets/socials/linkedin/linkedin-accent-100.svg";
import iconLinkedInAccent200 from "/public/assets/socials/linkedin/linkedin-accent-200.svg";
import iconGitHubNeutral200 from "/public/assets/socials/github/github-neutral-200.svg";
import iconGitHubNeutral400 from "/public/assets/socials/github/github-neutral-400.svg";
import iconGitHubAccent100 from "/public/assets/socials/github/github-accent-100.svg";
import iconGitHubAccent200 from "/public/assets/socials/github/github-accent-200.svg";
import iconEmailNeutral200 from "/public/assets/socials/email/email-neutral-200.svg";
import iconEmailNeutral400 from "/public/assets/socials/email/email-neutral-400.svg";
import iconEmailAccent100 from "/public/assets/socials/email/email-accent-100.svg";
import iconEmailAccent200 from "/public/assets/socials/email/email-accent-200.svg";
import clsx from "clsx";

export default function Socials({ darkMode }: { darkMode: boolean }) {
  return (
    <div>
      <ul className="flex">
        {/* linkedin */}
        <li>
          <a className="group" href="https://linkedin.com/in/bnielsencodes">
            {darkMode ? (
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
                "group-hover:block": darkMode,
              })}
              src={iconLinkedInAccent200}
              alt="LinkedIn icon"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              className={clsx("w-10 h-10 mr-2 hidden", {
                "group-hover:block": !darkMode,
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
            {darkMode ? (
              <Image
                className="w-10 h-10 mr-2 group-hover:hidden"
                src={iconGitHubNeutral400}
                alt="GitHub icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            ) : (
              <Image
                className="w-10 h-10 mr-2 group-hover:hidden"
                src={iconGitHubNeutral200}
                alt="GitHub icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            )}
            {/* images shown on hover */}
            <Image
              className={clsx("w-10 h-10 mr-2 hidden", {
                "group-hover:block": darkMode,
              })}
              src={iconGitHubAccent200}
              alt="GitHub icon"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              className={clsx("w-10 h-10 mr-2 hidden", {
                "group-hover:block": !darkMode,
              })}
              src={iconGitHubAccent100}
              alt="GitHub icon"
              width="0"
              height="0"
              sizes="100vw"
            />
          </a>
        </li>
        {/* email */}
        <li>
          <a className="group" href="mailto:brandon@bnielsen.dev">
            {darkMode ? (
              <Image
                className="w-10 h-10 group-hover:hidden"
                src={iconEmailNeutral400}
                alt="GitHub icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            ) : (
              <Image
                className="w-10 h-10 group-hover:hidden"
                src={iconEmailNeutral200}
                alt="GitHub icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            )}
            {/* images shown on hover */}
            <Image
              className={clsx("w-10 h-10 hidden", {
                "group-hover:block": darkMode,
              })}
              src={iconEmailAccent200}
              alt="GitHub icon"
              width="0"
              height="0"
              sizes="100vw"
            />
            <Image
              className={clsx("w-10 h-10 hidden", {
                "group-hover:block": !darkMode,
              })}
              src={iconEmailAccent100}
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
