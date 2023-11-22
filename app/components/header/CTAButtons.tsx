import { motion } from "framer-motion";
import clsx from "clsx";

export default function CTAButtons({ darkMode }: { darkMode: boolean }) {
  return (
    <div className="flex gap-4 mt-[21px]">
      <motion.div
        initial={{ opacity: 0, translateX: "-10rem" }}
        whileInView={{ opacity: 1, translateX: "0" }}
        transition={{
          duration: 1.3,
          ease: [0.21, 1.11, 0.81, 0.99],
        }}
        viewport={{ once: true }}
      >
        <a className="accent-outline" href="#projects-section">
          <button
            className={clsx("btn", {
              "btn-light": darkMode,
              "btn-dark shadow-custom": !darkMode,
            })}
            type="button"
          >
              View Work
          </button>
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: "10rem" }}
        whileInView={{ opacity: 1, translateX: "0" }}
        transition={{
          duration: 1.3,
          ease: [0.21, 1.11, 0.81, 0.99],
        }}
        viewport={{ once: true }}
      >
        <a className="accent-outline" href="#contact-section">
          <button
            className={clsx("btn border-[1px] border-neutral-300", {
              "btn-dark": darkMode,
              "btn-light shadow-custom": !darkMode,
            })}
            type="button"
          >
              Contact
          </button>
        </a>
      </motion.div>
    </div>
  );
}
