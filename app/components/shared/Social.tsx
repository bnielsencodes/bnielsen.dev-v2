import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

export default function Socials({
  darkMode,
  isFooter,
  social,
}: {
  darkMode: boolean;
  isFooter?: boolean;
  social: {
    id: number;
    link: string;
    iconDark: StaticImageData;
    iconLight: StaticImageData;
    iconAccent: StaticImageData;
    alt: string;
  };
}) {
  return (
    <li>
      <a className="group" href={social.link}>
        {darkMode ? (
          <Image
            className={clsx("w-12 h-12 mr-3", {
              "group-hover:hidden": isFooter,
              null: !isFooter,
            })}
            src={social.iconDark}
            alt={social.alt}
            width="0"
            height="0"
            sizes="100vw"
          />
        ) : (
          <Image
            className={clsx("w-12 h-12 mr-3", {
              "group-hover:hidden": isFooter,
              null: !isFooter,
            })}
            src={social.iconLight}
            alt={social.alt}
            width="0"
            height="0"
            sizes="100vw"
          />
        )}
        {isFooter && (
          <>
            {/* image shown on hover */}
            <Image
              className="w-12 h-12 mr-3 hidden group-hover:block"
              src={social.iconDark}
              alt={social.alt}
              width="0"
              height="0"
              sizes="100vw"
            />
          </>
        )}
      </a>
    </li>
  );
}
