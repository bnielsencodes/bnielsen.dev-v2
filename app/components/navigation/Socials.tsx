import Image from "next/image";
import iconLinkedInNeutral200 from "/public/assets/socials/linkedin/mobile/linkedin-neutral-200.svg";
import iconLinkedInNeutral400 from "/public/assets/socials/linkedin/mobile/linkedin-neutral-400.svg";
import iconGitHubNeutral200 from "/public/assets/socials/github/mobile/github-neutral-200.svg";
import iconGitHubNeutral400 from "/public/assets/socials/github/mobile/github-neutral-400.svg";
import iconEmailNeutral200 from "/public/assets/socials/email/mobile/email-neutral-200.svg";
import iconEmailNeutral400 from "/public/assets/socials/email/mobile/email-neutral-400.svg";

export default function Socials({ darkMode }: { darkMode: boolean }) {
  return (
    <div>
      <ul className="flex">
        {/* linkedin */}
        <li>
          <a className="group" href="https://linkedin.com/in/bnielsencodes">
            {darkMode ? (
              <Image
                src={iconLinkedInNeutral400}
                alt="LinkedIn icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            ) : (
              <Image
                src={iconLinkedInNeutral200}
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
                src={iconGitHubNeutral400}
                alt="GitHub icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            ) : (
              <Image
                src={iconGitHubNeutral200}
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
                src={iconEmailNeutral400}
                alt="GitHub icon"
                width="0"
                height="0"
                sizes="100vw"
              />
            ) : (
              <Image
                src={iconEmailNeutral200}
                alt="GitHub icon"
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
