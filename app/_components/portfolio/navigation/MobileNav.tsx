// import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Socials from "../../shared/socials/Socials";
import ThemeToggle from "../../shared/navigation/ThemeToggle";
// import clsx from "clsx";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function MobileNav({
  showMobileNav,
  toggleMobileNav,
}: {
  showMobileNav: boolean;
  toggleMobileNav: () => void;
}) {
  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // // toggle categories dropdown
  // function toggleDropdown() {
  //   setDropdownOpen((prevMode) => !prevMode);
  // }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-40 flex flex-col h-screen bg-neutral-600 dark:bg-neutral-100"
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
          // className={clsx(
          //   "all-transition flex flex-col justify-between h-[19.5rem] text-neutral-200 dark:text-neutral-500 text-[5rem] md:h-[20.5rem] md:text-[5.5rem]",
          //   {
          //     "h-[24rem]": dropdownOpen,
          //   }
          // )}
          className="all-transition flex flex-col justify-between h-[19.5rem] text-neutral-200 dark:text-neutral-500 text-[5rem] md:h-[20.5rem] md:text-[5.5rem]"
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
            <li className="flex items-center h-[79px]">
              {/* about section link */}
              <a
                className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                onClick={() => toggleMobileNav()}
                href="#about-section"
                aria-label="about"
              >
                About
              </a>
            </li>
          </motion.div>

          <motion.div
            // className={clsx("transition-[margin] flex items-center h-[65px]", {
            //   "mb-[6.3rem]": dropdownOpen,
            // })}
            className="flex items-center h-[65px] transition-[margin]"
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
            <li className="flex items-center h-[79px]">
              {/* work link */}
              <a
                className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                onClick={() => toggleMobileNav()}
                href="#projects-section-heading"
                aria-label="work"
              >
                Work
              </a>
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
            <li className="flex items-center h-[79px]">
              {/* blog link */}
              <Link
                className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                href="/blog"
                aria-label="blog"
              >
                Blog
              </Link>
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
            <li className="flex items-center h-[79px]">
              {/* contact link */}
              <a
                className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
                onClick={() => toggleMobileNav()}
                href="#contact-section"
                aria-label="contact"
              >
                Contact
              </a>
            </li>
          </motion.div>
        </ul>
      </div>

      {/* bottom container */}
      <div className="flex items-center justify-between w-full h-[75px] pr-[29px] pb-4 pl-4 md:pl-5">
        <Socials parent="mobile nav" direction="row" />
        <ThemeToggle />
      </div>
    </motion.div>
  );
}
