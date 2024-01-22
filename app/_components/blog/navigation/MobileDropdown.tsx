import clsx from "clsx";

export default function MobileNav({
  dropdownOpen,
  toggleDropdown,
}: {
  dropdownOpen: boolean;
  toggleDropdown: () => void;
}) {
  return (
    <>
      <svg
        className={clsx("w-16 h-12 mt-[12.8px] lg:group-hover:opacity-80", {
          "-rotate-180": !dropdownOpen,
        })}
        onClick={() => toggleDropdown()}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 64 64"
      >
        <path
          className="fill-neutral-200 dark:fill-neutral-500"
          d="M 23.773438 12 C 12.855437 12 12 12.854437 12 23.773438 L 12 40.226562 C 12 51.144563 12.855438 52 23.773438 52 L 40.226562 52 C 51.144563 52 52 51.145563 52 40.226562 L 52 23.773438 C 52 12.854437 51.145563 12 40.226562 12 L 23.773438 12 z M 21.167969 16 L 42.832031 16 C 47.625031 16 48 16.374969 48 21.167969 L 48 42.832031 C 48 47.625031 47.624031 48 42.832031 48 L 21.167969 48 C 16.374969 48 16 47.624031 16 42.832031 L 16 21.167969 C 16 16.374969 16.374969 16 21.167969 16 z M 22.878906 26.308594 C 22.366906 26.302344 21.852031 26.491953 21.457031 26.876953 C 20.666031 27.648953 20.652828 28.914078 21.423828 29.705078 L 30.576172 39.087891 C 30.953172 39.473891 31.470766 39.691406 32.009766 39.691406 C 32.548766 39.691406 33.062453 39.473891 33.439453 39.087891 L 42.576172 29.724609 C 43.348172 28.933609 43.333969 27.665531 42.542969 26.894531 C 41.753969 26.124531 40.486844 26.138687 39.714844 26.929688 L 32.009766 34.826172 L 24.285156 26.912109 C 23.900156 26.517109 23.390906 26.314844 22.878906 26.308594 z"
        ></path>
      </svg>

      <ul
        className={clsx(
          "absolute top-[98px] left-[3px] flex flex-wrap gap-x-8 gap-y-[1.3rem] w-[343px] text-3xl font-semibold transition-opacity duration-200 delay-75",
          {
            "opacity-100": dropdownOpen,
            "opacity-0": !dropdownOpen,
          }
        )}
      >
        <li>
          <a
            className={clsx("block", { hidden: !dropdownOpen })}
            href="/blog/posts/career"
          >
            Career
          </a>
        </li>
        <li>
          <a
            className={clsx("block", { hidden: !dropdownOpen })}
            href="/blog/posts/css"
          >
            CSS
          </a>
        </li>
        <li>
          <a
            className={clsx("block", { hidden: !dropdownOpen })}
            href="/blog/posts/javascript"
          >
            JavaScript
          </a>
        </li>
        <li>
          <a
            className={clsx("block", { hidden: !dropdownOpen })}
            href="/blog/posts/react"
          >
            React
          </a>
        </li>
        <li>
          <a
            className={clsx("block", { hidden: !dropdownOpen })}
            href="/blog/posts/tailwind"
          >
            Tailwind
          </a>
        </li>
        <li>
          <a
            className={clsx("block", { hidden: !dropdownOpen })}
            href="/blog/posts/nextjs"
          >
            Next.js
          </a>
        </li>
        <li>
          <a
            className={clsx("block", { hidden: !dropdownOpen })}
            href="/blog/posts/web-development"
          >
            Web Development
          </a>
        </li>
      </ul>
    </>
  );
}
