import { useEffect, useState } from "react";

export default function Term({
  term,
}: {
  term: {
    name: string;
    target: string;
    definition: string;
    seeAlso?: [
      {
        id: number;
        name: string;
        link: string;
      }
    ];
  };
}) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const seeAlso = term.seeAlso ? term.seeAlso : [];

  const seeAlsoElements = seeAlso.map((term) => {
    return (
      <li
        className="pr-[8px] text-neutral-300 dark:text-neutral-400 text-opacity-80 text-base leading-[22px] lg:hover:opacity-80"
        key={term.id}
      >
        <a href={term.link}>{term.name}</a>
      </li>
    );
  });

  return (
    <li id={term.target} className="pt-16 -mb-7">
      <p className="text-3xl font-bold">{term.name}</p>
      <p className="pt-3 pb-4">{term.definition}</p>
      <ul className="flex flex-wrap">
        <span className="pr-[6px] text-neutral-300 dark:text-neutral-500 text-base leading-[22px]">
          {term.seeAlso ? "See Also:" : null}
        </span>
        {seeAlsoElements}
      </ul>
    </li>
  );
}