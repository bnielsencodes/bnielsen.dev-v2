import React, { FC } from "react";
import { useForm } from "@formspree/react";
/*
import { useForm, ValidationError } from "@formspree/react";
*/

import Image from "next/image";
import arrowIconDark from "@/public/assets/icons/arrow-right-dark.svg";
import arrowIconLight from "@/public/assets/icons/arrow-right-light.svg";
import ClipboardCopy from "./ClipboardCopy";
import clsx from "clsx";

interface ContactFormProps {
  darkMode: boolean;
}

const ContactForm: FC<ContactFormProps> = ({ darkMode }) => {
  const [state, handleSubmit] = useForm("mknewaqj");

  /*
  if (state.succeeded) {
    return (
      <p className="w-[260px] mt-[60px] mx-auto mb-6 text-lg">
        Thanks for your email!
      </p>
    );
  }
  */

  return (
    <form className="w-full max-w-[475px] mt-4 mx-auto" onSubmit={handleSubmit}>
      <h2
        className={clsx(
          "m-0 text-2xl font-bold text-center md:text-[1.65rem]",
          {
            "text-neutral-500": darkMode,
            "text-neutral-200": !darkMode,
          }
        )}
      >
        Let<span>&apos;</span>s connect!
      </h2>
      <div
        className={clsx(
          "pt-[6px] mb-2 font-sans text-center md:text-[0.95rem]",
          {
            "text-neutral-500 opacity-70": darkMode,
            "text-neutral-300": !darkMode,
          }
        )}
      >
        Email me at{" "}
        {darkMode ? (
          <Image
            className="inline w-[12px] h-[12px] ml-[1px] mr-[3px] mb-[2px]"
            src={arrowIconDark}
            alt="arrow pointing right"
            width="0"
            height="0"
            sizes="100vw"
          />
        ) : !darkMode ? (
          <Image
            className="inline w-[12px] h-[12px] ml-[1px] mr-[3px] mb-[2px]"
            src={arrowIconLight}
            alt="arrow pointing right"
            width="0"
            height="0"
            sizes="100vw"
          />
        ) : null}
        {/* large screens */}
        <div className="relative hidden lg:inline-block">
          <ClipboardCopy {...{ darkMode }} />
        </div>
        {/* mobile/tablets */}
        <strong className="lg:hidden">
          <a
            className={clsx("inline p-0 border-0", {
              "bg-neutral-200 text-accent-200": darkMode,
              "bg-neutral-500 text-accent-100": !darkMode,
            })}
            href="mailto:bnielsencodes@gmail.com"
          >
            brandon@bnielsen.dev
          </a>
        </strong>
        <br />
        or send me a quick message here:
      </div>

      <fieldset className="flex flex-col justify-center pt-[0.35rem] pb-[10px] border-none">
        {/* name input */}
        <input
          className={clsx(
            "w-full h-12 pl-[10px] border-[1px] rounded-lg mb-[6px] border-neutral-300 font-sans caret-accent placeholder:text-neutral-400",
            {
              "outline-dark-theme bg-neutral-100 text-neutral-500": darkMode,
              "shadow-custom outline-light-theme bg-neutral-600 text-neutral-200":
                !darkMode,
            }
          )}
          type="text"
          name="name"
          placeholder="Name"
          aria-label="Enter your name"
          required
        />
        {/*
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        */}

        {/* email input */}
        <input
          className={clsx(
            "w-full h-12 pl-[10px] border-[1px] rounded-lg mb-[6px] border-neutral-300 font-sans caret-accent placeholder:text-neutral-400",
            {
              "outline-dark-theme bg-neutral-100 text-neutral-500": darkMode,
              "shadow-custom outline-light-theme bg-neutral-600 text-neutral-200":
                !darkMode,
            }
          )}
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Enter your email address"
          required
        />
        {/*
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        */}

        {/* message input */}
        <textarea
          className={clsx(
            "w-full pt-[10px] pl-[10px] border-[1px] rounded-lg mb-[6px] border-neutral-300 font-sans caret-accent resize-none placeholder:text-neutral-400",
            {
              "outline-dark-theme bg-neutral-100 text-neutral-500": darkMode,
              "shadow-custom outline-light-theme bg-neutral-600 text-neutral-200":
                !darkMode,
            }
          )}
          name="message"
          placeholder="Message"
          aria-label="Enter a message"
          required
          rows={7}
        />
        {/*
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        */}
      </fieldset>

      {/* submit button */}
      <div className="w-full h-auto text-end">
        {/*
        <ValidationError
          className="absolute top-[6px] left-[14px] text-warning"
          errors={state.errors}
        />
        */}
        <button
          className={clsx("btn btn-primary font-semibold", {
            "btn-light outline-dark-theme": darkMode,
            "btn-dark shadow-custom outline-light-theme": !darkMode,
          })}
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
