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
      <a className="accent-outline" href={liveSite} target="_blank">
        <button
          className={clsx("btn btn-primary", {
            "btn-light": darkMode,
            "btn-dark shadow-custom": !darkMode,
          })}
          type="button"
          title="View website"
        >
            Live Site
        </button>
      </a>
      <a className="accent-outline" href={sourceCode} target="_blank">
        <button
          className={clsx("btn btn-secondary", {
            "btn-dark": darkMode,
            "btn-light shadow-custom": !darkMode,
          })}
          type="button"
          title="View on GitHub"
        >
            Source Code
        </button>
      </a>
    </div>
  );
}
