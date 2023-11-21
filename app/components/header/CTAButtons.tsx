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
        <button
          className={clsx("btn", {
            "btn-light": darkMode,
            "btn-dark shadow-custom": !darkMode,
          })}
          type="button"
        >
          <a href="#projects-section">View Work</a>
        </button>
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
        <button
          className={clsx("btn border-[1px] border-neutral-300", {
            "btn-dark": darkMode,
            "btn-light shadow-custom": !darkMode,
          })}
          type="button"
        >
          <a href="#contact-section">Contact</a>
        </button>
      </motion.div>
    </div>
  );
}
