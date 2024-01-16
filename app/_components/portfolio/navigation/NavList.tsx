// import { useState } from "react";
import Link from "next/link";
// import clsx from "clsx";

export default function NavList() {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // // toggle categories dropdown
  // function toggleDropdown() {
  //   setDropdownOpen((prevMode) => !prevMode);
  // }

  return (
    <>
      <ul className="flex justify-between">
        <li className="nav-item group">
          <a
            className="nav-link underline-light dark:underline-dark outline-light-theme dark:outline-dark-theme underlineAnimation all-transition rounded-sm text-neutral-200 dark:text-neutral-500 focus:opacity-80 group-hover:text-opacity-80"
            href="#about-section"
            aria-label="about"
          >
            About
          </a>
        </li>

        <li className="nav-item group">
          <a
            className="nav-link underline-light dark:underline-dark outline-light-theme dark:outline-dark-theme underlineAnimation all-transition rounded-sm text-neutral-200 dark:text-neutral-500 focus:opacity-80 group-hover:text-opacity-80"
            href="#projects-section-heading"
            aria-label="work"
          >
            Work
          </a>
        </li>

        <li className="nav-item group">
          <Link
            className="nav-link underline-light dark:underline-dark outline-light-theme dark:outline-dark-theme underlineAnimation all-transition rounded-sm text-neutral-200 dark:text-neutral-500 focus:opacity-80 group-hover:text-opacity-80"
            href="/blog"
            aria-label="blog"
          >
            Blog
          </Link>
        </li>

        <li className="nav-item group">
          <a
            className="nav-link underline-light dark:underline-dark outline-light-theme dark:outline-dark-theme underlineAnimation all-transition rounded-sm text-neutral-200 dark:text-neutral-500 focus:opacity-80 group-hover:text-opacity-80"
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
