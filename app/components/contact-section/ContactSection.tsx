import ContactForm from "./ContactForm";
import clsx from "clsx";

export default function ContactSection({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      id="contact-section"
      className={clsx("pt-20 px-7 pb-28 overflow-x-clip", {
        "bg-neutral-200": darkMode,
        "bg-neutral-500": !darkMode,
      })}
    >
      {/* section heading */}
      <p
        className={clsx(
          "relative z-0 w-[176px] mx-auto mb-[10px] text-[2.5rem] font-bold text-center after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[5px] after:w-[127px] after:h-[14px]",
          {
            "text-neutral-500 after:bg-neutral-300": darkMode,
            "text-neutral-200 after:bg-neutral-400": !darkMode,
          }
        )}
      >
        Contact
      </p>
      <ContactForm {...{darkMode}} />
    </section>
  );
}
