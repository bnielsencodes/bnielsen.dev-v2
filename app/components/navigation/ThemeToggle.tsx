import Image from "next/image";
import sunIconDark from "/public/assets/icons/themeToggle/icon-sun-dark.svg";
import moonIconDark from "/public/assets/icons/themeToggle/icon-moon-dark.svg";
import sunIconLight from "/public/assets/icons/themeToggle/icon-sun-light.svg";
import moonIconLight from "/public/assets/icons/themeToggle/icon-moon-light.svg";
import clsx from "clsx";

export default function ThemeToggle({
  darkMode,
  toggleTheme,
}: {
  darkMode: boolean;
  toggleTheme: () => void;
}) {
  return (
    // container
    <div className="flex items-center mt-1 mb-[3px] lg:mt-0 lg:mb-0">
      {/* toggle switch */}
      <div
        className={clsx(
          "relative flex items-center justify-end w-[84px] h-[42px] rounded-[32px] group cursor-pointer lg:w-[60px] lg:h-[30px]",
          {
            "bg-neutral-400": darkMode,
            "bg-neutral-300": !darkMode,
          }
        )}
        onClick={toggleTheme}
      >
        {/* sun icon */}
        {darkMode ? (
          <Image
            className="absolute top-[10px] left-[9px] w-[23px] lg:top-[6px] lg:left-[6px] lg:w-[1.2rem]"
            src={sunIconDark}
            alt="sun icon"
            width="0"
            height="0"
            sizes="100vw"
          />
        ) : (
          <Image
            className="absolute top-[10px] left-[9px] w-[23px] lg:top-[6px] lg:left-[6px] lg:w-[1.2rem]"
            src={sunIconLight}
            alt="sun icon"
            width="0"
            height="0"
            sizes="100vw"
          />
        )}

        {/* toggle circle */}
        <div
          className={clsx(
            "z-50 w-9 h-9 mx-[3px] rounded-full transition-transform duration-200 ease-linear lg:w-[26px] lg:h-[26px] lg:mx-[2px]",
            {
              "bg-neutral-100 -translate-x-[42px] lg:-translate-x-[30px]":
                darkMode,
              "bg-neutral-600": !darkMode,
            }
          )}
        ></div>

        {/* moon icon */}
        {darkMode ? (
          <Image
            className="absolute top-[10px] right-[9px] w-[21px] lg:w-[18px] lg:top-[6.4px] lg:right-[6.5px]"
            src={moonIconDark}
            alt="sun icon"
            width="0"
            height="0"
            sizes="100vw"
          />
        ) : (
          <Image
            className="absolute top-[10px] right-[9px] w-[21px] lg:w-[18px] lg:top-[6.4px] lg:right-[6.5px]"
            src={moonIconLight}
            alt="sun icon"
            width="0"
            height="0"
            sizes="100vw"
          />
        )}
      </div>
    </div>
  );
}
