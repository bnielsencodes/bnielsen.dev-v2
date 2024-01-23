import { post } from "@/app/_data/blog/posts/categories/web-development/posts/web-related-terms";
import Breadcrumbs from "./Breadcrumbs";

export default function Header({ name, slug }: { name: string; slug: string }) {
  return (
    <header
      id="header"
      className="flex items-end h-[412px] pt-[56px] px-4 bg-neutral-500 dark:bg-neutral-200 md:h-[313px] md:px-8 lg:px-0"
    >
      <div className="flex flex-col items-start justify-center w-full max-w-[1100px] pb-[45px] mx-auto lg:px-8">
        <Breadcrumbs {...{ name, slug }} />

        {/* post title */}
        <h1 className="mt-1 mb-2 text-neutral-100 dark:text-neutral-600 text-[38px] font-bold leading-[2.5rem] text-left md:mt-0 md:mb-1 md:text-[32px] md:leading-[1.35em] lg:text-[38px]">
          {post.title}
        </h1>

        <p className="text-neutral-300 dark:text-neutral-400 font-sans text-[17px] leading-[26px]">
          {post.subtitle}
        </p>
      </div>
    </header>
  );
}
