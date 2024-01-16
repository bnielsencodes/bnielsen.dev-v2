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
        className="py-[6px] px-[12px] rounded-lg bg-neutral-400 dark:bg-neutral-300 text-neutral-200 dark:text-neutral-500 text-sm tracking-[-0.0125em] lg:hover:opacity-80"
        key={category.id}
      >
        <a href={category.link}>{category.title}</a>
      </li>
    );
  });

  return (
    <section className="hidden text-neutral-200 text-[17px] font-bold tracking-wider md:grid md:col-start-2 md:col-end-[-1] md:row-start-1 md:row-end-2">
      <p className="uppercase text-accent-100 dark:text-accent-200">
        Top Categories
      </p>

      <ul className="flex flex-wrap gap-2 mt-8 text-neutral-300 dark:text-neutral-400 font-sans text-[14.5px] ">
        {categoriesList}
      </ul>
    </section>
  );
}
