import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm({ darkMode }) {
  const [state, handleSubmit] = useForm("mknewaqj");

  return (
    <form
      className={`w-full mt-[100px] mx-auto ${styles.form}`}
      onSubmit={handleSubmit}
    >
    </form>
  );
}
