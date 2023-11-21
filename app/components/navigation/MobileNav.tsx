import { motion } from "framer-motion";
import Socials from "@/app/components/shared/Socials";
import ThemeToggle from "./ThemeToggle";
import clsx from "clsx";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const isFooter = false;

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
      initial={{ opacity: 0, translateX: "-19rem" }}
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
            "flex flex-col justify-center h-[17rem] text-[4.35rem]",
            {
              "text-neutral-500": darkMode,
              "text-neutral-200": !darkMode,
            }
          )}
        >
          {/* about link */}
          <li className="h-[87px]">
            <a
              className={clsx("font-bold hover:text-accent", {
                "hover:text-accent": darkMode,
              })}
              onClick={() => toggleMobileNav()}
              href="#about-section"
              aria-label="about"
            >
              About
            </a>
          </li>

          {/* portfolio link */}
          <li className="h-[87px]">
            <a
              className={clsx("font-bold hover:text-accent", {
                "hover:text-accent": darkMode,
              })}
              onClick={() => toggleMobileNav()}
              href="#projects-section"
              aria-label="projects"
            >
              Work
            </a>
          </li>

          {/* contact link */}
          <li className="h-[87px]">
            <a
              className={clsx("font-bold hover:text-accent", {
                "hover:text-accent": darkMode,
              })}
              onClick={() => toggleMobileNav()}
              href="#contact-section"
              aria-label="contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* bottom container */}
      <div className="flex items-end justify-between w-full pr-[19px] pl-4 pb-7">
        <Socials {...{ darkMode, isFooter }} />
        <ThemeToggle {...{ darkMode, toggleTheme }} />
      </div>
    </motion.div>
  );
}
