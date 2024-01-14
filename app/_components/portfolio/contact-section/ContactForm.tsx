import { FormspreeProvider, useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import arrowRight from "@/public/assets/icons/arrow-right.svg";
import ClipboardCopy from "./ClipboardCopy";
import SubmitButton from "./SubmitButton";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mknewaqj");

  if (state.succeeded) {
    return (
      <p className="mx-auto mb-6 mt-[60px] w-[231px] font-sans text-xl">
        Thanks for your message!
      </p>
    );
  }

  return (
    <FormspreeProvider project="2358276319868878375">
      <form
        className="mx-auto mt-4 w-full max-w-[475px]"
        onSubmit={handleSubmit}
      >
        <h2 className="m-0 text-center text-2xl font-bold text-neutral-200 dark:text-neutral-500 md:text-[1.65rem]">
          Let<span>&apos;</span>s connect!
        </h2>
        <div className="mb-2 pt-[6px] text-center font-sans text-neutral-300 dark:text-neutral-500 dark:opacity-70 md:text-[0.95rem]">
          Email me at{" "}
          <Image
            className="mb-[2px] ml-[1px] mr-[3px] inline h-[21px] w-[21px]"
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
              className="inline border-0 bg-neutral-500 p-0 text-accent-100 dark:bg-neutral-200 dark:text-accent-200"
              href="mailto:bnielsencodes@gmail.com"
            >
              brandon@bnielsen.dev
            </a>
          </strong>
          <br />
          or send me a quick message here:
        </div>

        <fieldset className="flex flex-col justify-center border-none pb-[10px] pt-[0.35rem]">
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
            className="outline-light-theme caret-accent dark:outline-dark-theme mb-[6px] h-12 w-full select-text appearance-none rounded-lg border-[1px] border-neutral-300 bg-neutral-600 pl-[10px] font-sans text-neutral-200 shadow-xl placeholder:text-neutral-400 dark:bg-neutral-100 dark:text-neutral-500 dark:shadow-none"
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Enter your name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          {/* email input */}
          <input
            className="outline-light-theme caret-accent dark:outline-dark-theme mb-[6px] h-12 w-full select-text appearance-none rounded-lg border-[1px] border-neutral-300 bg-neutral-600 pl-[10px] font-sans text-neutral-200 shadow-xl placeholder:text-neutral-400 dark:bg-neutral-100 dark:text-neutral-500 dark:shadow-none"
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Enter your email address"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* message input */}
          <textarea
            className="outline-light-theme caret-accent dark:outline-dark-theme mb-[6px] w-full select-text resize-none appearance-none rounded-lg border-[1px] border-neutral-300 bg-neutral-600 pl-[10px] pt-[10px] font-sans text-neutral-200 shadow-xl placeholder:text-neutral-400 dark:bg-neutral-100 dark:text-neutral-500 dark:shadow-none"
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
