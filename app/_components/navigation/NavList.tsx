export default function NavList() {
  return (
    <>
      <ul className="flex justify-between">
        <li className="nav-item group">
          <a
            className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
            href="#about-section"
            aria-label="about"
          >
            About
          </a>
        </li>
        <li className="nav-item group">
          <a
            className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
            href="#projects-section"
            aria-label="work"
          >
            Work
          </a>
        </li>
        <li className="nav-item group">
          <a
            className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
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
