import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact-section"
      className="md:pt-30 overflow-x-clip bg-neutral-500 px-5 pb-28 pt-[100px] dark:bg-neutral-200 lg:pt-[150px]"
    >
      {/* section heading */}
      <h2 className="relative z-0 mx-auto mb-[10px] w-[335px] text-center text-[1.9rem] font-bold text-neutral-200 after:absolute after:bottom-[6px] after:right-0 after:-z-10 after:h-[9px] after:w-[293px] after:bg-neutral-400 after:content-[''] dark:text-neutral-500 dark:after:bg-neutral-300 md:w-[416px] md:text-[2.25rem] md:after:bottom-[8px] md:after:h-[10px] md:after:w-[358px] lg:w-[458px] lg:text-[2.5rem] lg:after:bottom-[8px] lg:after:h-[11px] lg:after:w-[397px]">
        Want to work together?
      </h2>
      <ContactForm />
    </section>
  );
}
