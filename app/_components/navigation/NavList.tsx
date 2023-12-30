import clsx from "clsx";

export default function NavList({ darkMode }: { darkMode: boolean }) {
  return (
    <>
      <ul className="lg:flex lg:justify-between">
        <li className="nav-item">
          <a
            className={clsx(
              "nav-link underlineAnimation rounded-sm focus:opacity-80 lg:hover:opacity-80",
              {
                "underline-dark outline-dark-theme text-neutral-500": darkMode,
                "underline-light outline-light-theme text-neutral-200":
                  !darkMode,
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
              "nav-link underlineAnimation rounded-sm focus:opacity-80 lg:hover:opacity-80",
              {
                "underline-dark outline-dark-theme text-neutral-500": darkMode,
                "underline-light outline-light-theme text-neutral-200":
                  !darkMode,
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
              "nav-link underlineAnimation rounded-sm focus:opacity-80 lg:hover:opacity-80",
              {
                "underline-dark outline-dark-theme text-neutral-500": darkMode,
                "underline-light outline-light-theme text-neutral-200":
                  !darkMode,
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
