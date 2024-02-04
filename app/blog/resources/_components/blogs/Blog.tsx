import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function YTChannel({
  blog,
}: {
  blog: {
    id: number;
    title: string;
    link: string;
    imgLight: StaticImageData;
    imgDark: StaticImageData;
    tags: { id: number; name: string }[];
  };
}) {
  return (
    <li>
      <Link
        className="group flex flex-col md:flex-row md:items-center gap-[0.85rem] lg:gap-4"
        href={blog.link}
        target="_blank"
      >
        <Image
          className="dark:hidden w-full md:w-1/2 lg:w-2/3 xl:w-3/5 rounded-lg lg:transition-opacity lg:group-hover:opacity-90"
          src={blog.imgLight}
          alt={`${blog.title} YouTube Channel avatar image`}
          width="0"
          height="0"
          sizes="100vw"
        />
        <Image
          className="hidden dark:block w-full md:w-1/2 lg:w-2/3 xl:w-3/5 rounded-lg lg:transition-opacity lg:group-hover:opacity-90"
          src={blog.imgDark}
          alt={`${blog.title} YouTube Channel avatar image`}
          width="0"
          height="0"
          sizes="100vw"
        />

        <div className="flex flex-col gap-[0.65rem] pl-1">
          <p className="text-[1.75rem] leading-[2.125rem] font-semibold lg:max-w-[250px] lg:transition-opacity lg:group-hover:opacity-80">
            {blog.title}
          </p>

          <div className="flex flex-wrap gap-1">
            {blog.tags.map((tag) => (
              <span
                className="py-1 px-2 rounded-md bg-neutral-300 text-neutral-200 dark:text-neutral-500 font-sans text-xs tracking-wide bg-opacity-10 dark:bg-opacity-30 lg:transition-opacity lg:group-hover:opacity-80"
                key={tag.id}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
}
