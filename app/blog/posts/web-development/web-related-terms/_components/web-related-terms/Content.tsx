import Term from "./Term";
import {
  post,
  terms,
} from "@/app/_data/blog/posts/categories/web-development/posts/web-related-terms";

export default function Content() {
  const termElements = terms.map((term) => {
    return <Term key={term.id} {...{ term }} />;
  });

  return (
    <article className="w-full max-w-[686px] text-neutral-200 dark:text-neutral-500 font-sans text-[19px] font-medium">
      <ul className="pb-48">{termElements}</ul>

      <div>
        <p className="text-neutral-300 dark:text-neutral-400 text-[13.25px] font-extrabold uppercase">
          Last Updated
        </p>
        <p className="text-neutral-200 dark:text-neutral-500 text-[1.35rem] font-bold leading-[1.85rem]">
          {post.date}
        </p>
      </div>
    </article>
  );
}
