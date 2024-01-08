import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Socials from "@/app/_components/shared/socials/Socials";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function MobileNav({
  showMobileNav,
  toggleMobileNav,
  blog,
}: {
  showMobileNav: boolean;
  toggleMobileNav: () => void;
  blog?: boolean;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // toggle categories dropdown
  function toggleDropdown() {
    setDropdownOpen((prevMode) => !prevMode);
  }

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-40 flex flex-col h-screen bg-neutral-600 dark:bg-neutral-100"
      animate={showMobileNav ? "open" : "closed"}
      variants={variants}
      initial={{ opacity: 0, translateX: "-20rem" }}
      whileInView={{ opacity: 1, translateX: "0" }}
      transition={{
        duration: 0.35,
        ease: [0.21, 1.11, 0.81, 0.99],
      }}
    >
      {/* top container */}
      <div className="flex items-center justify-start w-full h-full pl-4 md:pl-5">
        <ul
          className={clsx(
            "all-transition flex flex-col justify-between text-neutral-200 dark:text-neutral-500 md:h-[20.5rem] md:text-[5.5rem]",
            {
              "h-[24rem]": dropdownOpen,
              "h-[19.5rem] text-[5rem]": !blog,
              "h-[18rem] text-[4.25rem]": blog,
            }
          )}
        >
          <motion.div
            className="flex items-center h-[65px]"
            animate={showMobileNav ? "open" : "closed"}
            variants={variants}
            initial={{ opacity: 0, translateX: "-5rem" }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{
              duration: 0.35,
              delay: 0.0875,
              ease: [0.21, 1.11, 0.81, 0.99],
            }}
          >
            {/* latest/about link */}
            <li
              className={clsx("flex items-center h-[79px]", {
                "h-[65px]": blog,
              })}
            >
              <a
                className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                onClick={() => toggleMobileNav()}
                href={blog ? "blog/latest" : "#about-section"}
                aria-label={blog ? "latest" : "about"}
              >
                {blog ? "Latest" : "About"}
              </a>
            </li>
          </motion.div>

          <motion.div
            className={clsx("transition-[margin] flex items-center h-[65px]", {
              "mb-[6.3rem]": dropdownOpen,
            })}
            animate={showMobileNav ? "open" : "closed"}
            variants={variants}
            initial={{ opacity: 0, translateX: "-5rem" }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{
              duration: 0.35,
              delay: 0.175,
              ease: [0.21, 1.11, 0.81, 0.99],
            }}
          >
            {/* posts/work link */}
            <li
              className={clsx("flex items-center h-[79px]", {
                "h-[65px]": blog,
              })}
            >
              {blog ? (
                <div
                  className="outline-light-theme relative flex items-center gap-[6px] rounded-sm cursor-pointer group dark:outline-dark-theme"
                  onClick={() => toggleDropdown()}
                >
                  <div className="nav-link underline-light underlineAnimation all-transition my-0 text-neutral-200 font-extrabold group-focus:opacity-80 group-hover:text-opacity-80 dark:text-neutral-500">
                    Posts
                  </div>
                  <svg
                    className={clsx(
                      "all-transition w-10 h-10 mt-1 group-hover:opacity-80",
                      {
                        "-rotate-180": !dropdownOpen,
                      }
                    )}
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
                      "absolute top-[98px] left-[3px] flex flex-wrap gap-x-8 gap-y-4 w-[343px] text-2xl font-semibold transition-opacity duration-200",
                      {
                        "opacity-100": dropdownOpen,
                        "opacity-0": !dropdownOpen,
                      }
                    )}
                  >
                    <li>React</li>
                    <li>Next.js</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>Career</li>
                  </ul>
                </div>
              ) : (
                <a
                  className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                  onClick={() => toggleMobileNav()}
                  href="#projects-section-heading"
                  aria-label="work"
                >
                  Work
                </a>
              )}
            </li>
          </motion.div>

          <motion.div
            className="flex items-center h-[65px]"
            animate={showMobileNav ? "open" : "closed"}
            variants={variants}
            initial={{ opacity: 0, translateX: "-5rem" }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{
              duration: 0.35,
              delay: 0.2625,
              ease: [0.21, 1.11, 0.81, 0.99],
            }}
          >
            {/* resources/blog link */}
            <li
              className={clsx("flex items-center h-[79px]", {
                "h-[65px]": blog,
              })}
            >
              {blog ? (
                <a
                  className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                  onClick={() => toggleMobileNav()}
                  href="/blog/resources"
                  aria-label="resources"
                >
                  Resources
                </a>
              ) : (
                <Link
                  className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                  href="/blog"
                  aria-label="blog"
                >
                  Blog
                </Link>
              )}
            </li>
          </motion.div>

          <motion.div
            className="flex items-center h-[65px]"
            animate={showMobileNav ? "open" : "closed"}
            variants={variants}
            initial={{ opacity: 0, translateX: "-5rem" }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{
              duration: 0.35,
              delay: 0.35,
              ease: [0.21, 1.11, 0.81, 0.99],
            }}
          >
            {/* contact link */}
            <li
              className={clsx("flex items-center h-[79px]", {
                "h-[65px]": blog,
              })}
            >
              <a
                className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                onClick={() => toggleMobileNav()}
                href={blog ? "/" : "#contact-section"}
                aria-label={blog ? "portfolio" : "contact"}
              >
                {blog ? "Portfolio" : "Contact"}
              </a>
            </li>
          </motion.div>
        </ul>
      </div>

      {/* bottom container */}
      <div className="flex items-center justify-between w-full h-[75px] pl-4 pr-[29px] pb-4 md:pl-5">
        <Socials parent="mobile nav" direction="row" />
        <ThemeToggle />
      </div>
    </motion.div>
  );
}
