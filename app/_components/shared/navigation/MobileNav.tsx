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
              {blog ? (
                <>
                  {/* latest link */}
                  <Link
                    className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                    onClick={() => toggleMobileNav()}
                    href="/blog"
                    aria-label="latest"
                  >
                    Latest
                  </Link>
                </>
              ) : (
                <>
                  {/* about section link */}
                  <a
                    className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                    onClick={() => toggleMobileNav()}
                    href="#about-section"
                    aria-label="about"
                  >
                    About
                  </a>
                </>
              )}
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
                <>
                  {/* posts link */}
                  <Link
                    className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                    onClick={() => toggleMobileNav()}
                    href="/blog/posts"
                    aria-label="posts"
                  >
                    Posts
                  </Link>
                </>
              ) : (
                <>
                  {/* work link */}
                  <a
                    className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                    onClick={() => toggleMobileNav()}
                    href="#projects-section-heading"
                    aria-label="work"
                  >
                    Work
                  </a>
                </>
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
                <>
                  {/* resource link */}
                  <Link
                    className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                    onClick={() => toggleMobileNav()}
                    href="/blog/resources"
                    aria-label="resources"
                  >
                    Resources
                  </Link>
                </>
              ) : (
                <>
                  {/* blog link */}
                  <Link
                    className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                    href="/blog"
                    aria-label="blog"
                  >
                    Blog
                  </Link>
                </>
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
            <li
              className={clsx("flex items-center h-[79px]", {
                "h-[65px]": blog,
              })}
            >
              {blog ? (
                <>
                  {/* portfolio link */}
                  <Link
                    className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                    onClick={() => toggleMobileNav()}
                    href="/"
                    aria-label="portfolio"
                  >
                    Portfolio
                  </Link>
                </>
              ) : (
                <>
                  {/* contact link */}
                  <a
                    className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                    onClick={() => toggleMobileNav()}
                    href="#contact-section"
                    aria-label="contact"
                  >
                    Contact
                  </a>
                </>
              )}
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
