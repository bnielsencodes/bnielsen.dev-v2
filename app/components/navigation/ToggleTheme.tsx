import Image from "next/image";
import sunIconDark from "/public/assets/themeToggle/icon-sun-dark.svg";
import moonIconDark from "/public/assets/themeToggle/icon-moon-dark.svg";
import sunIconLight from "/public/assets/themeToggle/icon-sun-light.svg";
import moonIconLight from "/public/assets/themeToggle/icon-moon-light.svg";
import clsx from "clsx";

export default function ToggleTheme({
  darkMode,
  toggleTheme,
}: {
  darkMode: boolean;
  toggleTheme: () => void;
}) {
  return (
    // container
    <div className="flex items-center mt-1 mb-[3px] md:mt-[5px]">
      {/* toggle switch */}
      <div
        className={clsx(
          "relative flex items-center justify-end w-[84px] h-[42px] rounded-[32px] group cursor-pointer",
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
            className="absolute top-[10px] left-[9px]"
            src={sunIconDark}
            alt="sun icon"
            width="23"
            height="23"
            sizes="100vw"
          />
        ) : (
          <Image
            className="absolute top-[10px] left-[9px]"
            src={sunIconLight}
            alt="sun icon"
            width="23"
            height="23"
            sizes="100vw"
          />
        )}

        {/* toggle circle */}
        <div
          className={clsx(
            "z-50 w-9 h-9 rounded-full mx-[3px] transition-transform duration-200 ease-linear",
            {
              "bg-neutral-100 -translate-x-[42px]": darkMode,
              "bg-neutral-600": !darkMode,
            }
          )}
        ></div>

        {/* moon icon */}
        {darkMode ? (
          <Image
            className="absolute top-[10px] right-[9px]"
            src={moonIconDark}
            alt="sun icon"
            width="21"
            height="21"
            sizes="100vw"
          />
        ) : (
          <Image
            className="absolute top-[10px] right-[9px]"
            src={moonIconLight}
            alt="sun icon"
            width="21"
            height="21"
            sizes="100vw"
          />
        )}
      </div>
    </div>
  );
}
