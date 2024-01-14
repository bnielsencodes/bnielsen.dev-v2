import Link from "next/link";

export default function NavList({ blog }: { blog?: boolean }) {
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
