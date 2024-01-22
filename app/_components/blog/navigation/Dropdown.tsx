import { useState } from "react";
import clsx from "clsx";

export default function Dropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // toggle categories dropdown
  function toggleDropdown() {
    setDropdownOpen((prevMode) => !prevMode);
  }

  return (
    <>
      {/* dropdown toggle icon */}
      <svg
        className={clsx("w-8 h-6 mt-[3px] hover:opacity-80", {
          "rotate-180 pl-2": !dropdownOpen,
          "pr-2 pl-0": dropdownOpen,
        })}
        onClick={() => toggleDropdown()}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 64 64"
      >
        <path
          className="fill-neutral-200 dark:fill-neutral-500"
          d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 22.878906 26.308594 C 22.366906 26.302344 21.852031 26.491953 21.457031 26.876953 C 20.666031 27.648953 20.652828 28.914078 21.423828 29.705078 L 30.576172 39.087891 C 30.953172 39.473891 31.470766 39.691406 32.009766 39.691406 C 32.548766 39.691406 33.062453 39.473891 33.439453 39.087891 L 42.576172 29.724609 C 43.348172 28.933609 43.333969 27.665531 42.542969 26.894531 C 41.753969 26.124531 40.486844 26.138687 39.714844 26.929688 L 32.009766 34.826172 L 24.285156 26.912109 C 23.900156 26.517109 23.390906 26.314844 22.878906 26.308594 z"
        ></path>
      </svg>

      {/* caret svg */}
      <svg
        className={clsx("absolute left-[3.775rem] w-6 h-6", {
          "top-[27px] block": dropdownOpen,
          "top-0 hidden": !dropdownOpen,
        })}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0,0,256,256"
      >
        <g
          fill="#ededed"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
        >
          <g transform="translate(256.00211,255.99644) rotate(180) scale(3.55556,3.55556)">
            <path d="M57.469,17.07c1.545,2.488 1.693,5.541 0.396,8.167l-14.323,28.98c-1.428,2.89 -4.317,4.685 -7.541,4.685c-3.224,0 -6.113,-1.795 -7.541,-4.686l-14.324,-28.979c-1.298,-2.626 -1.149,-5.679 0.396,-8.167c1.546,-2.487 4.217,-3.973 7.146,-3.973h28.646c2.928,0.001 5.599,1.486 7.145,3.973z"></path>
          </g>
        </g>
      </svg>

      {/* dropdown list */}
      <ul
        className={clsx(
          "all-transition absolute left-9 p-6 rounded-lg bg-neutral-200 dark:bg-neutral-500 text-neutral-500 dark:text-neutral-200 text-[17px] font-semibold",
          {
            "top-[43px] block": dropdownOpen,
            "top-0 hidden": !dropdownOpen,
          }
        )}
      >
        <li className="flex gap-12 pb-6">
          <ul className="flex flex-col gap-6">
            <li>
              <a className="hover:opacity-80" href="/blog/posts/career">
                Career
              </a>
            </li>
            <li>
              <a className="hover:opacity-80" href="/blog/posts/css">
                CSS
              </a>
            </li>
            <li>
              <a className="hover:opacity-80" href="/blog/posts/javascript">
                JavaScript
              </a>
            </li>
          </ul>
          <ul className="flex flex-col gap-6">
            <li>
              <a className="hover:opacity-80" href="/blog/posts/react">
                React
              </a>
            </li>
            <li>
              <a className="hover:opacity-80" href="/blog/posts/tailwind">
                Tailwind
              </a>
            </li>
            <li>
              <a className="hover:opacity-80" href="/blog/posts/nextjs">
                Next.js
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="hover:opacity-80" href="/blog/posts/web-development">
            Web Development
          </a>
        </li>
      </ul>
    </>
  );
}
