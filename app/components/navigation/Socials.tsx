import Image from "next/image";
import iconLinkedInNeutral200 from "/public/assets/socials/linkedin/mobile/linkedin-neutral-200.svg";
import iconLinkedInNeutral400 from "/public/assets/socials/linkedin/mobile/linkedin-neutral-400.svg";
import iconLinkedInAccent from "/public/assets/socials/linkedin/mobile/linkedin-accent.svg";
import iconGitHubNeutral200 from "/public/assets/socials/github/mobile/github-neutral-200.svg";
import iconGitHubNeutral400 from "/public/assets/socials/github/mobile/github-neutral-400.svg";
import iconGitHubAccent from "/public/assets/socials/github/mobile/github-accent.svg";
import iconEmailNeutral200 from "/public/assets/socials/email/mobile/email-neutral-200.svg";
import iconEmailNeutral400 from "/public/assets/socials/email/mobile/email-neutral-400.svg";
import iconEmailAccent from "/public/assets/socials/email/mobile/email-accent.svg";
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
              className="w-10 h-10 mr-2 hidden group-hover:block"
              src={iconLinkedInAccent}
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
              className="w-10 h-10 mr-2 hidden group-hover:block"
              src={iconGitHubAccent}
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
              className="w-10 h-10 hidden group-hover:block"
              src={iconEmailAccent}
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
