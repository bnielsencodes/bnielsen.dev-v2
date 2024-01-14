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
          <Link
            className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
            href="/blog"
            aria-label="latest"
          >
            Latest
          </Link>
        </li>

        <li className="nav-item group">
          {/* // <div
          //   className="outline-light-theme relative flex items-center gap-1 rounded-sm cursor-pointer group dark:outline-dark-theme"
          //   onClick={() => toggleDropdown()}
          // >
          //   <div className="nav-link underline-light underlineAnimation all-transition my-0 text-neutral-200 group-focus:opacity-80 group-hover:text-opacity-80 dark:text-neutral-500">
          //     Posts
          //   </div>
          //   <svg
          //     className={clsx(
          //       "all-transition w-5 h-5 mt-1 group-hover:opacity-80",
          //       {
          //         "rotate-180": !dropdownOpen,
          //       }
          //     )}
          //     xmlns="http://www.w3.org/2000/svg"
          //     x="0px"
          //     y="0px"
          //     width="100"
          //     height="100"
          //     viewBox="0 0 64 64"
          //   >
          //     <path
          //       className="fill-neutral-200 dark:fill-neutral-500"
          //       d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 22.878906 26.308594 C 22.366906 26.302344 21.852031 26.491953 21.457031 26.876953 C 20.666031 27.648953 20.652828 28.914078 21.423828 29.705078 L 30.576172 39.087891 C 30.953172 39.473891 31.470766 39.691406 32.009766 39.691406 C 32.548766 39.691406 33.062453 39.473891 33.439453 39.087891 L 42.576172 29.724609 C 43.348172 28.933609 43.333969 27.665531 42.542969 26.894531 C 41.753969 26.124531 40.486844 26.138687 39.714844 26.929688 L 32.009766 34.826172 L 24.285156 26.912109 C 23.900156 26.517109 23.390906 26.314844 22.878906 26.308594 z"
          //     ></path>
          //   </svg>

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
          // </div> */}
          <Link
            className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
            href="/blog/posts"
            aria-label="posts"
          >
            Posts
          </Link>
        </li>

        <li className="nav-item group">
          <Link
            className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
            href="/blog/resources"
            aria-label="resources"
          >
            Resources
          </Link>
        </li>

        <li className="nav-item group">
          <Link
            className="nav-link underline-light outline-light-theme underlineAnimation all-transition rounded-sm text-neutral-200 focus:opacity-80 group-hover:text-opacity-80 dark:underline-dark dark:outline-dark-theme dark:text-neutral-500"
            href="/"
            aria-label="Portfolio"
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </>
  );
}
