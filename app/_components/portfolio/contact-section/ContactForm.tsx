import { FormspreeProvider, useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import arrowRight from "@/public/assets/icons/arrow-right.svg";
import ClipboardCopy from "./ClipboardCopy";
import SubmitButton from "./SubmitButton";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mknewaqj");

  if (state.succeeded) {
    return (
      <p className="w-[231px] mt-[60px] mx-auto mb-6 text-xl font-sans">
        Thanks for your message!
      </p>
    );
  }

  return (
    <FormspreeProvider project="2358276319868878375">
      <form
        className="w-full max-w-[475px] mt-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="m-0 text-neutral-200 text-2xl font-bold text-center dark:text-neutral-500 md:text-[1.65rem]">
          Let<span>&apos;</span>s connect!
        </h2>
        <div className="pt-[6px] mb-2 text-neutral-300 font-sans text-center dark:text-neutral-500 dark:opacity-70 md:text-[0.95rem]">
          Email me at{" "}
          <Image
            className="inline w-[21px] h-[21px] ml-[1px] mr-[3px] mb-[2px]"
            src={arrowRight}
            alt="arrow pointing right"
            width="0"
            height="0"
            sizes="100vw"
          />
          {/* large screens */}
          <div className="relative hidden lg:inline-block">
            <ClipboardCopy />
          </div>
          {/* mobile/tablets */}
          <strong className="lg:hidden">
            <a
              className="inline p-0 border-0 bg-neutral-500 text-accent-100 dark:bg-neutral-200 dark:text-accent-200"
              href="mailto:bnielsencodes@gmail.com"
            >
              brandon@bnielsen.dev
            </a>
          </strong>
          <br />
          or send me a quick message here:
        </div>

        <fieldset className="flex flex-col justify-center pt-[0.35rem] pb-[10px] border-none">
          {/* Adds subject line */}
          <input
            name="subject"
            type="hidden"
            value="New submission from {{ name }}"
          />

          {/* honeypot input / spam filter */}
          <input className="hidden" type="text" name="_gotcha" />

          {/* name input */}
          <input
            className="outline-light-theme shadow-xl w-full h-12 pl-[10px] border-[1px] rounded-lg mb-[6px] border-neutral-300 bg-neutral-600 text-neutral-200 font-sans caret-accent select-text appearance-none dark:outline-dark-theme dark:bg-neutral-100 dark:text-neutral-500 dark:shadow-none placeholder:text-neutral-400"
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Enter your name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          {/* email input */}
          <input
            className="outline-light-theme shadow-xl w-full h-12 pl-[10px] border-[1px] rounded-lg mb-[6px] border-neutral-300 bg-neutral-600 text-neutral-200 font-sans caret-accent select-text appearance-none dark:outline-dark-theme dark:bg-neutral-100 dark:text-neutral-500 dark:shadow-none placeholder:text-neutral-400"
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Enter your email address"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* message input */}
          <textarea
            className="outline-light-theme shadow-xl w-full pt-[10px] pl-[10px] border-[1px] rounded-lg mb-[6px] border-neutral-300 bg-neutral-600 text-neutral-200 font-sans caret-accent resize-none select-text appearance-none dark:outline-dark-theme dark:bg-neutral-100 dark:text-neutral-500 dark:shadow-none placeholder:text-neutral-400"
            name="message"
            placeholder="Message"
            aria-label="Enter a message"
            required
            rows={7}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </fieldset>

        <SubmitButton state={state} />
      </form>
    </FormspreeProvider>
  );
}
