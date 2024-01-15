import { useEffect, useState } from "react";
import { tableOfContents } from "@/app/termsPostData";

export default function TableOfContents() {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const termsList = tableOfContents.map((term) => {
    return (
      <li className="pb-[3px]" key={term.id}>
        <a className="lg:hover:opacity-80" href={term.link}>
          {term.name}
        </a>
      </li>
    );
  });

  return (
    <aside className="sticky top-[28px] ml-auto hidden max-h-[calc(-150px+100vh)] w-full max-w-[250px] pt-[66px] text-[17px] font-bold tracking-wider text-neutral-200 xl:block">
      <p className="uppercase text-neutral-200 dark:text-neutral-500">
        Table of Contents
      </p>

      <ul className="mt-4 flex h-[calc(-265px+100vh)] flex-col gap-[6px] overflow-scroll font-sans text-[14.5px] text-neutral-300 dark:text-neutral-400">
        {termsList}
      </ul>
    </aside>
  );
}
