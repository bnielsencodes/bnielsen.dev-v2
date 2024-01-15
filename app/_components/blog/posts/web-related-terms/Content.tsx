import { useEffect, useState } from "react";
import Term from "./Term";
import { post, terms } from "@/app/termsPostData";

export default function Content() {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const termElements = terms.map((term) => {
    return <Term key={term.id} {...{ term }} />;
  });

  return (
    <article className="w-full max-w-[686px] font-sans text-[19px] font-medium text-neutral-200 dark:text-neutral-500">
      <ul className="pb-48">{termElements}</ul>

      <div>
        <p className="text-[13.25px] font-extrabold uppercase text-neutral-300 dark:text-neutral-400">
          Last Updated
        </p>
        <p className="text-[1.35rem] font-bold leading-[1.85rem] text-neutral-200 dark:text-neutral-500">
          {post.date}
        </p>
      </div>
    </article>
  );
}
