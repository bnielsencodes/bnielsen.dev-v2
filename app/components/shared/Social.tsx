import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

export default function Socials({
  darkMode,
  isFooter,
  social,
}: {
  darkMode: boolean;
  isFooter: boolean;
  social: {
    id: number;
    name: string;
    link: string;
    iconDark: StaticImageData;
    iconLight: StaticImageData;
    iconAccent: StaticImageData;
    alt: string;
  };
}) {
  return (
    <li
      className={clsx("w-12 h-12", {
        "mr-3": social.name === "linkedIn" || social.name === "github",
        "mr-0": social.name === "email",
      })}
    >
      <button className="accent-outline" type="button">
        <a className="group" href={social.link}>
          {darkMode ? (
            <Image
              className={clsx("w-12 h-12", {
                "group-hover:hidden": isFooter,
              })}
              src={social.iconLight}
              alt={social.alt}
              width="0"
              height="0"
              sizes="100vw"
            />
          ) : (
            <Image
              className={clsx("w-12 h-12", {
                "group-hover:hidden": isFooter,
              })}
              src={social.iconDark}
              alt={social.alt}
              width="0"
              height="0"
              sizes="100vw"
            />
          )}
          {/* if footer is parent, show image w/ accent color on hover */}
          {isFooter && (
            <>
              <Image
                className="w-12 h-12 hidden group-hover:block"
                src={social.iconAccent}
                alt={social.alt}
                width="0"
                height="0"
                sizes="100vw"
              />
            </>
          )}
        </a>
      </button>
    </li>
  );
}
