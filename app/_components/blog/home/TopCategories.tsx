import { useEffect, useState } from "react";
import { categories } from "@/app/termsPostData";

export default function TableOfContents() {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const categoriesList = categories.map((category) => {
    return (
      <li
        className="rounded-lg bg-neutral-400 px-[12px] py-[6px] text-sm tracking-[-0.0125em] text-neutral-200 dark:bg-neutral-300 dark:text-neutral-500 lg:hover:opacity-80"
        key={category.id}
      >
        <a href={category.link}>{category.title}</a>
      </li>
    );
  });

  return (
    <section className="hidden text-[17px] font-bold tracking-wider text-neutral-200 md:col-start-2 md:col-end-[-1] md:row-start-1 md:row-end-2 md:block">
      <p className="uppercase text-accent-100 dark:text-accent-200">
        Top Categories
      </p>

      <ul className="mt-8 flex flex-wrap gap-2 font-sans text-[14.5px] text-neutral-300 dark:text-neutral-400">
        {categoriesList}
      </ul>
    </section>
  );
}
