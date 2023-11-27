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
    <div className="flex gap-4">
      <a
        className={clsx("btn btn-primary", {
          "btn-light outline-dark-theme": darkMode,
          "btn-dark shadow-custom outline-light-theme": !darkMode,
        })}
        href={liveSite}
        target="_blank"
        title="View website"
      >
        Live Site
      </a>
      <a
        className={clsx("btn btn-secondary", {
          "btn-dark outline-dark-theme": darkMode,
          "btn-light shadow-custom outline-light-theme": !darkMode,
        })}
        href={sourceCode}
        target="_blank"
        title="View on GitHub"
      >
        Source Code
      </a>
    </div>
  );
}
