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
        className="group relative flex items-center gap-3 px-3 py-4 rounded-xl bg-neutral-500 dark:bg-neutral-200 shadow-lg dark:shadow-none lg:gap-4 lg:px-4 lg:py-5"
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

        {/* link icon on hover */}
        <svg
          className="absolute top-[7px] right-[7px] transition-opacity opacity-0 lg:group-hover:opacity-60 dark:lg:group-hover:opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-accent-200"
            d="M21.5,13v6A2.50231,2.50231,0,0,1,19,21.5H5A2.50231,2.50231,0,0,1,2.5,19V5A2.50231,2.50231,0,0,1,5,2.5h6a.5.5,0,0,1,0,1H5A1.50164,1.50164,0,0,0,3.5,5V19A1.50164,1.50164,0,0,0,5,20.5H19A1.50164,1.50164,0,0,0,20.5,19V13a.5.5,0,0,1,1,0ZM21,2.5H15a.5.5,0,0,0,0,1h4.793l-8.14649,8.14648a.5.5,0,1,0,.707.707L20.5,4.207V9a.5.5,0,0,0,1,0V3A.49971.49971,0,0,0,21,2.5Z"
          ></path>
        </svg>
      </Link>
    </li>
  );
}
