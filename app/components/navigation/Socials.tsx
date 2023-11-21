import Image from "next/image";
import iconLinkedInDark from "/public/assets/socials/linkedin/mobile/linkedin-dark.svg";
import iconLinkedInLight from "/public/assets/socials/linkedin/mobile/linkedin-light.svg";
import iconGitHubDark from "/public/assets/socials/github/mobile/github-dark.svg";
import iconGitHubLight from "/public/assets/socials/github/mobile/github-light.svg";
import iconEmailDark from "/public/assets/socials/email/mobile/email-dark.svg";
import iconEmailLight from "/public/assets/socials/email/mobile/email-light.svg";

export default function Socials({ darkMode }: { darkMode: boolean }) {
  return (
    <div>
      <ul className="flex">
        {/* linkedin */}
        <li>
          <a className="group" href="https://linkedin.com/in/bnielsencodes">
            {darkMode ? (
              <Image
                className="w-10 h-10 mr-2"
                src={iconLinkedInLight}
                alt="LinkedIn icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            ) : (
              <Image
                className="w-10 h-10 mr-2"
                src={iconLinkedInDark}
                alt="LinkedIn icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            )}
          </a>
        </li>

        {/* github */}
        <li>
          <a className="group" href="https://github.com/bnielsencodes">
            {darkMode ? (
              <Image
                className="w-10 h-10 mr-2"
                src={iconGitHubLight}
                alt="GitHub icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            ) : (
              <Image
                className="w-10 h-10 mr-2"
                src={iconGitHubDark}
                alt="GitHub icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            )}
          </a>
        </li>

        {/* email */}
        <li>
          <a className="group" href="mailto:brandon@bnielsen.dev">
            {darkMode ? (
              <Image
                className="w-10 h-10"
                src={iconEmailLight}
                alt="email icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            ) : (
              <Image
                className="w-10 h-10"
                src={iconEmailDark}
                alt="email icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            )}
          </a>
        </li>
      </ul>
    </div>
  );
}
