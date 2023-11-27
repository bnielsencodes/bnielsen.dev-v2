import Avatar from "./Avatar";
import clsx from "clsx";

export default function Bio({ darkMode }: { darkMode: boolean }) {
  return (
    <article className="flex flex-col items-center gap-8 mx-auto mb-24 md:gap-12 lg:flex-row-reverse lg:gap-10 lg:w-[735px] lg:mx-auto lg:mb-32 xl:flex-col xl:w-[430px] xl:mx-0 xl:mb-0">
      <Avatar />
      <p
        className={clsx("font-sans font-light md:w-[420px] md:text-[17px]", {
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
