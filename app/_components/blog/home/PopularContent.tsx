import { popularContent as popularContentData } from "@/app/_data/blog/posts/popular-content";
import Image from "next/image";
import arrowRight from "@/public/assets/icons/arrow-right.svg";

export default function PopularContent() {
  return (
    <section className="popular sticky top-[90px] text-[17px] font-bold tracking-wider text-neutral-200 md:col-start-2 md:col-end-[-1] md:row-start-2 md:row-end-[-1] md:block">
      <h2 className="uppercase text-accent-100 dark:text-accent-200">
        Popular Content
      </h2>

      <ul className="flex flex-col gap-[6px] mt-8 text-neutral-300 dark:text-neutral-400 font-sans text-[14.5px] lg:-ml-8">
        {popularContentData.map((term) => {
          return (
            <li
              className="flex items-start mb-2 text-neutral-100 dark:text-neutral-600 text-xl font-bold"
              key={term.id}
            >
              <Image
                className="inline w-[21px] h-[21px] mt-[3.5px] mr-[11px]"
                src={arrowRight}
                alt="arrow pointing right"
                width="0"
                height="0"
                sizes="100vw"
              />
              <a
                className="transition-opacity lg:hover:opacity-80"
                href={term.link}
              >
                {term.title}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
