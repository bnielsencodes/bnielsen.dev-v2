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
    <div className="flex items-center mt-1 mb-[5px] md:mt-[5px]">
      {/* toggle switch */}
      <div
        className={clsx(
          "relative flex items-center justify-end w-[68px] h-[36px] rounded-[32px] group cursor-pointer",
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
            className="absolute top-2 left-2"
            src={sunIconDark}
            alt="sun icon"
            width="20"
            height="20"
            sizes="100vw"
          />
        ) : (
          <Image
            className="absolute top-2 left-2"
            src={sunIconLight}
            alt="sun icon"
            width="20"
            height="20"
            sizes="100vw"
          />
        )}

        {/* toggle circle */}
        <div
          className={clsx(
            "w-7 h-7 rounded-full mx-1 transition-transform duration-200 ease-linear md:group-hover:bg-accent",
            {
              "bg-neutral-100 -translate-x-8": darkMode,
              "bg-neutral-600": !darkMode,
            }
          )}
        ></div>
        {/* moon icon */}
        {darkMode ? (
          <Image
            className="absolute top-[8.5px] right-[9px]"
            src={moonIconDark}
            alt="sun icon"
            width="18"
            height="18"
            sizes="100vw"
          />
        ) : (
          <Image
            className="absolute top-[8.5px] right-[9px]"
            src={moonIconLight}
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
