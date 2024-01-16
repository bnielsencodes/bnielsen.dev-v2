import Image from "next/image";
import chevronIcon from "@/public/assets/icons/chevrons-up-duotone.svg";

export default function ReturnHomeBtn() {
  return (
    <a
      className="outline-light-theme dark:outline-dark-theme hvr-bob w-10 h-10 rounded-lg border-[1px] border-neutral-300 shadow-xl mx-auto bg-gradient-to-b from-neutral-500 to-neutral-600 dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-100 bg-opacity-80 backdrop-blur-sm lg:hover:to-neutral-500 dark:lg:hover:to-neutral-200"
      href="#header"
      title="Back to top"
      aria-label="Back to top"
    >
      <span className="flex items-center justify-center w-full h-full">
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
