import Avatar from "./Avatar";
import clsx from "clsx";

export default function Bio({ darkMode }: { darkMode: boolean }) {
  return (
    <article className="flex flex-col items-center gap-8 mx-auto mb-24">
      <Avatar />
      <p
        className={clsx("", {
          "text-neutral-500": darkMode,
          "text-neutral-200": !darkMode,
        })}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </article>
  );
}
