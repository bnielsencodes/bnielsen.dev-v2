import { tableOfContents as tableOfContentsData } from "@/app/_data/blog/posts/categories/web-development/posts/web-related-terms";

export default function TableOfContents() {
  const tableOfContents = tableOfContentsData.map((term) => {
    return (
      <li className="pb-[3px]" key={term.id}>
        <a className="lg:hover:opacity-80" href={term.link}>
          {term.name}
        </a>
      </li>
    );
  });

  return (
    <aside className="sticky top-[28px] hidden w-full max-w-[250px] max-h-[calc(-150px+100vh)] pt-[66px] ml-auto text-neutral-200 text-[17px] font-bold tracking-wider xl:block">
      <p className="text-neutral-200 dark:text-neutral-500 uppercase">
        Table of Contents
      </p>

      <ul className="flex flex-col gap-[6px] h-[calc(-265px+100vh)] mt-4 text-neutral-300 dark:text-neutral-400 font-sans text-[14.5px] overflow-scroll">
        {tableOfContents}
      </ul>
    </aside>
  );
}
