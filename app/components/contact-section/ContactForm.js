import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import arrowIconDark from "@/public/assets/arrow/arrow-right-dark.svg";
import arrowIconLight from "@/public/assets/arrow/arrow-right-light.svg";
import clsx from "clsx";

export default function ContactForm({ darkMode }) {
  const [state, handleSubmit] = useForm("mknewaqj");

  return (
    <form className="w-full max-w-[475px] mt-4 mx-auto" onSubmit={handleSubmit}>
      <h2
        className={clsx("m-0 text-2xl font-bold text-center", {
          "text-neutral-500": darkMode,
          "text-neutral-200": !darkMode,
        })}
      >
        Let&apos;s connect!
      </h2>
      <div
        className={clsx("pt-[6px] mb-2 font-sans text-[0.92rem] text-center", {
          "text-neutral-400": darkMode,
          "text-neutral-300": !darkMode,
        })}
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
        <strong>
          <a
            className={clsx(
              "inline p-0 border-0 text-accent hover:opacity-90",
              {
                "bg-neutral-200": darkMode,
                "bg-neutral-500": !darkMode,
              }
            )}
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
            "w-full h-12 pl-[10px] border-[1px] rounded-lg mb-[6px] border-neutral-300 font-sans caret-accent focus:outline-2 focus:outline-accent placeholder:text-neutral-400",
            {
              "bg-neutral-100 text-neutral-500": darkMode,
              "shadow-custom bg-neutral-600 text-neutral-200": !darkMode,
            }
          )}
          type="text"
          name="name"
          placeholder="Name"
          aria-label="Enter your name"
          required
        />
        {/* email input */}
        <input
          className={clsx(
            "w-full h-12 pl-[10px] border-[1px] rounded-lg mb-[6px] border-neutral-300 font-sans caret-accent focus:outline-2 focus:outline-accent placeholder:text-neutral-400",
            {
              "bg-neutral-100 text-neutral-500": darkMode,
              "shadow-custom bg-neutral-600 text-neutral-200": !darkMode,
            }
          )}
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Enter your email address"
          required
        />
        {/* message input */}
        <textarea
          className={clsx(
            "w-full pt-[10px] pl-[10px] border-[1px] rounded-lg mb-[6px] border-neutral-300 font-sans caret-accent resize-none focus:outline-2 focus:outline-accent placeholder:text-neutral-400",
            {
              "bg-neutral-100 text-neutral-500": darkMode,
              "shadow-custom bg-neutral-600 text-neutral-200": !darkMode,
            }
          )}
          name="message"
          placeholder="Message"
          aria-label="Enter a message"
          required
          rows="7"
        />
      </fieldset>

      {/* submit button */}
      <div className="w-full h-[45px] text-end">
        <button
          className={clsx(
            `py-[9px] px-5 rounded-lg text-lg font-semibold hover:text-neutral-100 focus:outline-2 focus:opacity-[0.7]`,
            {
              "border-[1px] border-neutral-300 bg-gradient-to-b from-neutral-500 to-neutral-600 text-neutral-100":
                darkMode,
              "border-0 shadow-custom bg-gradient-to-b from-neutral-200 to-neutral-100 text-neutral-600":
                !darkMode,
            }
          )}
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
