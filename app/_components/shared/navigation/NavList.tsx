import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function NavList({ blog }: { blog?: boolean }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // toggle categories dropdown
  function toggleDropdown() {
    setDropdownOpen((prevMode) => !prevMode);
  }

  return (
    <>
      <ul className="flex justify-between">
        <li className="nav-item group">
          {blog ? (
            <Link
              className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
              href="/blog"
              aria-label="latest"
            >
              Latest
            </Link>
          ) : (
            <a
              className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
              href="#about-section"
              aria-label="about"
            >
              About
            </a>
          )}
        </li>

        <li className="nav-item group">
          {blog ? (

            //   <ul
            //     className={clsx(
            //       "all-transition absolute right-0 flex flex-wrap gap-x-4 gap-y-2 w-[150px] p-4 border-2 border-neutral-300 rounded-lg bg-neutral-600 text-[17px] font-medium dark:bg-neutral-300",
            //       {
            //         "top-[32px] block": dropdownOpen,
            //         "top-0 hidden": !dropdownOpen,
            //       }
            //     )}
            //   >
            //     <li>React</li>
            //     <li>Next.js</li>
            //     <li>JavaScript</li>
            //     <li>CSS</li>
            //     <li>Career</li>
            //   </ul>
            // </div>
            <Link
              className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
              href="/blog/posts"
              aria-label="posts"
            >
              Posts
            </Link>
          ) : (
            <a
              className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
              href="#projects-section-heading"
              aria-label="work"
            >
              Work
            </a>
          )}
        </li>

        <li className="nav-item group">
          {blog ? (
            <Link
              className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
              href="/blog/resources"
              aria-label="resources"
            >
              Resources
            </Link>
          ) : (
            <Link
              className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
              href="/blog"
              aria-label="blog"
            >
              Blog
            </Link>
          )}
        </li>

        <li className="nav-item group">
          {blog ? (
            <Link
              className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
              href="/"
              aria-label="Portfolio"
            >
              Portfolio
            </Link>
          ) : (
            <a
              className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
              href="#contact-section"
              aria-label="contact"
            >
              Contact
            </a>
          )}
        </li>
      </ul>
    </>
  );
}
