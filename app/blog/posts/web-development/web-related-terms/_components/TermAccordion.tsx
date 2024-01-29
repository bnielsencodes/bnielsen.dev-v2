import { useState } from "react";
import Image from "next/image";
import plusIcon from "@/public/assets/images/plusIcon.svg";
import minusIcon from "@/public/assets/images/minusIcon.svg";
import clsx from "clsx";

export default function TermAccordion({
  term,
}: {
  term: {
    id: number;
    name: string;
    target?: string;
    definition: string;
    seeAlso?: [
      {
        id: number;
        name: string;
        link?: string;
      }
    ];
  };
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className="py-5 md:py-7 px-4 md:px-7 mt-4 rounded-lg bg-neutral-500 dark:bg-neutral-200 transition-all duration-1000">
      <div className="relative" onClick={() => setIsActive(!isActive)}>
        <p className="text-2xl font-bold lg:text-3xl">{term.name}</p>

        <Image
          className={clsx(
            "absolute top-[3.5px] right-0 w-6 h-6 opacity-0 opacity-transition",
            {
              "opacity-100": isActive,
            }
          )}
          src={minusIcon}
          alt="minus icon"
          width="100"
          height="100"
          sizes="100vw"
        />
        <Image
          className={clsx(
            "absolute top-[3.5px] right-0 w-6 h-6 opacity-0 opacity-transition",
            {
              "opacity-100": !isActive,
            }
          )}
          src={plusIcon}
          alt="plus icon"
          width="100"
          height="100"
          sizes="100vw"
        />
      </div>

      {isActive && (
        <>
          <p className="pt-3">{term.definition}</p>
          {term.seeAlso && (
            <ul className="flex flex-wrap pt-6">
              <li className="min-w-[73.15px] pr-[6px] text-neutral-300 dark:text-neutral-500 text-base leading-[22px]">
                See Also:
              </li>
              {term.seeAlso.map((term) => {
                return (
                  <li
                    className="pr-2 text-neutral-300 dark:text-neutral-400 text-base leading-[22px] text-opacity-80"
                    key={term.id}
                  >
                    <p>{term.name}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </li>
  );
}
