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
        className={clsx("btn btn-primary accent-outline ", {
          "btn-light": darkMode,
          "btn-dark shadow-custom": !darkMode,
        })}
        href={liveSite}
        target="_blank"
        title="View website"
      >
        Live Site
      </a>
      <a
        className={clsx("btn btn-secondary accent-outline", {
          "btn-dark": darkMode,
          "btn-light shadow-custom": !darkMode,
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
