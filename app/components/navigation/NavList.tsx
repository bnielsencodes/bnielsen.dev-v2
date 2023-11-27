import clsx from "clsx";

export default function NavList({ darkMode }: { darkMode: boolean }) {
  return (
    <>
      <ul className="lg:flex lg:justify-between">
        <li className="nav-item">
          <a
            className={clsx(
              "nav-link underlineAnimation focus:outline-2 focus:opacity-70",
              {
                "text-neutral-500 focus:outline-accent-200": darkMode,
                "text-neutral-200 focus:outline-accent-100": !darkMode,
              }
            )}
            href="#about-section"
            aria-label="about"
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            className={clsx(
              "nav-link underlineAnimation focus:outline-2 focus:opacity-70",
              {
                "text-neutral-500 focus:outline-accent-200": darkMode,
                "text-neutral-200 focus:outline-accent-100": !darkMode,
              }
            )}
            href="#projects-section"
            aria-label="work"
          >
            Work
          </a>
        </li>
        <li className="nav-item">
          <a
            className={clsx(
              "nav-link underlineAnimation focus:outline-2 focus:opacity-70",
              {
                "text-neutral-500 focus:outline-accent-200": darkMode,
                "text-neutral-200 focus:outline-accent-100": !darkMode,
              }
            )}
            href="#contact-section"
            aria-label="contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}
