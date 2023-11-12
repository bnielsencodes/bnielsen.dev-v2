import Avatar from "./Avatar";
import CTAButtons from "./CTAButtons";
import clsx from "clsx";

export default function Header(props: any) {
  return (
    <header className="flex flex-col items-center justify-center h-screen">
      <Avatar />
      <h1
        className={clsx("mt-3 mb-[6px] font-mono text-3xl font-bold", {
          "text-neutral-600": props.darkMode,
          "text-neutral-100": !props.darkMode,
        })}
      >
        Brandon Nielsen
      </h1>
      <p
        className={clsx("text-lg", {
          "text-neutral-400": props.darkMode,
          "text-neutral-300": !props.darkMode,
        })}
      >
        <span className="pr-[1px]">{`<`}</span>
        Web Developer
        <span className="text-lg">{` />`}</span>
      </p>
      <CTAButtons darkMode={props.darkMode} />
    </header>
  );
}
