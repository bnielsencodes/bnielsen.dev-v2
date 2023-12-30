import ContactForm from "./ContactForm";
import clsx from "clsx";

export default function ContactSection({ darkMode }: { darkMode: boolean }) {
  return (
    <section
      id="contact-section"
      className={clsx("pt-20 px-5 pb-28 overflow-x-clip", {
        "bg-neutral-200": darkMode,
        "bg-neutral-500": !darkMode,
      })}
    >
      {/* section heading */}
      <h2
        className={clsx(
          "relative z-0 w-[335px] mx-auto mb-[10px] text-[1.9rem] font-bold text-center md:w-[416px] md:text-[2.25rem] lg:w-[458px] lg:text-[2.5rem] after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[6px] after:w-[293px] after:h-[9px] md:after:bottom-[8px] md:after:w-[358px] md:after:h-[10px] lg:after:bottom-[8px] lg:after:w-[397px] lg:after:h-[11px]",
          {
            "text-neutral-500 after:bg-neutral-300": darkMode,
            "text-neutral-200 after:bg-neutral-400": !darkMode,
          }
        )}
      >
        Want to work together?
      </h2>
      <ContactForm {...{ darkMode }} />
    </section>
  );
}