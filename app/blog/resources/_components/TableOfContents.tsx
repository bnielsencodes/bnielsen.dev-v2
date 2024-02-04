import { tableOfContents as tableOfContentsData } from "@/app/_data/blog/resourcesData";

export default function TableOfContents() {
  return (
    <aside className="sticky top-[28px] hidden w-full max-w-[195px] h-fit pt-[66px] text-neutral-200 text-[17px] font-bold tracking-wider xl:block">
      <p className="text-neutral-200 dark:text-neutral-500 uppercase">
        Table of Contents
      </p>

      <ul className="flex flex-col gap-[6px] mt-4 text-neutral-300 dark:text-neutral-400 font-sans text-[14.5px]">
        {tableOfContentsData.map((section) => {
          return (
            <li className="pb-[3px]" key={section.id}>
              <a
                className="transition-opacity lg:hover:opacity-80"
                href={section.link}
              >
                {section.name}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
