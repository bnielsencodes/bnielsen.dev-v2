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
        className={clsx("btn", {
          "btn-light": darkMode,
          "btn-dark shadow-custom": !darkMode,
        })}
        title="View website"
      >
        <a href={liveSite} target="_blank">
          Live Site
        </a>
      </button>
      <button
        className={clsx("btn border-[1px] border-neutral-300", {
          "btn-dark": darkMode,
          "btn-light shadow-custom": !darkMode,
        })}
        title="View on GitHub"
      >
        <a href={sourceCode} target="_blank">
          Source Code
        </a>
      </button>
    </div>
  );
}
