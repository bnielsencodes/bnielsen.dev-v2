import Link from "next/link";
import Dropdown from "./Dropdown";

export default function NavList() {
  return (
    <ul className="flex justify-between">
      <li className="nav-item group">
        <Link
          className="nav-link underline-light dark:underline-dark outline-light-theme dark:outline-dark-theme underlineAnimation all-transition rounded-sm text-neutral-200 dark:text-neutral-500 focus:opacity-80 group-hover:text-opacity-80"
          href="/blog/latest"
          aria-label="latest"
        >
          Latest
        </Link>
      </li>

      <li className="nav-item outline-light-theme dark:outline-dark-theme relative flex items-center gap-2 rounded-sm -mr-3 cursor-pointer">
        <Link
          className="nav-link posts-link underline-light dark:underline-dark outline-light-theme dark:outline-dark-theme underlineAnimation all-transition rounded-sm text-neutral-200 dark:text-neutral-500 focus:opacity-80 hover:opacity-80"
          href="/blog/posts"
          aria-label="posts"
        >
          Posts
        </Link>
        <Dropdown />
      </li>

      <li className="nav-item group">
        <Link
          className="nav-link underline-light dark:underline-dark outline-light-theme dark:outline-dark-theme underlineAnimation all-transition rounded-sm text-neutral-200 dark:text-neutral-500 focus:opacity-80 group-hover:text-opacity-80"
          href="/blog/resources"
          aria-label="resources"
        >
          Resources
        </Link>
      </li>

      <li className="nav-item group">
        <Link
          className="nav-link underline-light dark:underline-dark outline-light-theme dark:outline-dark-theme underlineAnimation all-transition rounded-sm text-neutral-200 dark:text-neutral-500 focus:opacity-80 group-hover:text-opacity-80"
          href="/"
          aria-label="Portfolio"
        >
          Portfolio
        </Link>
      </li>
    </ul>
  );
}
