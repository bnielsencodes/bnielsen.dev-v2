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
        className="group flex flex-col gap-[0.85rem] md:flex-row md:items-center md:gap-4 lg:gap-4"
        href={blog.link}
        target="_blank"
      >
        <div className="relative w-full md:w-1/2 lg:w-2/3 xl:w-3/5 ">
          <Image
            className="dark:hidden w-full rounded-lg shadow-lg dark:shadow-none lg:transition-opacity lg:group-hover:opacity-90"
            src={blog.imgLight}
            alt={`${blog.title} YouTube Channel avatar image`}
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            className="hidden dark:block w-full rounded-lg shadow-lg dark:shadow-none lg:transition-opacity lg:group-hover:opacity-90"
            src={blog.imgDark}
            alt={`${blog.title} YouTube Channel avatar image`}
            width="0"
            height="0"
            sizes="100vw"
          />
          {/* link icon on hover */}
          <svg
            className="absolute top-2 right-2 transition-opacity opacity-0 lg:group-hover:opacity-60 dark:lg:group-hover:opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              className="fill-accent-200"
              d="M21.5,13v6A2.50231,2.50231,0,0,1,19,21.5H5A2.50231,2.50231,0,0,1,2.5,19V5A2.50231,2.50231,0,0,1,5,2.5h6a.5.5,0,0,1,0,1H5A1.50164,1.50164,0,0,0,3.5,5V19A1.50164,1.50164,0,0,0,5,20.5H19A1.50164,1.50164,0,0,0,20.5,19V13a.5.5,0,0,1,1,0ZM21,2.5H15a.5.5,0,0,0,0,1h4.793l-8.14649,8.14648a.5.5,0,1,0,.707.707L20.5,4.207V9a.5.5,0,0,0,1,0V3A.49971.49971,0,0,0,21,2.5Z"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col gap-[0.65rem] pl-1 md:pl-0">
          <p className="text-[1.75rem] leading-[2.125rem] font-semibold md:max-w-[250px] lg:transition-opacity lg:group-hover:opacity-80">
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
