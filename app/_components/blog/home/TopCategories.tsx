import { postsData } from "@/app/_data/blog/posts/postsData";

export default function TopCategories() {
  return (
    <section className="categories text-neutral-200 text-[17px] font-bold tracking-wider md:grid md:col-start-2 md:col-end-[-1] md:row-start-1 md:row-end-2">
      <h2 className="uppercase text-accent-100 dark:text-accent-200">
        Top Categories
      </h2>

      <ul className="flex flex-wrap gap-2 mt-8 text-neutral-300 dark:text-neutral-400 font-sans text-[14.5px] ">
        {postsData.categories.map((category) => {
          return (
            <li
              className="py-[7px] px-3 rounded-lg bg-neutral-400 dark:bg-neutral-300 text-neutral-200 dark:text-neutral-500 text-sm tracking-[-0.0125em] transition-opacity lg:hover:opacity-80 lg:hover:cursor-pointer"
              key={category.id}
            >
              <a href={category.link}>{category.title}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
