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
      <div className="relative flex h-auto w-full justify-end">
        <div className="h-[48px] w-[96px] animate-pulse rounded-lg bg-neutral-400 dark:bg-neutral-500"></div>
      </div>
    );
  }

  if (resolvedTheme === "dark") {
    return (
      <div className="relative h-auto w-full text-end">
        <ValidationError
          className="absolute left-[14px] top-[6px] text-warning"
          errors={props.state.errors}
        />
        <button
          className="btn btn-primary btn-light font-semibold text-neutral-200 shadow-xl"
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
          className="btn btn-primary btn-light-alt absolute right-0 top-0 font-semibold text-neutral-200"
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
      <div className="relative h-auto w-full text-end">
        <ValidationError
          className="absolute left-[14px] top-[6px] text-warning"
          errors={props.state.errors}
        />
        <button
          className="btn btn-primary btn-dark font-semibold text-neutral-500 shadow-xl"
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
          className="btn btn-primary btn-dark-alt absolute right-0 top-0 font-semibold text-neutral-500"
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
