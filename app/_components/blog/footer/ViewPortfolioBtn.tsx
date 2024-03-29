import Link from "next/link";

export default function ViewPortfolio() {
  return (
    <Link
      className="flex gap-2 text-neutral-200 dark:text-neutral-500 font-sans text-2xl font-semibold transition-opacity lg:hover:opacity-90"
      href="/"
    >
      <svg
        className="mt-[2px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="28px"
        height="28px"
      >
        <path
          fill="#444"
          d="M21.5,93C15.71,93,11,88.29,11,82.5v-61C11,15.71,15.71,11,21.5,11h61C88.29,11,93,15.71,93,21.5v61 C93,88.29,88.29,93,82.5,93H21.5z"
          opacity=".35"
        />
        <path
          fill="#ededed"
          d="M19.5,91C13.71,91,9,86.29,9,80.5v-61C9,13.71,13.71,9,19.5,9h61C86.29,9,91,13.71,91,19.5v61 C91,86.29,86.29,91,80.5,91H19.5z"
        />
        <path
          className="relative flex h-48 items-start justify-between fill-[#1aa7ff] pr-[27px] pt-8"
          d="M15.5,80.5v-61c0-2.209,1.791-4,4-4h61c2.209,0,4,1.791,4,4v61c0,2.209-1.791,4-4,4h-61 C17.291,84.5,15.5,82.709,15.5,80.5z"
        />
        <path
          fill="#272727"
          d="M80.5,86h-61c-3.033,0-5.5-2.468-5.5-5.5v-61c0-3.032,2.467-5.5,5.5-5.5h61 c3.033,0,5.5,2.468,5.5,5.5v61C86,83.532,83.533,86,80.5,86z M19.5,17c-1.378,0-2.5,1.121-2.5,2.5v61c0,1.379,1.122,2.5,2.5,2.5h61 c1.378,0,2.5-1.121,2.5-2.5v-61c0-1.379-1.122-2.5-2.5-2.5H19.5z"
        />
        <g>
          <path
            fill="#ededed"
            d="M58,46.2l8,8V27H38.8l8,8C37.2,43,34,48.453,34,57.4C34,67,43.397,75,54,75h2.4 c-7.2,0-11.344-4.651-11.344-12C45.056,57.4,51.731,50.589,58,46.2z"
          />
        </g>
      </svg>
      View my portfolio
    </Link>
  );
}
