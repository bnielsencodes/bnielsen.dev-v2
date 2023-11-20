import { StaticImageData } from "next/image";
import clsx from "clsx";

export default function ProjectButtons({
  darkMode,
  liveSite,
  sourceCode,
}: {
  darkMode: boolean;
  liveSite: string;
  sourceCode: string;
}) {
  return (
    <div className="flex gap-4 pt-4 pb-8">
      <button
        className={clsx("py-[10px] px-5 rounded-lg text-lg font-bold", {
          "bg-gradient-to-b from-neutral-500 to-neutral-600 text-neutral-100":
            darkMode,
          "shadow-custom bg-gradient-to-b from-neutral-200 to-neutral-100 text-neutral-600":
            !darkMode,
        })}
      >
        <a href={liveSite} target="_blank">
          Live Site
        </a>
      </button>
      <button
        className={clsx("py-[10px] px-5 border rounded-lg text-lg font-bold", {
          "border-neutral-300 bg-gradient-to-b from-neutral-200 to-neutral-100 text-neutral-500":
            darkMode,
          "shadow-custom border-neutral-300 bg-gradient-to-b from-neutral-500 to-neutral-600 text-neutral-200":
            !darkMode,
        })}
      >
        <a href={sourceCode} target="_blank">
          Source Code
        </a>
      </button>
    </div>
  );
}
