import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function YTChannel({
  channel,
}: {
  channel: {
    id: number;
    title: string;
    link: string;
    img: StaticImageData;
    tags: { id: number; name: string }[];
  };
}) {
  return (
    <li>
      <Link
        className="group flex items-center gap-3 px-3 py-4 rounded-xl bg-neutral-500 dark:bg-neutral-200 shadow-xl dark:shadow-none lg:gap-4 lg:px-4 lg:py-5"
        href={channel.link}
        target="_blank"
      >
        <Image
          className="w-[85px] h-[85px] rounded-full md:w-[85px] md:h-[85px] lg:w-24 lg:h-24 lg:transition-opacity lg:group-hover:opacity-90"
          src={channel.img}
          alt={`${channel.title} YouTube Channel avatar image`}
          width="0"
          height="0"
          sizes="100vw"
        />

        <div className="flex flex-col gap-2">
          <p className="text-[1.225rem] leading-[28px] font-semibold md:text-[1.3rem] lg:text-[1.41rem] lg:transition-opacity lg:group-hover:opacity-80 xl:text-[1.339rem]">
            {channel.title}
          </p>

          <div className="flex flex-wrap gap-1">
            {channel.tags.map((tag) => (
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
