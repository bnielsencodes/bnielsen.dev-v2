import CTAButtons from "./CTAButtons";
import clsx from "clsx";

export default function Header({ darkMode }: { darkMode: boolean }) {
  return (
    <header className="flex flex-col items-center justify-center h-screen px-7">
      <h1
        className={clsx(
          "header-text mt-3 mb-[6px] text-[2.535rem] leading-[3rem] font-extrabold text-left",
          {
            "text-neutral-600": darkMode,
            "text-neutral-100": !darkMode,
          }
        )}
      >
        Hello, I&apos;m Brandon Nielsen, a{" "}
        <span className="header-text text-neutral-100">Web Developer</span>.
      </h1>
      <p
        className={clsx("text-lg", {
          "text-neutral-400": darkMode,
          "text-neutral-300": !darkMode,
        })}
      >
        {/* <span className="pr-[1px]">{`<`}</span>
        Web Developer
        <span className="text-lg">{` />`}</span> */}
      </p>
      <CTAButtons {...{ darkMode }} />
    </header>
  );
}
