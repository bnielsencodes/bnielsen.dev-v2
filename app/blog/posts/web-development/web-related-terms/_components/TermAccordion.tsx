import { useState } from "react";
import Image from "next/image";
import plusIcon from "@/public/assets/images/plusIcon.svg";
import minusIcon from "@/public/assets/images/minusIcon.svg";
import clsx from "clsx";

export default function TermAccordion({
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
  const [isActive, setIsActive] = useState(false);

  const seeAlso = term.seeAlso ? term.seeAlso : [];

  const seeAlsoElements = seeAlso.map((term) => {
    return (
      <li
        className="pr-2 text-neutral-300 dark:text-neutral-400 text-base leading-[22px] text-opacity-80 lg:hover:opacity-80"
        key={term.id}
      >
        <a href={term.link}>{term.name}</a>
      </li>
    );
  });

  return (
    <li
      id={term.target}
      className="py-5 md:py-6 px-4 md:px-5 mt-4 rounded-lg bg-neutral-200"
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-2xl font-bold lg:text-3xl">{term.name}</p>
        {isActive ? (
          <Image
            className="w-6 h-6"
            src={minusIcon}
            alt="minus icon"
            width="100"
            height="100"
            sizes="100vw"
          />
        ) : (
          <Image
            className="w-6 h-6"
            src={plusIcon}
            alt="plus icon"
            width="100"
            height="100"
            sizes="100vw"
          />
        )}
      </div>
      {isActive && (
        <>
          <p className="pt-3">{term.definition}</p>
          <ul
            className={clsx("flex flex-wrap pt-6", {
              hidden: !term.seeAlso,
            })}
          >
            <span className="pr-[6px] text-neutral-300 dark:text-neutral-500 text-base leading-[22px]">
              {term.seeAlso ? "See Also:" : null}
            </span>
            {seeAlsoElements}
          </ul>
        </>
      )}
    </li>
  );
}
