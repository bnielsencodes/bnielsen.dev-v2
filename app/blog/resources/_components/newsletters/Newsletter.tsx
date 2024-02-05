import Link from "next/link";

export default function Newsletter({
  newsletter,
}: {
  newsletter: {
    id: number;
    title: string;
    link: string;
    tags: { id: number; name: string }[];
  };
}) {
  return (
    <li className="flex flex-col gap-[0.85rem] md:flex-row md:items-center md:gap-4 lg:gap-4">
      <div className="flex flex-col gap-[0.5rem] md:gap-[0.7rem]">
        <div className="relative flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0,0,256,256"
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(2.56,2.56)">
                <path
                  d="M89.5,37h-75c-3.59,0 -6.5,2.91 -6.5,6.5v17c0,3.59 2.91,6.5 6.5,6.5h75c3.59,0 6.5,-2.91 6.5,-6.5v-17c0,-3.59 -2.91,-6.5 -6.5,-6.5z"
                  fill="#444"
                  opacity="0.35"
                ></path>
                <path
                  d="M87.5,35h-75c-3.59,0 -6.5,2.91 -6.5,6.5v17c0,3.59 2.91,6.5 6.5,6.5h75c3.59,0 6.5,-2.91 6.5,-6.5v-17c0,-3.59 -2.91,-6.5 -6.5,-6.5z"
                  fill="#ededed"
                ></path>
                <rect
                  x="12.5"
                  y="41.5"
                  width="75"
                  height="17"
                  fill="#1aa7ff"
                ></rect>
                <path
                  d="M87.5,60h-75c-0.829,0 -1.5,-0.671 -1.5,-1.5v-17c0,-0.829 0.671,-1.5 1.5,-1.5h75c0.829,0 1.5,0.671 1.5,1.5v17c0,0.829 -0.671,1.5 -1.5,1.5zM14,57h72v-14h-72z"
                  fill="#272727"
                ></path>
              </g>
            </g>
          </svg>

          <Link
            className="group relative"
            href={newsletter.link}
            target="_blank"
          >
            <p className="text-[1.4rem] leading-[2.125rem] font-semibold lg:max-w-none lg:text-[1.45rem] lg:transition-opacity lg:hover:opacity-80">
              {newsletter.title}
            </p>

            {/* link icon on hover */}
            <svg
              className="absolute top-[8px] -right-[26px] transition-opacity opacity-0 lg:group-hover:opacity-60 dark:lg:group-hover:opacity-50"
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
        </div>

        <div className="flex flex-wrap gap-1 max-w-[320px] pl-[29px]">
          {newsletter.tags.map((tag) => (
            <span
              className="py-1 px-2 rounded-md bg-neutral-300 text-neutral-200 dark:text-neutral-500 font-sans text-xs tracking-wide bg-opacity-10 dark:bg-opacity-30"
              key={tag.id}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}
