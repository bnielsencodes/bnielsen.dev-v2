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
    <div className="relative flex gap-4">
      {/* live site button */}
      <a
        className={clsx("btn btn-primary", {
          "btn-light outline-dark-theme text-neutral-200": darkMode,
          "btn-dark shadow-custom outline-light-theme text-neutral-500":
            !darkMode,
        })}
        href={liveSite}
        target="_blank"
      >
        Live Site
      </a>
      {/* live site HOVER button */}
      <a
        className={clsx("btn btn-primary absolute top-0 left-0", {
          "btn-light-alt outline-dark-theme text-neutral-200": darkMode,
          "btn-dark-alt outline-light-theme text-neutral-500": !darkMode,
        })}
        href={liveSite}
        target="_blank"
      >
        Live Site
      </a>

      {/* source code button */}
      <a
        className={clsx("btn btn-secondary", {
          "btn-dark outline-dark-theme text-neutral-500": darkMode,
          "btn-light shadow-custom outline-light-theme text-neutral-200":
            !darkMode,
        })}
        href={sourceCode}
        target="_blank"
      >
        Source Code
      </a>
      {/* source code HOVER button */}
      <a
        className={clsx("btn btn-secondary absolute top-0 right-0", {
          "btn-dark-alt outline-dark-theme text-neutral-500": darkMode,
          "btn-light-alt outline-light-theme text-neutral-200": !darkMode,
        })}
        href={sourceCode}
        target="_blank"
      >
        Source Code
      </a>
    </div>
  );
}
