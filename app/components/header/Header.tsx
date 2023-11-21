import { motion } from "framer-motion";
import CTAButtons from "./CTAButtons";
import clsx from "clsx";

export default function Header({ darkMode }: { darkMode: boolean }) {
  return (
    <header
      id="header"
      className="flex flex-col items-center justify-center h-screen px-7 mb-[6px]"
    >
      <motion.div
        initial={{ opacity: 0, translateY: "-10rem" }}
        whileInView={{ opacity: 1, translateY: "0" }}
        transition={{
          duration: 1,
          ease: [0.21, 1.11, 0.81, 0.99],
        }}
        viewport={{ once: true }}
      >
        <h1
          className={clsx(
            "text-[2.48rem] font-bold leading-[3rem] tracking-wide text-left",
            {
              "text-neutral-600": darkMode,
              "text-neutral-100": !darkMode,
            }
          )}
        >
          Hello, I&apos;m Brandon Nielsen, a{" "}
          <span
            className={clsx("", {
              "header-text-stroke--dark text-neutral-100": darkMode,
              "header-text-stroke text-neutral-600": !darkMode,
            })}
          >
            Web Developer
          </span>
          .
        </h1>
      </motion.div>

      <CTAButtons {...{ darkMode }} />
    </header>
  );
}
