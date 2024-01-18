import Link from "next/link";
import ReadMore from "./ReadMore";

export default function PostTile({
  post,
}: {
  post: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    date: string;
    link: string;
    tags: [string];
    content: {
      terms?: [
        {
          id: number;
          name: string;
          target: string;
          definition: string;
          seeAlso?: [
            {
              id: number;
              name: string;
              link: string;
            }
          ];
        }
      ];
      tableOfContents?: [
        {
          name: string;
          link: string;
        }
      ];
    };
  };
}) {
  return (
    <li className="group rounded-lg px-4 py-9 bg-neutral-500 dark:bg-neutral-200 md:px-8">
      <Link href="/blog/posts/web-development/web-related-terms">
        <p className=" text-neutral-100 dark:text-neutral-600 text-[22px] leading-[30px] font-extrabold lg:group-hover:text-accent-100 lg:dark:group-hover:text-accent-200">
          {post.title}
        </p>
        <p className="my-4 text-neutral-200 dark:text-neutral-500 font-sans text-[17px] leading-[28px] font-medium">
          {post.description}
        </p>
        <ReadMore />
      </Link>
    </li>
  );
}
