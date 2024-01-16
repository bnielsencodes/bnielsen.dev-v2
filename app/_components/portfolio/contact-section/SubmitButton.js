import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ValidationError } from "@formspree/react";

export default function SubmitButton(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative flex justify-end w-full h-auto">
        <div className="w-[96px] h-[48px] rounded-lg bg-neutral-400 dark:bg-neutral-500 animate-pulse"></div>
      </div>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <div className="relative w-full h-auto text-end">
        <ValidationError
          className="absolute top-[6px] left-[14px] text-warning"
          errors={props.state.errors}
        />
        <button
          className="btn btn-primary btn-light shadow-xl text-neutral-200 font-semibold"
          type="submit"
          disabled={props.state.submitting}
          onClick={() => {
            console.log(props.state);
            console.log(props.state.errors);
          }}
        >
          Submit
        </button>

        {/* hover transition button */}
        <button
          className="btn btn-primary btn-light-alt absolute top-0 right-0 text-neutral-200 font-semibold"
          type="submit"
          tabIndex={-1}
          aria-hidden={true}
          disabled={props.state.submitting}
          onClick={() => {
            console.log(props.state);
            console.log(props.state.errors);
          }}
        >
          Submit
        </button>
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className="relative w-full h-auto text-end">
        <ValidationError
          className="absolute top-[6px] left-[14px] text-warning"
          errors={props.state.errors}
        />
        <button
          className="btn btn-primary btn-dark text-neutral-500 shadow-xl font-semibold"
          type="submit"
          disabled={props.state.submitting}
          onClick={() => {
            console.log(props.state);
            console.log(props.state.errors);
          }}
        >
          Submit
        </button>

        {/* hover transition button */}
        <button
          className="btn btn-primary btn-dark-alt absolute top-0 right-0 text-neutral-500 font-semibold"
          type="submit"
          tabIndex={-1}
          aria-hidden={true}
          disabled={props.state.submitting}
          onClick={() => {
            console.log(props.state.errors);
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}
