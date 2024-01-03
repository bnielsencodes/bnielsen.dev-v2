import Image from "next/image";
import chevronIcon from "@/public/assets/icons/chevrons-up-duotone.svg";

export default function ReturnHomeBtn() {
  return (
    <a
      className="shadow-xl outline-light-theme hvr-bob w-10 h-10 border-[1px] border-neutral-300 rounded-lg mx-auto bg-gradient-to-b from-neutral-500 to-neutral-600 bg-opacity-80 backdrop-blur-sm dark:outline-dark-theme dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-100 lg:hover:to-neutral-500 dark:lg:hover:to-neutral-200"
      href="#header"
      title="Back to top"
      aria-label="Back to top"
    >
      <span className="flex items-center justify-center w-full h-full">
        <Image
          className="w-7 h-7"
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
