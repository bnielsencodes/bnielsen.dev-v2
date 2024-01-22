import Link from "next/link";

export default function NavList() {
  return (
    <>
      <ul className="flex justify-between">
        <li className="nav-item group">
          <a
            className="nav-link underline-light dark:underline-dark underlineAnimation outline-light-theme dark:outline-dark-theme all-transition rounded-sm text-neutral-200 dark:text-neutral-500 focus:opacity-80 group-hover:text-opacity-80"
            href="#about-section"
            aria-label="about"
          >
            About
          </a>
        </li>

        <li className="nav-item group">
          <a
            className="nav-link underline-light dark:underline-dark underlineAnimation outline-light-theme dark:outline-dark-theme all-transition rounded-sm text-neutral-200 dark:text-neutral-500 focus:opacity-80 group-hover:text-opacity-80"
            href="#projects-section-heading"
            aria-label="work"
          >
            Work
          </a>
        </li>

        <li className="nav-item group">
          <Link
            className="nav-link underline-light dark:underline-dark underlineAnimation outline-light-theme dark:outline-dark-theme all-transition rounded-sm text-neutral-200 dark:text-neutral-500 focus:opacity-80 group-hover:text-opacity-80"
            href="/blog"
            aria-label="blog"
          >
            Blog
          </Link>
        </li>

        <li className="nav-item group">
          <a
            className="nav-link underline-light dark:underline-dark underlineAnimation outline-light-theme dark:outline-dark-theme all-transition rounded-sm text-neutral-200 dark:text-neutral-500 focus:opacity-80 group-hover:text-opacity-80"
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
