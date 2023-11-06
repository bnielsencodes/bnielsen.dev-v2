import Image from "next/image";
import sunIconBlack from "/public/assets/icon-sun-black.svg";
import moonIconBlack from "/public/assets/icon-moon-black.svg";
import sunIconWhite from "/public/assets/icon-sun-white.svg";
import moonIconWhite from "/public/assets/icon-moon-white.svg";
import clsx from "clsx";

export default function ToggleTheme(props: any) {
  return (
    // container
    <div className="flex items-center mt-1 md:mt-[5px]">
      {/* toggle switch */}
      <div
        className={clsx(
          "relative flex items-center justify-end w-[68px] h-[36px] rounded-[32px] group md:hover:cursor-pointer lg:cursor-pointer",
          {
            "bg-neutral-400": props.darkMode,
            "bg-neutral-200": !props.darkMode,
          }
        )}
        onClick={props.toggleTheme}
      >
        {/* sun icon */}
        {props.darkMode ? (
          <Image
            className="absolute top-2 left-2"
            src={sunIconBlack}
            alt="sun icon"
            width="20"
            height="20"
            sizes="100vw"
          />
        ) : (
          <Image
            className="absolute top-2 left-2"
            src={sunIconWhite}
            alt="sun icon"
            width="20"
            height="20"
            sizes="100vw"
          />
        )}

        {/* toggle circle */}
        <div
          className={clsx(
            "w-7 h-7 rounded-full mx-1 transition-transform duration-200 ease-linear md:group-hover:bg-accent-light",
            {
              "bg-neutral-100 -translate-x-8": props.darkMode,
              "bg-neutral-500": !props.darkMode,
            }
          )}
        ></div>
        {/* moon icon */}
        {props.darkMode ? (
          <Image
            className="absolute top-[8.5px] right-[9px]"
            src={moonIconBlack}
            alt="sun icon"
            width="18"
            height="18"
            sizes="100vw"
          />
        ) : (
          <Image
            className="absolute top-[8.5px] right-[9px]"
            src={moonIconWhite}
            alt="sun icon"
            width="18"
            height="18"
            sizes="100vw"
          />
        )}
      </div>
    </div>
  );
}
