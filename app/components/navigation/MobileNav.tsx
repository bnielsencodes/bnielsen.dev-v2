import Socials from "./Socials";
import clsx from "clsx";

export default function MobileNav(props: any) {
  return (
    <div
      className={clsx("absolute top-0 left-0 z-20 flex w-screen h-screen", {
        "bg-neutral-100": props.darkMode,
        "bg-neutral-500": !props.darkMode,
      })}
    >
      {/* left container */}
      <div className="flex flex-col items-start justify-between w-1/2 h-full pt-52 pb-4 pl-4">
        <ul
          className={clsx("flex flex-col justify-between h-60 text-5xl", {
            "text-neutral-500": props.darkMode,
            "text-neutral-100": !props.darkMode,
          })}
        >
          <li>
            <a
              className={clsx("hover:text-accent-100", {
                "hover:text-accent-200": props.darkMode,
              })}
              href="#header"
              aria-label="home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={clsx("hover:text-accent-100", {
                "hover:text-accent-200": props.darkMode,
              })}
              href="#about-section"
              aria-label="about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className={clsx("hover:text-accent-100", {
                "hover:text-accent-200": props.darkMode,
              })}
              href="#top-divider"
              aria-label="projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className={clsx("hover:text-accent-100", {
                "hover:text-accent-200": props.darkMode,
              })}
              href="#bottom-divider"
              aria-label="contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <Socials darkMode={props.darkMode} />
      </div>
    </div>
  );
}
