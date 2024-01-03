import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact-section"
      className="pt-[100px] px-5 pb-28 bg-neutral-500 overflow-x-clip dark:bg-neutral-200 md:pt-[120px] lg:pt-[150px]"
    >
      {/* section heading */}
      <h2 className="relative z-0 w-[335px] mx-auto mb-[10px] text-neutral-200 text-[1.9rem] font-bold text-center after:bg-neutral-400 dark:text-neutral-500 dark:after:bg-neutral-300 md:w-[416px] md:text-[2.25rem] lg:w-[458px] lg:text-[2.5rem] after:absolute after:content-[''] after:-z-10 after:right-0 after:bottom-[6px] after:w-[293px] after:h-[9px] md:after:bottom-[8px] md:after:w-[358px] md:after:h-[10px] lg:after:bottom-[8px] lg:after:w-[397px] lg:after:h-[11px]">
        Want to work together?
      </h2>
      <ContactForm />
    </section>
  );
}
