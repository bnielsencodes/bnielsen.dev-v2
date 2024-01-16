import { useEffect, useState } from "react";
import { recentlyPublished } from "@/app/termsPostData";
import Link from "next/link";
import Image from "next/image";
import arrowRight from "@/public/assets/icons/arrow-right.svg";

export default function RecentlyPublished() {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const recentlyPublishedElements = recentlyPublished.map((post) => {
    // return <Term key={term.id} {...{ term }} />;
    return (
      <li
        className="group mb-[52px] lg:hover:cursor"
        key={post.id}
        {...{ post }}
      >
        <Link href="/blog/posts/web-development/web-related-terms">
          <p className="text-neutral-100 dark:text-neutral-600 text-2xl font-extrabold lg:group-hover:text-accent-100 lg:dark:group-hover:text-accent-200">
            {post.title}
          </p>
          <p className="my-4 text-neutral-200 dark:text-neutral-500 font-sans text-[18px] font-medium">
            {post.description}
          </p>
          <div className="flex gap-2">
            <p className="text-neutral-200 dark:text-neutral-500 font-sans text-[16px] font-bold">
              Read more
            </p>
            <Image
              className="hidden w-[21px] h-[21px] mt-[1.5px] mr-[11px] lg:group-hover:block"
              src={arrowRight}
              alt="arrow pointing right"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        </Link>
      </li>
    );
  });

  return (
    <section className="w-full md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-[-1]">
      <h2 className="pb-10 text-accent-100 dark:text-accent-200 text-[17px] font-bold uppercase tracking-widest">
        Recently Published
      </h2>
      <ul>{recentlyPublishedElements}</ul>
    </section>
  );
}
