import Avatar from "./Avatar";
import CTAButtons from "./CTAButtons";
import clsx from "clsx";

export default function Header({ darkMode }: { darkMode: boolean }) {
  return (
    <header className="flex flex-col items-center justify-center h-screen">
      <Avatar />
      <h1
        className={clsx(
          "w-[285px] mt-3 mb-[6px] font-mono text-3xl font-bold text-center",
          {
            "text-neutral-600": darkMode,
            "text-neutral-100": !darkMode,
          }
        )}
      >
        Hello, I&apos;m Brandon Nielsen
      </h1>
      <p
        className={clsx("text-lg", {
          "text-neutral-400": darkMode,
          "text-neutral-300": !darkMode,
        })}
      >
        <span className="pr-[1px]">{`<`}</span>
        Web Developer
        <span className="text-lg">{` />`}</span>
      </p>
      <CTAButtons {...{ darkMode }} />
    </header>
  );
}
