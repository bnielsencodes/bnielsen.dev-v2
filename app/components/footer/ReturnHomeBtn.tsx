import Image from "next/image";
import chevronIcon from "@/public/assets/chevrons-up-duotone.svg";
import clsx from "clsx";

export default function ReturnHomeBtn({ darkMode }: { darkMode: boolean }) {
  return (
    <>
      <button
        className={clsx(
          "absolute -top-[20px] w-10 h-10 border-[1px] border-neutral-300 rounded-lg mx-auto bg-opacity-80 backdrop-blur-sm hvr-bob hover:bg-accent hover:scale-[1.1]",
          {
            "bg-gradient-to-b from-neutral-200 to-neutral-100 lg:hover:bg-gradient-to-b lg:hover:from-neutral-200 lg:hover:to-neutral-200":
              darkMode,
            "shadow-custom bg-gradient-to-b from-neutral-500 to-neutral-600  lg:hover:bg-gradient-to-b lg:hover:from-neutral-500 lg:hover:to-neutral-500":
              !darkMode,
          }
        )}
        title="Return to top of page"
      >
        <a
          className="flex items-center justify-center w-full h-full focus:outline-2 focus:text-warning"
          href="#header"
          aria-label="return home"
        >
          <Image
            className="w-7 h-7"
            src={chevronIcon}
            alt="chevron pointing up"
            width="0"
            height="0"
            sizes="100vw"
          />
        </a>
      </button>
    </>
  );
}
