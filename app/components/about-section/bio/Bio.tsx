import Avatar from "./Avatar";
import clsx from "clsx";

export default function Bio({ darkMode }: { darkMode: boolean }) {
  return (
    <article className="flex flex-col items-center gap-16 mx-auto mb-20">
      <Avatar />
      <p
        className={clsx("", {
          "text-neutral-500": darkMode,
          "text-neutral-200": !darkMode,
        })}
      >
      </p>
    </article>
  );
}
