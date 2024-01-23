import { FormspreeProvider, useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import arrowRight from "@/public/assets/icons/arrow-right.svg";
import ClipboardCopy from "./ClipboardCopy";
import SubmitButton from "./SubmitButton";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mknewaqj");

  if (state.succeeded) {
    return (
      <p className="w-[231px] mt-[60px] mx-auto mb-6 font-sans text-xl">
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
        <h2 className="m-0 text-neutral-200 dark:text-neutral-500 text-2xl font-bold text-center md:text-[1.65rem]">
          Let<span>&apos;</span>s connect!
        </h2>
        <div className="pt-[6px] mb-2 text-neutral-300 dark:text-neutral-500 font-sans text-center dark:opacity-70">
          Email me at{" "}
          <Image
            className="inline w-[21px] h-[21px] mr-[3px] mb-[2px] ml-[1px]"
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
          <a
            className="inline lg:hidden p-0 border-0 bg-neutral-500 dark:bg-neutral-200 text-accent-100 dark:text-accent-200 lg:text-bold"
            href="mailto:bnielsencodes@gmail.com"
          >
            brandon@bnielsen.dev
          </a>
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
            className="outline-light-theme dark:outline-dark-theme w-full h-12 pl-[10px] border-[1px] border-neutral-300 rounded-lg shadow-xl dark:shadow-none mb-[6px] bg-neutral-600 dark:bg-neutral-100 text-neutral-200 dark:text-neutral-500 font-sans caret-accent select-text appearance-none placeholder:text-neutral-400"
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Enter your name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          {/* email input */}
          <input
            className="outline-light-theme dark:outline-dark-theme w-full h-12 pl-[10px] border-[1px] border-neutral-300 rounded-lg shadow-xl dark:shadow-none mb-[6px] bg-neutral-600 dark:bg-neutral-100 text-neutral-200 dark:text-neutral-500 font-sans caret-accent select-text appearance-none placeholder:text-neutral-400"
            type="email"
            name="email"
            placeholder="Email"
            aria-label="Enter your email address"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          {/* message input */}
          <textarea
            className="outline-light-theme dark:outline-dark-theme w-full pt-[10px] pl-[10px] border-[1px] border-neutral-300 rounded-lg shadow-xl dark:shadow-none mb-[6px] bg-neutral-600 dark:bg-neutral-100 text-neutral-200 dark:text-neutral-500 font-sans caret-accent select-text appearance-none placeholder:text-neutral-400"
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
