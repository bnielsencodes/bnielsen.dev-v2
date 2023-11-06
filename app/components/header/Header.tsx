import clsx from "clsx";

export default function Header(props: any) {
  return (
    // this is a comment
    <header className={clsx("flex flex-col items-center justify-center h-[calc(100vh-56px)]", { "bg-neutral-100": props.darkMode, "bg-neutral-500": !props.darkMode })}>
      <div className="hero-img"></div>
      <h1 className={clsx("font-mono text-3xl", { "text-neutral-500": props.darkMode, "text-neutral-100": !props.darkMode })}>Brandon Nielsen</h1>
      <h2 className={clsx("", { "text-neutral-400": props.darkMode, "text-neutral-200": !props.darkMode })}>Web Developer</h2>
    </header>
  );
}
