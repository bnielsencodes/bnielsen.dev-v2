import { motion } from "framer-motion";
import Socials from "@/app/_components/socials/Socials";
import ThemeToggle from "./ThemeToggle";

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
        <ul className="flex flex-col justify-between h-[17.5rem] pb-[25px] text-neutral-200 text-[4.85rem] dark:text-neutral-500 md:h-[19rem] md:text-[5.5rem]">
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
                className="font-extrabold active:text-accent-100 dark:active:text-accent-200"
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
      <div className="flex items-center justify-between w-full h-[75px] pl-4 pr-[29px] pb-4 md:pl-5">
        <Socials parent="mobile nav" direction="row" />
        <ThemeToggle />
      </div>
    </motion.div>
  );
}
