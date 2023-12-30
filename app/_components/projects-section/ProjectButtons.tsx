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
    <div className="relative flex gap-4 w-[261px]">
      {/* live site button */}
      <a
        className={clsx("btn btn-primary focus:opacity-90", {
          "btn-light text-neutral-200": darkMode,
          "btn-dark text-neutral-500 shadow-xl": !darkMode,
        })}
        href={liveSite}
        target="_blank"
      >
        Live Site
      </a>
      {/* live site HOVER button */}
      <a
        className={clsx("btn btn-primary absolute top-0 left-0", {
          "btn-light-alt text-neutral-200": darkMode,
          "btn-dark-alt text-neutral-500": !darkMode,
        })}
        href={liveSite}
        target="_blank"
        tabIndex={-1}
        aria-hidden={true}
      >
        Live Site
      </a>

      {/* source code button */}
      <a
        className={clsx("btn btn-secondary focus:opacity-90", {
          "btn-dark outline-dark-theme text-neutral-500": darkMode,
          "btn-light outline-light-theme text-neutral-200 shadow-xl": !darkMode,
        })}
        href={sourceCode}
        target="_blank"
      >
        Source Code
      </a>
      {/* source code HOVER button */}
      <a
        className={clsx("btn btn-secondary absolute top-0 right-[0.5px]", {
          "btn-dark-alt outline-dark-theme text-neutral-500": darkMode,
          "btn-light-alt outline-light-theme text-neutral-200": !darkMode,
        })}
        href={sourceCode}
        target="_blank"
        tabIndex={-1}
        aria-hidden={true}
      >
        Source Code
      </a>
    </div>
  );
}
