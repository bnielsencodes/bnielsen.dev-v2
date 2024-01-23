import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact-section"
      className="pt-[100px] px-5 pb-28 bg-neutral-500 dark:bg-neutral-200 overflow-x-clip md:pt-30 lg:pt-[150px]"
    >
      {/* section heading */}
      <h2 className="relative z-0 w-[335px] mx-auto mb-[10px] text-neutral-200 dark:text-neutral-500 text-[1.9rem] font-bold text-center after:content-[''] after:absolute after:bottom-[6px] after:right-0 after:-z-10 after:w-[293px] after:h-[9px] after:bg-neutral-400 dark:after:bg-neutral-300 md:w-[416px] md:text-[2.25rem] md:after:bottom-[8px] md:after:w-[358px] md:after:h-[10px] lg:w-[458px] lg:text-[2.5rem] lg:after:bottom-[10px] lg:after:w-[397px] lg:after:h-[11px]">
        Want to work together?
      </h2>
      <ContactForm />
    </section>
  );
}
