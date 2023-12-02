import { motion } from "framer-motion";
import Socials from "@/app/components/socials/Socials";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function MobileNav({
  darkMode,
  toggleTheme,
  showMobileNav,
  toggleMobileNav,
}: {
  darkMode: boolean;
  toggleTheme: () => void;
  showMobileNav: boolean;
  toggleMobileNav: () => void;
}) {
  return (
    <motion.div
      className={clsx(
        "fixed top-0 right-0 left-0 z-40 flex flex-col h-screen",
        {
          "bg-neutral-100": darkMode,
          "bg-neutral-600": !darkMode,
        }
      )}
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
      <div className="flex items-center justify-start w-full h-full pl-4">
        <ul
          className={clsx(
            "flex flex-col justify-between h-[17rem] pb-[25px] text-[4.35rem] md:h-[19rem] md:text-[5.5rem]",
            {
              "text-neutral-500": darkMode,
              "text-neutral-200": !darkMode,
            }
          )}
        >
          <motion.div
            className="flex items-center h-[83px]"
            animate={showMobileNav ? "open" : "closed"}
            variants={variants}
            initial={{ opacity: 0, translateX: "-5rem" }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{
              duration: 0.35,
              delay: 0.15,
              ease: [0.21, 1.11, 0.81, 0.99],
            }}
          >
            {/* about link */}
            <li className="flex items-center h-[83px]">
              <a
                className={clsx("font-extrabold hover:text-accent", {
                  "hover:text-accent": darkMode,
                })}
                onClick={() => toggleMobileNav()}
                href="#about-section"
                aria-label="about"
              >
                About
              </a>
            </li>
          </motion.div>

          <motion.div
            className="flex items-center h-[83px]"
            animate={showMobileNav ? "open" : "closed"}
            variants={variants}
            initial={{ opacity: 0, translateX: "-5rem" }}
            whileInView={{ opacity: 1, translateX: "0" }}
            transition={{
              duration: 0.35,
              delay: 0.25,
              ease: [0.21, 1.11, 0.81, 0.99],
            }}
          >
            {/* portfolio link */}
            <li className="flex items-center h-[83px]">
              <a
                className={clsx("font-extrabold hover:text-accent", {
                  "hover:text-accent": darkMode,
                })}
                onClick={() => toggleMobileNav()}
                href="#projects-section"
                aria-label="projects"
              >
                Work
              </a>
            </li>
          </motion.div>

          <motion.div
            className="flex items-center h-[83px]"
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
            <li className="flex items-center h-[83px]">
              <a
                className={clsx("font-extrabold hover:text-accent", {
                  "hover:text-accent": darkMode,
                })}
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
      <div className="flex items-center justify-between w-full h-[75px] pr-[11px] pl-4 pb-4">
        <Socials parent="mobile nav" direction="row" {...{ darkMode }} />
        <ThemeToggle {...{ darkMode, toggleTheme }} />
      </div>
    </motion.div>
  );
}
