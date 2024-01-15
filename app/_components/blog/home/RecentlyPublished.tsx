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
      <li className="group mb-[52px]" key={post.id} {...{ post }}>
        <Link href="/blog/posts/web-development/web-related-terms">
          <p className="text-2xl font-extrabold text-neutral-100 group-hover:text-accent-100 dark:text-neutral-600 dark:group-hover:text-accent-200">
            {post.title}
          </p>
          <p className="my-4 text-[18px] font-sans font-medium text-neutral-200 dark:text-neutral-500">
            {post.description}
          </p>
          <div className="flex gap-2">
            <p className="text-[16px] font-bold text-neutral-200 dark:text-neutral-500">
              Read more
            </p>
            <Image
              className="mr-[11px] mt-[3px] hidden h-[21px] w-[21px] group-hover:block"
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
      <h2 className="pb-10 text-[17px] font-bold uppercase tracking-widest text-accent-100 dark:text-accent-200">
        Recently Published
      </h2>
      <ul>{recentlyPublishedElements}</ul>
    </section>
  );
}
