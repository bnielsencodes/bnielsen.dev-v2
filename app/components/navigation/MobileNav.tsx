import Socials from "./Socials";
import ToggleTheme from "./ToggleTheme";
import clsx from "clsx";

export default function MobileNav(props: any) {
  return (
    <div
      className={clsx(
        "fixed top-0 right-0 left-0 z-30 flex flex-col h-screen",
        {
          "bg-neutral-100": props.darkMode,
          "bg-neutral-600": !props.darkMode,
        }
      )}
    >
      {/* top container */}
      <div className="flex items-center justify-start w-full h-full pl-4">
        <ul
          className={clsx(
            "flex flex-col justify-center h-[17rem] text-[4.35rem]",
            {
              "text-neutral-500": props.darkMode,
              "text-neutral-200": !props.darkMode,
            }
          )}
        >
          {/* <li>
            <a
              className={clsx("hover:text-accent-100", {
                "hover:text-accent-200": props.darkMode,
              })}
              href="#header"
              aria-label="home"
            >
              Home
            </a>
          </li> */}
          <li className="h-[87px]">
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
          <li className="h-[87px]">
            <a
              className={clsx("hover:text-accent-100", {
                "hover:text-accent-200": props.darkMode,
              })}
              href="#top-divider"
              aria-label="projects"
            >
              Portfolio
            </a>
          </li>
          <li className="h-[87px]">
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
      </div>
      {/* bottom container */}
      <div className="flex items-center justify-between w-full pr-[19px] pl-4 pb-[18px]">
        <Socials darkMode={props.darkMode} />
        <ToggleTheme
          darkMode={props.darkMode}
          toggleTheme={props.toggleTheme}
        />
      </div>
    </div>
  );
}
