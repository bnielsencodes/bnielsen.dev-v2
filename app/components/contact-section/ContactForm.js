import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm({ darkMode }) {
  const [state, handleSubmit] = useForm("mknewaqj");

  return (
    <form
      className={`w-full mt-[100px] mx-auto ${styles.form}`}
      onSubmit={handleSubmit}
    >
      <fieldset className="flex flex-col items-center pt-[0.35rem] pb-[10px] border-none ">
        <input
          className={
            (`w-full h-[45px] pl-[10px] border-[1px] rounded-lg mb-[6px] font-sans caret-accent-100 focus:outline-2 focus:outline-accent-100 ${styles["input"]} ${styles["input--name"]}`,
            {
              "border-neutral-300 bg-neutral-100 text-neutral-500": darkMode,
              "border-neutral-400 bg-neutral-600 text-neutral-200": !darkMode,
            })
          }
          type="text"
          name="name"
          placeholder="Name"
          aria-label="Enter your name"
          required
        />
        <input
          className={
            (`w-full h-[45px] pl-[10px] border-[1px] border-neutral-300 rounded-lg mb-[6px] bg-neutral-100 font-sans text-neutral-500 caret-accent-100 focus:outline-2 focus:outline-accent-100 ${styles["input"]} ${styles["input--email"]}`,
            { "": darkMode, "": !darkMode })
          }
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Enter your email address"
          required
        />
        <textarea
          className={
            (`w-full pt-[10px] pl-[10px] border-[1px] border-neutral-300 rounded-lg mb-[6px] bg-neutral-100 font-sans text-neutral-500 caret-accent-100 focus:outline-2 focus:outline-accent-100 resize-none ${styles["input"]} ${styles["input--message"]}`,
            { "": darkMode, "": !darkMode })
          }
          name="message"
          placeholder="Message"
          aria-label="Enter a message"
          required
          rows="7"
        />
      </fieldset>

      <div className={`w-full h-[45px] text-end ${styles.submit}`}>
        <button
          className={`py-[10px] px-5 border-[1px] border-neutral-300 rounded-lg bg-neutral-100 text-neutral-600 }`}
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
