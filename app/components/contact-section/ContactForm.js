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
          type="text"
          name="name"
          placeholder="Name"
          aria-label="Enter your name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Enter your email address"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          aria-label="Enter a message"
          required
          rows="7"
        />
      </fieldset>
    </form>
  );
}
