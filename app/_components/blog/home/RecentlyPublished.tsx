import { latestPosts as latestPostsData } from "@/app/_data/blog/posts/latest";
import Link from "next/link";
import ReadMore from "../posts/ReadMore";

export default function RecentlyPublished() {
  const recentlyPublished = latestPostsData.slice(0, 20).map((post) => {
    return (
      <li
        className="group pr-4 mb-[52px] lg:hover:cursor"
        key={post.id}
        {...{ post }}
      >
        <Link href="/blog/posts/web-development/web-related-terms">
          <p className="text-neutral-100 dark:text-neutral-600 text-[22px] leading-[30px] font-extrabold lg:group-hover:text-accent-100 lg:dark:group-hover:text-accent-200">
            {post.title}
          </p>
          <p className="my-4 text-neutral-200 dark:text-neutral-500 font-sans text-[17px] leading-[28px] font-medium">
            {post.description}
          </p>
          <ReadMore />
        </Link>
      </li>
    );
  });

  return (
    <section className="w-full md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-[-1]">
      <h2 className="pb-10 text-accent-100 dark:text-accent-200 text-[17px] font-bold uppercase tracking-widest">
        Recently Published
      </h2>
      <ul>{recentlyPublished}</ul>
    </section>
  );
}
