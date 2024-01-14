import Image from "next/image";
import chevronIcon from "@/public/assets/icons/chevrons-up-duotone.svg";

export default function ReturnHomeBtn() {
  return (
    <a
      className="outline-light-theme hvr-bob dark:outline-dark-theme mx-auto h-10 w-10 rounded-lg border-[1px] border-neutral-300 bg-opacity-80 bg-gradient-to-b from-neutral-500 to-neutral-600 shadow-xl backdrop-blur-sm dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-100 lg:hover:to-neutral-500 dark:lg:hover:to-neutral-200"
      href="#header"
      title="Back to top"
      aria-label="Back to top"
    >
      <span className="flex h-full w-full items-center justify-center">
        <Image
          className="h-7 w-7"
          src={chevronIcon}
          alt="chevron pointing up"
          width="0"
          height="0"
          sizes="100vw"
        />
      </span>
    </a>
  );
}
