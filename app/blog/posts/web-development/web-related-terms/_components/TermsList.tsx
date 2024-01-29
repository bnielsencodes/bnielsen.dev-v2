import {
  post,
  terms,
} from "@/app/_data/blog/posts/categories/web-development/posts/web-related-terms";
import Term from "./Term";
import TermAccordion from "./TermAccordion";

export default function TermsList() {
  return (
    <article className="w-full max-w-[704px] pt-12 lg:pt-0 text-neutral-200 dark:text-neutral-500 font-sans text-[19px] font-medium">
      <ul className="hidden lg:block pb-48">
        {terms.map((term) => {
          return <Term key={term.id} {...{ term }} />;
        })}
      </ul>

      <ul className="lg:hidden pb-48">
        {terms.map((term) => {
          return <TermAccordion key={term.id} {...{ term }} />;
        })}
      </ul>

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
